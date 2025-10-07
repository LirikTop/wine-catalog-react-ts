import { SortInterface } from '../types/SearchType';

export const makeSortOptions = <T extends SortInterface>(obj: T) =>
  Object.entries(obj).map(([key, label]) => ({
    label,
    value: key.toLowerCase(),
  }));
