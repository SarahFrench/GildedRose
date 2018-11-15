const {Item, Brie, Sulfuras, BackstagePass, Conjured, Default} = require('./classes.js');

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

const item1 = new Default('foo', 10, 10);
const item2 = new Default('bar', 0, 20);
const item3 = new Default('baz', -1, 2);
const item4 = new Default('fez', -1, 0);
const item5 = new Sulfuras('Sulfuras, Hand of Ragnaros', 0, 80);
const item6 = new Brie('Aged Brie', 0, 10);
const item7 = new Brie('Aged Brie', 2, 10);
const item8 = new Backstage('Backstage passes to a TAFKAL80ETC concert', 11, 10)
const item9 = new Backstage('Backstage passes to a TAFKAL80ETC concert', 10, 10)
const item10 = new Backstage('Backstage passes to a TAFKAL80ETC concert', 6, 10)
const item11 = new Backstage('Backstage passes to a TAFKAL80ETC concert', 5, 10)
const item12 = new Backstage('Backstage passes to a TAFKAL80ETC concert', 3, 10)
const item13 = new Backstage('Backstage passes to a TAFKAL80ETC concert', 1, 10)
const item14 = new Backstage('Backstage passes to a TAFKAL80ETC concert', 0, 10)

const testItemList = [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14 ];


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
  Item,
  Shop,
}
