import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';
import { CreatePokemonDto } from 'src/pokemon/dto/create-pokemon.dto';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;

  async executeSeed() {
    const { data } = await this.axios.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=10',
    );

    const pokemons = data.results.map(({ name, url }) => {
      const segments = url.split('/');
      const pokemonNumber = +segments[segments.length - 2];

      return <CreatePokemonDto>{
        name,
        no: pokemonNumber,
      };
    });

    return pokemons;
  }
}
