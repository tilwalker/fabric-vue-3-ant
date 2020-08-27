export interface ICanvas {
  cWidth: number;
  cHeight: number;
  objects: Array<IObjectElement>;
}

export interface IObjectElement {
  type: string;
  width: number;
  height: number;
  top: number;
  left: number;
  originX: string;
  originY: string;
  objects?: Array<IObjectElement>;
  src?: string;
  path?: string | Array<string|number>;
  angle?: number;
  style?: Object;
}