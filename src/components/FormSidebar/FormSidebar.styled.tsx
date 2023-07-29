import styled from '@emotion/styled';
import desktopSidebarBg from '../../assets/images/bg-sidebar-desktop.svg';

export const SidebarContainer = styled.div`
  width: 274px;
  border-radius: 10px;
  background: url(${desktopSidebarBg}) no-repeat center center;
  background-size: cover;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
`;

export const StepList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Step = styled.div`
  display: flex;
  gap: 1rem;
`;

export const StepCircle = styled.span`
  width: 33px;
  height: 33px;
  border-radius: 50%;
  border: 1px solid var(--white, #fff);
  color: var(--white, #fff);
  text-align: center;
  font-family: Ubuntu;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SelectedStepCircle = styled.span`
  width: 33px;
  height: 33px;
  border-radius: 50%;
  border: 1px solid var(--white, #fff);
  background-color: var(--white, #fff);
  color: var(--denim, #022959);
  text-align: center;
  font-family: Ubuntu;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StepDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.25rem;
  text-transform: uppercase;

  p {
    color: var(--light-blue, #abbcff);
    font-feature-settings: 'clig' off, 'liga' off;

    /* Body (S) */
    font-family: Ubuntu;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  h4 {
    color: var(--white, #fff);
    font-family: Ubuntu;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1px;
  }
`;
