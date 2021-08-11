import { Action } from '@ngrx/store';

export const ADD_TODO = '[TODO] ADD TODO';
export const TOGGLE_TODO = '[TODO] TOGGLE TODO';
export const TOGGLE_ALL_TODO = '[TODO] TOGGLE ALL TODO';
export const EDIT_TODO = '[TODO] EDIT TODO';
export const DELETE_TODO = '[TODO] DELETE TODO';
export const DELETE_COMPLETED_TODO = '[TODO] DELETE COMPLETED TODO';

export class addTodoAction implements Action {
  readonly type = ADD_TODO;
  constructor(public text: string) {}
}

export class toggleTodoAction implements Action {
  readonly type = TOGGLE_TODO;
  constructor(public id: number) {}
}

export class toggleAllTodoAction implements Action {
  readonly type = TOGGLE_ALL_TODO;
  constructor(public completed: boolean) {}
}

export class editTodoAction implements Action {
  readonly type = EDIT_TODO;
  constructor(public id: number, public text: string) {}
}
export class deleteTodoAction implements Action {
  readonly type = DELETE_TODO;
  constructor(public id: number) {}
}

export class deleteTodoCompletedAction implements Action {
  readonly type = DELETE_COMPLETED_TODO;
}
export type actions =
  | addTodoAction
  | toggleTodoAction
  | toggleAllTodoAction
  | editTodoAction
  | deleteTodoAction
  | deleteTodoCompletedAction;
