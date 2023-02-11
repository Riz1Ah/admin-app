import React, { useState } from 'react';
import { Container,Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { login } from '../../actions';
import Layout from '../../components/Layout';
import Input from '../../components/UI/Input';

const Login = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = useSelector(state => state.auth);

    
    const dispatch = useDispatch();
    const userLogin = (e) => {
        e.preventDefault();

        const user = {username, password};
        dispatch(login(user));
    }
    if(auth.authenticate){
        return <Navigate to={`/`} />
    }
    return (
        <Layout>
            <Container>
                <Row style={{margin:'50px'}}>
                    <Col md={{span:6, offset:3}}>
                    <Form onSubmit={userLogin}>
                    <Input
                                label='Username'
                                placeholder='Username'
                                value={username}
                                type='text'
                                onChange={(e)=>setUsername(e.target.value)}
                            />
                    <Input
                                label='Password'
                                placeholder='Password'
                                value={password}
                                type='password'
                                onChange={(e)=>{setPassword(e.target.value)}}
                            />
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                    </Col>
                </Row>
                
            </Container>
        </Layout>
    );
}

export default Login;