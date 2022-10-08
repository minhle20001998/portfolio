/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { getPublicContentFromHost } from '../apis';
import { contentList } from '../consts';
import { IContent } from '../interfaces';

const ContentContext = createContext<any | null>(null);

enum CONTENT_ACTION {
  GET_CONTENT = 'get-content'
}

export function ContentProvider({ children }: { children?: JSX.Element }) {
  const { pathname } = useLocation();
  const [contents, setContents] = useState<Map<string, IContent>>(new Map());

  useEffect(() => {
    contentReducer(CONTENT_ACTION.GET_CONTENT);
  }, [pathname]);

  useEffect(() => {
    contentReducer(CONTENT_ACTION.GET_CONTENT, contentList[0].raw);
  }, []);

  const contentReducer = (action: CONTENT_ACTION, payload?: any) => {
    switch (action) {
      case CONTENT_ACTION.GET_CONTENT: {
        getContent(payload);
        break;
      }
      default:
        break;
    }
  };

  const getContent = async (filename: string) => {
    const name = filename ? filename.split('/')[1] : pathname.split('/')[1];
    //if content is already in the list -> do not fetch again
    if (contents.get(name)) {
      return;
    }
    //else
    const { value, error } = await getPublicContentFromHost(filename ?? pathname);
    if (value) {
      contents.set(name, createContent(name, value.data));
      setContents(prev => new Map(prev));
    }
    if (error) {
      console.log(error);
    }
  };

  const createContent = (title: string, content: string): IContent => {
    return { title, content };
  };

  return <ContentContext.Provider value={{}}>{children}</ContentContext.Provider>;
}

export const useContentContext = () => {
  return useContext(ContentContext);
};
