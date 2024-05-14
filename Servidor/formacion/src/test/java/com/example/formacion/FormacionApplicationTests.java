package com.example.formacion;

import static org.assertj.core.api.Assertions.assertThat;

import java.net.URI;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.jayway.jsonpath.DocumentContext;
import com.jayway.jsonpath.JsonPath;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class FormacionApplicationTests {
    @Autowired
    TestRestTemplate restTemplate;

    @Test
	void shouldReturnFormacionWhenDataIsSaved() {
		ResponseEntity<String> response = restTemplate.getForEntity("/formaciones/8000", String.class);

		assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);

		DocumentContext documentContext = JsonPath.parse(response.getBody());
		Number id = documentContext.read("$.id");
		assertThat(id).isEqualTo(8000);

		String name = documentContext.read("$.name");
		assertThat(name).isEqualTo("Comercio Internacional");

		String modalidad = documentContext.read("$.modalidad");
		assertThat(modalidad).isEqualTo("Online");

		String titulacion = documentContext.read("$.titulacion");
		assertThat(titulacion).isEqualTo("Grado Medio");
	}
    
    @Test
	void shouldNotReturnAFormacionWithAnUnknownId() {
		ResponseEntity<String> response = restTemplate.getForEntity("/formaciones/1000", String.class);

		assertThat(response.getStatusCode()).isEqualTo(HttpStatus.NOT_FOUND);
		assertThat(response.getBody()).isBlank();
	}
    
    @Test
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
        
}