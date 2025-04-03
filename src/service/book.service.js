import bookRepository from "../repositories/book.repositories.js";

async function createBookService(newBook, userId) {
    const createdBook = await bookRepository.createBookRepositoty(newBook, userId);
    if(!createdBook) throw new Error("Error creating book");
    return createdBook;
}

async function findAllBooksService() {
    const books = await bookRepository.findAllBooksRepository();
    return books;
}

async function findBookByIdService(bookId) {
    const book = await bookRepository.findBookByIdRepository(bookId);
    if(!book) throw new Error('Book not found');
    return book;
}

async function updateBookService(bookId, updatedBook) {
    const book = await bookRepository.updateBookRepository(bookId);
    if(!book) throw new Error('Book not found');
    if(book.userId !== userId) throw new Error('Unauthorized');
    const response = await bookRepository.updateBookRepository(
        updatedBook,
        bookId
    );
    return response;
}

async function deleteBookService(bookId, userId) {
    const book = await bookRepository.deleteBookRepository(bookId);
    if(!book) throw new Error('Book not found');
    if(book.userId !== userId) throw new Error('Unauthorized');
    const response = await bookRepository.deleteBookRepository(bookId);
    return response;
}

export default {
    createBookService,
    findAllBooksService,
    findBookByIdService,
    updateBookService,
    deleteBookService
}