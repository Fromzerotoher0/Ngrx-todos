import { Action } from '@ngrx/store';
export const SET_FILTER = '[FILTER] SET FILTER';
export type validFilters = 'all' | 'completed' | 'pending';

export class setFilterAction implements Action {
  readonly type = SET_FILTER;
  constructor(public filter: validFilters) {}
}

export type actions = setFilterAction;
