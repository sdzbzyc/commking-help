---
# 这是文章的标题
title: MPO光纤清洁笔产品手册
# 你可以自定义封面图片
cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: file
# 这是侧边栏的顺序
order: 3
# 设置作者
author: CommKing
# 设置写作时间
date: 2020-01-01
# 一个页面可以有多个分类
category:
  - 使用指南
# 一个页面可以有多个标签
tag:
  - 页面配置
  - 使用指南
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在星标文章中
star: true
# 你可以自定义页脚
footer: 这是测试显示的页脚
# 你可以自定义版权信息
copyright: 无版权
---



<!-- more -->



# MPO光纤清洁笔

通信汪CKCP-M1型光纤清洁笔，可以通过简单的按压操作来实现清洁多芯的MPO，MTP光连接器。

## 结构说明
![结构图](/assets/image/ckcpmpo/ckcpmpo_1.jpg)
## 光纤插头端面（公头）清洁

1.从设备上取下导向盖。

![结构图](/assets/image/ckcpmpo/ckcpmpo_2.jpg)

2.让光纤插头和清洁器尖端导孔键吻合。将清洁器头完全插入适配器，直到看不到清洁布和插入确认标志。

![结构图](/assets/image/ckcpmpo/ckcpmpo_3.jpg)

3.对着光纤插头，按压清洁器本身，听到咔嚓一声后，清洁就完成了，笔直收回清洁器。

![结构图](/assets/image/ckcpmpo/ckcpmpo_4.jpg)

※ 注意：请按压的时候不用用过大的力，且不要朝着箭头以外的方向使力。

## 光纤适配器端面（母头）清洁

1.把清洁导引盖从头上取下来。

![结构图](/assets/image/ckcpmpo/ckcpmpo_5.jpg)

2.让光适配器和尖端插入键吻合。将清洁器头完全插入适配器，直到看不到清洁布和插入确认标志。

![结构图](/assets/image/ckcpmpo/ckcpmpo_6.jpg)

3.对着光适配器笔直的按压清洁器本身，听到咔嚓一声后，清洁就完成了，笔直收回清洁器。

![结构图](/assets/image/ckcpmpo/ckcpmpo_7.jpg)

※ 注意：请按压的时候不用用过大的力，且不要朝着箭头以外的方向使力。

## 清洁案例

![结构图](/assets/image/ckcpmpo/ckcpmpo_8.jpg)

## 规格参数

| 产品名称 | MPO光纤清洁笔                 |
| -------- | ----------------------------- |
| 品牌     | 通信汪（CommKing）            |
| 型号     | CKCP-M1                       |
| 适用接口 | MPOP公母连接头、MTP公母连接头 |
| 适用端面 | PC/APC                        |
| 适用次数 | 600+                          |



<!-- markdownlint-disable MD033 -->

<ul>
  <li v-for="i in 3">{{ i }}</li>
</ul>

<!-- markdownlint-enable MD033 -->

你也可以创建并引入你自己的组件。

<MyComponent />

<script setup>
import { defineComponent, h, ref } from 'vue';

const MyComponent = defineComponent({
  setup() {
    const input = ref('Hello world!');
    const onInput = (e) => {
      input.value = e.target.value;
    };

    return () => [
      h('p', [
        h('span','输入: '),
        h('input', {
          value: input.value,
          onInput,
        }),
      ]),
      h('p', [h('span','输出: '), input.value]),
    ];
  },
});
</script>

---

主题包含一些有用的组件。这里是一些例子:

- 文字结尾应该有深蓝色的 徽章文字 徽章。 <Badge text="徽章文字" color="#242378" />

- 一个卡片:

  ```component VPCard
  title: Mr.Hope
  desc: Where there is light, there is hope
  logo: https://mister-hope.com/logo.svg
  link: https://mister-hope.com
  background: rgba(253, 230, 138, 0.15)
  ```
