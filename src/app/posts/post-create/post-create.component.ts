import { Component, EventEmitter, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import {MatToolbarModule} from '@angular/material/toolbar';

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
    @Output() postCreated = new EventEmitter();

    onAddPost() {
        const post = { 
            title: this.enteredTitle, 
            content: this.enteredContent }
            this.postCreated.emit(post);
    }
}