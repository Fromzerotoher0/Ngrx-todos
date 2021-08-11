import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/app.reducers';
import {
  deleteTodoAction,
  editTodoAction,
  toggleTodoAction,
} from '../store/todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: [],
})
export class TodoItemComponent implements OnInit {
  @Input() todos: Todo;
  @ViewChild('txtinputF') txtinputf: ElementRef;
  checkfield: FormControl;
  txtInput: FormControl;
  editing: boolean;
  constructor(private store: Store<appState>) {}

  ngOnInit(): void {
    this.checkfield = new FormControl(this.todos.completed);
    this.txtInput = new FormControl(this.todos.text, Validators.required);
    this.checkfield.valueChanges.subscribe(() => {
      const action = new toggleTodoAction(this.todos.id);
      this.store.dispatch(action);
    });
  }

  edit() {
    this.editing = true;
    setTimeout(() => {
      this.txtinputf.nativeElement.select();
    }, 1);
  }
  finishEditing() {
    this.editing = false;
    if (this.txtInput.invalid) {
      return;
    } else {
      const action = new editTodoAction(this.todos.id, this.txtInput.value);
      this.store.dispatch(action);
    }
  }

  deleteTodo() {
    const action = new deleteTodoAction(this.todos.id);
    this.store.dispatch(action);
  }
}
