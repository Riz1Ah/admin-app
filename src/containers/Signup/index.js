import React from 'react';
import { Container,Form, Button, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import Layout from '../../components/Layout';
import Input from '../../components/UI/Input';

const Signup = (props) => {

    const auth = useSelector(state => state.auth);
    if(auth.authenticate){
        return <Navigate to={`/`} />
    }
    return ( 
        <Layout>
        <Container>
            <Row style={{margin:'50px'}}>
                <Col md={{span:6, offset:3}}>
                <Form>
                    <Row>
                        <Col md={6}>
                            <Input
                                label='First Name'
                                placeholder='First Name'
                                value=''
                                type='text'
                                onChange={()=>{}}
                            />
                        </Col>
                        <Col md={6}>
                            <Input
                                label='Last Name'
                                placeholder='Last Name'
                                value=''
                                type='text'
                                onChange={()=>{}}
                            />
                        </Col>
                    </Row>
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
                    <Input
                                label='Birthday'
                                placeholder='Birthday'
                                value=''
                                type='date'
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
 
export default Signup;