import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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

export const ListPeople = styled.div`
  margin-top: 10px;
  width: 70%;
  padding: 10px 0;
  align-self: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* border: 1px solid red; */
  a {
    background: #a8a8b2;
    border-radius: 5px;
    width: 70%;
    padding: 25px;
    text-decoration: none;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.2s;
    margin-top: 20px;

    /* & + a {
      margin-top: 26px;
    } */
    svg {
      align-self: center;
      color: #cbcbd6;
      margin-bottom: 20px;
    }
    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      margin-bottom: 20px;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        text-align: center;
        font-size: 20px;
        color: #3d3d4d;
      }
      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
  }
`;
