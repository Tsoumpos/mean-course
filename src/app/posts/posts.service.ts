import { Injectable, signal } from "@angular/core";
import { Post } from "./post.model";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class PostsService {

    private posts = signal<Post[]>([]);
    posts$ = this.posts.asReadonly();  
    private postsUpdated = new Subject<Post[]>()
        
    constructor(private http: HttpClient) {    
        
    }
    getPosts() {
        this.http.get<{message: string,posts: Post[]}>('http://localhost:3000/api/posts')
        .subscribe((postData) => {
            this.posts.set(postData.posts);
            this.postsUpdated.next(this.posts());
        });
    }

    addPost(title: string, content: string) {
        const post: Post = {
            id: null,
            title,
            content
        };

        this.http.post<{message: string}>('http://localhost:3000/api/posts', post).subscribe((responseData) => {
            console.log(responseData.message);
            this.posts.update(posts => [...posts, post]);
            this.postsUpdated.next([...this.posts()])
        });
        
    }

    deletePost(id: string | null) {
        if (id !== null){
            this.http.delete<{message: string}>('http://localhost:3000/api/posts/' + id).subscribe((responseData => {
                console.log(responseData.message);
    
                this.posts.update(posts => posts.filter(post => post.id !== id));
                this.postsUpdated.next([...this.posts()]);
            }))
        } else {
        
        }
    }
}