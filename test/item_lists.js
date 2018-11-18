const {Item, Brie, Sulfuras, BackstagePass, Conjured, DefaultItem} = require('../src/classes.js');


const item1 = new Item('foo', 10, 10);
const item2 = new Item('bar', 0, 20);
const item3 = new Item('baz', -1, 2);
const item4 = new Item('fez', -1, 0);
const item5 = new Item('Sulfuras, Hand of Ragnaros', 0, 80);
const item6 = new Item('Aged Brie', 20, 10);
const item7 = new Item('Aged Brie', 0, 10);
const item8 = new Item('Backstage passes to a TAFKAL80ETC concert', 11, 10)
const item9 = new Item('Backstage passes to a TAFKAL80ETC concert', 10, 10)
const item10 = new Item('Backstage passes to a TAFKAL80ETC concert', 6, 10)
const item11 = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 10)
const item12 = new Item('Backstage passes to a TAFKAL80ETC concert', 3, 10)
const item13 = new Item('Backstage passes to a TAFKAL80ETC concert', 1, 10)
const item14 = new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10)

const testItemListForLegacyVersion = [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14 ];

const item1_2 = new DefaultItem('foo', 10, 10);
const item2_2 = new DefaultItem('bar', 0, 20);
const item3_2 = new DefaultItem('baz', -1, 2);
const item4_2 = new DefaultItem('fez', -1, 0);
const item5_2 = new Sulfuras('Sulfuras, Hand of Ragnaros', 0, 80);
const item6_2 = new Brie('Aged Brie', 20, 10);
const item7_2 = new Brie('Aged Brie', 0, 10);
const item8_2 = new BackstagePass('Backstage passes to a TAFKAL80ETC concert', 11, 10)
const item9_2 = new BackstagePass('Backstage passes to a TAFKAL80ETC concert', 10, 10)
const item10_2 = new BackstagePass('Backstage passes to a TAFKAL80ETC concert', 6, 10)
const item11_2 = new BackstagePass('Backstage passes to a TAFKAL80ETC concert', 5, 10)
const item12_2 = new BackstagePass('Backstage passes to a TAFKAL80ETC concert', 3, 10)
const item13_2 = new BackstagePass('Backstage passes to a TAFKAL80ETC concert', 1, 10)
const item14_2 = new BackstagePass('Backstage passes to a TAFKAL80ETC concert', 0, 10)

const testItemListForNewVersion = [item1_2, item2_2, item3_2, item4_2, item5_2, item6_2, item7_2, item8_2, item9_2, item10_2, item11_2, item12_2, item13_2, item14_2 ];



module.exports = {
  testItemListForLegacyVersion,
  testItemListForNewVersion,
}
