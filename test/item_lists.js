//=========================IMPORTS=========================

const {Item, Brie, Sulfuras, BackstagePass, Conjured, DefaultItem} = require('../src/classes.js');

//=========================OLD ITEM LIST - LEGACY VERSION=========================

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

//=========================NEWER ITEM LIST - USES NEW CLASSES; ALREADY OBJECTS OF CORRECT CLASS=========================

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

//=========================NEWEST ITEM LIST - LIST OF [<NAME>,<SELL IN>, <QUALITY>] WHERE OBJECT TYPE IS DETECTED AND AUTO GENERATED BY FUNCTIONS=========================

const item1_3 = ['bar', 0, 20];
const item2_3 = ['baz', -1, 2];
const item3_3 = ['baz', -1, 2];
const item4_3 = ['fez', -1, 0];
const item5_3 = ['Sulfuras, Hand of Ragnaros', 0, 80];
const item6_3 = ['Aged Brie', 20, 10];
const item7_3 = ['Aged Brie', 0, 10];
const item8_3 = ['Backstage passes to a TAFKAL80ETC concert', 11, 10]
const item9_3 = ['Backstage passes to a TAFKAL80ETC concert', 10, 10]
const item10_3 = ['Backstage passes to a TAFKAL80ETC concert', 6, 10]
const item11_3 = ['Backstage passes to a TAFKAL80ETC concert', 5, 10]
const item12_3 = ['Backstage passes to a TAFKAL80ETC concert', 3, 10]
const item13_3 = ['Backstage passes to a TAFKAL80ETC concert', 1, 10]
const item14_3 = ['Backstage passes to a TAFKAL80ETC concert', 0, 10]

const testItemListArray = [item1_3, item2_3, item3_3, item4_3, item5_3, item6_3, item7_3, item8_3, item9_3, item10_3, item11_3, item12_3, item13_3, item14_3];

//=========================EXPORT=========================

module.exports = {
  testItemListForLegacyVersion,
  testItemListForNewVersion,
  testItemListArray
}
