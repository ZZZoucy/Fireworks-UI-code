## 学学记账 👇
> 本项目是一款基于 Vue / TypeScript 实现的移动端记账App，⽤户可以实现快速记账，记录每天的⽀出与收⼊，⽽且可以通过图表查看⾃⼰的消费习惯

您可以点击 [学学记账](https://zzzoucy.github.io/xuexue-bookkeeping/#/detail) 查看项目效果

或者 选择 [知乎](https://zhuanlan.zhihu.com/p/409477987) 来查看此项目的笔记

或者 选择 [码云](https://gitee.com/Chayym/xuexue-money-me) 来查看我的开源项目代码


## 部分问题 以及 解决思路
Vue Router 如何配置和链接：通过 `$router.params` 获取参数，使⽤ `<router-link/>` 标签和 `:to`属性来链接。

数据库有变化时，如何做数据迁移：⽐较数据库版本，如果是低版本，就将⽤户已存⼊的数据进⾏遍历，补全数据结构，使之与⾼版本数据结构⼀致。数据迁移好后，依旧要对数据进⾏保存，然后再把版本升级。

如何定义⼀个可继承的样式：只需要⽤到 scss 中的 %，使⽤ % 定义的样式，本身不会起作⽤，只有被继承的时候才起作⽤，通过关键字 `@extend` 即可继承，如 `@extend %clearFix`。
