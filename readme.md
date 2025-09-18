# Subsequelement

A library for finding the nearest/farthest [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)
to another Element in a document.

## Usage
~~~
import { near, far } from "subsequelement";

const startingElement = document.querySelector('#myelement') as Element;

const nearestElementEast = near(startingElement, 'e', ['article', '.myclass'], true)
~~~

## Parameters
Both the **near** and **far** -functions take four parameters, the last one being optional.

The parameters are, in order:

**startingElement** This is the Element for which you want to find the nearest/farthest element by bearing.

**bearing** One of 'n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw', which correspond with the compass points
north, northeast, east, southeast, south, southwest, west and northwest. So, 's' for 
elements that are, or extend, below the **startingElement** in the document, 'nw' that are towards the
top left corner from the **startingElement** etc.

**selectors** This is an array of css selectors that you provide to control what elements on the page are considered.

**preferAlignment** A boolean to determine whether we prefer to get the nearest or farthest element that aligns 
with startingElement the best OR is absolutely the nearest/farthest element *for the given bearing*.

Here's the function signature again for your reference:

```const near = (startingElement: Element, bearing: keyof typeof Bearing, selectors: string[], preferAlignment: boolean = true): Element | undefined ```

## Return value
If near/far finds an element, it is returned. If there are no valid elements in the direction used, undefined is returned.

## Bearing and alignment
![Bearing and alignment](/doc/bearings_and_alignment.png)

The dashed lines in the above image aim to describe both the bearings and what alignment means 
in the context of this library.

### Bearing
Bearing determines in which direction, or within which area of the image above we want to look 
for the nearest or farthest element. For example, all other elements that are positioned or extend
above the top of the startingElement are considered to be n(orth). And all elements that are
positioned in or extend towards the bottom left from the startingElement are considered to be 
s(outh)w(est).


### Alignment
An element has strong alignment to the startingElement the closer it positioned to the "lane" 
projected by the startingElement, according to the supplied bearing. The farther it is from
the grid, the weaker the alignment.



