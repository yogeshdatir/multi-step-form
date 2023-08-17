import { useMediaQuery } from '../../utils/hooks/useMediaQuery';
import { IStep } from '../MultiStepForm';
import {
  StepCircle,
  SidebarContainer,
  StepList,
  Step,
  StepDetails,
  MobileSidebarContainer,
  MobileStepList,
} from './FormSidebar.styled';

interface IProps {
  currentStepIndex: number;
  stepDetails: IStep['detail'][];
  goto: (stepIndex: number) => void;
}

const FormSidebar = ({ currentStepIndex, stepDetails, goto }: IProps) => {
  const isMobileScreen = useMediaQuery('(max-width: 769px)');

  if (isMobileScreen) {
    return (
      <MobileSidebarContainer>
        <MobileStepList>
          {stepDetails.map((stepDetail: IStep['detail'], index: number) => {
            if (!stepDetail) return null;
            return (
              <Step key={index}>
                <StepCircle
                  aria-selected={currentStepIndex === index}
                  onClick={() => goto(index)}
                >
                  {index + 1}
                </StepCircle>
              </Step>
            );
          })}
        </MobileStepList>
      </MobileSidebarContainer>
    );
  }

  return (
    <SidebarContainer>
      <StepList>
        {stepDetails.map((stepDetail: IStep['detail'], index: number) => {
          if (!stepDetail) return null;
          return (
            <Step key={index}>
              <StepCircle
                aria-selected={currentStepIndex === index}
                onClick={() => goto(index)}
              >
                {index + 1}
              </StepCircle>
              <StepDetails>
                <p>{`step ${index + 1}`} </p>
                <h4>{stepDetail}</h4>
              </StepDetails>
            </Step>
          );
        })}
      </StepList>
    </SidebarContainer>
  );
};

export default FormSidebar;
