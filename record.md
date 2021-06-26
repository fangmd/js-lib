

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
```

更新&发布：

```
# 发布
# 1. 必须先 commit 代码
lerna publish
```

## Changelog 功能

要正确生成 changelog, commit 必须符合约定



