const {Shop, Item} = require('../src/gilded_rose.js');

const item1 = new Item('foo', 10, 10);
const item2 = new Item('bar', 0, 20);
const item3 = new Item('baz', -1, 2);
const item4 = new Item('fez', -1, 0);
const item5 = new Item('Sulfuras, Hand of Ragnaros', 0, 80);
const item6 = new Item('Aged Brie', 0, 10);
const item7 = new Item('Aged Brie', 2, 10);
const item8 = new Item('Backstage passes to a TAFKAL80ETC concert', 11, 10)
const item9 = new Item('Backstage passes to a TAFKAL80ETC concert', 10, 10)
const item10 = new Item('Backstage passes to a TAFKAL80ETC concert', 6, 10)
const item11 = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 10)
const item12 = new Item('Backstage passes to a TAFKAL80ETC concert', 3, 10)
const item13 = new Item('Backstage passes to a TAFKAL80ETC concert', 1, 10)
const item14 = new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10)

const testItemList = [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14 ];

module.exports = {
  testItemList
}
