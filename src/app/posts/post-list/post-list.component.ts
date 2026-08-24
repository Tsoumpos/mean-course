import { Component, OnInit } from "@angular/core";
import { MatExpansionModule } from '@angular/material/expansion';
import { PostsService } from "../posts.service";
import { MatAnchor } from "@angular/material/button";

@Component({
    selector: 'app-post-list',
    imports: [MatExpansionModule, MatAnchor],
    templateUrl: './post-list.component.html',
    styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {

    posts!: ReturnType<PostsService['getPosts']>;

    constructor(public postsService: PostsService) {}

    ngOnInit() {
        this.posts = this.postsService.getPosts();
    }
}