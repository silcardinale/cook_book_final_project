export class User {
    public user_name: string;
    public password: string;
    public email?: string;
    public picture?: string;
    public user_id?: number;

    constructor(user_name: string,  password:string, email?:string,picture?:string, user_id?: number ) {
        this.user_name = user_name;
        this.password = password;
        this.email = email;
        this.picture = picture;
        this.user_id = user_id;
       
    }
}
