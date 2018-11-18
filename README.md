# GildedRose
Bootcamp Project 6


See GildedRoseSpecification.txt for Specification.

Originally files were gilded_rose.js, test_guilded_rose.js
Current files are:
  - *src/classes.js* - Contains original legacy Item and Shop classes, and now
    additional classes for different item types.
  - *test/test_guilded_rose.js* - Contains tests for legacy code and the new
    refactored code
  - *test/item_lists.js* - Contains lists of items to create Shops for the mocha
    test suites.
  - *index.js* - File used by mocha to conduct tests, also has a function that
    can parse items details and create new objects of the appropriate type

My approach was to re-write from the ground up. Instead of lots of if statements
to impose item-type specific rules I made item-type specific classes. These classes
extend the original Item class. I added a new method to the Item class because 1)
I'm not afraid of insta-raging goblins, 2) the quality bounds were universal in
all cases apart from Sulfuras so why not add that to the Item class to reduce repetition.

Testing approaches:
  - individual rules
  - multiple rules at once (Master Tests)
    - with expected results hard coded from me seeing output of legacy code in console
    - with me expecting equivalency between items in Shop and ShopNew Objects that originated from equivalent item lists and have been updated the same number of times in their respective shops. I.e. expected results come 'straight from the horses mouth'

TDD was very useful for getting from all the separate, newly defined classes to a functioning 'shop'. Very useful for identifying where I'd put a '>=' that should be just a '>'', etc.
Adding Conjured items was easy peasy following this approach.

>FUTURE WORK: In future I would stop the function getProductType() having everything hardcoded.
Instead I'd have a Map object that links a string to a RegEx expression, and have
getProductType() iterate through that. That way if a new item type is added you only need to
add one new mapping to the Map, versus write lots of hardcoded stuff in that function.
_____________________________________

*Notes*:

Kata JavaScript version downloaded from : https://github.com/emilybache/GildedRose-Refactoring-Kata
Downloaded the version designed for testing with mocha (vs jasmine)


SellIn =  number of days we have to sell the item
          at the end of the day this value is lowered
Quality = value of item
          at the end of the day this value is lowered, except Brie and Backstage Passes (see below)
          0<=Quality<=50, except "Sulfuras" = 80 and never degrades
          Once the sell by date has passed, Quality degrades twice as fast

Backstage Passes:
                - when SellIn = 10 the next update will +2 to Quality
                - when SellIn = 5 the next update will +3 to Quality
                - when SellIn = 0 the next update will set Quality = 0
                    - when SellIn = 0 Quality is at it's max value.
                    - SellIn = -1 Value = 0 as it's the day after the concert

Aged Brie:
          - increases in quality as it gets older
          - quality increase is x2 after SellIn=0


"do not alter the Item class or Items property"

Items mentioned in gilded_rose.js:
  -   'Aged Brie'
  -   'Sulfuras, Hand of Ragnaros'
  -   'Backstage passes to a TAFKAL80ETC concert'
_____________________________________
