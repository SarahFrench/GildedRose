// const testItemList = require('./test/item_lists.js').testItemList;
// const {Shop, Item} = require('./src/gilded_rose.js');

//
// let gildedRose = new Shop(testItemList);
//
// // console.log(testItemList)
//
//
// items = gildedRose.updateQuality();
//
// // console.log(items)
//
//
// class Item {
//   constructor(name, sellIn, quality){
//     this.name = name;
//     this.sellIn = sellIn;
//     this.quality = quality;
//   }
//
//   updateSellIn(type){
//     if (type !=== 'sulfuras') {
//     this.sellIn = this.sellIn - 1;
//     }
//   }
//
//   forceQualityBounds(type){
//
//     if (type !=== 'sulfuras') {
//
//     if (this.quality > 50){
//       console.log(`Quality of ${this.name} was ${this.quality}`)
//       this.quality = 50;
//        }
//
//     if (this.quality < 0){
//        this.quality = 0;
//         }
//       }
//     }
// }
//
//
// class Brie extends Item{
//   constructor(name, sellIn, quality){
//     super(name, sellIn, quality)
//     this.type = 'brie'
//   }
//
//   update(){
//     super.updateSellIn()
//     this.updateQuality()
//   }
//
//
//
//   updateQuality(){
//     if (this.sellIn > 0 ){ //may get issue here if >0 or >=0 correct
//       this.quality += 1;
//     } else if(this.sellIn <=0){ //ditto
//       this.quality += 2;
//     }
//
//     super.forceQualityBounds(this.type)
//   }
//
// }
//
// brie = new Brie ('Aged Brie', 0, 60)
//
// console.log(brie);
//
// brie.update()
//
//  console.log(brie);

class Shop {
  constructor(items=[]){
    this.items = items;
  }
}

let shop = new Shop();

console.log(shop.items);
