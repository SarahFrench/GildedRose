class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  updateSellIn(type){
    if (type !=== 'sulfuras') {
    this.sellIn = this.sellIn - 1;
    }
  }

  forceQualityBounds(type){

    if (type !=== 'sulfuras') {

    if (this.quality > 50){
      console.log(`Quality of ${this.name} was ${this.quality}`)
      this.quality = 50;
       }

    if (this.quality < 0){
       this.quality = 0;
        }
      }
    }
}

class Brie extends Item{
  constructor(name, sellIn, quality){
    super(name, sellIn, quality)
    this.type = 'brie'
  }

  update(){
    super.updateSellIn(this.type)
    this.updateQuality()
  }

  updateQuality(){
    if (this.sellIn > 0 ){ //may get issue here if >0 or >=0 correct
      this.quality += 1;
    } else if(this.sellIn <=0){ //ditto
      this.quality += 2;
    }

    super.forceQualityBounds(this.type)
  }

}

class Sulfuras extends Item{
  constructor(name, sellIn, quality){
    super(name, sellIn, quality)
    this.type = 'sulfuras'
  }

  update(){
    super.updateSellIn(this.type)
    this.updateQuality()
  }

  updateQuality(){
    this.quality = 80;
  }

}

class BackstagePass extends Item{
  constructor(name, sellIn, quality){
    super(name, sellIn, quality)
    this.type = 'backstage'
  }

  update(){
    super.updateSellIn(this.type)
    this.updateQuality()
  }

  updateQuality(){
    if (this.sellIn < 0){
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

class Conjured extends Item{
  constructor(name, sellIn, quality){
    super(name, sellIn, quality)
    this.type = 'conjured'
  }

  update(){
    super.updateSellIn(this.type)
    this.updateQuality()
  }

  updateQuality(){
    this.quality -=2;

    super.forceQualityBounds(this.type)
  }

}

class Default extends Item{
  constructor(name, sellIn, quality){
    super(name, sellIn, quality)
    this.type = 'default'
  }

  update(){
    super.updateSellIn(this.type)
    this.updateQuality()
  }

  updateQuality(){
    this.quality -=1;

    super.forceQualityBounds(this.type)
  }

}
