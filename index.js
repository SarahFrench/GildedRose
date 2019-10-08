//This is an area for running the shop update and getting output to build master tests from, etc.
//Also this file is REQUIRED for mocha testing

//=========================IMPORTS=========================
const {Item, Brie, Sulfuras, BackstagePass, Conjured, DefaultItem, Shop, ShopNew} = require("./src/classes.js");
const testItemListForLegacyVersion = require("./test/item_lists.js").testItemListForLegacyVersion;
const testItemListForNewVersion = require("./test/item_lists.js").testItemListForNewVersion;
const testItemListArray = require("./test/item_lists.js").testItemListArray;
const convertItemArrayToItemObject = require("./src/functions.js").convertItemArrayToItemObject;


//=========================EXECUTED CODE=========================


let itemObjectArray = convertItemArrayToItemObject(testItemListArray);


let gildedRoseNew = new ShopNew(itemObjectArray);
console.log("\noriginal list:");
console.log(testItemListForNewVersion);

let items = gildedRoseNew.updateQuality();

console.log("\nafter 1 day/update:");
console.log(items);

//This is the original set up of the shop - legacy code defining shop class and items
let gildedRose = new Shop(testItemListForLegacyVersion);
