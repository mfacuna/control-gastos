export const generarId = () => {
    const random = Math.random().toString(32).substring(2)
    const fecha = Date.now().toString(32)
    return random + fecha

}

export const formatearFecha = fecha => {
    const fechaNueva = new Date(fecha);
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    }

    return fechaNueva.toLocaleDateString('es-ES',opciones)
}

export const formatearCantidad = cantidad => {
    return cantidad.toLocaleString("es-CL", {
        style: "currency",
        currency: "CLP",
      });
}