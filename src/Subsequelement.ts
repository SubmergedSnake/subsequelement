import { filterByBearing } from "../src/bearing"
import { addAlignment } from "../src/helpers/getAlignment"
import { addProximity } from "../src/helpers/getProximity"
import { Bearing, IsHtmlElementLike } from "../src/types"


export type Subsequelement = {
  e: IsHtmlElementLike
  proximity: number
  alignment: number
}

export class Subsequelements {
  startingElement: IsHtmlElementLike
  otherElements: Subsequelement[] = []

  constructor(startingElement: IsHtmlElementLike, otherElements: IsHtmlElementLike[], bearing: keyof typeof Bearing) {
    this.startingElement = startingElement
    this.otherElements = filterByBearing(startingElement, otherElements, bearing)
      .map(oe => addProximity(this.startingElement, oe))
      .map(oe => addAlignment(startingElement, oe, Bearing[bearing]))
  }

}
