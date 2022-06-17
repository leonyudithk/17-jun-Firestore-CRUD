# Pasos
 Maquetacion - cuando ya este capturando la informacion por consola
 - realizo proceso sinconico con redux
        - crear carpetas redux/ 
                            types
                            reducers
                            store
                            actions
        - definir (en mi cabecita) quienes van hacer mis tipos de acciones (agregar, editar, listar, eliminar, sumar, restar, login, logout)
        - creo un archivo types.js y agrego mis tipos 
                                    export const typesAgendar = {
                                        add: '[Agendar-citas] agregar',
                                        list: '[Agendar-citas, list]',
                                        delete: '[Agendar-citas] eliminar',
                                        edit : '[Agendar-citas] edit',
                            }
        -- crear el reducers por cada typesAgendar realizo un reducers y or cada  tipo realizo un caso dentro del switch ( es importante recordar que el reducers es una funcion pura que recibe dos parametro un estado y una accion y devuelve el estado ya modificado)

        -- crear la store (SE CREA UNA SOLA VEZ POR CADA PROYECTO/APP), esta me almacena los estados que envio de los reducers y los tengo de forma global. 
        es importarte definir primero si voya a trbajar solo de forma sincronica o Asincronica (software intermedio un Middleware (thunk))  , debo definir una combinacion de reducers y cada vez que yo construya un nuevo reducers debo venir a la store y creer el estado para ese reducers
                    const reducers = combineReducers({
                            agendarCitaStore: citasReducers,
                            loginStore: loginReducers, 
                            registerStore: registerReducers
                        })

                        export const store = createStore(
                            reducers,
                            composeEnhancers(
                                applyMiddleware(thunk)
                            )
                        )

        -- al index.js y aqui debo indicarle que las rutas de salidas a view deben Proveerse de Redux como lo hago asi:
                <Provider store={store}> 
                           <AppRouters/>
                 </Provider>

          --- actiones: existen dos tipos de acciones las sincronicas y las Asincronicas
          -- las Sincronicas es la creaccion de estado en REDUX de forma local-Store
          --Asincronicas va realiza la conexion por fuera de mi aplicativo, debo realizar una configuracion (firebaseConfig) de aqui debo llamar a mis acciones sincronicas


-- como conectar con los componentes...
        - puedo llamar 
        (boton agregar)-accion- dispatch( a la accion ASINCRONICA)


----------------------Autenticacion----------------------------------
firebase/auth           getAuth -- traela informacion del usuario actual


---------------------------Base de Datos con Colleciones-------------------------
firebase/firestore/     
 Doc / collection(configuracion Con al APP(BD en firebaseConfig), "nombre de esa colleccion en FIrestore)
                        getDoc -trae el documento 
                        deleteDoc - eliminar
                        updateDoc- modificar
                        addDoc - 


