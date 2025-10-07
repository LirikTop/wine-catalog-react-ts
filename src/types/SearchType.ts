export enum SearchEnum {
  SORT = 'sort',
  QUERY = 'query',
  MIN = 'min',
  MAX = 'max',
  COLOR = 'color',
  COUNTRY = 'country',
  // PAGE = 'page',
  // ITEMS = 'items',
}

export interface SortInterface {
  Newest: 'Newest';
  Oldest: 'Oldest';
  Rating: 'Rating';
  Expensivest: 'Price: High to Low';
  Cheapest: 'Price: Low to High';
}

export const SortEnum: SortInterface = {
  // Default = 'No sort',
  Newest: 'Newest',
  Oldest: 'Oldest',
  Rating: 'Rating',
  Expensivest: 'Price: High to Low',
  Cheapest: 'Price: Low to High',
} as const;

// export enum ItemsSortEnum {
//   All = 'All',
//   Twelve = '12 items',
//   TwentyFour = '24 items',
//   ThirtySix = '36 items',
//   FortyEight = '48 items',
// }

// export enum ItemsValueEnum {
//   Twelve = 12,
//   TwentyFour = 24,
//   ThirtySix = 36,
//   FortyEight = 48,
// }
