import styled from '@emotion/styled';

export const Invoice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Cart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 0.5rem;
  background: var(--very-light-grey, #f8f9ff);
  padding: 1rem 1.5rem 1.5rem 1.5rem;
`;

export const RightPane = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 7px;
`;

export const SelectedPlan = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 0.5rem;
`;

export const Divider = styled.hr`
  opacity: 0.2043;
  background: var(--grey, #9699aa);
  width: 100%;
  height: 1px;
  margin: 0;
`;

export const AddOnRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TotalPrice = styled.span`
  color: var(--purple, #483eff);
  text-align: right;
  font-family: Ubuntu;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 100% */
`;

export const TotalRow = styled(AddOnRow)`
  padding: 1rem 1.5rem 1.5rem 1.5rem;
`;
