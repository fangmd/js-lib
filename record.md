

# lerna

`lerna.json`

```
# 执行命令所用的客户端，默认为npm
"npmClient": "yarn"

# 是否启用 yarn workspaces
"useWorkspaces": true
```

基本使用:

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

