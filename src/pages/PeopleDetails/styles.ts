import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  > div {
  }
  > div {
    align-items: center;
    display: flex;
    justify-content: center;
  }
`;

export const Header = styled.header`
  padding: 32px 0;
  background: #000000;
`;
export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  a {
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;
    > svg {
      color: #fff;
      font-size: 20px;
    }
  }
  h1 {
    margin-left: 20px;
    color: #feda4a;
    font-family: star jedi;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  background: #cecece;
  height: 375px;
  width: 325px;
  margin-top: 80px;
  align-self: center;
  border-radius: 15px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    padding: 12px 0;
    height: 190px;
    width: 190px;
    border-radius: 10px;
  }
  h1 {
    margin-top: 10px;
  }
  > div {
    padding: 7px 0;
    display: flex;
    height: 70%;
    width: 100%;
    flex-direction: column;

    span {
      padding: 0 13px;
      margin-top: 2px;
      align-self: flex-start;
    }
  }

  /* div {
    align-items: flex-start;
    justify-content: flex-start;
  } */
`;
export const CardSimple = styled.div`
  display: flex;
  background: #a1a2b1;
  height: 185px;
  width: 255px;
  margin-top: 40px;
  align-self: flex-start;
  margin-left: 15px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  div {
    display: flex;
    > svg {
      margin-right: 5px;
    }
  }
`;
