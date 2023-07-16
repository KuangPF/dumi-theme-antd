---
group: 内置组件
title: 图片预览
order: 2
---

图片预览组件，需要展示图片时使用。该组件支持 `float` 以及 `pure` 两个参数，用于控制图片展示效果。

### 基础使用

默认会给图片添加背景色以及调整相关间距，`description` 为图片相关描述，展示在图片下方。

```md
<ImagePreview>
  <img description="设计原则" src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*aFiGRbIvuH4AAAAAAAAAAABkARQnAQ" />
</ImagePreview>
```

<ImagePreview>
  <img description="设计原则" src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*aFiGRbIvuH4AAAAAAAAAAABkARQnAQ" />
</ImagePreview>

### 简洁模式

如果不需要背景颜色以及图片居中等效果，设置 `pure` 属性。

```md
<ImagePreview pure>
  <img description="设计原则" src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*aFiGRbIvuH4AAAAAAAAAAABkARQnAQ" />
</ImagePreview>
```

<ImagePreview pure>
  <img description="设计原则" src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*aFiGRbIvuH4AAAAAAAAAAABkARQnAQ" />
</ImagePreview>

### 环绕模式

该模式下图片会在右侧浮动展示，文字在其周围环绕, 设置 `float` 属性使用该模式。

```md
<ImagePreview float>
  <img src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*1c74TKxuEW4AAAAAAAAAAABkARQnAQ" />
</ImagePreview>

品牌色是体现产品特性和传播理念最直观的视觉元素之一。在色彩选取时，需要先明确品牌色在界面中的使用场景及范围。在基础色板中选择主色，我们建议选择色板从浅至深的第六个颜色作为主色。 Ant Design 的品牌色取自基础色板的蓝色，Hex 值为 `#1890ff`，应用场景包括：关键行动点，操作状态、重要信息高亮，图形化等场景。
```

<ImagePreview float>
  <img src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*1c74TKxuEW4AAAAAAAAAAABkARQnAQ" />
</ImagePreview>

品牌色是体现产品特性和传播理念最直观的视觉元素之一。在色彩选取时，需要先明确品牌色在界面中的使用场景及范围。在基础色板中选择主色，我们建议选择色板从浅至深的第六个颜色作为主色。 Ant Design 的品牌色取自基础色板的蓝色，Hex 值为 `#1890ff`，应用场景包括：关键行动点，操作状态、重要信息高亮，图形化等场景。

### 并排展示

某些情况下需要将多张图片并排展示，只需要将多个 `<img />` 标签置于 `ImagePreview`组件中，给 `img` 标签加上 `inline` 类名。

```md
<ImagePreview float>
  <img class='bad inline' src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*di8jS5EWYSIAAAAAAAAAAABkARQnAQ" alt="错误示范" description="不要在一个按钮区放置超过一个主按钮。">
  <img class='good inline' src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*3WUkT5pD1SUAAAAAAAAAAABkARQnAQ" alt="正确示范" description="1、强调一个主要操作；<br/>2、操作无主次，次按钮是最安全的选择。">
</ImagePreview>
```

<ImagePreview float>
<img class='bad inline' src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*di8jS5EWYSIAAAAAAAAAAABkARQnAQ" alt="错误示范" description="不要在一个按钮区放置超过一个主按钮。">
<img class='good inline' src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*3WUkT5pD1SUAAAAAAAAAAABkARQnAQ" alt="正确示范" description="1、强调一个主要操作；<br/>2、操作无主次，次按钮是最安全的选择。">
</ImagePreview>

该模式下，额外还支持对比样式，比如一个是正面例子，另外一个为反面例子，则只需给对应 `<img />` 加上 `good` 或者 `bad` 类名即可。
