import type { ComponentConfig } from "./component.interface";
import type { LineConfig } from "./line.interface";
import type { PlaneConfig } from "./plane.interface";
import type { TextConfig } from "./text.interface";

export interface Config {
  offset: { x: number; y: number };
  assets: { name: string; data: string }[];
  components: ComponentConfig[];
  texts: TextConfig[];
  planes: PlaneConfig[];
  lines: LineConfig[];
}
