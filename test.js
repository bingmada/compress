/*
 * @Author: bingmada
 * @Date: 2023-08-14 16:14:08
 * @LastEditors: liyingda
 * @LastEditTime: 2023-08-15 10:36:29
 */
const compression = require("./index.js");
const text =
  "But don’t humans also have genuinely original ideas?” Come on, read a fantasy book. It’s either a Tolkien clone, or it’s A Song Of Ice And Fire. Tolkien was a professor of Anglo-Saxon language and culture; no secret where he got his inspiration. A Song Of Ice And Fire is just War Of The Roses with dragons. Lannister and Stark are just Lancaster and York, the map of Westeros is just Britain (minus Scotland) with an upside down-Ireland stuck to the bottom of it – wake up, sheeple! Dullards blend Tolkien into a slurry and shape it into another Tolkien-clone. Tolkien-level artistic geniuses blend human experience, history, and the artistic corpus into a slurry and form it into an entirely new genre. Again, the difference is how finely you blend and what spices you add to the slurry.";
compression(text, { removeSpaces: false }).then((res) => {
  console.log(res);
});
