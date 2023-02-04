import React from 'react';
import { Container,Form, Button, Row, Col } from 'react-bootstrap';
import Layout from '../../components/Layout';
import Input from '../../components/UI/Input';

const Login = (props) => {
    return (
        <Layout>
            <Container>
                <Row style={{margin:'50px'}}>
                    <Col md={{span:6, offset:3}}>
                    <Form>
                    <Input
                                label='Username'
                                placeholder='Username'
                                value=''
                                type='text'
                                onChange={()=>{}}
                            />
                    <Input
                                label='Password'
                                placeholder='Password'
                                value=''
                                type='text'
                                onChange={()=>{}}
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