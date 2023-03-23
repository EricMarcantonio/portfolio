---
title: Lesson - Lists and Array
date: 2023/03/23
description: Lesson taught to ICS3U based on arrays and lists
tag: experience
author: Eric Marcantonio
---

# Arrays

## Introduce why we need them (15 min)
- What if we want to get the day of the week based on the number? (i.e. day 4 is wednesday)

## Lists versus Arrays - whats the difference and what are they? (15 min)
- It is a data structure used to store more then 1 piece of data in a variable
- Talk in general about how arrays are values stored right after each other in memory
- Lists have one node point to the next


## We use lists in python. What does that look like? (20 min)

- Start with the square brackets
- Indexing, show similarities to the string indexing we have done
- How to get an element from a list
- Show the `.index()` method
- Use the example problem at the start of class


# Assignment - Grocery Store

For this assignment, you will help the user store their grocery list for the week. You need to accept:

1. The date they are going to shop for groceries
2. Accept input from the user for each item they need to buy, and the cost of that item. It should be entered like: `What item would you like to add?: Eggs 4.29`
3. You can assume that the user will enter a string, followed by a space and then a `float`. Use the `.split()` string method to help you.
3. Continue to ask the user for an item, until they input `END`
4. We also want to apply a discount to an item. Ask the user which item they would like to apply a 10% discount to. If they input something that isn't on the list, don't change any price.
5. Output their shopping list items to the screen and the total cost of all items, in a formatted way of your choosing