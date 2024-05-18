package com.example.formacion;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface FormacionRepository extends CrudRepository<Formacion, Long>, PagingAndSortingRepository<Formacion, Long> {
	List<Formacion> findByNameContainingIgnoreCase(String name);
}
