import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private url = "http://localhost:3000/favorite"
  public favoriteRecipe
  public owner

  constructor(private http: HttpClient) { }

  
  getFavoritefromUser(id_user:number){
    this.favoriteRecipe = this.http.get(this.url + "/user/" + id_user)
    console.log("favorita", this.favoriteRecipe)
    return this.favoriteRecipe
  }


  removeFavorite(user_fav_id:number){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),body:{user_fav_id:user_fav_id}};
    return this.http.delete(this.url, httpOptions)
}

}
