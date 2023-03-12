import styled from "styled-components";

export const Wrapper = styled.div`
margin-top:0%;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  grid-column-gap: 4rem;

  @media (max-width: 991.98px) {
    border-radius: 25px;
    grid-template-columns: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 2rem;
  }

  @media (max-width: 767.98px) {
    grid-row-gap: 0rem;
  }

  .right {
    color: var(--text-light);

    .description {
      line-height: 30px;
      font-weight: 400;

      &:last-of-type {
        margin-top: 1rem;
        margin-bottom: 24px;
      }
    }

    .btnContainer button {
      @media (max-width: 575.98px) {
        min-width: 120px;
      }

      @media (max-width: 380.98px) {
        min-width: 110px;
        font-size: 12px;
      }

      &:last-of-type {
        margin-left: 1rem;
      }
    }
  }

  .left {
    width: 100%;

    @media (min-width: 768px) and (max-width: 991.98px) {
      & > span {
        height: 400px !important;
      }
    }
  }
`;
