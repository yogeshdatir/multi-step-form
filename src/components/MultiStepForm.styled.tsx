import styled from '@emotion/styled';

export const FormContainer = styled.div`
  padding: 1rem;
  background: var(--white, #fff);
  width: 100%;
  min-width: 320px;
  min-height: 100vh;
  display: flex;
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

export const FormContent = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  padding: 2.5rem 0 1rem 0;
  gap: 35px;
`;

export const ThankYouContent = styled(FormContent)`
  padding: 0;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
