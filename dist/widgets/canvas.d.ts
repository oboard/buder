import { BuderWidget } from "./widget";
declare class _Canvas extends BuderWidget {
    context?: CanvasRenderingContext2D | null;
    width?: number;
    height?: number;
    constructor(width: number, height: number);
    render(): HTMLElement;
}
export declare const Canvas: (width: number, height: number) => _Canvas;
export {};
