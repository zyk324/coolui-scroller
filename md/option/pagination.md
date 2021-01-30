# 分页配置

### 分页配置比较简单，有四个参数

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| page | 页码 | _Number_ | `1` | 2.0.0 |
| totalPage | 总页码数 | _Number_ | `0` | 2.0.0 |
| limit | 每页显示个数 | _Number_ | `0` | 2.0.0 |
| length | 总个数(个数为0是,页面显示空样式) | _Number_ | `0` | 2.0.0 |

### js
```js
 pagination: {
    page: 1,
    totalPage: 10,
    limit: 10,
    length: 100
 }
```
