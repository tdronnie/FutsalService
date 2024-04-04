package com.mancity.user;

import com.mancity.user.user.application.UserService;
import com.mancity.user.user.application.dto.request.LoginRequestDto;
import com.mancity.user.user.presentation.UserController;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doNothing;

@SpringBootTest
class UserApplicationTests {

	@Mock
	private UserService userService;

	@InjectMocks
	private UserController userController;

	@Test
	void login_Success() throws Exception {
		// Given
		LoginRequestDto loginRequestDto = new LoginRequestDto("username", "password");

		// Mocking the service method
		doNothing().when(userService).login(any(LoginRequestDto.class));

		// When
		ResponseEntity<?> responseEntity = userController.login(loginRequestDto);

		// Then
		assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
	}

}
