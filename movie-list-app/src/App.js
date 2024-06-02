import React, { useState, useEffect, useRef } from 'react';
import MovieList from './components/MovieList';
import axios from 'axios';
import './App.css';
import { BeatLoader } from 'react-spinners';
import toast, { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import { debounce } from 'lodash';

function App() {
  const [movies, setMovies] = useState([]);
  const [genreMap, setGenreMap] = useState({});
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [year, setYear] = useState(2012);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      console.log(scrollTop, scrollHeight, clientHeight , scrollHeight - scrollTop);
      if (scrollTop === 0) {
        if (year > 1900) {
          setYear(year - 1);
        }
      } else if (Math.ceil(scrollHeight - scrollTop) === clientHeight) {
        
        if (year < 2024) {
          setYear(year + 1);
        }
        window.scrollTo({ top: scrollTop - 50, behavior: 'smooth' });
      }
    }, 700);

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [year]);
  useEffect(() => {
    setLoading(true);
    const apiUrl = 'https://api.themoviedb.org/3/discover/movie';
    const params = {
      api_key: 'a8ca1e5383764b7726bd513a5f180178',
      sort_by: 'popularity.desc',
      primary_release_year: year,
      page: 1,
      vote_count: { gte: 100 },
    };
    if (selectedGenre.length > 0) {
      params.with_genres = selectedGenre.join('|');
    }
    axios
      .get(apiUrl, { params })
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        if (error.response) {
          toast.error(error.response.data);
          console.error('Response error:', error.response.data);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [year, selectedGenre]);

  useEffect(() => {
    setMovies([]);
    setYear(2012);
  }, [selectedGenre]);

  useEffect(() => {
    (async () => {
      const genresUrl = 'https://api.themoviedb.org/3/genre/movie/list';
      const params = {
        api_key: 'a8ca1e5383764b7726bd513a5f180178',
        language: 'en-US',
      };
      try {
        const response = await axios.get(genresUrl, { params });
        const genreMap = response.data.genres.reduce((map, genre) => {
          map[genre.id] = genre.name;
          return map;
        }, {});
        setGenreMap(genreMap);
      } catch (error) {
        toast.error('An error occurred');
        console.error('Error:', error.message);
      }
    })();
  }, []);

  return (
    <div className="app">
      <Toaster />
      <Header
        genreMap={genreMap}
        setSelectedGenre={setSelectedGenre}
        selectedGenre={selectedGenre}
      />
      <div className="movie-container" ref={containerRef}>
        {loading ? (
          <div className='scroll-loader'>
            <BeatLoader color="#e7e7e7" />
          </div>
        ) : null}
        <MovieList movies={movies} genreMap={genreMap} />
        {loading && movies.length === 0 ? (
          <div className="loader">
            <BeatLoader color="#e7e7e7" />
          </div>
        ) : null}
        {loading ? (
          <div className='scroll-loader'>
            <BeatLoader color="#e7e7e7" />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
