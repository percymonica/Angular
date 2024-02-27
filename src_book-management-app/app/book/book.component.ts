import { Component, OnInit } from '@angular/core';
import { BookModel } from '../models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  newBooktitle : string = "";
  newBookauthor : string = "";

  showbooks : boolean = false;

  books : BookModel[] = []

  ngOnInit(): void {
    let savedbooks = localStorage.getItem("books")
    this.books = savedbooks ? JSON.parse(savedbooks) : []
  }

  addbook(){
    let newBook: BookModel = {
      id: 1,
      title: this.newBooktitle,
      author: this.newBookauthor

  }

      this.books.push(newBook)



      this.newBooktitle = "";
      this.newBookauthor = "";

      localStorage.setItem("books", JSON.stringify(this.books))
}

  retrieveallbooks(){
    const storedBooks = localStorage.getItem('books');

    // Check if there are any stored books
    if (storedBooks) {
      // Parse the stored JSON string to convert it into an array of books
      this.books = JSON.parse(storedBooks);
      this.showbooks=true;
    } else {
      // If no books are found in local storage, display a message or handle it as per your requirement
      console.log('No books found in local storage.');
    }
    
  }

  deletebook(index : number){
    this.books.splice(index, 1)
  }


}
