package com.example.demo.service;

import java.util.List;

import com.example.demo.entities.Cat;

public interface CategoryService {

	Cat createCategory(Cat cat1);

	List<Cat> getCategoryList();

	void updateCategory(int id, Cat c);

	void deactivateCategory(int id);

	Cat getSingleCategory(int id);

}
