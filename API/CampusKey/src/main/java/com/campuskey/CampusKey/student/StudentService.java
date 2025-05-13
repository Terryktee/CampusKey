package com.campuskey.CampusKey.student;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service
public class StudentService {

	private final StudentRepository studentRepository;

	@Autowired
	public StudentService(StudentRepository studentRepository){
		this.studentRepository = studentRepository;
	}

    public List<Student> getStudents() {

		return studentRepository.findAll();
		
	}

    public void addNewStudent(Student student) throws IllegalAccessException{

		Optional <Student> studentbyOptional = studentRepository.findStudentBystudentNumber(
			student.getStudentNumber()
		);

		if (studentbyOptional.isPresent()){
			throw new IllegalAccessException("Student with student number" + student.getStudentNumber() + "already exists");
		}

		studentRepository.save(student);
	}

	public void deleteStudent(Long studentId) throws IllegalAccessException{
		boolean exists = studentRepository.existsById(studentId);
		if (!exists){
			throw new IllegalAccessException("Student with id" + studentId + "does not exist");
		}
		studentRepository.deleteById(studentId);
	}
	@Transactional
	public void updateStudent(Long studentId,String name, String studentNumber){
		Student student = studentRepository.findById(studentId).
		orElseThrow(()-> new IllegalStateException(
			"Student with id" + studentId + "does not exist"
		));
		if (name != null && 
		name.length() > 0 &&
		 !Objects.equals(student.getName(),name)){
			student.setName(name);
		}
		if (studentNumber != null && 
		studentNumber.length() > 0 &&
		 !Objects.equals(student.getStudentNumber(),studentNumber)){
			Optional<Student> studentOptional = studentRepository.findStudentBystudentNumber(studentNumber);
			if (studentOptional.isPresent()){
				throw new IllegalStateException(" student Number taken");
			}
			student.setEmail(studentNumber);
		}
	}
}
