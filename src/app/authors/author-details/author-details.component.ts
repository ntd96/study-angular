import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Author } from 'src/app/authors.model';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.scss']
})
export class AuthorDetailsComponent implements OnInit {
  @Input() author?: Author
  @Output() select = new EventEmitter<Author>();
  @Output() delete = new EventEmitter<Author>()
  // Emit data output
  addEmitItem(val?: Author) {
    this.select.emit(val)
  }
  deleteEmitItem(val?: Author) {
    this.delete.emit(val);
  }
  ngOnInit(): void {
    // console.log('Author Detail is:', this.author);
  
    
  }
}
