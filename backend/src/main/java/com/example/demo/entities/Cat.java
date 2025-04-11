package com.example.demo.entities;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Cat {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int category_id;
	private  String category_name;
	private String description;
	private Boolean status= true;
	
	private LocalDateTime created_at = LocalDateTime.now();
	private LocalDateTime updated_at = LocalDateTime.now();
	
	public Cat() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Cat(int category_id, String category_name, String description, Boolean status, LocalDateTime created_at,
			LocalDateTime updated_at) {
		super();
		this.category_id = category_id;
		this.category_name = category_name;
		this.description = description;
		this.status = status;
		this.created_at = created_at;
		this.updated_at = updated_at;
	}

	public int getCategory_id() {
		return category_id;
	}

	public void setCategory_id(int category_id) {
		this.category_id = category_id;
	}

	public String getCategory_name() {
		return category_name;
	}

	public void setCategory_name(String category_name) {
		this.category_name = category_name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Boolean getStatus() {
		return status;
	}

	public void setStatus(Boolean status) {
		this.status = status;
	}

	public LocalDateTime getCreated_at() {
		return created_at;
	}

	public void setCreated_at(LocalDateTime created_at) {
		this.created_at = created_at;
	}

	public LocalDateTime getUpdated_at() {
		return updated_at;
	}

	public void setUpdated_at(LocalDateTime updated_at) {
		this.updated_at = updated_at;
	}

	@Override
	public String toString() {
		return "Cat [category_id=" + category_id + ", category_name=" + category_name + ", description=" + description
				+ ", status=" + status + ", created_at=" + created_at + ", updated_at=" + updated_at + "]";
	}
	
	
}
