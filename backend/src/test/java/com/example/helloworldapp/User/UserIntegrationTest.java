package com.example.helloworldapp.User;

import com.example.helloworldapp.Entites.User;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.web.client.RestTemplate;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class UserIntegrationTest {

    @LocalServerPort
    private int port;

    private final RestTemplate restTemplate = new RestTemplate();

    @Test
    void testCreateUser() {
        String baseUrl = "http://localhost:" + port + "/api/users";

        User user = new User();
        user.setName("Majdi");
        user.setEmail("majdi@test.com");
        user.setPassword("123");

        User response = restTemplate.postForObject(baseUrl, user, User.class);

        assertNotNull(response);
        assertEquals("Majdi", response.getName());
    }
}
