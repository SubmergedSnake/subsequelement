# Subsequelement

A library for finding the nearest/farthest HTMLElement to another HTMLElement in a document.

## Usage

~~~
import { near, far } from "subsequelement";

const startingHTMLElement = document.querySelector('#myelement') as HTMLElement;

const nearestHTMLElementEast = near(startingHTMLElement, 'e', ['article', '.myclass'], true)
~~~

## About the parameters

Both the **near** and **far** -functions take four parameters, the last one being optional.

The parameters are, in order:

**startingHTMLElement** This is the element for which you want to find the nearest/farthest element for.
** 

**bearing** One of 'n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw', which correspond with the compass points
north, northeast, east, southeast, south, southwest, west and northwest. So, 's' for 
elements that are below the **startingHTMLElement** in the document, 'nw' that are towards the
top left corner from the **startingHTMLElement** etc.

**selectors** This is an array of css selectors that you provide to control what elements on the page are considered.

**preferAlignment** A boolean to determine whether we prefer to get the nearest or farthest element that aligns 
with startingHTMLElement the best OR is absolutely the nearest/farthest element *for the given bearing*.

Here's the function signature again for your reference:

```const near = (startingHTMLElement: Element, bearing: keyof typeof Bearing, selectors: string[], preferAlignment: boolean = true): Element | undefined ```




## Return value

If near/far finds an element, it is returned. If there are no valid elements in the direction used, undefined is returned.
