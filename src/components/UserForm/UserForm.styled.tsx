import styled from '@emotion/styled';

export const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
`;

export const FormTitle = styled.h1`
  color: var(--denim, #022959);
  font-feature-settings: 'clig' off, 'liga' off;

  /* Heading */
  font-family: Ubuntu;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const FormSubtitle = styled.p`
  color: var(--grey, #9699aa);
  font-feature-settings: 'clig' off, 'liga' off;

  /* Body (L) */
  font-family: Ubuntu;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 156.25% */
`;

export const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
`;

export const FieldLabel = styled.p`
  color: var(--denim, #022959);
  font-feature-settings: 'clig' off, 'liga' off;

  /* Body (M) */
  font-family: Ubuntu;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const FieldInput = styled.input`
  border-radius: 8px;
  border: 1px solid var(--border-color, #d6d9e6);
  background: var(--white, #fff);
  height: 48px;
  padding: 0 1rem;
  width: 100%;

  ::placeholder {
    color: var(--grey, #9699aa);
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Ubuntu;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px; /* 156.25% */
  }
`;

export const FormFooter = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
`;

export const PrimaryButton = styled.button`
  padding: 1rem 1.5rem;
  border-radius: 8px;
  border: none;
  background: var(--denim, #022959);
  color: var(--white, #fff);
  font-family: Ubuntu;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: auto;
  cursor: pointer;
`;

export const SecondaryButton = styled.button`
  padding: 1rem 0;
  border-radius: 8px;
  border: none;
  background: transparent;
  color: var(--grey, #9699aa);
  font-family: Ubuntu;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
`;

export const TertiaryButton = styled(PrimaryButton)`
  background: var(--purple, #483eff);
`;
