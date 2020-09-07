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

  constructor(private fb: FormBuilder) {

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

  resetForm() {
    this.form.getRawValue();
  }

  ngOnInit(): void {

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
      ingredientes: ['', [Validators.required, Validators.minLength(3)]],
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

  onSubmit() {
     if (this.form.invalid) {
      Object.values (this.form.controls).forEach(control => {
        control.markAsTouched();

      });
    } else {
      document.getElementById('sucess').style.visibility = 'visible';
      this.animation = true;
      this.form.reset();
    }
  }
}