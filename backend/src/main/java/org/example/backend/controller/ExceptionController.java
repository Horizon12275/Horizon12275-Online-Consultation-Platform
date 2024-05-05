package org.example.backend.controller;

import jakarta.servlet.ServletException;
import org.example.backend.entity.Result;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.NoHandlerFoundException;

@RestController
@ControllerAdvice
public class ExceptionController {
    @ExceptionHandler(Exception.class)
    public Result<String> error(Exception e){
        if(e instanceof NoHandlerFoundException exception)
            return Result.error(404,e.getMessage());
        else if(e instanceof ServletException exception)
            return Result.error(400,e.getMessage());
        else return Result.error(500,e.getMessage());
    }
}
