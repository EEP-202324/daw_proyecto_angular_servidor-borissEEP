package com.example.formacion;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface FormacionRepository extends CrudRepository<Formacion, Long>, PagingAndSortingRepository<Formacion, Long> {

}
