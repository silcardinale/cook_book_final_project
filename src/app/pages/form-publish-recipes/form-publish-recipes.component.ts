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
  constructor(private fb: FormBuilder) {
    this.animation = false;
    this.createForm();
  }
  resetForm() {
    this.form.reset({
      dificultad: [["Dificultad"]],
      comida: [['Vegano'], ['Saludable'], ['Picoteo'], ['Postres']]
     });

  }
  show() {
    if (document.getElementById('sucess').style.visibility === 'visible') {
      this.animation = false;
      document.getElementById('sucess').style.visibility = 'hidden';
    }
  }
  ngOnInit(): void {
  }
  get food() {
    return this.form.get('comida') as FormArray;
  }
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
  createForm() {
    this.form = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(5)]],
      ingredientes: ['', [Validators.required, Validators.minLength(3)]],
      duracion: ['', Validators.required],
      dificultad: ['', Validators.required],
      comida: this.fb.array([['Vegano'], ['Saludable'], ['Picoteo'], ['Postres']]),
      descripcion: ['', [Validators.required, Validators.minLength(20)]],
      foto: ['', Validators.required]
    });
  }
  /*[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$*/
  onSubmit() {
    console.log(this.form);
    if (this.form.invalid) {
      Object.values (this.form.controls).forEach(control => {
        control.markAsTouched();
      });
    } else {
      document.getElementById('sucess').style.visibility = 'visible';
      this.animation = true;
      this.resetForm();
    }
  }
}