import axios, { AxiosInstance } from 'axios'

import { Pokemon } from './models'

export default class PokemonApi {
    instance: AxiosInstance
    
    constructor () {
        this.instance = axios.create({
            baseURL: 'https://pokeapi.co/api/v2'
        })
    }

    public async getByName(name: string): Promise<Pokemon> {
        let response = this.instance.get(`pokemon/${name}/`)
        return (await response).data
    }
}
