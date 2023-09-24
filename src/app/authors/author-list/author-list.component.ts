import { Component, OnInit } from '@angular/core';
import { Author, authors } from 'src/app/authors.model';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})

export class AuthorListComponent implements OnInit  {
  
  authors = authors;
  currentAuthor = authors[0];

  // Handle selected fuction
  onSelect(selectAuthor: Author ) {
    this.currentAuthor = selectAuthor
  }
  onDelete( deleteAuthor: Author ) {
    console.log(deleteAuthor.id);
    this.authors = this.authors.filter(e => e.id !== deleteAuthor.id )
    console.log(this.currentAuthor);
    console.log(this.authors);
    
    this.currentAuthor = this.authors[0]
  }


  ngOnInit(): void {

  }
  
}
