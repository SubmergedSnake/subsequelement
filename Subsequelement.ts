import { getElementsByBearing } from "./src/bearing"
import { getAlignment } from "./src/helpers/getAlignment"
import { getProximity } from "./src/helpers/getProximity"
import { Bearing, IsHtmlElementLike } from "./src/types"


export type Subsequelement = {
  e: IsHtmlElementLike
  proximity?: number
  alignment?: number
}

export class Subsequelements {
  startingElement: IsHtmlElementLike
  otherElements: Subsequelement[] = []

  applyBearing = (bearing: keyof typeof Bearing) => this.otherElements = getElementsByBearing(this.startingElement, this.otherElements, bearing)
  applyProximity = () => this.otherElements = this.otherElements.map(oe => getProximity(this.startingElement, oe))
  applyAlignment = (bearing: keyof typeof Bearing) => this.otherElements = this.otherElements.map(oe => getAlignment(this.startingElement, oe, Bearing[bearing]))

  constructor(startingElement: IsHtmlElementLike, otherElements: IsHtmlElementLike[]) {
    this.startingElement = startingElement
    this.otherElements = otherElements.map(e => ({ e }))
  }

}
