# 上拉配置
> 上拉配置分为组件提供的默认样式和完全自定义的插槽模式

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| type | 上拉样式类型,默认样式或插槽自定义 支持 `default 或 diy`  | _String_ | `default` | 2.0.0 |    
| icon | 自定义下拉图标 可设置`img`: 图片 `name`: 图标名称，内置图标敬请期待 | _Obj_ |  | 2.0.2 |    
| title | 默认样式时设文字  可设置 `show`: 是否显示, `text`: 文字内容, `color`: 文字颜色, `shadow`: 文字阴影范围(0时不显示)  | _Obj_ |  | 2.0.0 |  

### 情况一：使用组件提供的默认效果：
> 示例：在这个效果中无需写页面结构，可以设置图标及文字

![基础用法](https://raw.githubusercontent.com/wzs28150/coolui-scroller/web/images/loadmore1.jpg)
```js
    Option: {
      loadmore: {
        type: 'default', // 设置为默认效果
        icon: {
            img: "http://upload-images.jianshu.io/upload_images/5726812-95bd7570a25bd4ee.gif", // 设置加载的图标
            name: '' // 组件默认为down一个可旋转的箭头
        },
        title: {
          show: true, // 设置文字是否显示
          text: '上拉加载', // 设置文字内容
          color: "#000000", // 文字颜色
          shadow: 5 // 是否开启shadow阴影,0为不开启,数值越大阴影范围越大
        }
      }
    },
```