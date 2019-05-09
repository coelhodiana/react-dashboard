import { URL_API } from "./base";

export function consultarResumo(callback){
    return fetch (`${URL_API}/resumo`)
    .then(resultado => resultado.json(callback));
}