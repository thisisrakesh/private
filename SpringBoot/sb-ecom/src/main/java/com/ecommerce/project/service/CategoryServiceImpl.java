package com.ecommerce.project.service;

import com.ecommerce.project.model.Category;
import com.ecommerce.project.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CategoryServiceImpl implements CategoryService {
    private Long nextId=1L;
    //private List<Category> categories=new ArrayList<>();
    @Autowired
    private CategoryRepository categoryRepository;


    @Override
    public String deleteCategory(Long categoryId) {
        Category category=categoryRepository.findById(categoryId).
                orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND, "Resouce not Found"));

        categoryRepository.delete(category);
        return "Category with Category Id"+ categoryId +"Deleted Successfully";
    }

    @Override
    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    @Override
    public void createCategory(Category category) {
        categoryRepository.save(category);
    }

    @Override
    public Category updateCategory(Category category, Long categoryId) {
        Optional<Category> savedCategoryOptional=categoryRepository.findById(categoryId);
        Category savedCategory=savedCategoryOptional.
                orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND, "Resouce not Found"));
        category.setCategoryId(categoryId);
        savedCategory=categoryRepository.save(category);
        return savedCategory;

    }
}
