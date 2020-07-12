import styled from 'styled-components';

export const MoviesContainer = styled.div`
    display: flex;
    padding: 0 55px;
    background: none;
    position: absolute;
    bottom: 2em;

    .item {
        background: green;
        flex: 0 0 19.7%;
        text-align: center;
        margin: 0 2px;
        transition: transform 300ms ease 100ms;

        img {
          width: 100%;
          height: 100%;
        }
    }

    :hover .item {
        transform: translateX(-25%);
    }
    
    .item:hover ~ .item {
        transform: translateX(25%);
    }

    .item:hover {
    transform: scale(1.5) !important;
    }
`;