import { BuderWidget } from "./widget";

class _Canvas extends BuderWidget {
  context?: CanvasRenderingContext2D | null;
  width?: number;
  height?: number;
  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  render(): HTMLElement {
    const canvas = document.createElement("canvas");
    this.context = canvas.getContext("2d");
    canvas.width = this.width!;
    canvas.height = this.height!;
    return super.render(canvas);
  }
}

export const Canvas = (width: number, height: number) =>
  new _Canvas(width, height);
