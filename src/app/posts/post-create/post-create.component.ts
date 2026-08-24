import { Component } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import {MatToolbarModule} from '@angular/material/toolbar';
import { PostsService } from "../posts.service";

@Component({
    selector:'app-post-create',
    standalone: true,
    imports: [
        FormsModule, 
        MatInputModule,      
        MatFormFieldModule,  
        MatCardModule,       
        MatButtonModule ,
        MatToolbarModule     
    ],
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {
    enteredTitle= '';    
    enteredContent= '';

    constructor(public postsService: PostsService) {
        
    }

    onAddPost(form: NgForm) {
        if (form.invalid){
            return;
        }

        this.postsService.addPost(form.value.title, form.value.content )
        form.resetForm();
    }
}