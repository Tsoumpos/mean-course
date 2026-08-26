import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
    imports: [
    CommonModule,
    MatAccordion,
    MatExpansionModule,
    MatButtonModule
  ]
})
export class PostListComponent implements OnInit {

  get posts() {
    return this.postsService.posts$;  // ✅ Getter instead of property
  }

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.postsService.getPosts();
  }

  onDeletePost(id: string | null){
    this.postsService.deletePost(id);
  }
}