import { ImplementsGetBoundingClientRect } from "../../../src/types";


export const unevenGrid3by3 = [
	{
		id: 'one',
		getBoundingClientRect: () => ({
			right: 100,
			left: 0,
			bottom: 100,
			top: 0,
			width: 100,
			height: 100
		})
	},
	{
		id: 'two',
		getBoundingClientRect: () => ({
			right: 100,
			left: 0,
			bottom: 400,
			top: 300,
			width: 100,
			height: 100
		})
	},
	{
		id: 'three',
		getBoundingClientRect: () => ({
			right: 250,
			left: 150,
			bottom: 500,
			top: 400,
			width: 100,
			height: 100
		})
	},
	{
		id: 'four',
		getBoundingClientRect: () => ({
			right: 200,
			left: 100,
			bottom: 150,
			top: 50,
			width: 100,
			height: 100
		})
	},
	{
		id: 'five',
		getBoundingClientRect: () => ({
			right: 325,
			left: 225,
			bottom: 450,
			top: 350,
			width: 100,
			height: 100
		})
	},
	{
		id: 'six',
		getBoundingClientRect: () => ({
			right: 300,
			left: 200,
			bottom: 550,
			top: 450,
			width: 100,
			height: 100
		})
	},
	{
		id: 'seven',
		getBoundingClientRect: () => ({
			right: 450,
			left: 350,
			bottom: 125,
			top: 25,
			width: 100,
			height: 100
		})
	},
	{
		id: 'eight',
		getBoundingClientRect: () => ({
			right: 475,
			left: 375,
			bottom: 400,
			top: 300,
			width: 100,
			height: 100
		})
	},
	{
		id: 'nine',
		getBoundingClientRect: () => ({
			right: 625,
			left: 525,
			bottom: 550,
			top: 450,
			width: 100,
			height: 100
		})
	},

] satisfies ImplementsGetBoundingClientRect[]
