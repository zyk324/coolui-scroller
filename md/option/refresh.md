# 下拉配置
> 下拉配置情况较多，先看参数, 然后我们分情况来介绍
### 参数
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| type | 下拉样式类型,小程序默认样式或自定义 支持 `default 或 diy`  | _String_ | `default` | 2.0.0 |    
| diyLevel | 自定义等级,简单设置：1,插槽自定义：2 支持 `1`或`2` | _Number_ |  | 2.0.0 |
| style | 默认模式下样式有深色和浅色 支持 `black 或 white` | _String_ | `black` | 2.0.0 |
| p | 自定义等级2时,下拉的百分比方便自定义动画,设置0即可| _Number_ | `0` | 2.0.0 |
| refreshthreshold | 自定义下拉高度 | _Number_ |  | 2.0.0 |    
| background | 自定义下拉背景 可设置`color`: 背景颜色 `img`: 背景图片 | _Obj_ |  | 2.0.2 |     
| title | 自定义下拉文字 可设置 `show`: 是否显示, `text`: 文字内容, `color`: 文字颜色, `shadow`: 文字阴影范围(0时不显示)  | _Obj_ |  | 2.0.0 | 
| shake | 下拉时是否开启震动  | _Boolean_ |  | 2.0.0 | 

### 情况一：使用官方的原有效果：
> 示例：

![基础用法](https://raw.githubusercontent.com/wzs28150/coolui-scroller/web/images/refresh1.jpg)<br/><br/>

> 配置：

```js
    Option: {
      refresh: {
        type: 'default', // 设置类型为系统默认效果
        style: 'black', // 设置样式官方提供两种：深色和浅色 值为 black 或 white(注意：该设置只有在type为default时有效)
        background: {
           color: "#f2f2f2" // 设置背景颜色,默认为 #f2f2f2(注意：背景颜色如果是深色系,请设置style为white,否则中间三个点就看不见了)
        },
        shake:true // 是否开启下拉震动
      }
    },
```
