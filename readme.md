# Adjaycent

A small utility library for locating the closest element y to starting element x.

## The find -function

The find() -function accepts a (FindArguments -configuration object)[../src/types.ts]
that defines how elements are discovered and which elements on a web page are 
considered. It returns the closest element that best satisfies the provided arguments.

The following properties govern the behaviour of the find -function:

- **startingElement** is an html element that serves as the starting point for which we want to find
the closest element
- **cssSelectorForTargetElements** is a valid css selector you provide to the function which determines
what elements are eligible
- **direction** determines the direction in which we want to look for the closest element
- **strategy** further determines what elements in the provided direction are considered
    - **strict** considers only elements that *overlap* (see Strategy below for details)
    with elements in the direction in question
    - **flow** considers all elements in the direction, whether they overlap or not\  


## Strategy
How element discovery works differs between the strict and flow strategies.
Using the strict strategy, only elements that align with the startingElement are considered.
In other words, elements that fall within the *same lane* on the virtual grid. 

The flow strategy is more lenient; elements dont need to align, and instead all elements 
that are in the general direction are considered and the closest one is returned.

![The virtual grid](virtualgrid.png "The virtual grid")


Examples when using *flow*:

    startingElement: HTMLElement 1 
    direction: right
    returns: HTMLElement 3 

    startingElement: HTMLElement 1 
    direction: down
    returns: HTMLElement 3 

    startingElement: HTMLElement 5 
    direction: left
    returns: HTMLElement 22 

Examples when using *strict*:

    startingElement: HTMLElement 1 
    direction: right
    returns: HTMLElement 2 

    startingElement: HTMLElement 1 
    direction: down
    returns: HTMLElement 4 

    startingElement: HTMLElement 5 
    direction: left
    returns: HTMLElement 4


If no element is found in the provided direction (for example if there are no more elements), find attempts to locate the element at the opposite end of the page that best satisfies the provided arguments. If no element is found, the **startingElement** is returned by default.
