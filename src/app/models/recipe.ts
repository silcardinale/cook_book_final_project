export class Recipe {
    public recipe_id?: number;
    public user_id?: number;
    public title: string;
    public ingredients: string;
    public duration: number;
    public dificulty: string;
    public type: number;
    public description: string;
    public picture: string;
    public comments_number?: number;

    constructor(user_id: number, title: string, ingredients: string,  duration: number, dificulty: string, type: number, description: string, picture: string, recipe_id?: number, comments_number?: number) {
        this.recipe_id = recipe_id;
        this.user_id = user_id;
        this.title = title;
        this.ingredients = ingredients;
        this.duration = duration;
        this.dificulty = dificulty;
        this.type = type;
        this.description = description;
        this.picture = picture;
        this.comments_number = comments_number;
    }
}