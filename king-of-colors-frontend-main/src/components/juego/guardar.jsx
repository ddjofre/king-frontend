//Inicializar usuarios
    // Efecto para crear usuarios
    useEffect(() => {
        const crearUsuarios = async () => {
          try {
            console.log("Efecto para crear usuarios se está ejecutando");
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/usuarios`, [
              {
                username: 'gato123',
                email: 'gato123@gmail.com',
                password: 'gatito123'
              },
              {
                username: 'perro123',
                email: 'perro123@gmail.com',
                password: 'perrito123'
              },
              {
                username: 'loro123',
                email: 'loro123@gmail.com',
                password: 'lorito123'
              }
            ]);
            const data = response.data;
            setUsuarios(data);
            console.log(data);
          } catch (error) {
            console.log(error);
          }
        };
  
        crearUsuarios();
      }, []);

//Asignar jugadores
useEffect(() => {
    console.log("Efecto para crear jugadores se está ejecutando");
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/jugadores`,
    usuarios.map((usuario) => 
    [{
      id_usuario: usuario.id,
      color: 'red',
      tropas: 0,
      producción_total: 0,
      id_partida: partida.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    }]
    )
    )
    .then((response) => { 
      const data = response.data;
      setJugadores(data);
    })
    .catch((error) => {
      console.log(error);
    });
    }, [])

  //Crear tablero
  useEffect(() => {
    console.log("Efecto para crear tablero se está ejecutando");
    const apiUrl = `${import.meta.env.VITE_BACKEND_URL}/casillas`;
    console.log("URL de la solicitud:", apiUrl);
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/casillas`,
      tablero_lista
    )
    .then((response) => { 
      const data = response.data[0];
      setTablero(data.Casilla)
    })
    .catch((error) => {
      console.log(error);
    });
    }, [])

/*
  useEffect(() => {
    let ignore = false;
    console.log("aqui jeje");
    return () => {
      ignore = true;
    };
  },[]);

  useEffect(() => {

    let ignore = false;

    const crearUsuarios = async () => {

      try {
        if (!ignore) {
        console.log("Efecto para crear usuarios se está ejecutando");

        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/usuarios`, [
          {
            username: 'gato123',
            email: 'gato123@gmail.com',
            password: 'gatito123'
          },
          {
            username: 'perro123',
            email: 'perro123@gmail.com',
            password: 'perrito123'
          },
          {
            username: 'loro123',
            email: 'loro123@gmail.com',
            password: 'lorito123'
          }
        ]);

        const data = response.data;
        setUsuarios(data);
        console.log(data);}
      } catch (error) {
        console.log(error);
      }
    };
    crearUsuarios();

    return () => {
      ignore = true;
    };
  

  }, []);
    
  */ 