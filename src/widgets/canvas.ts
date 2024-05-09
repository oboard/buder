import { BuderWidget } from "./widget";

class _Canvas extends BuderWidget {
  context?: CanvasRenderingContext2D | null;
  width?: number;
  height?: number;
  _initFunc?: (ctx: CanvasRenderingContext2D | null) => void;
  constructor(
    width: number,
    height: number,
    init?: (ctx: CanvasRenderingContext2D | null) => void
  ) {
    super();
    this.width = width;
    this.height = height;
    this._initFunc = init;
  }

  render(): HTMLElement {
    const canvas = document.createElement("canvas");
    this.context = canvas.getContext("2d");
    if (this._initFunc) {
      this._initFunc(this.context);
    }
    canvas.width = this.width ?? 0;
    canvas.height = this.height ?? 0;
    return super.render(canvas);
  }
}

export const Canvas = (
  width: number,
  height: number,
  init?: (ctx: CanvasRenderingContext2D | null) => void
) => new _Canvas(width, height, init);
