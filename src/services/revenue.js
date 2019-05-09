import {URL_API} from "./../services/base";

export function faturamentoPorFormaDePagamento(callback){
    return fetch (`${URL_API}/faturamento`)
    .then(resultado => resultado.json(callback));
}