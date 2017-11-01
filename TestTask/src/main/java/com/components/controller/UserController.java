package com.components.controller;

import com.components.database.models.User;
import com.components.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/user")
public class UserController {


    @Autowired
    private UserService userService;


    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> create(@RequestBody User user) {
        return ResponseEntity.ok(userService.createUser(user));
    }


    @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity<?> update(@RequestBody User user) {
        return ResponseEntity.ok(userService.updateUser(user));
    }


    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> get() {
        return ResponseEntity.ok(userService.readUsers());
    }


    @RequestMapping(method = RequestMethod.DELETE)
    public ResponseEntity<?> delete(@RequestBody User user) {
        userService.deleteUser(user);
        return ResponseEntity.ok().build();
    }

}
