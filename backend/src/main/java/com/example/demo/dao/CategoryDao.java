package com.example.demo.dao;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Cat;
import com.example.demo.repo.CatergoryRepo;
import com.example.demo.service.CategoryService;

@Service
public class CategoryDao implements CategoryService{

	@Autowired
	CatergoryRepo catrepo;

	@Override
	public Cat createCategory(Cat cat1) {
		catrepo.save(cat1);
		return cat1;
	}

	@Override
	public List<Cat> getCategoryList() {
		List<Cat> li = catrepo.findAll();
		return li;
	}

	@Override
	public void updateCategory(int id, Cat c) {
		Cat c1 = catrepo.findById(id).orElseThrow(()->new RuntimeException("Category not found!"));
		
		c1.setCategory_id(id);
		c1.setCategory_name(c.getCategory_name());
		c1.setDescription(c.getDescription());
		c1.setUpdated_at(LocalDateTime.now());
		
		catrepo.save(c1);
	}

	@Override
	public void deactivateCategory(int id) {
		catrepo.deleteById(id);
	}

	@Override
	public Cat getSingleCategory(int id) {
		Cat c = catrepo.findById(id).get();
		return c;
	}
}
