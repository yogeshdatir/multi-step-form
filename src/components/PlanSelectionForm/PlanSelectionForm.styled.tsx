import styled from '@emotion/styled';

export const CardList = styled.div`
  display: flex;
  gap: 18px;

  @media only screen and (max-width: 769px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  padding: 1.25rem 1rem;
  border-radius: 8px;
  border: 1px solid var(--border-color, #d6d9e6);
  background: var(--white, #fff);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 138px;
  gap: 39px;
  cursor: pointer;

  &[aria-selected='true'] {
    border: 1px solid var(--purple, #483eff);
    background: var(--very-light-grey, #f8f9ff);
  }

  @media only screen and (max-width: 769px) {
    flex-direction: row;
    width: 100%;
    padding: 1rem;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
  }
`;

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const PlanTitle = styled.h5`
  color: var(--denim, #022959);
  font-family: Ubuntu;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
`;

export const PlanSubtitle = styled.p`
  color: var(--grey, #9699aa);
  font-feature-settings: 'clig' off, 'liga' off;

  /* Body (M) */
  font-family: Ubuntu;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const OfferText = styled.span`
  color: var(--denim, #022959);
  font-feature-settings: 'clig' off, 'liga' off;

  /* Body (S) */
  font-family: Ubuntu;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const SubPeriodSelector = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
  height: 3rem;
  border-radius: 0.5rem;
  background: var(--very-light-grey, #f8f9ff);

  span {
    color: var(--grey, #9699aa);
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Ubuntu;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    &[aria-selected='true'] {
      color: var(--denim, #022959);
      text-align: right;
      font-feature-settings: 'clig' off, 'liga' off;
      font-family: Ubuntu;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
`;

export const ToggleLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;

  text-align: right;

  color: grey;

  width: max-content;
`;

export const CheckBox = styled.input`
  position: absolute;
  left: -9999px;
  top: -9999px;

  :checked + span {
    ::before {
      left: calc(100% - 3px);
      transform: translateX(-100%);
    }
  }

  :focus + span {
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.2);
  }

  :focus:checked + span {
    box-shadow: 0 0 5px 3px rgba(24, 144, 255, 0.5);
  }
`;

export const Slider = styled.span`
  display: flex;
  cursor: pointer;
  width: 48px;
  height: 24px;
  border-radius: 48px;
  background-color: #022959;
  position: relative;
  transition: background-color 0.3s, box-shadow 0.4s;

  ::before {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    width: 18px;
    height: 18px;
    border-radius: 18px;
    transition: 0.25s;
    background-color: #fff;
    /* box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2); */
  }

  :active:before {
    width: 35px;
  }
`;
