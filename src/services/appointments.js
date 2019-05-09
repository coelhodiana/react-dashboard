import { URL_API } from "./base";

export function tiposDeConsultas(){
    return fetch (`${URL_API}/consultas`).then(resultado => resultado.json());
}
