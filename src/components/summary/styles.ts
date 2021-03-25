import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;
      
  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(text-title);

    header {
      display: flex;
      justify-content: space-between;
      align-itens: center;
    }

    strong {
      font-size: 2rem; 
      font-weight: 500;
      margin-top: 1rem;
      display: block;
    }

    &.highlight-background {
      background: var(--green);
      color: var(--shape);
    }
  }
`
