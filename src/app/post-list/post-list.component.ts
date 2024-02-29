import { ChangeDetectionStrategy, Component, Input, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PostComponent } from '../post/post.component';
import { PostsService } from './posts.service';

@Component({
  selector: 'infinite-scroll-post-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, PostComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListComponent {
  postsService = inject(PostsService);
  posts = this.postsService.posts;
}
