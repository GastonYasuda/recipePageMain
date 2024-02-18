import { Component, OnInit, inject } from '@angular/core';
import { recipeList } from '../recipeList.mock';

@Component({
  selector: 'app-omelette',
  standalone: true,
  imports: [],
  templateUrl: './omelette.component.html',
  styleUrl: './omelette.component.css',
})
export class OmeletteComponent {
  recipeList = recipeList;
}
