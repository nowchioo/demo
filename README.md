1.  运行

```shell
npm run dev  --module=****  ## module指定运行的模块，默认为main
```

2.  打包

```shell
npm run  build  --module=****  ## module指定打包的模块，默认为main
```

运行与打包时候除了main 其他的都是调取的/modules下的模块

```text
modules/
└── demo/
    ├── index.vue      # 模块入口页面（根组件）
    ├── pages.ts       # 模块路由配置文件（模块中必须配置）
    └── ***            # 其他模块内文件/文件夹
```

3.  alias

```typescript
{
'@'=>'/src',
'@utils' =>'/src/utils',
'@components'=>'/src/components',
'@stores'=>'/src/stores',
'@hooks'=>'/src/hooks',
'@modules'=>'/modules',
},
```
