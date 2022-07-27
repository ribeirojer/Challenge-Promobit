import { useState, useEffect } from 'react'

const useMergeData = ({ data, dados }) => {
    
    let films = [];
    console.log(data)
        data.map((film)=>{
        if(filter[0]===0){
            films.push(film);
        } else {
            filter.map((genero)=>{
            if(film.genre_ids.includes(genero)) {
                films.push(film);
            }
            });
        }
        });
        
        dados.data.map((film)=>{
        if(filter[0]===0){
            films.push(film);
        } else {
            filter.map((genero)=>{
            if(film.genre_ids.includes(genero)) {
                films.push(film);
            }
            });
        }
        });

  
  films = films.filter(function (a) {//essa função remove filmes duplicados
    return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
  }, Object.create(null))


  return films;
}

export default useMergeData;