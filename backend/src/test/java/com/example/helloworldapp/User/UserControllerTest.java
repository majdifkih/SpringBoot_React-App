package com.example.helloworldapp.User;


import com.example.helloworldapp.Controllers.UserController;
import com.example.helloworldapp.Entites.User;
import com.example.helloworldapp.Services.User.UserService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import static org.junit.jupiter.api.Assertions.*;

class UserControllerTest {

    @Test
    void testCreateUser() {
        UserService mockService = Mockito.mock(UserService.class);
        UserController controller = new UserController(mockService);

        User user = new User();
        user.setName("Majdi");

        Mockito.when(mockService.createUser(user)).thenReturn(user);

        User result = controller.createUser(user);

        assertEquals("Majdi", result.getName());
    }
}
