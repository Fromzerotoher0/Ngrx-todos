//Angular imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

//ngrx imports

import { StoreModule } from '@ngrx/store';
import { appReducers } from './app.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

//components
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodosListComponent } from './components/todo/todos-list/todos-list.component';
import { TodoItemComponent } from './components/todo/todo-item/todo-item.component';
import { TodoFooterComponent } from './components/todo/todo-footer/todo-footer.component';
import { TodoAddComponent } from './components/todo/todo-add/todo-add.component';
import { FilterPipe } from './components/todo/store/filter/filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodosListComponent,
    TodoItemComponent,
    TodoFooterComponent,
    TodoAddComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(appReducers),
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument({
      maxAge: 30, // Retains last 30 states
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
