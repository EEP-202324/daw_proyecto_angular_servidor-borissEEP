package com.example.formacion;

import java.net.URI;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping("/formaciones")
public class FormacionController {
	
	private final FormacionRepository formacionRepository;

	private FormacionController(FormacionRepository formacionRepository) {
		this.formacionRepository = formacionRepository;
	}
	
	
	
	
	@GetMapping("/{requestedId}")
	private ResponseEntity<Formacion> findById(@PathVariable Long requestedId) {
	    Optional<Formacion> formacionOptional = formacionRepository.findById(requestedId);
	    if (formacionOptional.isPresent()) {
	        return ResponseEntity.ok(formacionOptional.get());
	    } else {
	        return ResponseEntity.notFound().build();
	    }
	}
	
	@PostMapping
	private ResponseEntity<Void> createFormacion(@RequestBody Formacion newFormacionRequest, UriComponentsBuilder ucb) {
		Formacion savedFormacion = formacionRepository.save(newFormacionRequest);
	   URI locationOfNewFormacion = ucb
	            .path("formaciones/{id}")
	            .buildAndExpand(savedFormacion.getId())
	            .toUri();
	   return ResponseEntity.created(locationOfNewFormacion).build();
	}
	
}