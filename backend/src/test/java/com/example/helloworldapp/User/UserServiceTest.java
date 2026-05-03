package com.example.helloworldapp.User;


import com.example.helloworldapp.Entites.User;
import com.example.helloworldapp.Repositories.UserRepository;
import com.example.helloworldapp.Services.User.UserServiceImp;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @Mock
    private UserRepository mockRepo;

    @InjectMocks
    private UserServiceImp userService;

    @Test
    void testCreateUser() {

        User user = new User();
        user.setName("Majdi");

        Mockito.when(mockRepo.save(user)).thenReturn(user);

        User savedUser = userService.createUser(user);

        assertEquals("Majdi", savedUser.getName());
    }
}
