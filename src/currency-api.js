import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://www.nbrb.by/api/exrates/'
})

export const currencyAPI = {
    getCurrency() {
        return instance.get('rates/?periodicity=0')
    }
}