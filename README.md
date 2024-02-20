# buder [![npm](https://img.shields.io/npm/v/buder.svg)](https://www.npmjs.com/package/buder)

## Getting Started

```bash
pnpm i buder
```

### Example1
```typescript
import { Builder, Button, Col, Text, bud, px } from "./index.ts";

let counter = 0;

Col([
  Builder(() => Text("Counter: " + counter))
    .class("counter")
    .padding({ vertical: px(20) }),
  Button("Increment")
    .color("red")
    .bold.onClick(() => {
      counter++;
      bud("counter");
    }),
  Button("Decrement")
    .color("blue")
    .bold.onClick(() => {
      counter--;
      bud("counter");
    }),
  Button("Reset")
    .color("green")
    .bold.onClick(() => {
      counter = 0;
      bud("counter");
    }),
]).gap(px(4)).center.fullScreen.mount("#app");

```


## 编译方式

```bash
pnpm i
pnpm build
```

## Git 提交规范

- `ci`: ci 配置文件和脚本的变动;
- `chore`: 构建系统或辅助工具的变动;
- `fix`: 代码 BUG 修复;
- `feat`: 新功能;
- `perf`: 性能优化和提升;
- `refactor`: 仅仅是代码变动，既不是修复 BUG 也不是引入新功能;
- `style`: 代码格式调整，可能是空格、分号、缩进等等;
- `docs`: 文档变动;
- `test`: 补充缺失的测试用例或者修正现有的测试用例;
- `revert`: 回滚操作;