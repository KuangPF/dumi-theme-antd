---
group: Builtins Components
title: ImagePreview
order: 2
---

Image preview component, used when images need to be displayed. This component supports two parameters `float` and `pure`, which are used to control the image display effect.

### Basic usage

By default, the background color will be added to the image and the relevant spacing will be adjusted. `description` is the description of the image, which will be displayed below the image.

```md
<ImagePreview Preview>
   <img description="Design Principles" src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*aFiGRbIvuH4AAAAAAAAAAABkARQnAQ" />
</ImagePreview>
```

<ImagePreview Preview>
   <img description="Design Principles" src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*aFiGRbIvuH4AAAAAAAAAAABkARQnAQ" />
</ImagePreview>

### Simple mode

If you don't need effects such as background color and image centering, set the `pure` attribute.

```md
<ImagePreview pure>
   <img description="Design Principles" src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*aFiGRbIvuH4AAAAAAAAAAABkARQnAQ" />
</ImagePreview>
```

<ImagePreview pure>
   <img description="Design Principles" src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*aFiGRbIvuH4AAAAAAAAAAABkARQnAQ" />
</ImagePreview>

### Surround Mode

In this mode, the image will be displayed floating on the right, and the text will surround it. Set the `float` property to use this mode.

```md
<ImagePreview float>
   <img src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*1c74TKxuEW4AAAAAAAAAAABkARQnAQ" />
</ImagePreview>

Brand color is one of the most intuitive visual elements to reflect product characteristics and communication concepts. When choosing a color, it is necessary to clarify the use scene and scope of the brand color in the interface. Choose the main color in the basic color palette, we recommend choosing the sixth color from light to dark in the color palette as the main color. The brand color of Ant Design is taken from the blue of the basic color palette, and the Hex value is `#1890ff`. The application scenarios include: key action points, operation status, important information highlighting, graphics and other scenarios.
```

<ImagePreview float>
   <img src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*1c74TKxuEW4AAAAAAAAAAABkARQnAQ" />
</ImagePreview>

Brand color is one of the most intuitive visual elements to reflect product characteristics and communication concepts. When choosing a color, it is necessary to clarify the use scene and scope of the brand color in the interface. Choose the main color in the basic color palette, we recommend choosing the sixth color from light to dark in the color palette as the main color. The brand color of Ant Design is taken from the blue of the basic color palette, and the Hex value is `#1890ff`. The application scenarios include: key action points, operation status, important information highlighting, graphics and other scenarios.

### Display side by side

In some cases, multiple images need to be displayed side by side, just put multiple `<img />` tags in the `ImagePreview` component, and add `inline` class name to the `img` tags.

```md
<ImagePreview float>
   <img class='bad inline' src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*di8jS5EWYSIAAAAAAAAAAABkARQnAQ" alt="bad inline" description="Do not place more than one in a button area Main button.">
   <img class='good inline' src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*3WUkT5pD1SUAAAAAAAAAAABkARQnAQ" alt="correct demonstration" description="1. Emphasize a main operation;< br/>2. There is no primary or secondary operation, and the secondary button is the safest choice.">
</ImagePreview>
```

<ImagePreview float>
   <img class='bad inline' src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*di8jS5EWYSIAAAAAAAAAAABkARQnAQ" alt="bad inline" description="Do not place more than one in a button area Main button.">
   <img class='good inline' src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*3WUkT5pD1SUAAAAAAAAAAABkARQnAQ" alt="correct demonstration" description="1. Emphasize a main operation;< br/>2. There is no primary or secondary operation, and the secondary button is the safest choice.">
</ImagePreview>

In this mode, comparison styles are also supported. For example, one is a positive example and the other is a negative example. You only need to add the class name `good` or `bad` to the corresponding `<img />`.
