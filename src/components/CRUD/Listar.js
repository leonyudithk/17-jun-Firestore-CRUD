import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCitaAsync, listAgendaAsync } from '../../redux/actions/actionAgendar';
import Edit from './Edit';

const Listar = () => {
   const dispatch = useDispatch()
    // el que va entre {es el nonbre del estado que viene desl reducers}
    //el que esta (es el nombre del estado que se manaja en la store dentro del combineRredcers)
  const { agendaCitas} = useSelector(store => store.agendarCitaStore)

  const [datos, setDatos] = useState([])
  const [modal, setModal] = useState(false)

  const handleDelete = (email)=>{
      alert('vamos a eliminar', email)
      dispatch(deleteCitaAsync(email))

  }


const handlerEditar=(citas)=>{
        setDatos(citas)
        setModal(true)
}

useEffect(()=>{
    dispatch(listAgendaAsync())
},[dispatch])

    return (
        <div  style={{margin: '5%', marginLeft: '10%', marginRight: '10%'}}>
            <Table striped bordered hover variant="info">
                <thead>
                    <tr style={{textAlign: 'center'}}>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Telefono</th>
                        <th>Síntoma</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                {
                    agendaCitas.map((cita, index)=>(
                        <tr key={index} style={{textAlign: 'center'}}>
                        <td>{cita.nombre}</td>
                        <td>{cita.email}</td>
                        <td>{cita.fecha}</td>
                        <td>{cita.hora}</td>
                        <td>{cita.telefono}</td>
                        <td>{cita.sintomas}</td>
                        <td>
                            
                            <Button type="button" variant="outline-danger" onClick={()=>handleDelete(cita.email)}>Eliminar</Button>
                            <Button type="button" variant="outline-info" onClick={()=>handlerEditar(cita)}>Editar</Button>
                            <Button type="button" variant="outline-warning" >Detalle</Button>
                        </td>
                    </tr>
                    ))
                }
                    
                </tbody>
            </Table>
            {
                modal === true ? <Edit datos={datos} /> : ''
            }
        </div>
    );
};

export default Listar;