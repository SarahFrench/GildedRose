var {expect} = require('chai');
var {Shop, Item} = require('../src/gilded_rose.js');
const testItemList = require('./item_lists.js').testItemList;


describe("Gilded Rose", function() {

  it("Master Test - using list of edgecase items", function() {
  // Arrange
    const gildedRose = new Shop(testItemList);
  //Act
    const items = gildedRose.updateQuality();
  //Assert
    expect(items[0].name).to.equal('foo');
    expect(items[0].sellIn).to.equal(9);
    expect(items[0].quality).to.equal(9);

    expect(items[1].name).to.equal('bar');
    expect(items[1].sellIn).to.equal(-1);
    expect(items[1].quality).to.equal(18);

    expect(items[2].name).to.equal('baz');
    expect(items[2].sellIn).to.equal(-2);
    expect(items[2].quality).to.equal(0);

    expect(items[3].name).to.equal('fez');
    expect(items[3].sellIn).to.equal(-2);
    expect(items[3].quality).to.equal(0);

    expect(items[4].name).to.equal('Sulfuras, Hand of Ragnaros');
    expect(items[4].sellIn).to.equal(0);
    expect(items[4].quality).to.equal(80);

    expect(items[5].name).to.equal('Aged Brie');
    expect(items[5].sellIn).to.equal(-1);
    expect(items[5].quality).to.equal(12);

    expect(items[6].name).to.equal('Aged Brie');
    expect(items[6].sellIn).to.equal(1);
    expect(items[6].quality).to.equal(11);

    expect(items[7].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
    expect(items[7].sellIn).to.equal(10);
    expect(items[7].quality).to.equal(11);

    expect(items[8].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
    expect(items[8].sellIn).to.equal(9);
    expect(items[8].quality).to.equal(12);

    expect(items[9].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
    expect(items[9].sellIn).to.equal(5);
    expect(items[9].quality).to.equal(12);

    expect(items[10].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
    expect(items[10].sellIn).to.equal(4);
    expect(items[10].quality).to.equal(13);

    expect(items[11].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
    expect(items[11].sellIn).to.equal(2);
    expect(items[11].quality).to.equal(13);

    expect(items[12].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
    expect(items[12].sellIn).to.equal(0);
    expect(items[12].quality).to.equal(13);

    expect(items[13].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
    expect(items[13].sellIn).to.equal(-1);
    expect(items[13].quality).to.equal(0);


  });

  it("Store correct item names", function() {
  // Arrange
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
  //Act
    const items = gildedRose.updateQuality();
  //Assert
    expect(items[0].name).to.equal("foo");
  });

  it("Updating causes Item SellIn to decrease", function() {
  // Arrange
    const gildedRose = new Shop([ new Item("foo", 1, 10) ]);
  //Act
    const items = gildedRose.updateQuality();
  //Assert
    expect(items[0].sellIn).to.equal(0);
  });

  it("Updating causes default item Quality to decrease by 1", function() {
  // Arrange
    const gildedRose = new Shop([ new Item("foo", 1, 10) ]);
  //Act
    const items = gildedRose.updateQuality();
  //Assert
    expect(items[0].quality).to.equal(9);
  });

  it(`When SellIn = 0 default item Quality decreases x2\n\t (excludes Brie, Passes, Sulfuras)`, function() {
  // Arrange
    const gildedRose = new Shop([ new Item("foo", 0, 10) ]);
  //Act
    const items = gildedRose.updateQuality();
  //Assert
    expect(items[0].quality).to.equal(8);
  });

  it('Quality does not decrease from 0', function() {
  // Arrange
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
  //Act
    const items = gildedRose.updateQuality();
  //Assert
  expect(items[0].name).to.equal('foo');
  expect(items[0].sellIn).to.equal(-1);
  expect(items[0].quality).to.equal(0);
  });

  it('Quality does not increase from 50', function() {
  // Arrange
    const gildedRose = new Shop([ new Item('Aged Brie', 0, 50) , new Item('Backstage passes to a TAFKAL80ETC concert', 2, 50) ]);
  //Act
    const items = gildedRose.updateQuality();
  //Assert
    expect(items[0].name).to.equal('Aged Brie');
    expect(items[0].sellIn).to.equal(-1);
    expect(items[0].quality).to.equal(50);

    expect(items[1].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
    expect(items[1].sellIn).to.equal(1);
    expect(items[1].quality).to.equal(50);
  });

  it('Quality is not increased to >50', function() {
  // Arrange
  const gildedRose = new Shop([ new Item('Aged Brie', 0, 49) , new Item('Backstage passes to a TAFKAL80ETC concert', 2, 49) ]);
  //Act
    const items = gildedRose.updateQuality();
  //Assert
    expect(items[0].name).to.equal('Aged Brie');
    expect(items[0].sellIn).to.equal(-1);
    expect(items[0].quality).to.equal(50);

    expect(items[1].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
    expect(items[1].sellIn).to.equal(1);
    expect(items[1].quality).to.equal(50);
  });


  describe('Sulfuras', () => {

    it("Maintains quality = 80 after updating", function() {
      // Arrange
      const gildedRose = new Shop([ new Item('Sulfuras, Hand of Ragnaros', 0, 80) ]);
      // Act
      const items = gildedRose.updateQuality();
      // Assert
      expect(items[0].name).to.equal('Sulfuras, Hand of Ragnaros');
      expect(items[0].sellIn).to.equal(0);
      expect(items[0].quality).to.equal(80);
    });

    it("Maintains SellIn = 0 after updating", function() {
      // Arrange
      const gildedRose = new Shop([ new Item('Sulfuras, Hand of Ragnaros', 0, 80) ]);
      // Act
      const items = gildedRose.updateQuality();
      // Assert
      expect(items[0].name).to.equal('Sulfuras, Hand of Ragnaros');
      expect(items[0].sellIn).to.equal(0);
      expect(items[0].quality).to.equal(80);
    });

  });

  describe('Aged Brie', () => {

    it('Aged Brie increases Quality +1 when SellIn >=0', function() {
      // Arrange
      const gildedRose = new Shop([ new Item('Aged Brie', 1, 30) ]);
      // Act
      const items = gildedRose.updateQuality();
      // Assert
      expect(items[0].name).to.equal('Aged Brie');
      expect(items[0].sellIn).to.equal(0);
      expect(items[0].quality).to.equal(31);
    });

    it('Aged Brie increases Quality +2 when aging and SellIn <0', function() {
      // Arrange
      const gildedRose = new Shop([ new Item('Aged Brie', 0, 30) ]);
      // Act
      const items = gildedRose.updateQuality();
      // Assert
      expect(items[0].name).to.equal('Aged Brie');
      expect(items[0].sellIn).to.equal(-1);
      expect(items[0].quality).to.equal(32);
    });

  });

  describe('Backstage Passes', () => {

    it('Quality drops to 0 when SellIn =< 0', function() {
      // Arrange
      const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 0, 50) ]);
      // Act
      const items = gildedRose.updateQuality();
      // Assert
      expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
      expect(items[0].sellIn).to.equal(-1);
      expect(items[0].quality).to.equal(0);
    });

    it('Quality increases by 1 when SellIn >10', function() {
      // Arrange
      const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 15, 30) ]);
      // Act
      const items = gildedRose.updateQuality();
      // Assert
      expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
      expect(items[0].sellIn).to.equal(14);
      expect(items[0].quality).to.equal(31);
    });

    it('Quality increases by 2 when SellIn <=10, >5 days', function() {
      // Arrange
      const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 6, 30) ]);
      // Act
      const items = gildedRose.updateQuality();
      // Assert
      expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
      expect(items[0].sellIn).to.equal(5);
      expect(items[0].quality).to.equal(32);
    });

    it('Quality increases by 3 when SellIn <=15, >0 days', function() {
      // Arrange
      const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 1, 30) ]);
      // Act
      const items = gildedRose.updateQuality();
      // Assert
      expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
      expect(items[0].sellIn).to.equal(0);
      expect(items[0].quality).to.equal(33);
    });

  });

});
