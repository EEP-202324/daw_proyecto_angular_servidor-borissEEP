package com.example.formacion;

import static org.assertj.core.api.Assertions.assertThat;

import java.io.IOException;

import org.assertj.core.util.Arrays;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.json.JsonTest;
import org.springframework.boot.test.json.JacksonTester;

@JsonTest
public class FormacionJsonTest {
	@Autowired
    private JacksonTester<Formacion> json;
	
	@Autowired 
	JacksonTester<Formacion[]> jsonList;
	
	private Formacion[] formaciones;
	
	@BeforeEach
    void setUp() {
		formaciones = Arrays.array(
                new Formacion(1L, "Comercio Internacional", "Online", "Grado Medio" ),
                new Formacion(2L, "DAW", "Dual", "Grado Superior"),
                new Formacion(3L, "DAM", "Presencial", "Grado Superior"));
    }

	@Test
    void formacionSerializationTest() throws IOException {
    	Formacion formacion = new Formacion(1L, "Comercio Internacional", "Online", "Grado Medio");
        assertThat(json.write(formacion)).isStrictlyEqualToJson("/com/example/formacion/single.json");
        assertThat(json.write(formacion)).hasJsonPathNumberValue("@.id");
        assertThat(json.write(formacion)).extractingJsonPathNumberValue("@.id")
                .isEqualTo(1);
        assertThat(json.write(formacion)).hasJsonPathStringValue("@.name");
        assertThat(json.write(formacion)).extractingJsonPathStringValue("@.name")
             .isEqualTo("Comercio Internacional");
        assertThat(json.write(formacion)).hasJsonPathStringValue("@.modalidad");
        assertThat(json.write(formacion)).extractingJsonPathStringValue("@.modalidad")
             .isEqualTo("Online");
        assertThat(json.write(formacion)).hasJsonPathStringValue("@.titulacion");
        assertThat(json.write(formacion)).extractingJsonPathStringValue("@.titulacion")
             .isEqualTo("Grado Medio");
        
    }
	
	@Test
	 void formacionDeserializationTest() throws IOException {
	     String expected = """
	     		{
	                "id": 1,
	     		    "name": "Comercio Internacional",
	     		    "modalidad": "Online",
	     			"titulacion": "Grado Medio"
	            }
	             """;
	     Formacion parsedFormacion = json.parseObject(expected);
	     assertThat(parsedFormacion.getId()).isEqualTo(1);
	     assertThat(parsedFormacion.getName()).isEqualTo("Comercio Internacional");
	     assertThat(parsedFormacion.getModalidad()).isEqualTo("Online");
	     assertThat(parsedFormacion.getTitulacion()).isEqualTo("Grado Medio");
	 }
	
	@Test
	void formacionListSerializationTest() throws IOException {
	   assertThat(jsonList.write(formaciones)).isStrictlyEqualToJson("/com/example/formacion/list.json");
	}
	
}
