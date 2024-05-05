package org.example.backend.serviceImpl;

import org.example.backend.entity.Book;
import org.example.backend.entity.Result;
import org.example.backend.repository.BookRepository;
import org.example.backend.service.BookService;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class BookServiceImpl implements BookService {
    private final BookRepository repository;
    public BookServiceImpl(BookRepository repository) {
        this.repository = repository;
    }
    public Result<List<Book>> getBooks(){
        return Result.success(repository.findAll());
    }
    public Result<Book> getBookById(int id){
        if(repository.existsById(id)){
            return Result.success(repository.getBookById(id));
        }else{
            return Result.error(404, "书籍不存在！");
        }
    }
    public Result<List<Book>> getRecommendations(int nums){
        return Result.success(repository.getBooksByRatingGreaterThanOrderByRatingDesc(0).subList(0, nums));
    }
    public Result<Book> addBook(Book book){
        return Result.success(repository.save(book));
    }
    public Result<Book> updateBook(int id, Book book){
        if(repository.existsById(id)){
            book.setId(id);
            book.setCartItems(repository.getBookById(id).getCartItems());//保留购物车信息 不然cart_items表会被清空
            return Result.success(repository.save(book));
        } else {
            return Result.error(404, "书籍不存在！");
        }
    }
    public Result<Book> deleteBook(int id){
        if(repository.existsById(id)){
            repository.deleteById(id);
            return Result.success(null);
        }else{
            return Result.error(404, "书籍不存在！");
        }
    }
    public Result<List<Book>> searchBooks(String keyword){
        return Result.success(repository.getBooksByTitleLikeOrAuthorLike("%"+keyword+"%", "%"+keyword+"%"));
    }
}
