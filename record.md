

# lerna

## 配置

`lerna.json`

```
# 执行命令所用的客户端，默认为npm
"npmClient": "yarn"

# 是否启用 yarn workspaces
"useWorkspaces": true

# changelog 功能
  "command": {
    "publish": {
      "allowBranch": "master",
      "conventionalCommits": true,
      "exact": true
    }
  }

# 发布带 scope 包的时候需要
 "publishConfig": {
    "access": "public"
  },

# 设置版本管理模式：独立模式
"version": "independent",

```

## 使用

基本使用

```
# 创建模块
lerna create [package-name]

# 添加依赖, 给 package-name 添加依赖 lib-name
lerna add [lib-name] --scope=[package-name]

# 添加依赖
lerna add [lib-name]

# 清理所有 子模块的 node_modules
lerna clean

# 安装所有项目依赖, 将所有项目和 lerna 链接起来，
lerna bootstrap

# 运行 script
lerna run <script> -- [..args]
lerna run build # 运行所有包的 build 命令
lerna run --scope my-component test # 运行 my-component 模块下的 test

```

更新&发布：

```
# 发布
# 1. 必须先 commit 代码
lerna publish
```

## Changelog 功能

要正确生成 changelog, commit 必须符合约定


## typescript 配置

1. 在根目录添加 typescript 依赖

```
yarn add -D typescript
```

2. 配置根 tsconfig.json

```

```

3. 在每个 packages 下创建 tsconfig.json

```

```

## workspaces:

1. `package.json`:

```
"workspaces": ["packages/*"]
```

2. `lerna.json`:

```
# 是否启用 yarn workspaces
"useWorkspaces": true
```