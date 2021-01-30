# 配置
> 为了简化scroll-view琐碎复杂的配置，我们将配置分为四个大部分，组成一个对象<br>
### 页面结构
> 页面结构上只需加载这个配置对象的参数：scrollOption
```html
	<coolui-scroll class="demo1"  scrollOption="{{Option}}" >
```
### js 
> 在data中建立配置的对象：Option。
> Option包含配置的四大部分：[pagination](/index.html#/option/pagination)、[empty](/index.html#/option/empty)、[refresh](/index.html#/option/refresh)、[loadmore](/index.html#/option/loadmore)
```javascript
Page({
      data: {
          Option: {
              pagination:{
                  // 分页设置
              },
              empty:{
                  // 空数据设置
              },
              refresh:{
                  // 下拉设置
              },
              loadmore:{
                  // 上拉设置
              }
          }
      }
})
```
