import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

   url: string = 'https://newfsd-4c653-default-rtdb.asia-southeast1.firebasedatabase.app/dine13721.json';
  constructor(public http:HttpClient) { }
  createAndStorePost(postData:Post)
  {
    this.http.post(this.url,postData,{observe:'response'}).subscribe(
      response => console.log(response),
        error =>console.log(error)
      
    );
  }
  fetchPost()
  {
    let passParams = new HttpParams();
    passParams = passParams.append('p1','pretty');
    passParams = passParams.append('p2','welcome');
    passParams = passParams.append('p3','rnt');
    return this.http.get<{[key:string]: Post}>(
      this.url,
      {
        headers : new HttpHeaders({'Custom-Header' : 'Say, Hello'}),
        params: passParams,
        responseType:'json'
      }
    ).pipe(
      map(responseData => {
      const postArray: Post[] = [];
      for(const key in responseData)
      {
        if(responseData.hasOwnProperty(key))
        {
          postArray.push({...responseData[key],id:key})
        }
        
      }
      // console.log(postArray);
      return postArray;
    })
    );
  }

  deletePosts()
  {
    return this.http.delete(this.url);
  }
}


