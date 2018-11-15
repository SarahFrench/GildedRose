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
