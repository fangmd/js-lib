# Install

```
yarn add -D -W eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-prettier prettier
```

# 配置

## eslintrc.js

```js
// .eslintrc.js
module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 'tab'],
  },
  globals: {
    window: true,
  },
}
```

### env

### parserOptions

ESLint 默认的 parser 是 Espree，parserOptions 是对 Espress 的参数配置。

1. `"sourceType": "module"`: 表示使用 ESModule

### parser

作用：将代码转换为 ESTree, ESlint 会对 ESTree 进行校验

> ESTree 是一个 AST 的一种规范

### plugins

### extends

引入第三方代码规范配置

1. "extends": "eslint:recommended"

规则细节：[https://eslint.cn/docs/rules/](https://eslint.cn/docs/rules/)

### rules

自己的代码规范配置，优先级高于 extends 中的配置

规则参数, 有公共参数和私有参数，公共参数如下：

```
"off" 或 0 - 关闭规则
"warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
"error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
```

私有参数，查看：[eslint 规则表](https://eslint.cn/docs/rules/)

### globals

添加全局对象，避免 no-undef 错误

```js
    "globals": {
        "window": true
    }
```
