export const defaultCards = [
	{
		id: 1,
		label: 'Private',
	},
	{
		id: 2,
		label: 'Business',
	},
	{
		id: 3,
		label: 'Holidays',
	}
]

export const defaultTodos = [
	{
		id: 1,
		card_id: 1,
		label: 'Shopping at Harrods',
		description: 'Christmas gifts and stuff',
		notes: null,
		active: true,
		priority: false,
	},
	{
		id: 2,
		card_id: 1,
		label: 'Clean the apartment',
		description: 'Parents inspection',
		notes: null,
		active: false,
		priority: false,
	},
	{
		id: 3,
		card_id: 1,
		label: 'Water Marta\'s plants',
		description: null,
		notes: 'Remember about Strelicja, she likes a lot of water. ',
		active: true,
		priority: true,
	},
	{
		id: 4,
		card_id: 2,
		label: 'Conquer the world',
		description: null,
		notes: null,
		active: true,
		priority: true,
	},
	{
		id: 5,
		card_id: 2,
		label: 'Prepare documentation',
		description: 'Tadao Ando\'s project',
		notes: null,
		active: true,
		priority: false,
	},
];
