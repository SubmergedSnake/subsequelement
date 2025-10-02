# <sub>subsequ</sub>element

A library for finding [Elements](https://developer.mozilla.org/en-US/docs/Web/API/Element)
based on their coordinates.


## Usage

~~~
import { near, far, nearestElementToPoint } from "subsequelement";

const startingElement = document.querySelector('#myelement')
const nearestElementEast = near(startingElement, 'e', ['article', '.myclass'], HasToAlign.ASMUCHASPOSSIBLE)
const farthestElementSouth = far(startingElement, 's', ['article', '.myclass'], HasToAlign.ASMUCHASPOSSIBLE)


const point = { x: 50, y: 120 }
const elementAtX50Y120 = nearestElementToPoint(point, ['article'])
~~~



## Near and far

### Parameters

| Parameter         | Description |
|-------------------|-------------|
| **startingElement** | This is the Element for which you want to find the nearest/farthest element by bearing. |
| **bearing**        | One of 'n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw', which correspond with the compass points north, northeast, east, southeast, south, southwest, west and northwest. So, 's' for elements that are, or extend, below the **startingElement** in the document, 'nw' for elements that are in or extend towards the top left corner from the **startingElement** etc. |
| **selectors**      | This is an array of css selectors that you provide to control what elements on the page are considered. |
| **hasToAlign**     | This can be one of three enums: `HasToAlign.YES`, `HasToAlign.NO` and `HasToAlign.ASMUCHASPOSSIBLE`.<br><br> `HasToAlign.YES` - means that for other elements to be considered, they need to align (at least partially) with the the starting element for the given bearing.<br><br> `HasToAlign.NO` - means that other elements do not need to be aligned; the closest/farthest element for the given bearing is returned, regardless of alignment. <br><br>`HasToAlign.ASMUCHASPOSSIBLE` - other elements are first searched for within the projected "lane" for the given bearing and incrementally further away from it. |


### Return value

Both near() and far() return either `Element` if found or `undefined` otherwise.

## nearestElementToPoint

### Parameters
| Parameter         | Description |
|-------------------|-------------|
| **point** | A Point that has the x an y coordinates (eg. {x: 400, y:900}|
| **selectors**        | An array of css selectors for elements we want to consider.|


### Return value
Returns the either Element, if found, undefined otherwise.


## About bearing and alignment
![Bearing and alignment](https://github.com/SubmergedSnake/subsequelement/blob/main/doc/bearings_and_alignment.png)

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

