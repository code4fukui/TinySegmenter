# TinySegmenter

JavaScriptで実装されたコンパクトな日本語テキスト分割ライブラリです。

## デモ
https://code4fukui.github.io/TinySegmenter/

## 特徴
- 機械学習ベースのアルゴリズムを使用した日本語テキストの分割
- 非常にコンパクトな実装であり、ウェブブラウザやリソースに制約のある環境での使用に最適
- 複数の文字種（漢字、ひらがな、カタカナ、アルファベット、数字）に対応
- 高精度な分割を実現する事前学習済みモデルを内蔵

## 使い方

TinySegmenterを使用するには、ライブラリをインポートして `segment()` 関数を呼び出します。

```javascript
import { TinySegmenter } from "https://code4fukui.github.io/TinySegmenter/TinySegmenter.js";

const segs = TinySegmenter.segment("私の名前は中野です");
console.log(segs); // ["私", "の", "名前", "は", "中野", "です"]
```

## ライセンス
MIT License — [LICENSE](LICENSE) を参照してください。
