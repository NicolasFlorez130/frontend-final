import { Character, CharactersAPIResponse } from '../types/characters';

/**
 * Función asincrona que retorna una promesa que resuelve en un listado de personajes con base en la pagina solicitada
 *
 * @param page el numero de la pagina que se va a traer
 *
 * @returns un array de Personajes con información extra sobre el llamado
 */
export const getCharactersByPage = async (page: number) => {
   const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);

   const data: CharactersAPIResponse = await response.json();

   return data;
};

/**
 * Función asincrona que retorna una promesa que resuelve en un personaje con base en el id recibido.
 *
 * @param id el id del personaje que se quiere traer
 *
 * @returns los detalles de un unico personaje
 */
export const getCharacterById = async (id: string) => {
   const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

   const data: Character = await response.json();

   return data;
};

/**
 * Función asincrona que retorna una promesa que resuelve en un listado de personajes con base en un nombre
 *
 * @param name el nombre de los personajes que se va a traer
 *
 * @returns un array de Personajes con información extra sobre el llamado
 */
export const getCharactersByName = async (name: string, page: number) => {
   const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${name}&page=${page}`
   );

   const data: CharactersAPIResponse = await response.json();

   return data;
};
