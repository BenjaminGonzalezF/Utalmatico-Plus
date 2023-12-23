

// Create a JavaScript object to encapsulate your variables
const userState = {
    _tipoUsuario: "admin", // Prefix with an underscore to indicate it's a private variable
    _nombreUsuario: null,
    _unidad: false,
    _ramo_seleccionado: "ninguno",
  
    //cosas que defini en otra parte pero siempre olvido donde
    //userState.nombreModulo  = nombre del modulo
    //userState.guardarUnidad = nombre unidad


    get ramo_seleccionado() {
      return this._ramo_seleccionado;
    }

    ,
    set ramo_seleccionado(value) {
      this._ramo_seleccionado = value;
    },

    get tipoUsuario() {
      return this._tipoUsuario;
    },
    set tipoUsuario(value) {
      this._tipoUsuario = value;
    },
  
    get nombreUsuario() {
      return this._nombreUsuario;
    },
    set nombreUsuario(value) {
      this._nombreUsuario = value;
    },
  
    get unidad() {
      return this._unidad;
    },
    set unidad(value) {
      this._unidad = value;
    },
  };
  
  // Export the object instead of individual variables
  export default userState;
  