import { IStep } from '../MultiStepForm';
import {
  StepCircle,
  SidebarContainer,
  StepList,
  Step,
  StepDetails,
} from './FormSidebar.styled';

interface IProps {
  currentStepIndex: number;
  stepDetails: IStep['detail'][];
}

const FormSidebar = ({ currentStepIndex, stepDetails }: IProps) => {
  return (
    <SidebarContainer>
      <StepList>
        {stepDetails.map((stepDetail: IStep['detail'], index: number) => {
          if (!stepDetail) return null;
          return (
            <Step>
              <StepCircle aria-selected={currentStepIndex === index}>
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
