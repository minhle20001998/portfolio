import { IFolderStructure } from '../interfaces';
import { contentList } from './contentList';

export const structures: IFolderStructure = {
  title: 'my-portfolio',
  folder: true,
  children: contentList
};
