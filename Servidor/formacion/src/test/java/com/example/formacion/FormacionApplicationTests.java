package com.example.formacion;

import static org.assertj.core.api.Assertions.assertThat;

import java.net.URI;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.annotation.DirtiesContext.ClassMode;

import com.jayway.jsonpath.DocumentContext;
import com.jayway.jsonpath.JsonPath;

import net.minidev.json.JSONArray;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
//@DirtiesContext(classMode = ClassMode.AFTER_EACH_TEST_METHOD)
class FormacionApplicationTests {
	@Autowired
	TestRestTemplate restTemplate;

	@Test
	void shouldReturnFormacionWhenDataIsSaved() {
		ResponseEntity<String> response = restTemplate.getForEntity("/formaciones/1", String.class);

		assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);

		DocumentContext documentContext = JsonPath.parse(response.getBody());
		Number id = documentContext.read("$.id");
		assertThat(id).isEqualTo(1);

		String name = documentContext.read("$.name");
		assertThat(name).isEqualTo("DAW");

		String modalidad = documentContext.read("$.modalidad");
		assertThat(modalidad).isEqualTo("Dual");

		String titulacion = documentContext.read("$.titulacion");
		assertThat(titulacion).isEqualTo("Grado Superior");
	}

	@Test
	void shouldNotReturnAFormacionWithAnUnknownId() {
		ResponseEntity<String> response = restTemplate.getForEntity("/formaciones/1000", String.class);

		assertThat(response.getStatusCode()).isEqualTo(HttpStatus.NOT_FOUND);
		assertThat(response.getBody()).isBlank();
	}

	@Test
	@DirtiesContext
	void shouldCreateANewFormacion() {
		Formacion newFormacion = new Formacion(8000L, "Comercio Internacional", "Online", "Grado Medio");
		ResponseEntity<Void> createResponse = restTemplate.postForEntity("/formaciones", newFormacion, Void.class);
		assertThat(createResponse.getStatusCode()).isEqualTo(HttpStatus.CREATED);

		URI locationOfNewFormacion = createResponse.getHeaders().getLocation();
		ResponseEntity<String> getResponse = restTemplate.getForEntity(locationOfNewFormacion, String.class);
		assertThat(getResponse.getStatusCode()).isEqualTo(HttpStatus.OK);

		DocumentContext documentContext = JsonPath.parse(getResponse.getBody());
		Number id = documentContext.read("$.id");
		String name = documentContext.read("$.name");
		String modalidad = documentContext.read("$.modalidad");
		String titulacion = documentContext.read("$.titulacion");

		assertThat(id).isNotNull();
		assertThat(name).isEqualTo("Comercio Internacional");
		assertThat(modalidad).isEqualTo("Online");
		assertThat(titulacion).isEqualTo("Grado Medio");

	}

	@Test
	void shouldReturnAllCashCardsWhenListIsRequested() {
		ResponseEntity<String> response = restTemplate.getForEntity("/formaciones", String.class);
		assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);

		DocumentContext documentContext = JsonPath.parse(response.getBody());
		int formacionCount = documentContext.read("$.length()");
		assertThat(formacionCount).isEqualTo(3);

		JSONArray ids = documentContext.read("$..id");
		assertThat(ids).containsExactlyInAnyOrder(1, 2, 52);

		JSONArray names = documentContext.read("$..name");
		assertThat(names).containsExactlyInAnyOrder("DAW", "DAW", "DAW");

		JSONArray modalidades = documentContext.read("$..modalidad");
		assertThat(modalidades).containsExactlyInAnyOrder("Dual", "Dual", "Dual");

		JSONArray titulas = documentContext.read("$..titulacion");
		assertThat(titulas).containsExactlyInAnyOrder("Grado Superior", "Grado Superior", "Grado Superior");
	}

	@Test
	void shouldReturnAPageOfFormaciones() {
		ResponseEntity<String> response = restTemplate.getForEntity("/formaciones?page=0&size=1", String.class);
		assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);

		DocumentContext documentContext = JsonPath.parse(response.getBody());
		JSONArray page = documentContext.read("$[*]");
		assertThat(page.size()).isEqualTo(1);
	}

	@Test
	void shouldReturnASortedPageOfFormaciones() {
		ResponseEntity<String> response = restTemplate.getForEntity("/formaciones?page=0&size=1&sort=name,desc",
				String.class);
		assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);

		DocumentContext documentContext = JsonPath.parse(response.getBody());
		JSONArray read = documentContext.read("$[*]");
		assertThat(read.size()).isEqualTo(1);

		String name = documentContext.read("$[0].name");
		assertThat(name).isEqualTo("string");
	}

	@Test
	void shouldReturnASortedPageOfFormacionesWithNoParametersAndUseDefaultValues() {
		ResponseEntity<String> response = restTemplate.getForEntity("/formaciones", String.class);
		assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);

		DocumentContext documentContext = JsonPath.parse(response.getBody());
		JSONArray page = documentContext.read("$[*]");
		assertThat(page.size()).isEqualTo(3);

		JSONArray names = documentContext.read("$..name");
		assertThat(names).containsExactly("DAW", "DAW", "DAW");
	}

	@Test
	@DirtiesContext
	void shouldUpdateAnExistingFormacion() {
		Formacion formacionUpdate = new Formacion(null, "DAW", "Dual", "Grado Superior");
		HttpEntity<Formacion> request = new HttpEntity<>(formacionUpdate);
		ResponseEntity<Void> response = restTemplate.exchange("/formaciones/1", HttpMethod.PUT, request, Void.class);
		assertThat(response.getStatusCode()).isEqualTo(HttpStatus.NO_CONTENT);

		ResponseEntity<String> getResponse = restTemplate

				.getForEntity("/formaciones/2", String.class);
		assertThat(getResponse.getStatusCode()).isEqualTo(HttpStatus.OK);
		DocumentContext documentContext = JsonPath.parse(getResponse.getBody());
		Number id = documentContext.read("$.id");
		String name = documentContext.read("$.name");
		String modalidad = documentContext.read("$.modalidad");
		String titulacion = documentContext.read("$.titulacion");
		assertThat(id).isEqualTo(2);
		assertThat(name).isEqualTo("DAW");
		assertThat(modalidad).isEqualTo("Dual");
		assertThat(titulacion).isEqualTo("Grado Superior");
		
	}
	
	@Test
	void shouldNotUpdateAFormacionThatDoesNotExist() {
	    Formacion unknownFormacion = new Formacion(null, "DAW", null, "Grado Superior");
	    HttpEntity<Formacion> request = new HttpEntity<>(unknownFormacion);
	    ResponseEntity<Void> response = restTemplate
	            .exchange("/formaciones/99999", HttpMethod.PUT, request, Void.class);
	    assertThat(response.getStatusCode()).isEqualTo(HttpStatus.NOT_FOUND);
	}
	
	@Test
	@DirtiesContext
	void shouldDeleteAnExistingFormacion() {
	    ResponseEntity<Void> response = restTemplate
	            .exchange("/formaciones/52", HttpMethod.DELETE, null, Void.class);
	    assertThat(response.getStatusCode()).isEqualTo(HttpStatus.NO_CONTENT);
	    
	    ResponseEntity<String> getResponse = restTemplate
	            .getForEntity("/formaciones/52", String.class);
	    assertThat(getResponse.getStatusCode()).isEqualTo(HttpStatus.NOT_FOUND);
	}
	
	@Test
	void shouldNotDeleteAFormacionThatDoesNotExist() {
	    ResponseEntity<Void> deleteResponse = restTemplate
	            .exchange("/formaciones/99999", HttpMethod.DELETE, null, Void.class);
	    assertThat(deleteResponse.getStatusCode()).isEqualTo(HttpStatus.NOT_FOUND);
	}

}