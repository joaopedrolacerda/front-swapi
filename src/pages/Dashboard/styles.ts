import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  > h1 {
    margin-top: 20px;
    font-size: 45px;
    align-self: center;
  }
  > span {
    margin-top: 12px;
    font-size: 25px;
    align-self: center;
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

  h1 {
    margin-left: 20px;
    color: #feda4a;
    font-family: star jedi;
  }
  > img {
    height: 80px;
    width: 80px;
    filter: invert(100%);
  }
`;

export const Cards = styled.div`
  /* margin-left: 720px; */
  align-self: center;
  margin-top: 150px;
  max-width: 1150px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  div {
    display: flex;
    /* border: 1px solid #f23; */
    width: 90%;
    height: 200px;

    border-radius: 15px;
    background: #a8a8b3;
    align-items: center;
    justify-content: center;

    span {
      align-self: center;
      font-size: 25px;
      color: #fff;
      position: absolute;
      font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    }
    img {
      height: 100%;
      width: 100%;
      border-radius: 15px;
    }
  }
`;
