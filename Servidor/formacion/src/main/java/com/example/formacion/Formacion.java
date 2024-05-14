package com.example.formacion;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Formacion {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String name;
	private String modalidad;
	private String titulacion;

	public Formacion() {
	}

	public Formacion(Long id, String name, String modalidad, String titulacion) {
		super();
		this.id = id;
		this.name = name;
		this.modalidad = modalidad;
		this.titulacion = titulacion;
	}

	public Long getId() {
		return id;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id, modalidad, name, titulacion);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Formacion other = (Formacion) obj;
		return Objects.equals(id, other.id) && Objects.equals(modalidad, other.modalidad)
				&& Objects.equals(name, other.name) && Objects.equals(titulacion, other.titulacion);
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getModalidad() {
		return modalidad;
	}

	public void setModalidad(String modalidad) {
		this.modalidad = modalidad;
	}

	public String getTitulacion() {
		return titulacion;
	}

	public void setTitulacion(String titulacion) {
		this.titulacion = titulacion;
	}

	@Override
	public String toString() {
		return "Formacion [id=" + id + ", name=" + name + ", modalidad=" + modalidad + ", titulacion=" + titulacion
				+ "]";
	}
}