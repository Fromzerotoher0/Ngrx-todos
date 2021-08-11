import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/app.reducers';
import { Todo } from '../model/todo.model';
import { validFilters } from '../store/filter/filter.actions';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
})
export class TodosListComponent implements OnInit {
  constructor(private store: Store<appState>) {}

  todos: Todo[] = [];
  filter: validFilters;

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.todos = state.todos;
      this.filter = state.filter;
    });
  }
}
