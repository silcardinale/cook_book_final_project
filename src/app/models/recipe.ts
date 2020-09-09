export class Recipe {
    public recipe_id?: number;
    public title: string;
    public duration: number;
    public dificulty: string;
    public type: number;
    public description: string;
    public picture: string;
    public count?: number;

    constructor(recipe_id: number, title: string, duration: number, dificulty: string, type: number, description: string, picture: string) {
        this.recipe_id = recipe_id;
        this.title = title;
        this.duration = duration;
        this.dificulty = dificulty;
        this.type = type;
        this.description = description;
        this.picture = picture;
    }
}