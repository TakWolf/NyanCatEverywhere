# Nyan Cat Everywhere #

让彩虹猫入侵全世界！喵星人的目标是星辰大海！

作战总部主页：[http://nyan.takwolf.com](http://nyan.takwolf.com)

## Usage ##

一个示例用法：

[http://nyan.takwolf.com/nyancat#http://blog.takwolf.com](http://nyan.takwolf.com/nyancat#http://blog.takwolf.com)

要注意的是，URL以“#”作为标识进行分割，后面的部分叫做“锚点”。“锚点”部分的URL地址就是目标页面。上面的例子中目标页面为“[http://blog.takwolf.com](http://blog.takwolf.com)”，即作者博客。

同理，如果想要入侵作者的微博，你应该在浏览器中输入如下URL:

[http://nyan.takwolf.com/nyancat#http://weibo.com/takwolf](http://nyan.takwolf.com/nyancat#http://weibo.com/takwolf)

代码实现原理上使用了```<iframe>```标签来引入目标页面。大部分的页面都是可以被引入的，但是仍然有一部分页面进行了安全限制，无法使用```<iframe>```的方式来引入。一种常见的方式就是，在http响应头中添加```X-Frame-Options : SAMEORIGIN```标识来告知浏览器拒绝引入```<iframe>```。

Github和QQ空间的页面就无法使用```<iframe>```引入。

你也可以通过引入一个JS脚本的方式来添加彩虹猫效果到你的页面（前提是你是网站的开发者）。

以彩虹猫为例，你应该添加如下代码：

    <script src="js/nyancat.js"></script>

当然，你可以将这个JS文件复制到你自己的网站目录下或者CDN服务器上，注意要正确的引入资源文件。代码的实现是非侵入的，布局为绝对定位，不会对已有代码和布局造成影响。

## Demo ##

除了彩虹猫，还有一些其他的例子，你可以试试，使用方式都是相同的。

### NyanCat ###

![NyanCat](img/screenshot-nyancat.png)

[demo link](http://nyan.takwolf.com/nyancat#http://nyan.takwolf.com)

### Christmas ###

![NyanCat](img/screenshot-christmas.png)

[demo link](http://nyan.takwolf.com/christmas#http://nyan.takwolf.com)

### Sakura ###

![Sakura](img/screenshot-sakura.png)

[demo link](http://nyan.takwolf.com/sakura#http://nyan.takwolf.com)

## Author ##

TakWolf

[takwolf@foxmail.com](mailto:takwolf@foxmail.com)

[http://takwolf.com](http://takwolf.com)

## License ##

    Copyright 2015-2016 TakWolf
    
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.