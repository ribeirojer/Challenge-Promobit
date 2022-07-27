import style from "styled-components";

/* navbar */
export const NavbarWrapper = style.div`
    background-color: #5C16C5;
    height: 56px;
`;
export const Logo = style.div`
    margin: 16px 0 0 7rem;
`;

/* home */
export const Wrapper = style.header`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin: 0 auto;
`;
export const Home = style.div`
    background-color: #2D0C5D;
    color: #fff;
    height: 449px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 360px) {
        height: unset;
        align-items: flex-start;
    }
`;
export const H1 = style.h1`
    font-size: 3rem;
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -0.005em;
    
    @media (max-width: 360px) {
        font-size: 24px;
        line-height: 28px;
        margin: 40px 0 0 16px;
        width: 280px;
    }
`;
export const BR = style.br`
    display: block;
    
    @media (max-width: 360px) {
        display: none;
    }
`;
export const SPAN = style.span`
    display: flex;
    justify-content: center;
    
    @media (max-width: 360px) {
        display: unset;
    }
`;
export const Paragraph = style.p`
    margin-top: 40px;
    margin-bottom: 1rem;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;

    @media (max-width: 360px) {
        margin: 36px 0 8px 16px;
    }
`;
export const WrapperButton = style.div`
    width: 78%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: 360px) {
        width: unset;
        justify-content: flex-start;
        margin: 0 0 0 16px;
        padding-bottom: 40px;
    }
`;
export const Button = style.button`
    background-color: #fff;
    color: #323232;
    padding: 8px 16px;
    border-radius: 4px;
    border: none;
    margin: 0 0.3rem 0.6rem;
    font-weight: bold;
    font-size: 1rem;
    transition: 0.2s;
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 8px;
    height: 40px;

    &:hover {
        background-color: #cecece;
    }
    @media (max-width: 360px) {
        padding: 6px 16px;
        margin: 0 12px 12px 0;
    }
`;
export const SpanButton = style.span`
    display: none;
    padding: 0 0 0 5px;
    color: #D18000;
`;

/* list */
export const WrapperList = style.section`
    display: flex;
    max-width: 90%;
    flex-wrap: wrap;
    justify-content: center;
    margin: 29px auto 0;
    
    @media (max-width: 360px) {
        justify-content: flex-start;
        max-width: unset;
        margin: 32px 0 0 16px;
    }
`;
export const CardList = style.div`
    min-height: 280px;
    width: 160px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 1rem 1rem 1rem;
    cursor: pointer;
    @media (max-width: 360px) {
        margin: 0 16px 0 0;
        width: 156px;
    }
`;
export const ImageList = style.img`
    height: 230px;
    width: 160px;
    border-radius: 4px;

    @media (max-width: 360px) {
        width: 156px;
    }
`;
export const TitleList = style.h3`
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: #000000;
    
    @media (max-width: 360px) {
        margin-top: 10px;
        line-height: 20px;
    }
`;
export const DateList = style.p`
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;    
    color: #646464;
    
    @media (max-width: 360px) {
        font-size: 12px;
        line-height: 18px;
        margin-bottom: 33px;
    }
`;
export const ButtonList = style.button`
    font-size: 1.3rem;
    color: #5C16C5;
    padding: 0.5rem;
    margin-right: 0.5rem;
    background: #E5E5E5;
    border: none;
    font-weight: 500;
    cursor: pointer;
`;
export const ButtonListWrapper = style.div`
    display: flex;
    justify-content: center;
    margin: 3rem 0 433px;

    @media (max-width: 360px) {
        ${ButtonList}:nth-child(4),
        ${ButtonList}:nth-child(5) {
            display: none;
        }
    }
`;