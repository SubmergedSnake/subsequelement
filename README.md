# Subsequelement

A library for finding the nearest/farthest [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)
to another Element in a document.

## Usage
~~~
import { near, far } from "subsequelement";

const startingElement = document.querySelector('#myelement')

const nearestElementEast = near(startingElement, 'e', ['article', '.myclass'], HasToAlign.ASMUCHASPOSSIBLE)
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

**hasToAlign** This can be one of three enums: `HasToAlign.YES`, `HasToAlign.NO` and `HasToAlign.ASMUCHASPOSSIBLE`.

HasToAlign.YES - means that for other elements to be considered, they need to align with the the starting element for the given 
bearing.

HasToAlign.NO - means that other elements do not need to be aligned; the closest element for the given bearing is returned, regardless
of alignment.

HasToAlign.ASMUCHASPOSSIBLE - other elements are first searched for within the projected "lane" for the given bearing and incrementally
further away from it.

Here's the function signature again for your reference:

```const near = (startingElement: Element, bearing: keyof typeof Bearing, selectors: string[], HasToAlign: boolean = true): Element | undefined ```

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
An element has strong alignment to the startingElement the closer it is positioned to the "lane" 
projected by the startingElement, according to the supplied bearing. The farther it is from
the grid, the weaker the alignment.

