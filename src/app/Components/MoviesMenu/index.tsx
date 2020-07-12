import React, {useState, useCallback} from 'react'

import { Movie } from '../../movies';

import { MoviesContainer } from './styles';

interface IMoviesProps {
    moviesData: Movie[] | undefined,
    handleSetMovie: (mov: Movie) => void;
}

export default function MoviesMenu({ moviesData, handleSetMovie }: IMoviesProps) {
    const [isActive, setIsActive] = useState(false);

    const setMovie = useCallback(async (movieChange: Movie) => {
        setIsActive(true);
        handleSetMovie(movieChange);
    },[])

    return (
        <MoviesContainer>
            {
                moviesData!.map(movie => (
                    <div key={movie.id} className="item" onClick={() => {setMovie(movie)}}>
                        <img className="thumbnail" src={movie.thumb_url} alt={movie.name} />
                    </div>
                ))
            }
        </MoviesContainer>
    )
}