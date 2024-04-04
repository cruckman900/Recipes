import { Component } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://reusegrowenjoy.com/wp-content/uploads/Chickn-and-yellow-rice-in-the-pot.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://reusegrowenjoy.com/wp-content/uploads/Chickn-and-yellow-rice-in-the-pot.jpg')
  ];
}
