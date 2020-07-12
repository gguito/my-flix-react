import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width:100%;
    overflow:hidden;
`;

export const ActiveMovieContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width:100%;
    overflow:hidden;

    h1 {
        padding: 0 55px;
        color: #FFFFFF;
        font-size: 5rem;
        font-weight: bold;
        font-family: Roboto, sans-serif;
    }

    p {
        padding: 0 55px;
        color: #8F0404;
        font-size: 2rem;
        font-weight: bold;
        font-family: Roboto, sans-serif;
    }
`;

export const ActiveMovieContainerWrapper = styled.div`
    position: absolute;
    height: 100%;
    width:100%;
    overflow:hidden;

    .movie-text-container {
        background: #0000002e;
        height: auto;
        width: 20em;
        position: relative;
        top: 5em;
        border-radius: 10px;

        svg {
            margin-right: 5px;
        }

        button {
            color: #eeeeee90;
            font-size: 1.3em;
            background: none;
            border: none;
            margin: 20px 0px 10px 55px;
        }
    }

`;

export const MenuContainer = styled.div`
    display: flex;

`;