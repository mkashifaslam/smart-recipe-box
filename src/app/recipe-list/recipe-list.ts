import { Component, signal } from '@angular/core';
import { RecipeModel } from '../models';
import { MOCK_RECIPES } from '../mock-recipes';
import { RecipeDetail } from '../recipe-detail/recipe-detail';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.html',
  imports: [
    RecipeDetail
  ],
  styleUrl: './recipe-list.css'
})
export class RecipeList {
  recipes = signal<RecipeModel[]>(MOCK_RECIPES);
}
