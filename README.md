# TinySegmenter

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A compact Japanese text segmentation library implemented in JavaScript.

## Demo
https://code4fukui.github.io/TinySegmenter/

## Features
- Performs Japanese text segmentation using a machine learning-based algorithm
- Highly compact implementation, suitable for use in web browsers and other resource-constrained environments
- Supports multiple character types (kanji, hiragana, katakana, alphabet, numbers)
- Includes pre-trained models for accurate segmentation

## Usage

To use TinySegmenter, import the library and call the `segment()` function:

```javascript
import { TinySegmenter } from "https://code4fukui.github.io/TinySegmenter/TinySegmenter.js";

const segs = TinySegmenter.segment("私の名前は中野です");
console.log(segs); // ["私", "の", "名前", "は", "中野", "です"]
```

## License
MIT License — see [LICENSE](LICENSE).