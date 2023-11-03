
// Create a JavaScript object to encapsulate your variables
const userState = {
    _tipoUsuario: "admin", // Prefix with an underscore to indicate it's a private variable
    _nombreUsuario: null,
    _unidad: false,
  
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
  