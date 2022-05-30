import { TinySegmenter } from "./TinySegmenter.js";
import * as t from "https://deno.land/std/testing/asserts.ts";

Deno.test("test", () => {
  const segs = TinySegmenter.segment("私の名前は中野です");
  t.assertEquals(segs, ["私", "の", "名前", "は", "中野", "です"]);
});
Deno.test("multi", () => {
  const segs = TinySegmenter.segment("こんにちは。私の名前は、中野です。");
  t.assertEquals(segs, ["こん", "にち", "は", "。", "私", "の", "名前", "は", "、", "中野", "です", "。"]);
});
