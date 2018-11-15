const testItemList = require('./test/item_lists.js').testItemList;
const {Shop, Item} = require('./src/gilded_rose.js');


let gildedRose = new Shop(testItemList);

console.log(testItemList)


items = gildedRose.updateQuality();

console.log(items)
