---
nav: Demo
title: Table
order: 4
tag:
  title: New
  color: success
---

#### `Button` API

| Property   | Description                                                                                                                      | Type                                                   | Default   | Version |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | --------- | ------- |
| block      | Option to fit button width to its parent width                                                                                   | boolean                                                | false     |         |
| classNames | Semantic DOM class                                                                                                               | [Record<SemanticDOM, string>](#semantic-dom)           | -         | 5.4.0   |
| danger     | Set the danger status of button                                                                                                  | boolean                                                | false     |         |
| disabled   | Disabled state of button                                                                                                         | boolean                                                | false     |         |
| ghost      | Make background transparent and invert text and border colors                                                                    | boolean                                                | false     |         |
| href       | Redirect url of link button                                                                                                      | string                                                 | -         |         |
| htmlType   | Set the original html `type` of `button`, see: [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | string                                                 | `button`  |         |
| icon       | Set the icon component of button                                                                                                 | ReactNode                                              | -         |         |
| loading    | Set the loading status of button                                                                                                 | boolean \| { delay: number }                           | false     |         |
| shape      | Can be set button shape                                                                                                          | `default` \| `circle` \| `round`                       | `default` |         |
| size       | Set the size of button                                                                                                           | `large` \| `middle` \| `small`                         | `middle`  |         |
| styles     | Semantic DOM style                                                                                                               | [Record<SemanticDOM, CSSProperties>](#semantic-dom)    | -         | 5.4.0   |
| target     | Same as target attribute of a, works when href is specified                                                                      | string                                                 | -         |         |
| type       | Set button type                                                                                                                  | `primary` \| `dashed` \| `link` \| `text` \| `default` | `default` |         |
| onClick    | Set the handler to handle `click` event                                                                                          | (event: MouseEvent) => void                            | -         |         |
