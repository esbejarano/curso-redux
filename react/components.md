Platzi-Video <3
==============
home - entry point para webpack

  Home - página / (container|smart)
    -> <!-- Layout - UI -->
      -> Related - UI
      -> Categories - UI
         -> Category - UI
            -> Playlist - UI
               -> Media - UI / Pure
      -> Search / (container|smart)
         -> <!-- Search Layout UI -->
            -> Input - UI
      -> Modal - (container|smart)
        -> <!-- Layout - UI -->
          -> VideoPlayer - (container|smart)
            <!-- Layout -->
             -> Video - UI state
             -> Spinner - UI
             -> Controls - UI
                -> PlayPause - UI
                  -> PlayIcon - UI
                  -> PauseIcon - UI
                -> Timer - UI
                -> ProgressBar - UI
                -> Volume - UI
                  -> VolumeIcon - UI
                -> FullScreen - UI
                  -> FullScreenIcon - UI


<!-- 
CICLOS DE VIDA

constructor(){
	// Enlazo (bind) eventos y/o inicializo estado
	}
	componentWillMount(){
	// Se ejecuta antes de montar el componente
	// Se podría usar para hacer un setState()
	}
	render(){
	// Contiene todos los elementos a renderizar
	// podrías usarlo para calcular propiedades (ej: concatenar una cadena)
	}
	componentDidMount(){
	//Solo se lanza una vez
	//Ideal para llamar a una API, hacer un setInteval, etc
	}

	//Actualización:
	componentWillReceiveProps(){
	//Es llamado cuando el componente recibe nuevas propiedades.

	}
	shouldComponentUpdate(){
	//Idea para poner una condición y  si las propiedades que le llegaron anteriormente
	// eran las mismas que tenia retornar false para evitar re-renderear el componente
	}
	componentWillUpdate(){
	//metodo llamado antes de re-renderizar el componente si shouldComponentUpdate devolvió true
	}

	// re-render si es necesario...

	componentDidUpdate(){
	//Método llamado luego del re-render
	}
	componentWillUnmount(){
	//Método llamado antes de desmontar el componente
	}
	componentDidCatch(){
	// Si ocurre algún error, lo capturo desde acá:
	}


// ¿Qué método se usa para enlazar eventos del dom a una función desde el constructor?
// ¿Cómo puedo asignar propiedades base a componentes?
// Es una característica de las propiedades:
 -->