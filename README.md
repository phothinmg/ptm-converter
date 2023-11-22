## Markdown to HTML Converter

![md-html](https://miro.medium.com/v2/resize:fit:1400/1*eZ7YPTqzcyFVoQxIOIQ9kQ.png)

### About

Markdown to HTML converter using [Showdown](https://github.com/showdownjs/showdown), **ESM Only** .

### Install

```bash
npm i ptm-converter
```

### Usage

`example.md`

```markdown
---
title: 'Example'
date: '2023-08-20'
---

# Home 

Hello World

<div style="color: red;">Hello World</div>

```

---

### `data`

Object : return metadata of markdown file.

```javascript

import Converter from "ptm-converter";

const mdContent = new Converter('./example.md');

const data = mdContent.data;
console.log(data);
// { title: 'Example', date: '2023-08-20' }
const title = mdContent.postTitle;
console.log(title);
// Example
const date = mdContent.postDate;
console.log(date);
// Sun, Aug 20, 2023 - return formated date
const dat = mdContent.data.date;
console.log(dat);
// 2023-08-20 - return unformated date
```

---

### `content`

```javascript

import Converter from "ptm-converter";

const mdContent = new Converter('./example.md');

const content = mdContent.content;
console.log(content);
/*# Home 

Hello World

<div style="color: red;">Hello World</div>
 */

const convertedContent = mdContent.convertedContent;
console.log(convertedContent);
/*<h1 id="home">Home</h1>
<p>Hello World</p>
<div style="color: red;">Hello World</div>*/

const pageHtml = mdContent.pageHtml;
console.log(pageHtml);
// Return html with hightlight js , copy button to <pre> for page content

const postHtml = mdContent.postHtml;
console.log(postHtml);
// Return html with hightlight js , copy button to <pre> for post content
// include - post title , reading time , last update
```
---

### `json`

```javascript

import Converter from "ptm-converter";

const mdContent = new Converter('./example.md');

const json = mdContent.json;
console.log(json);

/*{
    "data":{
    "title":"Home",
    "date":"2023-08-18"
    },
    "content":"\n# Home \n\nHello World\n\n<div style=\"color: red;\">Hello World</div>\n\n"
}*/

```

---

### `function`

```javascript
import Converter from "ptm-converter";

const formatedDate = new Converter().formatDate('2023-09-11');
console.log(formatedDate);
// Mon, Sep 11, 2023

const readingTime = new Converter().readingTime(text);
console.log(readingTime)
// Return in minutes {number}

const lastUpdate= new Converter('./example.md').lastUpdate();
console.log(lastUpdate);
// 2023-10-22T20:22:04.000Z

```
---

### Bundled license information:

**1. js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT**

**2. showdown/dist/showdown.js: showdown v 2.1.0 - 21-04-2022**

**3. he/he.js:https://mths.be/he v1.2.0 by @mathias | MIT license**







