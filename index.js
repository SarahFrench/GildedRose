//This is an area for running the shop update and getting output to build master tests from, etc.
//Also this file is REQUIRED for mocha testing

//=========================CONSTANTS=========================

const testItemListForLegacyVersion = require('./test/item_lists.js').testItemListForLegacyVersion;
const testItemListForNewVersion = require('./test/item_lists.js').testItemListForNewVersion;
const {Item, Brie, Sulfuras, BackstagePass, Conjured, DefaultItem, Shop, ShopNew} = require('./src/classes.js');

const dictionaryProductTypes = new Map([ //want to make it so getProductType() uses this instead of being hard coded. Can't get values to work as RegEx.
  ['brie', /Brie|Aged Brie/],
  ['backstage', /Backstage Pass|Backstage/],
  ['sulfuras', /Sulfuras/],
  ['conjured', /Conjured/]
  ]);

//=========================FUNCTIONS=========================

function getProductType(name){

  const reBrie = /Brie|Aged Brie/,
        reBackstage = /Backstage Pass|Backstage/,
        reSulfuras = /Sulfuras/;
        reConjured = /Conjured/;

  if (reBrie.exec(name)) {
    return 'brie'
  } else if (reBackstage.exec(name)) {
      return 'backstage'
    } else if (reSulfuras.exec(name)) {
        return 'sulfuras'
      } else if (reConjured.exec(name)) {
        return 'conjured'
      } else {
        return 'default'
      }
  }

function convertDetailsToTypeObject(item){
  let itemName = item[0];
  let itemType = getProductType(itemName);
  switch (itemType){
    case 'brie':
      return new Brie(item[0], item[1], item[2]);
      break;
    case 'sulfuras':
      return new Sulfuras(item[0], item[1], item[2]);
      break;
    case 'backstage':
      return new BackstagePass(item[0], item[1], item[2]);
      break;
    case 'conjured':
      return new Conjured(item[0], item[1], item[2]);
      break;
    default:
      return new DefaultItem(item[0], item[1], item[2]);
      break;
  }
}

function convertMultiDimensionalArrayToItemObjects(array){
  let items = [];
  array.forEach( item => {
    items.push(convertDetailsToTypeObject(item));
  });
  return items;
} //can automatically create Items of the correct type based on the item's name


//=========================TEST AREA=========================

let itemArray = [['foo', 10, 10], ['Backstage passes to a TAFKAL80ETC concert', 11, 10],['Aged Brie', 20, 10], ['Sulfuras, Hand of Ragnaros', 0, 80], ['Conjured Underpants', 14, 50]];
let itemObjectArray = convertMultiDimensionalArrayToItemObjects(itemArray);
console.log(itemArray)
console.log(itemObjectArray)

console.log(dictionaryProductTypes)

// let gildedRoseNew = new ShopNew(testItemListForNewVersion);
// console.log('original list:')
// console.log(testItemListForNewVersion)
//
// items = gildedRoseNew.updateQuality()
//
// console.log('after 1 day/update:')
// console.log(items)
//
// let gildedRose = new Shop(testItemListForLegacyVersion);
