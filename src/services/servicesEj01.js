




export const cambiarColor = () => {


   const colores = [ "blue", "green", "orange", "yellow","lime","fuchsia"];

    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];

    return colorAleatorio;
};