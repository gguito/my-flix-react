import React, {useEffect, useState } from 'react';
import { FaPlay } from 'react-icons/fa'

import { Movie } from "../../movies";
import MoviesMenu from '../../Components/MoviesMenu';

import api from '../../services/api';

import { Container, ActiveMovieContainer, ActiveMovieContainerWrapper } from './styles';

export default function Home() {
    const [movies, setMovies] = useState<Movie[]>([] as Movie[]);
    const [movieChange, setMovieChange] = useState({} as Movie);

    useEffect(() => {
        async function fetchData(): Promise<void> {
            const { data } = await api.get('movies');
            setMovies(data);            
        }
        fetchData();
    },[]);

    function handleSetMovie(mov: Movie) {
        setMovieChange(mov);
        console.log(mov);
    }
    
    return (
        <Container>
            <ActiveMovieContainerWrapper>
                <ActiveMovieContainer style={movieChange ? {backgroundImage: `url(${movieChange.image_url})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'} : undefined}>
                    <div className="movie-text-container">
                        <h1>{movieChange ? movieChange.name : null}</h1>
                        <p>{movieChange ? movieChange.description : null}</p>
                        <div>
                            {movieChange.id ? <button type="button" className="movie-button">
                                <FaPlay size={22}/>
                                PLAY
                            </button> : null}
                        </div>
                    </div>
                <MoviesMenu moviesData={movies} handleSetMovie={handleSetMovie} />
                </ActiveMovieContainer>
            </ActiveMovieContainerWrapper>
        </Container>
    )
}
