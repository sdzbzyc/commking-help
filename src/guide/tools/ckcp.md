---
# 这是文章的标题
title: 光纤清洁笔产品手册
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



通信汪CKCP系列光纤端面清洁笔，它代替了传统的棉球和酒精，使用时只需要简单的一按即可去除光纤连接器插芯、器件、模块上的油污和灰尘，可持续使用并保证高质量的清洁效果。

## 结构说明

![结构图](/assets/image/ckcp/ckcp_1.jpg)

| No.  | 零件名称   |                 功能                 |
| :--- | :--------- | :----------------------------------: |
| A    | 尖端       |       将清洁线引至光连接器端面       |
| B    | 锁定按钮   |         按下按钮可伸缩延长杆         |
| C    | 外壳       |         推动外壳以清洁连接器         |
| D    | 导向盖     | 用作防尘盖或用于清洁光纤跳线上的街头 |
| E    | 余量显示窗 |            剩余清洁线指示            |

  ## 光纤适配器端面（母头）清洁

1.从设备上取下导向盖。

![结构图](/assets/image/ckcp/ckcp_2.jpg)

2.将清洁器的尖端插入适配器中。

![结构图](/assets/image/ckcp/ckcp_3.jpg)

3.推动外壳开始清洁连接器端面，`咔嚓`声表示清洁过程结束，使用后盖上导向盖。

![结构图](/assets/image/ckcp/ckcp_4.jpg)

**插入适配器时，请注意不要使清洁器倾斜。**

在插入过程中不要过度用力，因为这可能回损坏连接器和清洁笔。

如果推动外壳被阻，请从适配器中取出清洁器，并确保没有大量碎屑阻碍清洁过程。

## 光纤插头端面（公头）清洁

1.打开导向盖上的防尘盖。

![结构图](/assets/image/ckcp/ckcp_5.jpg)

2.将光纤插头插入导向盖

![结构图](/assets/image/ckcp/ckcp_6.jpg)

3.推动外壳开始清洁光纤连接器插芯端面。`咔嚓`声表示清洁过程结束，使用后盖上防尘盖。

![结构图](/assets/image/ckcp/ckcp_7.jpg)

**插入适配器时，请注意不要使清洁器倾斜。**

在插入过程中不要过度用力，因为这可能回损坏连接器和清洁笔。

如果推动外壳被阻，请从适配器中取出清洁器，并确保没有大量碎屑阻碍清洁过程。

## 剩余清洁线指示

光纤清洁笔的侧面带有一个透明窗口，用户可以看到到超细纤维卷。这将让您知道在您的剩余用量。

![结构图](/assets/image/ckcp/ckcp_8.jpg)

## 产品参数

| 产品材质 | 防静电树脂                                                   |
| -------- | ------------------------------------------------------------ |
| 适用接口 | CKCP-1（LC/MU Φ1.25mm）公母连接头<br>CKCP-2（SC/FC/ST/PC/E2000  Φ2.5mm）公母连接头 |
| 端面类型 | UPC/APC/PC                                                   |
| 产品长度 | 标准175mm（延长后210mm）                                     |
| 清洁次数 | ≥600词                                                       |
| 产品尺寸 | 175mm* 18*18mm                                               |
| 应用范围 | 光纤配线架、光纤适配器、收发器、光模块                       |



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
