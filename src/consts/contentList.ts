import { IFolderStructure } from '../interfaces';

export const markdownList = ['test', 'overview', 'skills', 'experience', 'education', 'projects'];

export const contentList: IFolderStructure[] = markdownList.map(md => {
  return { title: md + '.md', link: '/' + md, raw: md };
});
