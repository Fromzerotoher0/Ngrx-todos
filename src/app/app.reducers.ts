import { ActionReducerMap } from '@ngrx/store';
import { Todo } from './components/todo/model/todo.model';
import { todoReducer } from './components/todo/store/todo.reducer';

import * as fromTodo from './components/todo/store/todo.reducer';
import * as fromFilter from './components/todo/store/filter/filter.reducer';
import * as fromFilterActions from './components/todo/store/filter/filter.actions';

export interface appState {
  todos: Todo[];
  filter: fromFilterActions.validFilters;
}

export const appReducers: ActionReducerMap<appState> = {
  todos: fromTodo.todoReducer,
  filter: fromFilter.filterReducer,
};
