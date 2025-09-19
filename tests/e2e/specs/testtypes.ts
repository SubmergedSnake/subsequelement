import { Bearing } from "../../../dist/types"
import { HasToAlign } from "../../../src/types"

export type PerformanceTest = {
	startingElementId: string,
	bearing: keyof typeof Bearing,
	hasToAlign?: HasToAlign,
	steps: number,
	desc: string,
	maxDuration: number
}

export type ElementIdTest = {
	desc: string,
	startingElementId: string,
	bearing: keyof typeof Bearing,
	hasToAlign?: HasToAlign,
	expectedId: string
}
