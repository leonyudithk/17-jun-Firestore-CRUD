import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import { actionRegisterAsync } from '../../redux/actions/actionRegister';

const Register = () => {

    const dispatch = useDispatch()

    const [formValue, handleInputChange, reset] = useForm({
        nombre: '',
        email: '',
        pass: '',
       telefono: '',
        direccion: ''
    })

    const {nombre, email, pass, telefono, direccion} = formValue
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(nombre, email, pass, telefono, direccion)
        dispatch(actionRegisterAsync(nombre, email, pass, telefono, direccion))
        reset()
    }


    return (
        <div style={{ margin: '5%', marginLeft: '10%', marginRight: '10%' }}>
        <Form onSubmit={handleSubmit} >
            <h1 style={{ textAlign: 'center', color: 'blue' }}>Registrar Usuario</h1>
            <hr />
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control type="text" name="nombre" value={formValue.nombre} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" name="email"  value={formValue.email} onChange={handleInputChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="pass" value={formValue.pass} onChange={handleInputChange} />
            </Form.Group>
                       <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="tel" name="telefono" value={formValue.telefono} onChange={handleInputChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Dirección</Form.Label>
                <Form.Control as="textarea" rows={3} name="direccion" value={formValue.direccion} onChange={handleInputChange}  />
            </Form.Group>
            <Button type="submit" variant="outline-info"  size="lg" >
              Registrarse
                </Button>
        </Form>

        <Button variant="outline-info"  size="lg" >
               <Link to="/login"> Login</Link> 
                </Button>

    </div>
    );
};

export default Register;