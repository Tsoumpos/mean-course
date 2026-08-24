import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostCreateComponent } from "./posts/post-create/post-create.component";
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { FormsModule } from '@angular/forms'; 
import { HeaderComponent } from './header/header/header.component'
import { PostListComponent } from './posts/post-list/post-list.component'

@Component({
  imports: [
    RouterOutlet, 
    PostCreateComponent, 
    MatInputModule, 
    MatCardModule, 
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    HeaderComponent,
    PostListComponent
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  storedPosts = signal<{title: string, content: string}[]>([]);
  onPostAdded(post: {title: string, content: string}) {
    this.storedPosts.update(posts => [...posts, post]);
}
}