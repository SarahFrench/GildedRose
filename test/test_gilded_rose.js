const {expect} = require('chai');
const {Item, Brie, Sulfuras, BackstagePass, Conjured, DefaultItem, Shop, ShopNew} = require('../src/classes.js');
const {testItemListForNewVersion, testItemListForLegacyVersion} = require('./item_lists.js');


describe("Gilded Rose - Legacy Verson", function() {

  it("Master Test - 1 day update", function() {
  // Arrange
    const gildedRose = new Shop(testItemListForLegacyVersion);
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
    expect(items[5].sellIn).to.equal(19);
    expect(items[5].quality).to.equal(11);

    expect(items[6].name).to.equal('Aged Brie');
    expect(items[6].sellIn).to.equal(-1);
    expect(items[6].quality).to.equal(12);

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

  it("Master Test - 6 days update", function() {
  // Arrange
    const gildedRose = new Shop(testItemListForLegacyVersion);
  //Act
    for (let i = 1; i < 6; i++){
      gildedRose.updateQuality()
    }
    let items = gildedRose.updateQuality();
  //Assert
    expect(items[0].name).to.equal('foo');
    expect(items[0].sellIn).to.equal(3);
    expect(items[0].quality).to.equal(3);

    expect(items[1].name).to.equal('bar');
    expect(items[1].sellIn).to.equal(-7);
    expect(items[1].quality).to.equal(6);

    expect(items[2].name).to.equal('baz');
    expect(items[2].sellIn).to.equal(-8);
    expect(items[2].quality).to.equal(0);

    expect(items[3].name).to.equal('fez');
    expect(items[3].sellIn).to.equal(-8);
    expect(items[3].quality).to.equal(0);

    expect(items[4].name).to.equal('Sulfuras, Hand of Ragnaros');
    expect(items[4].sellIn).to.equal(0);
    expect(items[4].quality).to.equal(80);

    expect(items[5].name).to.equal('Aged Brie');
    expect(items[5].sellIn).to.equal(13);
    expect(items[5].quality).to.equal(17);

    expect(items[6].name).to.equal('Aged Brie');
    expect(items[6].sellIn).to.equal(-7);
    expect(items[6].quality).to.equal(24);

    expect(items[7].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
    expect(items[7].sellIn).to.equal(4);
    expect(items[7].quality).to.equal(24);

    expect(items[8].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
    expect(items[8].sellIn).to.equal(3);
    expect(items[8].quality).to.equal(26);

    expect(items[9].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
    expect(items[9].sellIn).to.equal(-1);
    expect(items[9].quality).to.equal(0);

    expect(items[10].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
    expect(items[10].sellIn).to.equal(-2);
    expect(items[10].quality).to.equal(0);

    expect(items[11].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
    expect(items[11].sellIn).to.equal(-4);
    expect(items[11].quality).to.equal(0);

    expect(items[12].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
    expect(items[12].sellIn).to.equal(-6);
    expect(items[12].quality).to.equal(0);

    expect(items[13].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
    expect(items[13].sellIn).to.equal(-7);
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

    it('Quality increases by 3 when SellIn <=5, >0 days', function() {
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

describe("Gilded Rose - New Version", function() {

  it("Master Test - 1 day update (hardcoded)", function() {
  // Arrange
    const gildedRose = new ShopNew(testItemListForNewVersion);
  //Act
    const items = gildedRose.updateQuality();

    // console.log(testItemListForNewVersion)
    // console.log('***')
    // console.log(items)

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
    expect(items[5].sellIn).to.equal(19);
    expect(items[5].quality).to.equal(11);

    expect(items[6].name).to.equal('Aged Brie');
    expect(items[6].sellIn).to.equal(-1);
    expect(items[6].quality).to.equal(12);

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

  it("Master Test - 6 days update (hardcoded)", function() {
  // Arrange
    const gildedRose = new ShopNew(testItemListForNewVersion);
  //Act
    for (let i = 1; i < 6; i++){
      gildedRose.updateQuality()
    }
    let items = gildedRose.updateQuality();
  //Assert
    expect(items[0].name).to.equal('foo');
    expect(items[0].sellIn).to.equal(3);
    expect(items[0].quality).to.equal(3);

    expect(items[1].name).to.equal('bar');
    expect(items[1].sellIn).to.equal(-7);
    expect(items[1].quality).to.equal(6);

    expect(items[2].name).to.equal('baz');
    expect(items[2].sellIn).to.equal(-8);
    expect(items[2].quality).to.equal(0);

    expect(items[3].name).to.equal('fez');
    expect(items[3].sellIn).to.equal(-8);
    expect(items[3].quality).to.equal(0);

    expect(items[4].name).to.equal('Sulfuras, Hand of Ragnaros');
    expect(items[4].sellIn).to.equal(0);
    expect(items[4].quality).to.equal(80);

    expect(items[5].name).to.equal('Aged Brie');
    expect(items[5].sellIn).to.equal(13);
    expect(items[5].quality).to.equal(17);

    expect(items[6].name).to.equal('Aged Brie');
    expect(items[6].sellIn).to.equal(-7);
    expect(items[6].quality).to.equal(24);

    expect(items[7].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
    expect(items[7].sellIn).to.equal(4);
    expect(items[7].quality).to.equal(24);

    expect(items[8].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
    expect(items[8].sellIn).to.equal(3);
    expect(items[8].quality).to.equal(26);

    expect(items[9].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
    expect(items[9].sellIn).to.equal(-1);
    expect(items[9].quality).to.equal(0);

    expect(items[10].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
    expect(items[10].sellIn).to.equal(-2);
    expect(items[10].quality).to.equal(0);

    expect(items[11].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
    expect(items[11].sellIn).to.equal(-4);
    expect(items[11].quality).to.equal(0);

    expect(items[12].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
    expect(items[12].sellIn).to.equal(-6);
    expect(items[12].quality).to.equal(0);

    expect(items[13].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
    expect(items[13].sellIn).to.equal(-7);
    expect(items[13].quality).to.equal(0);


  });

  it("Master Test - 1 day update (check equivalence directly)", function(){
      // Arrange
      const gildedRoseLegacy = new Shop(testItemListForLegacyVersion);
      const gildedRoseNew = new ShopNew(testItemListForNewVersion);

      // Act
      let itemsLegacy = gildedRoseLegacy.updateQuality();
      let itemsNew = gildedRoseNew.updateQuality();
      // Assert

      for (let i = 0; i < testItemListForLegacyVersion.length; i++){
        expect(itemsLegacy[i].name).to.equal(itemsNew[i].name);
        expect(itemsLegacy[i].sellIn).to.equal(itemsNew[i].sellIn);
        expect(itemsLegacy[i].quality).to.equal(itemsNew[i].quality);

      }
  });

  it("Master Test - 10 day update (check equivalence directly)", function(){
      // Arrange
      const gildedRoseLegacy = new Shop(testItemListForLegacyVersion);
      const gildedRoseNew = new ShopNew(testItemListForNewVersion);

      // Act
      let itemsLegacy,
          itemsNew;

      for (let i = 1; i < 10; i++){
        gildedRoseLegacy.updateQuality();
        gildedRoseNew.updateQuality();
      }

      itemsLegacy = gildedRoseLegacy.updateQuality();
      itemsNew = gildedRoseNew.updateQuality();
      // Assert

      for (let i = 0; i < testItemListForLegacyVersion.length; i++){
        expect(itemsLegacy[i].name).to.equal(itemsNew[i].name);
        expect(itemsLegacy[i].sellIn).to.equal(itemsNew[i].sellIn);
        expect(itemsLegacy[i].quality).to.equal(itemsNew[i].quality);

      }
  });

  it("Store correct item names", function() {
  // Arrange
    const gildedRose = new ShopNew([ new DefaultItem("foo", 0, 0) ]);
  //Act
    const items = gildedRose.updateQuality();
  //Assert
    expect(items[0].name).to.equal("foo");
  });

  it("Updating causes Item SellIn to decrease", function() {
  // Arrange
    const gildedRose = new ShopNew([ new DefaultItem("foo", 1, 10) ]);
  //Act
    const items = gildedRose.updateQuality();
  //Assert
    expect(items[0].sellIn).to.equal(0);
  });

  it("Updating causes default item Quality to decrease by 1", function() {
  // Arrange
    const gildedRose = new ShopNew([ new DefaultItem("foo", 1, 10) ]);
  //Act
    const items = gildedRose.updateQuality();
  //Assert
    expect(items[0].quality).to.equal(9);
  });

  it(`When SellIn = 0 default item Quality decreases x2\n\t (excludes Brie, Passes, Sulfuras)`, function() {
  // Arrange
    const gildedRose = new ShopNew([ new DefaultItem("foo", 0, 10) ]);
  //Act
    const items = gildedRose.updateQuality();
  //Assert
    expect(items[0].quality).to.equal(8);
  });

  it('Quality does not decrease from 0', function() {
  // Arrange
    const gildedRose = new ShopNew([ new DefaultItem("foo", 0, 0) ]);
  //Act
    const items = gildedRose.updateQuality();
  //Assert
  expect(items[0].name).to.equal('foo');
  expect(items[0].sellIn).to.equal(-1);
  expect(items[0].quality).to.equal(0);
  });

  it('Quality does not increase from 50', function() {
  // Arrange
    const gildedRose = new ShopNew([ new Brie('Aged Brie', 0, 50) , new BackstagePass('Backstage passes to a TAFKAL80ETC concert', 2, 50) ]);
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
  const gildedRose = new ShopNew([ new Brie('Aged Brie', 0, 49) , new BackstagePass('Backstage passes to a TAFKAL80ETC concert', 2, 49) ]);
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
      const gildedRose = new ShopNew([ new Sulfuras('Sulfuras, Hand of Ragnaros', 0, 80) ]);
      // Act
      const items = gildedRose.updateQuality();
      // Assert
      expect(items[0].name).to.equal('Sulfuras, Hand of Ragnaros');
      expect(items[0].sellIn).to.equal(0);
      expect(items[0].quality).to.equal(80);
    });

    it("Maintains SellIn = 0 after updating", function() {
      // Arrange
      const gildedRose = new ShopNew([ new Sulfuras('Sulfuras, Hand of Ragnaros', 0, 80) ]);
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
      const gildedRose = new ShopNew([ new Brie('Aged Brie', 1, 30) ]);
      // Act
      const items = gildedRose.updateQuality();
      // Assert
      expect(items[0].name).to.equal('Aged Brie');
      expect(items[0].sellIn).to.equal(0);
      expect(items[0].quality).to.equal(31);
    });

    it('Aged Brie increases Quality +2 when aging and SellIn <0', function() {
      // Arrange
      const gildedRose = new ShopNew([ new Brie('Aged Brie', 0, 30) ]);
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
      const gildedRose = new ShopNew([ new BackstagePass('Backstage passes to a TAFKAL80ETC concert', 0, 50) ]);
      // Act
      const items = gildedRose.updateQuality();
      // Assert
      expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
      expect(items[0].sellIn).to.equal(-1);
      expect(items[0].quality).to.equal(0);
    });

    it('Quality increases by 1 when SellIn >10', function() {
      // Arrange
      const gildedRose = new ShopNew([ new BackstagePass('Backstage passes to a TAFKAL80ETC concert', 15, 30) ]);
      // Act
      const items = gildedRose.updateQuality();
      // Assert
      expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
      expect(items[0].sellIn).to.equal(14);
      expect(items[0].quality).to.equal(31);
    });

    it('Quality increases by 2 when SellIn <=10, >5 days', function() {
      // Arrange
      const gildedRose = new ShopNew([ new BackstagePass('Backstage passes to a TAFKAL80ETC concert', 6, 30) ]);
      // Act
      const items = gildedRose.updateQuality();
      // Assert
      expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
      expect(items[0].sellIn).to.equal(5);
      expect(items[0].quality).to.equal(32);
    });

    it('Quality increases by 3 when SellIn <=5, >0 days', function() {
      // Arrange
      const gildedRose = new ShopNew([ new BackstagePass('Backstage passes to a TAFKAL80ETC concert', 1, 30) ]);
      // Act
      const items = gildedRose.updateQuality();
      // Assert
      expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
      expect(items[0].sellIn).to.equal(0);
      expect(items[0].quality).to.equal(33);
    });

  });

  describe('Conjured', () => {

    it("Degrades by 2 a day when SellIn > 0", function() {
      // Arrange
      const gildedRose = new ShopNew([ new Conjured('Conjured Underpants', 15, 50) ]);
      // Act
      const items = gildedRose.updateQuality();
      // Assert
      expect(items[0].name).to.equal('Conjured Underpants');
      expect(items[0].sellIn).to.equal(14);
      expect(items[0].quality).to.equal(48);
    });

    it("Degrades by 4 when SellIn = 0", function() {
      // Arrange
      const gildedRose = new ShopNew([ new Conjured('Conjured Underpants', 0, 50) ]);
      // Act
      const items = gildedRose.updateQuality();
      // Assert
      expect(items[0].name).to.equal('Conjured Underpants');
      expect(items[0].sellIn).to.equal(-1);
      expect(items[0].quality).to.equal(46);
    });

    it("Degrades by 4 when SellIn < 0", function() {
      // Arrange
      const gildedRose = new ShopNew([ new Conjured('Conjured Underpants', -1, 50) ]);
      // Act
      const items = gildedRose.updateQuality();
      // Assert
      expect(items[0].name).to.equal('Conjured Underpants');
      expect(items[0].sellIn).to.equal(-2);
      expect(items[0].quality).to.equal(46);
    });

  });

});
