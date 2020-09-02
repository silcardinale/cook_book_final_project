export class Recipe {
    public name: string;
    public portions: number;
    public dificulty: string;
    public prepTime: number;
    public ingredients: string;
    public procedure: string;
    public img: string;
    public count?: number;

    constructor(name: string, portions: number, dificulty: string, prepTime: number, ingredients: string, procedure: string, img: string, count?:number) {
        this.name = name;
        this.portions = portions;
        this.dificulty = dificulty;
        this.prepTime = prepTime;
        this.ingredients = ingredients;
        this.procedure = procedure;
        this.img = img;
        this.count = count;
    }
}