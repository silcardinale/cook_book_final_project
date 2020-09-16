export class Followed {
    public following_id?:number
    public followers_id: number;
    public user_id: number;
    public status: boolean;

    constructor(followers_id: number, user_id: number, status: boolean){
        this.followers_id = followers_id;
        this.user_id = user_id;
        this.status = status;

    }

}

