import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    padding: 75px 100px;
    height: calc(100vh - 80px - 60px);

    div:nth-child(1) {
        margin-right: 40px;
    }

    @media screen and (max-width: 800px) {
        padding: 15px 25px;
        flex-direction: column;
        align-items: center;
        height: unset;

        div:nth-child(1) {
            margin-right: 0;
        }
    }
`;

export const Column = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 800px) {
       width: 100%;
       margin: 20px 0;
       text-align: center;
       align-items: center;  
    }
`;

export const Title = styled.h1`
    color: black;
    font-size: 56px;
    font-weight: bold;
    line-height: 55px;

    @media screen and (max-width: 1000px) {
        font-size: 46px;
        line-height: 44px;
    }

    @media screen and (max-width: 600px) {
        font-size: 40px;
        line-height: 41px;
    }
`;

export const Text = styled.p`
    color: black;
    margin: 20px 0 0 0;
    width: 70%;
    line-height: 25px;
    font-size: 18px;
    font-weight: 400;

    &:nth-child(1) {
        font-size: 22px;
    }

    @media screen and (max-width: 800px) {
       width: 100%;
    }
`;

export const Hero = styled.img`
    width: 100%;

    &:hover {
        transform: rotateZ(-10deg);
        transition: linear 0.3s;
    }

    @media screen and (max-width: 800px) {
    }
`;