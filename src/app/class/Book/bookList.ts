import {Book} from './book';

export class bookList{
    books: Book[] = [];
    addBook(b: Book){
        this.books.push(b);
    }
}