import { HasIdAndElementCoords } from "../../../src/types";

/* simplegrid3by3 layout
*  _____  _____  _____  
* |     ||     ||     |
* |one  ||four ||seven|
* |_____||_____||_____|
*  _____  _____ ______ 
* |     ||     ||     |
* |two  ||five ||eight|
* |_____||_____||_____|
*  _____  _____  _____ 
* |     ||     ||     |
* |three||six  ||nine |
* |_____||_____||_____|
*/

export const simplegrid3by3 = [
	{
		id: 'one',
		getBoundingClientRect: () => ({
			right: 100,
			left: 0,
			bottom: 0,
			top: -100,
			width: 100,
			height: 100
		})
	},
	{
		id: 'two',
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
		id: 'three',
		getBoundingClientRect: () => ({
			right: 100,
			left: 0,
			bottom: 200,
			top: 100,
			width: 100,
			height: 100

		})
	},
	{
		id: 'four',
		getBoundingClientRect: () => ({
			right: 200,
			left: 100,
			bottom: 0,
			top: -100,
			width: 100,
			height: 100
		})
	},
	{
		id: 'five',
		getBoundingClientRect: () => ({
			right: 200,
			left: 100,
			bottom: 100,
			top: 0,
			width: 100,
			height: 100
		})
	},
	{
		id: 'six',
		getBoundingClientRect: () => ({
			right: 200,
			left: 100,
			bottom: 200,
			top: 100,
			width: 100,
			height: 100

		})
	},
	{
		id: 'seven',
		getBoundingClientRect: () => ({
			right: 300,
			left: 200,
			bottom: 0,
			top: -100,
			width: 100,
			height: 100

		})
	},
	{
		id: 'eight',
		getBoundingClientRect: () => ({
			right: 300,
			left: 200,
			bottom: 100,
			top: 0,
			width: 100,
			height: 100
		})
	},
	{
		id: 'nine',
		getBoundingClientRect: () => ({
			right: 300,
			left: 200,
			bottom: 200,
			top: 100,
			width: 100,
			height: 100
		})
	},

] satisfies HasIdAndElementCoords[]
