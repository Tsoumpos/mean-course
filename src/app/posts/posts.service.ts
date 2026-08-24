import { Injectable, signal } from "@angular/core";
import { Post } from "./post.model";
import { Subject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class PostsService {

    private posts = signal<Post[]>([]);
    private postsUpdated = new Subject<Post[]>()
    getPosts() {
        return this.posts.asReadonly();
    }

    addPost(title: string, content: string) {
        const post: Post = {
            title,
            content
        };

        this.posts.update(posts => [...posts, post]);
        this.postsUpdated.next([...this.posts()])
    }
}