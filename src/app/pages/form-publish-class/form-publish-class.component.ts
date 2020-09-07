import {FormGroup, FormBuilder, Validators, ControlValueAccessor, FormArray, Form } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-form-publish-class',
  templateUrl: './form-publish-class.component.html',
  styleUrls: ['./form-publish-class.component.scss']
})
export class FormPublishClassComponent implements OnInit {
  public animation: boolean;
  public form: FormGroup;
  public dificultyLevels: {};

  constructor(private fb: FormBuilder) {
    this.animation = false;
    this.createForm();
    this.dificultyLevels = ['Fácil', 'Media', 'Difícil'];
  }

  show() {
    if (document.getElementById('sucess').style.visibility === 'visible') {
      this.animation = false;
      document.getElementById('sucess').style.visibility = 'hidden';
    }
  }

  resetForm() {
    this.form.reset({
      comida: [['Vegano'], ['Saludable'], ['Picoteo'], ['Postres']]
    });
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
    return this.form.get('horario').invalid && this.form.get('horario').touched;
  }

  get formNoValidDescription() {
    return this.form.get('descripcion').invalid && this.form.get('descripcion').touched;
  }

  get formNoValidPhoto() {
    return this.form.get('foto').invalid && this.form.get('foto').touched;
  }

  get formNoValidPrice() {
    return this.form.get('precio').invalid && this.form.get('precio').touched;
  }

  //create a form
  createForm() {
    this.form = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(5)]],
      fecha: ['', Validators.required],
      horario: ['', Validators.required],
      dificultad: ['', Validators.required],
      precio: ['', Validators.required],
      ingredientes: ['', [Validators.required, Validators.minLength(3)]],
      descripcion: ['', [Validators.required, Validators.minLength(20)]],
      foto: ['', Validators.required]
    });
  }

  // get values of the radio-buttons
  valueDificulty(element) {
   this.fb.control(element);
  }

  /*[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$*/
  onSubmit() {
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