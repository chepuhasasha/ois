import { Component } from "../services/component.service";

export interface ISchemeComponent {
  label: string;
  ref: string;
  color?: string;
  component: string;
  x: number;
  y: number;
}

export interface ISchemeLine {
  ref: string;
  points: { x: number; y: number }[];
  width?: number;
  color?: string;
}
export interface ISchemeText {
  ref: string;
  x: number;
  y: number;
  text: string;
  color: string;
  fontSize: number;
}
export interface ISchemePlane {
  ref: string;
  x: number;
  y: number;
  w: number;
  h: number;
  color: string;
}

export interface IScheme {
  libs: string[];
  components: ISchemeComponent[];
  lines: ISchemeLine[];
  texts: ISchemeText[];
  planes: ISchemePlane[];
}
