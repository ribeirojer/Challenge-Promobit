import style from "styled-components";

export const Wrapper = style.section`
    display: flex;
    height: 600px;
    background-color: #2D0C5D;
    color: #fff;
    padding-top: 4.5rem;

    @media (max-width: 360px) {
        flex-direction: column;
        height: unset;
        padding-top: unset;
        padding-bottom: 33px;
    }
`;
export const WrapperImage = style.div`
    margin: 0 33px 0 112px;

    @media (max-width: 360px) {
        margin: 34px auto 42px;
    }
    
`;
export const Image = style.img`
    height: 574px;
    border-radius: 0.5rem;
    
    @media (max-width: 360px) {
        width: 186px;
        height: 279px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
`;
export const Title = style.h1`
    font-size: 2rem;
    line-height: 38px;

    @media (max-width: 360px) {
        margin: 0 0 0 16px;
    }
`;
export const Info = style.p`
    line-height: 24px;
    font-size: 18px;
    
    @media (max-width: 360px) {
        margin: 3px 0 0 16px;
    }
`;
export const AvaliationWrapper = style.div`
    display: flex;
    align-items: center;
    height: 100px;
    margin-bottom: 1rem;
    position: relative;

    @media (max-width: 360px) {
        margin: 31px 0 31px 16px;
    }
`;
export const ScoreWrapper = style.div`
    border-radius: 50%;
    background: rgba(255,255,255,0.1);
    height: 61px;
    width: 61px;
    margin-right: 1rem;
`;
export const Score = style.p`
    font-weight: 700;
    font-size: 16px;
    line-height: 38px;
    display: flex;
    align-items: center;
    color: #14FF00;
    position: absolute;
    top: 31px;
    left: 17px;
`;
export const Subtitle = style.p`
    font-size: 20px;
    line-height: 24px;

    @media (max-width: 360px) {
        margin: 0 0 16px 16px;
    }
`;
export const Sinopse = style.p`
    max-width: 696px;
    min-height: 120px;
    line-height: 24px;
    color: #DDDDDD;

    @media (max-width: 360px) {
        font-size: 16px;
        line-height: 24px;
        margin: 0 14px 33px 18px;
    }
`;

/* Crew - Equipe Técnica */
export const Crew = style.div`
    padding: 0 2rem 2rem 0;
    min-width: 33%;

    @media (max-width: 360px) {
        margin-top: unset;
        padding: 0;
        width: 45%;
        margin-bottom: 23px;
    }
`;
export const WrapperCrew = style.div`
    margin-top: 24px;
    display: flex;
    flex-wrap: wrap;
    max-width: 700px;

    @media (max-width: 360px) {
        margin-left: 16px;
        margin-top: unset;
        ${Crew}:nth-child(3) {
            display: none;
        }
    }
`;
export const PersonCrew = style.h3`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
`;
export const ProfissionCrew = style.p`
    font-style: normal;
    font-size: 16px;
    line-height: 24px;
    color: #DDDDDD;
`;

/* Cast - Elenco */
export const Elencotitle = style.h2`
    margin: 74px 0 0 112px;
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
    display: flex;
    align-items: center;
    letter-spacing: -0.005em;
    color: #131313;

    @media (max-width: 360px) {
        margin: 40px 0 0 16px;
    }
`;
export const Elencocards = style.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 8px;
    gap: 16px;
    width: 191px;
    //height: 336px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;    
    margin: 0 8px 26px 0;
`;
export const ImageCast = style.img`
    width: 175px;
    height: 222px;
    border-radius: 4px;
`;
export const WrapperElenco = style.div`
    display: flex;
    overflow: auto;
    //height: 385px;
    margin: 24px 0 0 112px;
    max-width: 1191px;

    &::-webkit-scrollbar {
        width: 10px;
    }
    &::-webkit-scrollbar-thumb {
        height: 12px;
        background: #ADADAD;
        border-radius: 100px;
    }
    &::-webkit-scrollbar-track {
        width: 1231px;
        height: 12px;     
        background: #DDDDDD;
        border-radius: 100px;
    }
    
    @media (max-width: 360px) {
        margin: 10px 0 0 16px;
    }
`;
export const NameCast = style.h3`
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
    display: flex;
    align-items: center;
    color: #131313;
`;
export const CharacterCast = style.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #131313;
`;

/* Trailer */
export const TrailerTitle = style.h2`
    margin: 74px 0 0 112px;
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
    color: #131313;

    @media (max-width: 360px) {
        margin: 43px 0 14px 18px;
    }
`;
export const Iframe = style.iframe`
    margin: 24px 0 0 112px;

    @media (max-width: 360px) {
        width: 324px;
        height: 182px;
        margin: 0 0 0 20px;
    }
`;

/* Recomendations */
export const RecomendationsTitle = style.h2`
    margin: 64px 0 0 112px;
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
    color: #131313;

    @media (max-width: 360px) {
        margin: 49px 0 16px 24px;
    }
`;
export const RecomendationsWrapper = style.div`
    margin: 24px 0 0 112px;
    display: flex;

    @media (max-width: 360px) {
        flex-wrap: wrap;
        margin: 0 0 0 16px;
    }
`;
export const RecomendationsCard = style.div`
    margin: 0 24px 0 0;
    width: 176px;
    cursor: pointer;

    @media (max-width: 360px) {
        margin: 0 16px 0 0;
        width: 156px;
    }
`;
export const RecomendationsImage = style.img`
    width: 176px;
    height: 264px;
    border-radius: 4px;

    @media (max-width: 360px) {
        margin: 0 16px 0 0;
        width: 156px;
        height: 232px;
    }
`;
export const RecomendationsName = style.h3`
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #000000;

    @media (max-width: 360px) {
        font-size: 14px;
        line-height: 20px;
    }
`;
export const RecomendationsDate = style.p`
    margin-bottom: 532px;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: #646464;

    @media (max-width: 360px) {
        font-size: 12px;
        line-height: 18px;
        margin-bottom: 22px;
    }
`;