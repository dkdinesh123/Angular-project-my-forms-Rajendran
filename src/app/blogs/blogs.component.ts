import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Post} from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

loadedPosts : Post[] = [];
  error=null;

  constructor(public service:PostsService) { }
  ngOnInit(): void 
  {
    this.service.fetchPost().subscribe(
      (posts) => 
      {
        this.loadedPosts = posts;
      
      },
      (error) =>
      {
        this.error = error.message;
        console.log(this.error);
      }
    );

  }
  onCreatePost(myData:Post)
  {
    // console.log(myForm.title+' '+myForm.content);
   
    // this.http.post(url, myData).subscribe(
    //   (response)=> {
    //     console.log(response);
    //   },
    //   (error)=>{
    //     console.log(error);
    //   }
    // );
    this.service.createAndStorePost(myData);
  }
  onFetchPosts()
  {
    this.service.fetchPost().subscribe(
      (posts) => 
      {
        this.loadedPosts = posts;
      },
      (error) =>
      {
        this.error = error.message;
        console.log(this.error);
      }
    );
  }
  onDeletePost()
  {
        this.service.deletePosts().subscribe(() =>{
        this.loadedPosts = [];
      });
  }
}
