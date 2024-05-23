import { useState } from "react";
import Card from "./Card";
import ErrorMensaje from "./ErrorMensaje";
import "../Style/Form.css";

const Form = () => {
const [usuario, setUsuario] = useState ({
  nombre:"",
  apellido:"",
  email:"",
  telefono:"",
  direccion:"",
  ciudad:"",
  pais:"",
  tipoProducto:"",
  nombreProducto:"",
  numeroSerial:"",
});

const [mostrar, setMostrar] = useState (false);
const [errorMensaje, setErrorMensaje] = useState (false);

const handleNombre = (event) => setUsuario({...usuario, nombre: event.target.value});
const handleApellido = (event) => setUsuario({ ...usuario, apellido: event.target.value });
const handleEmail = (event) => setUsuario({ ...usuario, email: event.target.value });
const handleTelefono = (event) => setUsuario({ ...usuario, telefono: event.target.value });
const handleDireccion = (event) => setUsuario({ ...usuario, direccion: event.target.value });
const handleCiudad = (event) => setUsuario({ ...usuario, ciudad: event.target.value });
const handlePais = (event) => setUsuario({ ...usuario, pais: event.target.value });
const handleTipoProducto = (event) => setUsuario({ ...usuario, tipoProducto: event.target.value });
const handleNombreProducto = (event) => setUsuario({ ...usuario, nombreProducto: event.target.value });
const handleNumeroSerial = (event) => setUsuario({ ...usuario, numeroSerial: event.target.value });

const handleEnvio = (event) => {
  event.preventDefault();
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  //const regexNumero = /^[0-9,$]*$/g;
  if (
    usuario.nombre.trim().length > 3 &&
    usuario.apellido.trim().length > 6 &&
    regexEmail.test(usuario.email) &&
    usuario.telefono.trim().length > 5 &&
    //regexNumero.test(usuario.telefono) &&
    usuario.direccion.trim().length > 5 &&
    usuario.ciudad.trim().length > 5 &&
    usuario.pais.trim().length > 5 &&
    usuario.tipoProducto.trim().length > 5 &&
    usuario.nombreProducto.trim().length > 5 &&
    //regexNumero.test(usuario.numeroSerial)
    usuario.numeroSerial.trim().length > 5
  ) {
    setMostrar(true);
    setErrorMensaje(false);
  } else {
    setErrorMensaje(true);
  }
};

const borrar = () => {
  setUsuario({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    direccion: "",
    ciudad: "",
    pais: "",
    tipoProducto: "",
    nombreProducto: "",
    numeroSerial: "",
  });
};

  return (
    <>
      <form onSubmit={handleEnvio}>
        <label>Nombre</label>
        <input type="text" value={usuario.nombre} onChange={handleNombre} />
        <label>Apellido</label>
        <input type="text" value={usuario.apellido} onChange={handleApellido} />
        <label>Email</label>
        <input type="text" value={usuario.email} onChange={handleEmail} />
        <label>Telefono</label>
        <input type="text" value={usuario.telefono} onChange={handleTelefono} />
        <label>Dirección</label>
        <input type="text" value={usuario.direccion} onChange={handleDireccion} />
        <label>Ciudad</label>
        <input type="text" value={usuario.ciudad} onChange={handleCiudad} />
        <label>Pais</label>
        <input type="text" value={usuario.pais} onChange={handlePais} />
        <label>Tipo Producto</label>
        <input type="text" value={usuario.tipoProducto} onChange={handleTipoProducto} />
        <label>Nombre Producto</label>
        <input type="text" value={usuario.nombreProducto} onChange={handleNombreProducto} />
        <label>Numero Serial</label>
        <input type="text" value={usuario.numeroSerial} onChange={handleNumeroSerial} />
        <button type="submit">Enviar</button>
        <br />
        <button type="submit" onClick={borrar}>Borrar</button>
      </form>
      {mostrar && <Card usuario={usuario}/>}
      {errorMensaje && <ErrorMensaje/>}
    </>
  );
};

export default Form