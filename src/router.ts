import { BuderApp } from "./app";
import { BuderWidget } from "./widgets/widget";

export const routerMap: Record<string, () => BuderWidget> = {};

export const Router =
  (level: any) => (_target: BuderApp, _name: any, descriptor: any) => {
    // console.log("入参：", target, name, descriptor);
    routerMap[level] = descriptor.value;

    // // 缓存之前的值
    // const oldValue = descriptor.value;
    // // 复写原来的老值
    // descriptor.value = (...args: any) => {
    //   console.log(`${name}被调用，入参为: ${args}`);
    //   // 使用原来的函数调用
    //   return oldValue.apply(null, args);
    // };
  };