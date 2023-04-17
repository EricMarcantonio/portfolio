---
title: Lesson - Procedure Programming with Lists
date: 2023/04/18
description: Lesson taught to ICS3U based on Procedure Programming with Lists
tag: experience
author: Eric Marcantonio
---

# Pass By Value

- How does python store information in memory?
- Show how lists are mutable 
- For our purposes:

### Immutable: int, str, float
### Mutable: list

- The equal sign actually assigns a pointer to that spot in memory for mutable types
- For immutable, it creates a new spot in memory
- We can find the address where memory is stored using the `id()` function (built-in to python)
- We can make a new memory address and copy over another list using `list()`

# Assignment

We are going to create a scenario where in a family, there are multiple drivers and multiple cars.
Each family member is going to "request" a car (a list), and you are going to create it for them.
There are base models for the cars, and family members can choose the car type and the color of the car.

Each step of this process, you are going to tell the user the id of the base model, and the id of their new car after you create it.

You are then going to tell the user the attributes of your car

### Example input and output
What is your name?: Mr. M

What type of car do you want?: Camry

Awesome, the base model of your Camry is:

Color: White

Engine Size: 2.5 L

Seats: 5

ID: 140404733238080

What color do you want your car to be? Purple

Creating a Purple Camry now...

Congratulations. You now own a Purple Camry with an ID of 140404733081664

What is your name?: Mr. Reid

What type of car do you want?: Civic

Awesome, the base model of your Civic is:

Color: Black

Engine Size: 1.8 L

Seats: 5

ID: 140222293288888

What color do you want your car to be? Red

Creating a Red Civic now...

Congratulations. You now own a Red Civic with an ID of 140227374752888

Your family owns 2 car(s):

Mr. M owns a Purple Camry with an ID of 140404733081664

Mr. Reid owns a Red Civic with an ID of 140227374752888

## Extension (if you finish early)
Oh no! Its a winter day and a random family member's car won't start. Ask the user to reassign a car to another family member to take to work.

### Example input and output IN ADDITION TO THE ABOVE INPUT

Oh no, user Mr. M's car with id 140404733081664 won't start

Which user should I take a car from? Mr. Reid

Nice! Eric's ride was replaced with Mr. Reid's who had an id of 140227374752888

