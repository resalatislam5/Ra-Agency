import { ReactNode } from "react";

export interface coustomButtonTypes {
  img?: any;
  title: string;
  to: string;
  style?: string;
}
export interface ListItemType {
  title: string;
}
export interface TitleBarType {
  title: string;
  children: ReactNode;
}

export interface countTypes {
  count: number;
  title: string;
  style?: string;
  text: string;
}

export interface inputTypes {
  type: string;
  placeholder: string;
  styles?: string
}
