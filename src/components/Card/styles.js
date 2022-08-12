import styled, { css } from "styled-components";
export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 96%;
  height: 5.125rem;
  margin-left: 0.2rem;
  margin-right: 0.5rem;
  margin-bottom: 2rem;
  border-radius: 0.5rem;
  background-color: var(--grey-1);

  ${(props) =>
    props.transaction === "Entrada"
      ? css`
          border-left: 0.5rem var(--color-secondary) solid;
        `
      : css`
          border-left: 0.5rem var(--grey-2) solid;
        `};

  .cardDescricao {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 1.125rem;
  }

  .cardDescricao h2 {
    font-family: var(--font--main);
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: var(--grey-4);
    margin-top: 0.5rem;
  }
  .cardDescricao span {
    font-family: var(--font--main);
    font-style: "regular";
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: #343a40;
    margin-bottom: 0.5rem;
  }

  .cardValor {
    display: flex;
    justify-content: space-between;
    background-color: var(--grey-1);
    width: 20%;
    border-radius: 0.5rem;
  }
  .cardValor span {
    font-family: var(--font--main);
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: var(--grey-4);
    margin-top: 1.125rem;
  }

  .cardValor button {
    background-color: var(--grey-2);
    height: 1.375rem;
    width: 1.375rem;
    border-radius: 0.154rem;
    border: none;
    cursor: pointer;
    margin-top: 1.125rem;
    margin-right: 0.813rem;
  }

  .cardValor button:hover {
    background: var(--grey-3);
    border-radius: 0.154rem;
  }
`;
