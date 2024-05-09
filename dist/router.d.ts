import { BuderApp } from './app';
import { BuderWidget } from './widgets/widget';

export declare const routerMap: Record<string, () => BuderWidget>;
export declare const Router: (level: any) => (_target: BuderApp, _name: any, descriptor: any) => void;
