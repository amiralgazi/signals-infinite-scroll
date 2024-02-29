import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Post } from '../post/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  http = inject(HttpClient);
  pageSize = 10;
  temp_posts = signal(new Array(1) as Post[]);
  posts = this.temp_posts.asReadonly();

  getPosts = (postId: number) => {
    if(this.isDownloadPage(postId))
      this.downloadPage(Math.floor(postId / this.pageSize) + 1);
  }

  downloadPage = (page: number) => {
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts?_limit=' + 
    this.pageSize +
    '&_page=' + page).subscribe((downloadedPosts) => {
      this.temp_posts.update((posts) => posts.concat(downloadedPosts).sort((post) => post.id))
    })
  }

  isDownloadPage = (num: number) => {
    return num % this.pageSize === 1;
  }
}
