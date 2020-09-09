import { Recipe } from 'src/app/models/recipe';
import { Ingredients } from './../../models/ingredients';
import { SearchRecipeService } from './../../shared/search-recipe.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-form-publish-recipes',
  templateUrl: './form-publish-recipes.component.html',
  styleUrls: ['./form-publish-recipes.component.scss']
})
export class FormPublishRecipesComponent implements OnInit {

  public animation: boolean;
  public form: FormGroup;
  public foodOptions: {};
  public dificultyLevels: {};
  public ingredients: Ingredients[];
  public recipe: Recipe;

  constructor(private fb: FormBuilder, public apiSearchRecipe: SearchRecipeService) {

      this.animation = false;
      this.dificultyLevels = ['Fácil', 'Media', 'Difícil'];
      this.foodOptions = ['Vegana', 'Saludable', 'Picoteo', 'Postres'];
      this.createForm();
  }

  show() {
      if (document.getElementById('sucess').style.visibility === 'visible') {
        this.animation = false;
        document.getElementById('sucess').style.visibility = 'hidden';
      }
  }

  showIngredients() {
    this.apiSearchRecipe.showIngredients().subscribe((data: Ingredients[]) => console.log(this.ingredients = data));
  }

  resetForm() {
     this.form.getRawValue();
  }

  ngOnInit(): void {

    this.showIngredients()

  }

// Getter method to access formcontrols
  get formNoValidTitle() {
    return this.form.get('titulo').invalid && this.form.get('titulo').touched;
  }

  get formNoValidIngredients() {
    return this.form.get('ingredientes').invalid && this.form.get('ingredientes').touched;
  }

  get formNoValidTime() {
    return this.form.get('duracion').invalid && this.form.get('duracion').touched;
  }

  get formNoValidDescription() {
    return this.form.get('descripcion').invalid && this.form.get('descripcion').touched;
  }

  get formNoValidPhoto() {
    return this.form.get('foto').invalid && this.form.get('foto').touched;
  }

  // Create a form
  createForm() {

    this.form = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(5)]],
      ingredientes: ['', [Validators.required, Validators.minLength(1)]],
      duracion: ['', Validators.required],
      dificultad: ['', Validators.required],
      comida: ['', Validators.required],
      descripcion: ['', [Validators.required, Validators.minLength(20)]],
      foto: ['', Validators.required]
    });
  }

  // get values of the radio-buttons
  valueDificulty(element) {
    this.fb.control(element);
   }
 
  valueFood(element){
    this.fb.control(element);
  }
  valueIngredient(element) {
    this.fb.control(element);
   }

  onSubmit() {
     if (this.form.invalid) {
        Object.values (this.form.controls).forEach(control => {
            control.markAsTouched();
            console.log(this.form)
        });

    } else {
        document.getElementById('sucess').style.visibility = 'visible';
        this.animation = true;

        this.recipe = new Recipe(0, this.form.value.titulo, this.form.value.comida, this.form.value.dificultad, this.form.value.descripcion, this.form.value.foto, this.form.value.duracion);

        console.log(this.recipe);
        this.apiSearchRecipe.newRecipes(this.recipe).subscribe(data => data)
      
        //this.form.reset();
       
      }
  }
}