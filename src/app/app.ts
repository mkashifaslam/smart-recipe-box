import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RecipeList } from './recipe-list/recipe-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [RecipeList],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly title = signal('Smart Recipe Book');
}
