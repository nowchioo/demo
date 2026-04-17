1.  运行

```shell
npm run dev  --module=****  ## module指定运行的模块，默认为main
```

2.  打包

```shell
npm run  build  --module=****  ## module指定打包的模块，默认为main
```

```typescript
3.  alias
{
'@': fileURLToPath(new URL('./src', import.meta.url)),
'@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
'@components': fileURLToPath(new URL('./src/components', import.meta.url)),
'@stores': fileURLToPath(new URL('./src/stores', import.meta.url)),
'@modules': fileURLToPath(new URL('./modules', import.meta.url)),
'@current-routes': fileURLToPath(new URL(routePath, import.meta.url)),
},
```
