import {FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-publish-class',
  templateUrl: './form-publish-class.component.html',
  styleUrls: ['./form-publish-class.component.scss']
})
export class FormPublishClassComponent implements OnInit {

  public animation: boolean;
  public form: FormGroup;


  constructor(private fb: FormBuilder) {

    this.animation = false;
    this.creatForm();

  }

  show() {

    if (document.getElementById('sucess').style.visibility === 'visible') {
      this.animation = false;
      document.getElementById('sucess').style.visibility = 'hidden';
    }
  }

  ngOnInit(): void {
  }

  get formNoValidTitle() {
    return this.form.get('titulo').invalid && this.form.get('titulo').touched;
  }

  get formNoValidDate() {
    return this.form.get('fecha').invalid && this.form.get('fecha').touched;
  }

  get formNoValidTime() {
    return this.form.get('horario').invalid && this.form.get('horario').touched;
  }

  get formNoValidPrice() {
    return this.form.get('precio').invalid && this.form.get('precio').touched;
  }

  get formNoValidIngredients() {
    return this.form.get('ingredientes').invalid && this.form.get('ingredientes').touched;
  }

  get formNoValidDescription() {
    return this.form.get('descripcion').invalid && this.form.get('descripcion').touched;
  }

  get formNoValidPhoto() {
    return this.form.get('foto').invalid && this.form.get('foto').touched;
  }

  creatForm() {
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
      this.form.reset();
    }
  }
}

