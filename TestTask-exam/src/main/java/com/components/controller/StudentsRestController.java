package com.components.controller;

import com.components.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class StudentsRestController {

    @Autowired
    private StudentService studentService;


    @RequestMapping(value = "/effective_students", method = RequestMethod.GET)
    public ResponseEntity<?> effective_students() {
        return ResponseEntity.ok(studentService.getStudents());
    }

}
