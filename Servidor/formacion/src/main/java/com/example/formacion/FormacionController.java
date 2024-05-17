package com.example.formacion;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
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
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping("/formaciones")
@CrossOrigin

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
		URI locationOfNewFormacion = ucb.path("formaciones/{id}").buildAndExpand(savedFormacion.getId()).toUri();
		return ResponseEntity.created(locationOfNewFormacion).build();
	}

	@GetMapping
	private ResponseEntity<List<Formacion>> findAll(Pageable pageable) {
		Page<Formacion> page = formacionRepository.findAll(PageRequest.of(pageable.getPageNumber(),
				pageable.getPageSize(), pageable.getSortOr(Sort.by(Sort.Direction.ASC, "name"))));
		return ResponseEntity.ok(page.getContent());
	}
//	@GetMapping
//	private ResponseEntity<Iterable<Formacion>> findAll(){
//		return ResponseEntity.ok(formacionRepository.findAll());
//	}

	@PutMapping("/{requestedId}")
	private ResponseEntity<Formacion> putFormacion(@PathVariable Long requestedId,
			@RequestBody Formacion formacionUpdate) {
		Optional<Formacion> formacionOptional = formacionRepository.findById(requestedId);

		if (formacionOptional.isPresent()) {
			Formacion existingFormacion = formacionOptional.get();

//			if (!"".equals(formacionUpdate.getName())) {
//				existingFormacion.setName(formacionUpdate.getName());
//			}
//			if (!"".equals(formacionUpdate.getModalidad())) {
//				existingFormacion.setModalidad(formacionUpdate.getModalidad());
//			}
//			if (formacionUpdate.getTitulacion() != null && formacionUpdate.getTitulacion() != "") {
//				existingFormacion.setTitulacion(formacionUpdate.getTitulacion());
//			}
			existingFormacion.setName(formacionUpdate.getName());
			existingFormacion.setModalidad(formacionUpdate.getModalidad());
			existingFormacion.setTitulacion(formacionUpdate.getTitulacion());
			Formacion updateFormacion = formacionRepository.save(existingFormacion);
			return ResponseEntity.ok(updateFormacion);

		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@DeleteMapping("/{id}")
	private ResponseEntity<Void> deleteFormacion(@PathVariable Long id) {
		if (!formacionRepository.existsById(id)) {
			return ResponseEntity.notFound().build();
		}
		formacionRepository.deleteById(id);
		return ResponseEntity.noContent().build();
	}

}