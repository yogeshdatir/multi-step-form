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

export const FieldLabel = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Label = styled.p`
  color: var(--denim, #022959);
  font-feature-settings: 'clig' off, 'liga' off;

  /* Body (M) */
  font-family: Ubuntu;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const FieldError = styled.span`
  color: var(--red-errors, #ee374a);
  text-align: right;
  font-family: Ubuntu;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const FieldInput = styled.input`
  border-radius: 8px;
  border: 1px solid var(--border-color, #d6d9e6);
  background: var(--white, #fff);
  height: 48px;
  padding: 0 1rem;
  width: 100%;
  outline: none;

  color: var(--denim, #022959);
  font-family: Ubuntu;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  ::placeholder {
    color: var(--grey, #9699aa);
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Ubuntu;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px; /* 156.25% */
  }

  :focus {
    border: 1px solid var(--purple, #483eff);
  }

  &[aria-invalid='true'] {
    border: 1px solid var(--red-errors, #ee374a);
  }
`;

export const FormFooter = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 769px) {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 1rem;
    margin: 0;
    background: var(--white, #fff);
    box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);
  }
`;

export const MobileFormFooter = styled.div`
  width: 100%;
  position: static;
  bottom: 0;
  padding: 1rem;
  background: var(--white, #fff);
  box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);
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

export const LinkButton = styled(SecondaryButton)`
  color: var(--grey, #9699aa);
  font-family: Ubuntu;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  text-decoration-line: underline;

  padding: 0;

  :hover {
    color: var(--purple, #483eff);
  }
`;
