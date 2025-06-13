![Logo](www/img/nyancat.gif)

# Nyan Cat Everywhere

让彩虹猫入侵全世界！喵星人的目标是星辰大海！

作战指挥总部：[https://nyan.takwolf.com](https://nyan.takwolf.com)

## 用法

举个🌰，让我们来攻占 [B站](https://www.bilibili.com) 。构造下面的 URL 格式：

```
https://nyan.takwolf.com/nyancat.html#https://www.bilibili.com
```

在浏览器地址中输入这个链接，或者 [点击这里](https://nyan.takwolf.com/nyancat.html#https://www.bilibili.com) 直接访问。

注意，这个链接分为两个部分，以 `#` （在 HTML 中被称为 `hash`）作为分割。前边的部分为提供效果的容器页面地址，后面的部分为目标页面地址 。

只需要替换后边的目标页面地址，即可让彩虹猫入侵到不同的页面。

## 原理

容器页面使用了 `<iframe>` 标签来载入目标页面，在此之上添加各种效果，看起来就像在原页面添加了各种特效。

大部分的页面都是可以被载入的，但有一个例外。

如果目标网站在 Http 响应头中添加 `X-Frame-Options : SAMEORIGIN` 标识来告知浏览器只能使用同源的 `<iframe>` 加载，则会失败。 [Github](https://github.com) 目前就启用了该策略。

另外，在部分浏览器下（例如 Chrome），其安全策略不允许在 `https` 中引用 `http` 资源，即 `Mixed Content` 错误。

将作战指挥部的网址从 `https://nyan.takwolf.com` 改为 `http://nyan.takwolf.com` 有可能解决该问题。

## 效果

这里还有一些其他的效果，使用方式都是相同的。

### 彩虹猫

![NyanCat](www/img/screenshot-nyancat.png)

[查看效果](https://nyan.takwolf.com/nyancat.html#https://www.bilibili.com)

### 雪花

![Snowflake](www/img/screenshot-snowflake.png)

[查看效果](https://nyan.takwolf.com/snowflake.html#https://www.bilibili.com)

### 樱花

![Sakura](www/img/screenshot-sakura.png)

[查看效果](https://nyan.takwolf.com/sakura.html#https://www.bilibili.com)

## 许可证

[Apache License 2.0](LICENSE)
