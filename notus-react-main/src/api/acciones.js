const url_api_ejemplo = "http://localhost:5000/insertareact";

export async function nuevousuario(correo,usuario){
    return fetch(url_api_ejemplo,{
    method: "POST",
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      } ,
      body: JSON.stringify({
        correo: correo,
        usuario:usuario
      }),
    });
  }
  