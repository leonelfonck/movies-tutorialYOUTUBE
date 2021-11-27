const API = "https://api.themoviedb.org/3";

export function get(path){
   return fetch(API + path, {
      headers: {
        Authorization: 
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZGRkZjE0ODFjZmQ4ZThkODhiZWFiZjY4Y2EwM2Y3ZCIsInN1YiI6IjYxOGQzZGEzYTMxM2I4MDA0MmRmMDU1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rCtCGpknXaqW2aoPAj-J9wevOnd-zMQaHJZQOwL8amE",
        "Content-Type" : "application/json;charset=utf-8",
      },
                            })
   .then((result) => result.json()); //el nombre de result puede ser cualquiera
}