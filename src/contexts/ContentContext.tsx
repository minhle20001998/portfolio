/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { getPublicContentFromHost } from '../apis';
import { contentList } from '../consts';
import { CONTENT_ACTIONS, IContent } from '../interfaces';

interface IContentContext {
  contentTabs: string[];
  currentContent: IContent | null | undefined;
  contentReducer: (action: CONTENT_ACTIONS, payload?: any) => void;
}

const defaultContentContextValue: IContentContext = {
  contentTabs: [],
  currentContent: null,
  contentReducer: (active, payload) => {
    return null;
  }
};

const ContentContext = createContext<IContentContext>(defaultContentContextValue);

export function ContentProvider({ children }: { children?: JSX.Element }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [contents, setContents] = useState<Map<string, IContent>>(new Map());
  const [currentContentKey, setCurrentContentKey] = useState<string | null | undefined>(
    contentList[0].raw
  );
  const [contentTabs, setContentTabs] = useState<string[]>([]);
  const currentContent = currentContentKey ? contents.get(currentContentKey) : null;
  const firstCounterRef = useRef<boolean>(false);

  useEffect(() => {
    // if website is first time loaded -> navigate to the first content
    if (pathname === '/' && contentList[0].raw && !firstCounterRef.current) {
      navigate(contentList[0].raw);
    }
    // if URL pathname changed -> render the corresponding content
    else if (pathname !== '/' || !contentList[0].raw) {
      contentReducer(CONTENT_ACTIONS.FETCH_CONTENT);
      addContentTab(pathname.split('/')[1]);
    }
    // if no pathname detected -> remove current content key
    else {
      setCurrentContentKey(null);
    }
    firstCounterRef.current = true;
  }, [pathname]);

  const contentReducer = (action: CONTENT_ACTIONS, payload?: any) => {
    switch (action) {
      case CONTENT_ACTIONS.FETCH_CONTENT: {
        getContent(payload);
        break;
      }
      case CONTENT_ACTIONS.CHANGE_TAB: {
        navigate(payload);
        break;
      }
      case CONTENT_ACTIONS.REMOVE_TAB: {
        removeTab(payload);
        break;
      }
      default:
        break;
    }
  };

  const addContentTab = (filename: string) => {
    if (!contentTabs.find(tab => tab === filename)) {
      setContentTabs(prev => [filename, ...prev]);
    }
  };

  const removeTab = (filename: string) => {
    let adjacent: string | null = null;
    const filteredArray = contentTabs.filter((tab, index) => {
      if (pathname.split('/')[1] === filename && tab === filename) {
        if (contentTabs[index - 1]) {
          adjacent = contentTabs[index - 1];
        } else if (contentTabs[index + 1]) {
          adjacent = contentTabs[index + 1];
        } else {
          adjacent = '';
        }
      }
      return tab !== filename;
    });
    if (adjacent) navigate(adjacent);
    else if (adjacent === '') navigate('/');
    setContentTabs(filteredArray);
  };

  const getContent = async (filename?: string) => {
    const name = filename ?? pathname.split('/')[1];
    setCurrentContentKey(name);
    //if content is already in the list -> not fetch
    if (contents.get(name)) {
      return;
    }
    //else
    const { value, error } = await getPublicContentFromHost(filename ?? pathname);
    if (value) {
      contents.set(name, createContentObj(name, value.data));
      setContents(prev => new Map(prev));
    }
    if (error) {
      console.log(error);
    }
  };

  const createContentObj = (title: string, content: string): IContent => {
    return { title, content };
  };

  return (
    <ContentContext.Provider value={{ contentReducer, contentTabs, currentContent }}>
      {children}
    </ContentContext.Provider>
  );
}

export const useContentContext = () => {
  return useContext(ContentContext);
};
