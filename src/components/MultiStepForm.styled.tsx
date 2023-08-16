import styled from '@emotion/styled';
import mobileSidebarBg from '../assets/images/bg-sidebar-mobile.svg';

export const FormContainer = styled.div`
  padding: 1rem;
  background: var(--white, #fff);
  min-width: 320px;
  max-width: 940px;
  min-height: 600px;
  display: flex;
  gap: 100px;
  border-radius: 15px;

  @media only screen and (max-width: 376px) {
    gap: 0;
    min-height: auto;
    border-radius: 0;
  }
`;

export const MobileFormContainer = styled(FormContainer)`
  background: top / contain no-repeat url(${mobileSidebarBg}) var(--bg, #eff5ff);
  flex-direction: column;
  margin-bottom: 82px;
  padding-bottom: 1.5rem;
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

export const MobileMain = styled(Main)`
  border-radius: 10px;
  background: var(--white, #fff);
  box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);
  padding: 2rem 1.5rem;
`;

export const FormContent = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  padding: 2.5rem 0 1rem 0;
  gap: 35px;

  @media only screen and (max-width: 376px) {
    padding: 0;
  }
`;

export const ThankYouContent = styled(FormContent)`
  padding: 0;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
