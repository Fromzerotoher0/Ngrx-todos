import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { appState } from '../../../app.reducers';
import * as fromTodo from '../store/todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: [],
})
export class TodoAddComponent implements OnInit {
  constructor(private store: Store<appState>) {}

  ngOnInit(): void {
    this.txtInput = new FormControl('', Validators.required);
  }

  txtInput: FormControl;

  addTodo() {
    if (this.txtInput.invalid) {
      return;
    } else {
      const action = new fromTodo.addTodoAction(this.txtInput.value);
      this.store.dispatch(action);
      this.txtInput.setValue('');
    }
  }
}
