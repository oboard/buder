import { _Flex } from './flex';
import { BuderWidget } from './widget';

export declare class _Row extends _Flex {
    constructor(children: BuderWidget[]);
}
export declare function Row(...children: BuderWidget[]): _Row;
