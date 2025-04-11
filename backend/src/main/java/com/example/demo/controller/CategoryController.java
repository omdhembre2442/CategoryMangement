package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Cat;
import com.example.demo.service.CategoryService;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/category")
public class CategoryController {
	
	@Autowired
	CategoryService catser;
	
	@PostMapping("/create")
	public ResponseEntity<String> create(@RequestBody Cat cat1){
		Cat c1 = catser.createCategory(cat1);
		if(c1!=null) {
		return ResponseEntity.status(HttpStatus.OK).body("Category Registered Sucessfully!");
		}
		return ResponseEntity.status(HttpStatus.ACCEPTED).body("Category Not Registered Sucessfully!");
	}
	
	@GetMapping("/getCategory")
	public ResponseEntity<?> getAll(){
		List<Cat> li = catser.getCategoryList();
		if(li.isEmpty()) {
		return ResponseEntity.status(HttpStatus.OK).body("No Categories Found.");
		}
		return ResponseEntity.ok(li);
	}
	
	@GetMapping("/getCat/{id}")
	public ResponseEntity<?> getSingle(@PathVariable int id){
		Cat c = catser.getSingleCategory(id);
		if(c==null) {
		return ResponseEntity.status(HttpStatus.OK).body("No Category Found.");
		}
		return ResponseEntity.ok(c);
	}
	
	@PutMapping("/{id}/update")
	public ResponseEntity<String> update(@PathVariable int id, @RequestBody Cat c){
		catser.updateCategory(id,c);
		return new ResponseEntity<String>("Updaated Sucessfully!",HttpStatus.ACCEPTED);
	}
	
	@DeleteMapping("/{id}/delete")
	public ResponseEntity<?> deactivate(@PathVariable int id){
		System.out.println(id);
		catser.deactivateCategory(id);
		return new ResponseEntity<String>("Deleted Sucessfully",HttpStatus.ACCEPTED);
	}
}
