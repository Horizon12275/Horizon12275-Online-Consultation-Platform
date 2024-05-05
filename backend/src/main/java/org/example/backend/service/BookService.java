package org.example.backend.service;

import org.example.backend.entity.Book;
import org.example.backend.entity.Result;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface BookService {
    public Result<List<Book>> getBooks();
    public Result<Book> getBookById(int id);
    public Result<List<Book>> getRecommendations(int nums);
    public Result<Book> addBook(Book book);
    public Result<Book> updateBook(int id, Book book);
    public Result<Book> deleteBook(int id);
    public Result<List<Book>> searchBooks(String keyword);
}

