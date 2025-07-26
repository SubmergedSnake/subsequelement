import { ImplementsGetBoundingClientRect } from "../../../src/types";

export const simplegrid3by3 = [
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
			bottom: 200,
			top: 100
		})
	},
	{
		id: 'three',
		getBoundingClientRect: () => ({
			right: 100,
			left: 0,
			bottom: 300,
			top: 200
		})
	},
	{
		id: 'four',
		getBoundingClientRect: () => ({
			right: 200,
			left: 100,
			bottom: 100,
			top: 0
		})
	},
	{
		id: 'five',
		getBoundingClientRect: () => ({
			right: 200,
			left: 100,
			bottom: 200,
			top: 100
		})
	},
	{
		id: 'six',
		getBoundingClientRect: () => ({
			right: 200,
			left: 100,
			bottom: 300,
			top: 200
		})
	},
	{
		id: 'seven',
		getBoundingClientRect: () => ({
			right: 300,
			left: 200,
			bottom: 100,
			top: 0
		})
	},
	{
		id: 'eight',
		getBoundingClientRect: () => ({
			right: 300,
			left: 200,
			bottom: 200,
			top: 100
		})
	},
	{
		id: 'nine',
		getBoundingClientRect: () => ({
			right: 300,
			left: 200,
			bottom: 300,
			top: 200
		})
	},

] satisfies ImplementsGetBoundingClientRect[]
