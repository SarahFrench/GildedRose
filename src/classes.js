// class Item {
//   constructor(name, sellIn, quality){
//     this.name = name;
//     this.sellIn = sellIn;
//     this.quality = quality;
//   }
//
//   updateSellIn(type){
//     if (type !== 'sulfuras') {
//     this.sellIn = this.sellIn - 1;
//     }
//   }
//
//   forceQualityBounds(type){
//
//     if (type !== 'sulfuras') {
//
//     if (this.quality > 50){
//       // console.log(`Quality of ${this.name} was ${this.quality}`)
//       this.quality = 50;
//        }
//
//     if (this.quality < 0){
//        this.quality = 0;
//         }
//       }
//     }
// }

class Brie {
  constructor(name, sellIn, quality){
    // super(name, sellIn, quality)
    this.type = 'brie'
    //
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  updateSellIn(type){
    if (type !== 'sulfuras') {
    this.sellIn = this.sellIn - 1;
    }
  }

  forceQualityBounds(type){

    if (type !== 'sulfuras') {

    if (this.quality > 50){
      // console.log(`Quality of ${this.name} was ${this.quality}`)
      this.quality = 50;
       }

    if (this.quality < 0){
       this.quality = 0;
        }
      }
    }

  update(){
    this.updateQuality();
    this.updateSellIn(this.type);
  }

  updateQuality(){
    if (this.sellIn > 0 ){ //may get issue here if >0 or >=0 correct
      this.quality += 1;
    } else if(this.sellIn <=0){ //ditto
      this.quality += 2;
    }
    this.forceQualityBounds(this.type)
  }

}

class Sulfuras extends Brie{
  constructor(name, sellIn, quality){
    super(name, sellIn, quality)
    this.type = 'sulfuras'
  }

  update(){
    this.updateQuality();
    super.updateSellIn(this.type);
  }

  updateQuality(){
    this.quality = 80;
  }

}

class BackstagePass extends Brie{
  constructor(name, sellIn, quality){
    super(name, sellIn, quality)
    this.type = 'backstage'
  }

  update(){
    this.updateQuality()
    super.updateSellIn(this.type)
  }

  updateQuality(){
    if (this.sellIn <= 0){
      this.quality = 0;
    } else if (this.sellIn > 10 ){ //may get issue here if >0 or >=0 correct
      this.quality += 1;
    } else if(this.sellIn <= 10 && this.sellIn > 5){ //ditto
      this.quality += 2;
    } else if(this.sellIn <= 5){ //ditto
      this.quality += 3;
    }

    super.forceQualityBounds(this.type)
  }

}

class Conjured extends Brie{
  constructor(name, sellIn, quality){
    super(name, sellIn, quality)
    this.type = 'conjured'
  }

  update(){
    this.updateQuality()
    super.updateSellIn(this.type)
  }

  updateQuality(){
    if (this.sellIn > 0){
      this.quality -=2;
    } else {
      this.quality -=4;
    }

    super.forceQualityBounds(this.type)
  }

}

//This class is for any item which isn't a special type, e.g. Brie or Sulfuras
class DefaultItem extends Brie{
  constructor(name, sellIn, quality){
    super(name, sellIn, quality)
    this.type = 'default'
  }

  update(){
    this.updateQuality()
    super.updateSellIn(this.type)
  }

  updateQuality(){
    if (this.sellIn > 0){
      this.quality -=1;
    } else if (this.sellIn <= 0){
      this.quality -=2;
    }

    super.forceQualityBounds(this.type)
  }

}

//This is the new Shop class I made which uses all my classes defined above
class ShopNew {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality(){
    this.items.forEach( item =>{
        item.update();
    })
    return this.items;
  }
}

//This is the OLD Shop class, supplied at the beginning of the exercise. I.e. legacy code from before refactoring.
class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }

    return this.items;
  }
}

module.exports = {
  // Item,
  Brie,
  Sulfuras,
  BackstagePass,
  Conjured,
  DefaultItem,
  ShopNew,
  Shop,
}
