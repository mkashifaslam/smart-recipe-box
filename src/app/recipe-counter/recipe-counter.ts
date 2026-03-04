import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-recipe-counter',
  imports: [],
  templateUrl: './recipe-counter.html',
  styleUrl: './recipe-counter.css',
})
export class RecipeCounter {
  count = signal<number>(2);
  recipeCount = computed(
    () =>
      this.count() >= 5 ? 'You have a great collection!' : 'Keep adding more recipes to your collection.'
  );

  addRecipe() {
    this.count.update((c) => c + 1);
  }

  removeRecipe() {
    this.count.update((c) => c - 1);
  }
}
