import styled from '@emotion/styled';

export const AddOnCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 18px 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid var(--border-color, #d6d9e6);
  background: var(--white, #fff);
  cursor: pointer;

  &[aria-selected='true'] {
    border: 1px solid var(--purple, #483eff);
    background: var(--very-light-grey, #f8f9ff);
  }
`;

export const AddOnDetail = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 7px;
`;

export const AddOnTitle = styled.h3`
  color: var(--denim, #022959);
  font-family: Ubuntu;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const AddOnDescription = styled.p`
  color: var(--grey, #9699aa);
  font-family: Ubuntu;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
`;

export const AddOnPrice = styled.span`
  margin-left: auto;
  color: var(--purple, #483eff);
  text-align: right;
  font-family: Ubuntu;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
`;
