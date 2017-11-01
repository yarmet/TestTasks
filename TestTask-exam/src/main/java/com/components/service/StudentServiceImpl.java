package com.components.service;

import com.components.database.models.Student;
import com.components.database.repository.StudentsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentsRepository studentsRepository;

    @Override
    public List<Student> getStudents() {
        return studentsRepository.getStudents(4.6);
    }


}
