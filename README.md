# GildedRose
Bootcamp Project 6


See GildedRoseSpecification.txt

_____________________________________

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

_____________________________________

Items mentioned in gilded_rose.js:

'Aged Brie'
'Sulfuras, Hand of Ragnaros'
'Backstage passes to a TAFKAL80ETC concert'
