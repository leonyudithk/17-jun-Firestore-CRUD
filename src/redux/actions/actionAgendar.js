import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore"
import { bataBase } from "../../Firebase/firebaseConfig"
import { typesAgendar } from "../types/types"



//-------------------Listar----------------------------//

export const listAgendaAsync =() => {
    return async (dispatch)=>{

        const collectionListar = await getDocs(collection(bataBase, "Citas"))
        console.log(collectionListar)
        const citasA = []
        collectionListar.forEach(listar => {
            citasA.push(
                {
                    ...listar.data()
                }
            )
            
        })
       dispatch(listAgendarSync(citasA)) 
    }
}

export const listAgendarSync = (agenda)=>{
       return {
        type: typesAgendar.list,
        payload: agenda
    }
}


//--------------Agregar cita agendar-------------------------------//
export const actionAddAgendaAsync = (formValue) => {
    return (dispatch) => {
      //addDoc recibir dos pararmetro (donde lo voy a guardar, que voy a guardar)
      //collection recibe dos pararmetro (el nombre que viene de firebaseConfig (baseDato, nombre de la coleccion que cree en Firestore))  
        addDoc(collection(bataBase, "Citas"), formValue)
        .then( resp =>{
            dispatch(actionAddAgendaSync(formValue))
            dispatch(listAgendaAsync())
        })
        .catch(error =>{
            console.warn(error, 'Datos no guardados')
        })

    }
}


export const actionAddAgendaSync = (formValue) => {
    return {
        type: typesAgendar.add,
        payload: formValue
    }

}


//--------------Eliminar cita agendar-------------------------------//
export const deleteCitaAsync = (email)=>{
    return async (dispatch)=>{
        const collectionCitas = collection(bataBase, "Citas")
        const q = query(collectionCitas, where("email", "==", email))

        const datosQ = await getDocs(q)
        console.log(datosQ)

        datosQ.forEach(docu =>{
            deleteDoc(doc(bataBase, "Citas", docu.id))
        })
        dispatch(actionDeleteEmailSync(email))

  
}}

export const actionDeleteEmailSync = (email) => {
    return {
        type: typesAgendar.delete,
        payload: email
    }
}