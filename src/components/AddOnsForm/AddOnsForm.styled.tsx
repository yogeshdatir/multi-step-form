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

/**
 * Reference for custom checkbox: https://medium.com/@colebemis/building-a-checkbox-component-with-react-and-styled-components-8d3aa1d826dd
 * Reference: https://github.com/emotion-js/emotion/issues/821#issuecomment-415697393
 * Following emotion component will create an input element with type 'checkbox'
 */
export const HiddenCheckbox = styled.input`
  // Hide checkbox visually but remain accessible to screen readers.
  // Source: https://polished.js.org/docs/#hidevisually
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

HiddenCheckbox.defaultProps = { type: 'checkbox', readOnly: true };

interface ICheckbox {
  checked: boolean;
}

export const StyledCheckbox = styled.div<ICheckbox>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 1px solid var(--border-color, #d6d9e6);
  background: ${({ checked }: ICheckbox) =>
    checked ? `var(--purple, #483EFF)` : `var(--white, #FFF)`};
  border-radius: 3.5px;
  transition: all 250ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px var(--purple, #483eff);
  }
  .check-icon {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`;

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;
