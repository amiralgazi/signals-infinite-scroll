import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PostListComponent } from './post-list/post-list.component';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule, PostListComponent],
  selector: 'infinite-scroll-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
}
