import { Component, OnInit } from '@angular/core';
import * as fromFilter from '../store/filter/filter.actions';
import * as fromTodo from '../store/todo.actions';
import { Store } from '@ngrx/store';
import { appState } from '../../../app.reducers';
import { Todo } from '../model/todo.model';
import { deleteTodoCompletedAction } from '../store/todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: [],
})
export class TodoFooterComponent implements OnInit {
  pending: number;
  validFilter: fromFilter.validFilters[] = ['all', 'completed', 'pending'];
  initialFilter: fromFilter.validFilters;

  constructor(private store: Store<appState>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.initialFilter = state.filter;
      console.log(this.initialFilter);
      this.countPending(state.todos);
    });
  }

  changeFilter(newFilter: fromFilter.validFilters) {
    const action = new fromFilter.setFilterAction(newFilter);
    this.store.dispatch(action);
  }

  countPending(todos: Todo[]) {
    this.pending = todos.filter((todo) => !todo.completed).length;
  }

  clearCompleted() {
    const action = new deleteTodoCompletedAction();
    this.store.dispatch(action);
  }
}
