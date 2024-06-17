/* eslint-disable no-unused-labels */
/* eslint-disable no-empty-pattern */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Row, Col, Form, Button, FormText } from 'react-bootstrap';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';

const schema = z.object({
  email: z.string().nonempty({ message: 'Email is required' }).email({ message: 'Invalid email address' }),
  password: z.string().nonempty({ message: 'Password is required' }),
});

function Login() {
  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });
  const navigate = useNavigate();

  const onSignIn = (data) => {
    console.log('Sign in with email:', data.email, 'and password:', data.password);
    navigate('/properties');
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={4}>
          <h2 className="text-center">Login</h2>
          <Form onSubmit={handleSubmit(onSignIn)}>
            <Controller
              name="email"
              control={control}
              render={({ field,fieldState }) => (
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    {...field}
                  />
                  {fieldState.invalid&&(
                     <Form.Text className='text-danger'>
                      {fieldState.error.message}
                     </Form.Text>
                  )}
                </Form.Group>
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field ,fieldState}) => (
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    {...field}
                  />
                    {fieldState.invalid&&(
                     <Form.Text className='text-danger'>
                      {fieldState.error.message}
                     </Form.Text>
                  )}
                  
                  
                </Form.Group>
              )}
            />
            <Form.Group controlId="rememberMe">
              <Form.Check
                type="checkbox"
                label="Remember me"
                {...control.register('rememberMe')}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign In
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
