export interface IFolderStructure {
  title: string;
  link?: string;
  folder?: boolean;
  children?: IFolderStructure[];
  raw?: string;
}
