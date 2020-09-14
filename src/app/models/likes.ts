export class Likes {
    public likes_id: number;
    public user_id: number;
    public recipe_id: number;
    public count?: number


    constructor (likes_id: number, user_id: number, recipe_id: number, count:number){
        
        this.likes_id = likes_id;
        this.user_id = user_id;
        this.recipe_id = recipe_id;

       
        
    }
}


