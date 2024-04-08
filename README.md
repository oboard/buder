# buder [![npm](https://img.shields.io/npm/v/buder.svg)](https://www.npmjs.com/package/buder)

Buder is a UI framework that provides a concise syntax for defining components, enabling efficient state management, and offering styling options for enhanced visual customization.

## Getting Started

```bash
pnpm i buder
```

### State Binding Example

```typescript
import { Button, Column, Input, State, Text, px } from "./index.ts";

let a = State("14px");

Column(
  Input(a),
  Text(a),
  Button("Reset")
    .style({ backgroundColor: "red", color: "white", fontSize: a })
    .event({
      click: () => {
        a.set("14px");
      },
    })
)
  .center.style({ gap: px(10) })
  .mount("#app");
```

## How to build

```bash
pnpm i
pnpm build
```

## Git

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
