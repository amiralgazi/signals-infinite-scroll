import { Route } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';

export const appRoutes: Route[] = [
    {
        path: '',
        component: PostListComponent
    }
];
