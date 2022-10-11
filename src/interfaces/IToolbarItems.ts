export interface IToolbarItem {
  className: string;
  dataTip: string;
  icon: JSX.Element;
  children?: IToolbarItem[];
  link?: string;
}

export interface IToolbarItems {
  top: IToolbarItem[];
  bottom: IToolbarItem[];
}
