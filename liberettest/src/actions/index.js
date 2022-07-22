export function crearDocente(info) {
  return {
    type: "CREAR_DOCENTE",
    payload: info,
  };
}

export function modificarDocente(info) {
  return {
    type: "MODIFICAR_DOCENTE",
    payload: info,
  };
}

export function borrarDocente(info) {
  return {
    type: "BORRAR_DOCENTE",
    payload: info,
  };
}
