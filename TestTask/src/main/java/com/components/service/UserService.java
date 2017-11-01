package com.components.service;

import com.components.database.models.User;

import java.util.List;


public interface UserService {

    User createUser(User user);

    User updateUser(User user);

    void deleteUser(User user);

    List<User> readUsers();

}
