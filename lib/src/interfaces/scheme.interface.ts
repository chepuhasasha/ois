import { Component } from "../services/component.service";

export interface ISchemeComponent {
  label: string;
  ref: string;
  component: string;
  x: number;
  y: number;
}

export interface ISchemeLine {
  ref: string;
  points: { x: number; y: number }[];
  width: number;
  dashed: boolean;
  color: number;
}

export interface IScheme {
  components: ISchemeComponent[];
  lines: ISchemeLine[];
}
