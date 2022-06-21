export interface ISchemeComponent {
  selected: boolean;
  ref: string;
  color: string;
  x: number;
  y: number;
  props: {
    label: string;
    component: string;
  };
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
  skew: boolean;
  fontWidth: string;
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
