package com.example.helloworldapp.Services.User;

import com.example.helloworldapp.Entites.User;
import com.example.helloworldapp.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImp implements UserService {

    @Autowired
    private UserRepository userRepository;
//    private final UserRepository userRepository;
//
//    public UserService(UserRepository userRepository) {
//        this.userRepository = userRepository;
//    }

    @Override
    public User createUser(User user) {
        return userRepository.save(user);
    }
}
