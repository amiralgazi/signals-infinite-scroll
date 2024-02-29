import { Component, Input, OnInit, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService } from '../post-list/posts.service';

@Component({
  selector: 'infinite-scroll-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent implements OnInit {
  @Input({required: true}) currentId: number = 0;
  
  postService = inject(PostsService);
  post = computed(() => this.postService.posts()[this.currentId]);
  ngOnInit(): void {
    this.postService.getPosts(this.currentId + 1);
  }
}
