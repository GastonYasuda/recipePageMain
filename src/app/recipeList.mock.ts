export const recipeList: recipe[] = [
  {
    recipeTitle: 'Simple Omelette Recipe',
    recipePhoto: './assets/omelette.jpeg',
    recipeSubtitle:
      'An easy and quick dish, perfect for any meal. This classic omelette combines beatn eggs cooked to perfection, optionally filled with your choise of cheese, vegetables, or meats.',
    preparationTime: [
      {
        total: ' Approximately 10 minutes',
        preparation: '5 minutes',
        cooking: '5 minutes',
      },
    ],

    ingredients: [
      '2-3 large eggs',
      'Salt, to taste',
      'Pepper, to taste',
      '1 tablespoon of butter or oil',
      'Optional fillings: cheese, diced vegetables, cooked meats, herbs',
    ],

    instructions: [
      {
        instructionTitle: 'Beat the eggs:',
        instructionBody:
          'In a bowl, beat the eggs with a pinch of salt and pepper unitil they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.',
      },

      {
        instructionTitle: 'Heat the pan:',
        instructionBody:
          'Place a non-stick frying pan over medium heat and add butter or oil.',
      },

      {
        instructionTitle: 'Cook the omelette:',
        instructionBody:
          'Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.',
      },

      {
        instructionTitle: 'Add fillings (optional):',
        instructionBody:
          'When the eggs begin to set at the edges but are still slightly tunny in the middle, sprinkle your chosen filings over one half of the omelette.',
      },

      {
        instructionTitle: 'Fold and serve:',
        instructionBody:
          'As the omelette continues to cook, carefully lift one edge and fold it over the filings. Let ir cook for another minute, then slide it onto a plate.',
      },

      {
        instructionTitle: 'Enjoy:',
        instructionBody:
          'Serve hot, with additional salt and pepper if needed.',
      },
    ],

    nutrition: [
      {
        nutritionSub:
          'The table below shows nutritional values per serving widout the additional fillings.',
      },
      {
        nutriData: [
          {
            calories: '277kcal',
            carbs: '0g',
            protein: '20g',
            fat: '22g',
          },
        ],
      },
    ],
  },
];

export interface recipe {
  recipeTitle: string;
  recipeSubtitle: string;
  preparationTime: preparationTime[];
  ingredients: string[];
  instructions: instruction[];
  nutrition: Nutrition[];
  recipePhoto: string;
}

export interface instruction {
  instructionTitle: string;
  instructionBody: string;
}

export interface Nutrition {
  nutritionSub?: string;
  nutriData?: Nutridatum[];
}

export interface Nutridatum {
  calories: string;
  carbs: string;
  protein: string;
  fat: string;
}

export interface preparationTime {
  total: string;
  preparation: string;
  cooking: string;
}
