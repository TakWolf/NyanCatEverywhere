# Nyan Cat Everywhere

让彩虹猫入侵全世界！喵星人的目标是星辰大海！

作战指挥总部：[https://nyan.takwolf.com](https://nyan.takwolf.com)

## 用法

举个🌰，你可以通过构造下面的 URL 来观看效果：

[https://nyan.takwolf.com/nyancat.html#https://blog.takwolf.com](https://nyan.takwolf.com/nyancat.html#https://blog.takwolf.com)

需要注意的是，URL 以“#”（在 HTML 中被称为“ hash ”）进行分割，前边的部分为提供效果的容器页面地址，后面的部分为目标页面地址 。
上面的示例中目标页面为“ [https://blog.takwolf.com](https://blog.takwolf.com) ”，即作者的博客。
具体的原理为，容器页面使用了`<iframe>`标签来载入目标页面。

大部分的页面都是可以被引入的，但是仍然有一部分页面进行了安全限制，无法使用```<iframe>```的方式来引入。
一种常见的方式就是，在http响应头中添加```X-Frame-Options : SAMEORIGIN```标识来告知浏览器拒绝引入```<iframe>```。
Github和QQ空间的页面就是通过这种方式而无法使用。

在部分浏览器下，由于安全侧略的限制，也不能设置目标页面为`http`协议，必须为`https`。

当然你也可以通过引入一个JS脚本的方式来添加彩虹猫效果到你的页面，前提是你是网站的开发者。
以彩虹猫为例，你应该拷贝相关资源到你的网站目录（注意资源位置关系），并在你的页面添加如下代码：

```
<script src="js/nyancat.js"></script>
```

所有效果产生的元素的布局都是绝对定位的，通常不会对已有布局造成影响。

## 效果

除了彩虹猫，还有一些其他的效果，你可以试试。使用方式都是相同的。

### 彩虹猫

![NyanCat](img/screenshot-nyancat.png)

[查看效果](https://nyan.takwolf.com/nyancat.html#https://blog.takwolf.com)

### 雪花

![Snowflake](img/screenshot-snowflake.png)

[查看效果](https://nyan.takwolf.com/snowflake.html#https://blog.takwolf.com)

### 樱花

![Sakura](img/screenshot-sakura.png)

[查看效果](https://nyan.takwolf.com/sakura.html#https://blog.takwolf.com)

## 作者

TakWolf

[takwolf@foxmail.com](mailto:takwolf@foxmail.com)

[http://takwolf.com](http://takwolf.com)

## 协议

```
Copyright 2015 TakWolf

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
