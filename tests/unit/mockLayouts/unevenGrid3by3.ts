import { ImplementsGetBoundingClientRect } from "../../../src/types";

export const unevenGrid3by3 = [
	{
		id: 'one',
		getBoundingClientRect: () => ({
			right: 100,
			left: 0,
			bottom: 100,
			top: 0
		})
	},
	{
		id: 'two',
		getBoundingClientRect: () => ({
			right: 100,
			left: 0,
			bottom: 400,
			top: 300
		})
	},
	{
		id: 'three',
		getBoundingClientRect: () => ({
			right: 150,
			left: 50,
			bottom: 500,
			top: 400
		})
	},
	{
		id: 'four',
		getBoundingClientRect: () => ({
			right: 200,
			left: 100,
			bottom: 150,
			top: 50
		})
	},
	{
		id: 'five',
		getBoundingClientRect: () => ({
			right: 325,
			left: 225,
			bottom: 450,
			top: 350
		})
	},
	{
		id: 'six',
		getBoundingClientRect: () => ({
			right: 300,
			left: 200,
			bottom: 550,
			top: 450
		})
	},
	{
		id: 'seven',
		getBoundingClientRect: () => ({
			right: 450,
			left: 350,
			bottom: 125,
			top: 25
		})
	},
	{
		id: 'eight',
		getBoundingClientRect: () => ({
			right: 475,
			left: 375,
			bottom: 400,
			top: 300
		})
	},
	{
		id: 'nine',
		getBoundingClientRect: () => ({
			right: 625,
			left: 525,
			bottom: 550,
			top: 450
		})
	},

] satisfies ImplementsGetBoundingClientRect[]
