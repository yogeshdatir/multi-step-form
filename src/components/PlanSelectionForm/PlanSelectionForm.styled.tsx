import styled from '@emotion/styled';

export const CardList = styled.div`
  display: flex;
  gap: 18px;
`;

export const Card = styled.div`
  padding: 1.25rem 1rem;
  border-radius: 8px;
  border: 1px solid var(--purple, #483eff);
  background: var(--very-light-grey, #f8f9ff);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 138px;
  height: 160px;
`;

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;

  h5 {
    color: var(--denim, #022959);
    font-family: Ubuntu;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  p {
    color: var(--grey, #9699aa);
    font-feature-settings: 'clig' off, 'liga' off;

    /* Body (M) */
    font-family: Ubuntu;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
