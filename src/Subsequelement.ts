import { filterByBearing } from "../src/bearing"
import { getAlignment } from "../src/helpers/getAlignment"
import { getProximity } from "../src/helpers/getProximity"
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
      .map(oe => getProximity(this.startingElement, oe))
      .map(oe => getAlignment(startingElement, oe, Bearing[bearing]))
  }

}
