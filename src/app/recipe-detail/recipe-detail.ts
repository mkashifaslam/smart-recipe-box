import { Component, input } from '@angular/core';
import { RecipeModel } from '../models';
import { MOCK_RECIPES } from '../mock-recipes';

@Component({
  selector: 'app-recipe-card',
  imports: [],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css',
})
export class RecipeDetail {
  recipe = input<RecipeModel>(MOCK_RECIPES[0]);
}
