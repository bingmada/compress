<!--
 * @Author: liyingda
 * @Date: 2023-08-14 16:42:38
 * @LastEditors: liyingda
 * @LastEditTime: 2023-08-15 10:38:07
-->
## Requirements
First make sure you are able to run `python3` (Mac/Linux) or `python` (Windows) from the terminal. If you are not then you might need to add it to the PATH. If you want to use a version of python not in the PATH you should specify `options.pythonPath`.

Second make sure you have installed the Python package `nltk`, use `pip install nltk`

## Installation

```bash
npm install speech-compression
```

##  Example
```bash
const compression = require('speech-compression');
const text = 'But don’t humans also have genuinely original ideas?” Come on, read a fantasy book. It’s either a Tolkien clone, or it’s A Song Of Ice And Fire. Tolkien was a professor of Anglo-Saxon language and culture; no secret where he got his inspiration. A Song Of Ice And Fire is just War Of The Roses with dragons. Lannister and Stark are just Lancaster and York, the map of Westeros is just Britain (minus Scotland) with an upside down-Ireland stuck to the bottom of it – wake up, sheeple! Dullards blend Tolkien into a slurry and shape it into another Tolkien-clone. Tolkien-level artistic geniuses blend human experience, history, and the artistic corpus into a slurry and form it into an entirely new genre. Again, the difference is how finely you blend and what spices you add to the slurry.'
compression(text, { removeSpaces: false }).then(res => {
  console.log(res)
})
```

## Options
|  字段  | 字段类型 | 字段说明 | 默认值 | 可选值|
| ------- | ----- | ----- |----- |----- |
| language  | String  | 语言类型 | 'english' | 'english'、'chinese'|
| removeSpaces  | Boolean  | 删除空白字符 | true|true、false|
| removeStopwords  | Boolean |删除停止语 | true|true、false|
| removePunctuation  | Boolean |删除标点符号|true|true、false|
| stemmer  | String |词干分析器| 'porter' | 'snowball'、'porter'、'lancaster'|
