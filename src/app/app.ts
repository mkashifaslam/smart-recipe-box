import { Component, signal } from '@angular/core';
import { RecipeList } from './recipe-list/recipe-list';
import { RecipeCounter } from './recipe-counter/recipe-counter';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [RecipeList, RecipeCounter]
})
export class App {
  protected readonly title = signal('Smart Recipe Book');
}
