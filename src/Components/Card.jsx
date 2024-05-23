import React from "react";

const Card = ({ usuario }) => {
  return (
    <div>
      <h2>
        Hola, {usuario.nombre} {usuario.apellido}
      </h2>
      <h3>
        Gracias por comprar {usuario.tipoProducto} y modelo {usuario.nombreProducto}
      </h3>
      <h4>
        Recibiras en tu email: {usuario.email} la confirmación del registro
      </h4>
      <br />
      <h4>Gracias por alegirnos!!</h4>
    </div>
  );
};

export default Card;
