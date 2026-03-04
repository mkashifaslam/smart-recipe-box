import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-recipe-counter',
  imports: [],
  templateUrl: './recipe-counter.html',
  styleUrl: './recipe-counter.css',
})
export class RecipeCounter {
  count = signal<number>(2);

  addRecipe() {
    this.count.update((c) => c + 1);
  }

  removeRecipe() {
    this.count.update((c) => c - 1);
  }

  motivationMessage = computed(() => {
    if (this.count() < 3) {
      return 'Your collection is just starting! Keep adding more recipes.';
    } else if (this.count() < 5) {
      return 'You have a nice collection! Keep it growing!';
    } else if (this.count() < 10) {
      return 'Wow, you have an amazing collection of recipes!';
    } else {
      return 'Wow, you have a great collection of recipes!';
    }
  });
}
