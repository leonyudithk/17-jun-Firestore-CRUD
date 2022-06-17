import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import useForm from '../../Hooks/useForm';
import { editCitaAsync} from '../../redux/actions/actionAgendar';

const Edit = ({ datos }) => {
    const dispatch= useDispatch()

    //-----------Activacion del Modal-----------------------------------//
    const [show, setShow] = useState(true);
    //-----------------cerrar------------------------//
    const handleClose = () => setShow(false);

    //-------------------Manipulación del Formulario y lograr Editar----------------------------//
    const [formValue, handleInputChange, reset] = useForm({
        nombre: datos.nombre,
        email:datos.email,
        fecha: datos.fecha,
        hora: datos.hora,
        telefono: datos.telefono,
        sintomas: datos.sintomas,
    })


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValue)
        dispatch(editCitaAsync(formValue))
        handleClose()
        reset()
    }
    
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Cita Nutricionista</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form onSubmit={handleSubmit} style={{ margin: '5%', marginLeft: '10%', marginRight: '10%' }}>
                        <h1 style={{ textAlign: 'center', color: 'blue' }}>Agendar cita con el Nutricionista</h1>
                        <hr />
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Nombre del Paciente</Form.Label>
                            <Form.Control type="text" name="nombre" value={formValue.nombre} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" name="email" value={formValue.email} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control type="date" name="fecha" value={formValue.fecha} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Hora</Form.Label>
                            <Form.Control type="time" name="hora" value={formValue.hora} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Telefono del Paciente</Form.Label>
                            <Form.Control type="tel" name="telefono" value={formValue.telefono} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Síntomas u Observaciones</Form.Label>
                            <Form.Control as="textarea" rows={3} name="sintomas" value={formValue.sintomas} onChange={handleInputChange} />
                        </Form.Group>
                        <Button type="submit" variant="info" >Editar</Button>
                    </Form>





                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Edit;