import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe';
@Injectable({
  providedIn: 'root'
})
export class CookbookService {
  public recipes : Recipe [] = [
      { name: 'Cookies de harina de arroz y limón', portions: 6, dificulty: 'Fácil', prepTime: 20, ingredients: '1/2 taza de harina de arroz integral, 1/2 taza de harina de coco, 1 huevo, 1/4 taza de leche desnatada o vegetal, Ralladura de 1 limón, Esencia de vainilla, Endulzante, 1 cdita. de polvo para hornear, 1 pizca de sal.', procedure: 'Precalentar el horno a 180 grados. Mezclar todos los ingredientes y formar las galletas. Engrasar una plaza para horno con aceite en spray y distribuirlas. hornear por 10 min aproximadamente', img: 'assets/img/cookies.jpg' },
      { name: 'Bastones de crema de maní', portions: 6, dificulty: 'Fácil', prepTime: 10, ingredients: '2 cdas de mantequilla de maní natural, 3 cdas de queso crema desnatado, 50g de chocolate semiamargo fundido.', procedure: 'Mezclar los 2 ingredientes y colocarlos en un recipiente de silicona para que sea fácil desmoldarlos. Llevar al freezer hasta que se congelen. Retirar del freezer, cortar en forma de bastones y terminar con chocolate fundido en la superficie.', img: 'assets/img/barritas.jpeg' },
      { name: 'Trufas de avena, banana y chocolate', portions: 8, dificulty: 'Fácil', prepTime: 15, ingredients: '1/3 taza de harina de avena, 3 cdas. de mantequilla de maní natural, 1 banana pequeña pisada, 3 cdas. de leche en polvo desnatada, 1/4 taza de chips de chocolate semiamargo, endulzante a gusto.', procedure: 'Mezclar todos los ingredientes. Formar bolitas con las manos. Conservar en el freezer y comerlas bien frias.', img: 'assets/img/trufas.jpg' },
      { name: 'Helado de banana split', portions: 1, dificulty: 'Fácil', prepTime: 10, ingredients: '2 bananas en rodajas congeladas, 1 cda de leche desnatada o de almendras, escencia de vainilla, endulzante a gusto, 1 cda de dulce de leche.', procedure: 'Procesar todos los ingredientes menos el dulce de leche. Una vez listo, incorporar el dulce de leche y colocar la preparación en el freezer unos minutos hasta que el helado esté bien firme y listo para consumir.', img: 'assets/img/banana.jpg' },
  ];
  constructor() {
    console.log("Service ready to use");
  }
  getRecipes(){
    return this.recipes;
  }
  getRecipe(indice:number){
    return this.recipes[indice];
  }
}






