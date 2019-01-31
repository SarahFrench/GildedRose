//=========================IMPORTS=========================

const {Item, Brie, Sulfuras, BackstagePass, Conjured, DefaultItem, Shop, ShopNew} = require('./classes.js');

//=========================CONSTS=========================
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

//can automatically create Items of the correct type based on the item's name
function convertItemArrayToItemObject(array){
  let items = [];
  array.forEach( item => {
    items.push(convertDetailsToTypeObject(item));
  });
  return items;
}

//=========================EXPORT=========================

module.exports = {
  getProductType,
  convertDetailsToTypeObject,
  convertItemArrayToItemObject
}
