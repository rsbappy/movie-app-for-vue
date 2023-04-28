import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'




export const useMovieStore = defineStore('movie', {
  state: () => ({
    search: ref(null),
    movies: ref([]),
    movieCount: ref(0),
    singleMovie: null
  }),


  getters: {},
  actions: {



      async searchMovies(){
          if (this.search !=="") {
              const {data}= await axios.get(`http://www.omdbapi.com/?apikey=231a7962&s=${this.search}`)
              console.log(data);

              this.movies =data.Search;
              this.movieCount = data.totalResults;
          }
      },



      async getSingleMovie(id){
        if (this.search !=="") {
            const {data}= await axios.get(`http://www.omdbapi.com/?apikey=231a7962&i=${id}&plot=short`)

            this.singleMovie = data;
        }
    }
  },


  })

