# Subsequelement

A library for finding the nearest/farthest Element to another Element in a document.

## Usage

~~~
import { near, far } from "subsequelement";

const startingElement = document.querySelector('#myelement') as Element;

const nearestElementEast = near(startingElement, 'e', ['article', '.myclass'], true)
~~~

## About the parameters

Both the **near** and **far** -functions take four parameters, the last one being optional.

The parameters are, in order:

**startingElement** This is the element for which you want to find the nearest/farthest element for.
** 

**bearing** One of 'n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw', which correspond with the compass points
north, northeast, east, southeast, south, southwest, west and northwest. So, 's' for 
elements that are below the **startingElement** in the document, 'nw' that are towards the
top left corner from the **startingElement** etc.

**selectors** This is an array of css selectors that you provide to control what elements on the page are considered.

**preferAlignment** A boolean to determine whether we prefer to get the nearest or farthest element that aligns 
with startingElement the best OR is absolutely the nearest/farthest element *for the given bearing*.

Here's the function signature again for your reference:

```const near = (startingElement: Element, bearing: keyof typeof Bearing, selectors: string[], preferAlignment: boolean = true): Element | undefined ```




## Return value

If near/far finds an element, it is returned. If there are no valid elements in the direction used, undefined is returned.
