import { Component, OnInit } from '@angular/core';
import { toggleAllTodoAction } from './store/todo.actions';
import { Store } from '@ngrx/store';
import { appState } from '../../app.reducers';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [],
})
export class TodoComponent implements OnInit {
  constructor(private store: Store<appState>) {}

  ngOnInit(): void {}
  completed: boolean = false;
  toggleAll() {
    this.completed = !this.completed;
    const action = new toggleAllTodoAction(this.completed);
    this.store.dispatch(action);
  }
}
