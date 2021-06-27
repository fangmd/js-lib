


1. husky: 给 git 操作添加 hook
2. lint-staged：使用 eslint 代码代码格式化，同时只对修改部分进行代码格式化


# Install

```
yarn add -D -W husky lint-staged
```

# 配置

```
// husky.config.js
module.exports = {
  hooks: {
      'pre-commit': 'lint-staged',
      'pre-push': 'yarn test',
  }
};
```

```
// lint-staged.config.js
module.exports = {
  '*.{ts,tsx}': ['eslint --fix'],
};
```