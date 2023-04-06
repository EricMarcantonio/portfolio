---
title: Lesson - Input Validation
date: 2023/3/10
description: Lesson taught to ICS3U based on input validation
tag: experience
author: Eric Marcantonio
---

# Input Validation

## Why do we need it? (10 min)

- Explain how we have expected the user to add the correct input

- Security Implications - what happens if they add input that makes our programs crash?


## Guess whats back - String Methods! (5 min)

- Start with ```.isalpha()```

- ```isdigit()```

- Is that enough? what about superscript 2? Is that not a number?

## Catching Errors (20 min)

- try and except

- go over code blocks for both try and except

- make a fake calculator on the board, asking the students what the program should do when the user enters ```a```

```python
try:
    num1 = int(input("Num1: "))
    num2 = int(input("Num2: "))
except:
    print("You didn't add a base 10 number!")
```

## Looping until the user provides good input (10 min)

- Should we end the program if the user adds bad input? If you go to a teller machine, and input the wrong pin by accident, does the machine tell you to go away?


## In class activity

We are going to simulate an ATM (Automatic Teller Machine).

You must accept:

1. A username that contains only numbers and letters (see .isalnum()). We accept any username for now, as long as it contains only numbers and letters
2. A PIN (that is 4 characters long, using only numbers). We accept any pin as long at they are 4 characters long and only use digits.
3. You must loop until the user gives the correct input. See the examples provided in the Repl.


