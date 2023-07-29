import {
  StepCircle,
  SidebarContainer,
  StepList,
  Step,
  StepDetails,
  SelectedStepCircle,
} from './FormSidebar.styled';

const FormSidebar = () => {
  return (
    <SidebarContainer>
      <StepList>
        <Step>
          <SelectedStepCircle>1</SelectedStepCircle>
          <StepDetails>
            <p>step 1</p>
            <h4>your info</h4>
          </StepDetails>
        </Step>
        <Step>
          <StepCircle>2</StepCircle>
          <StepDetails>
            <p>step 2</p>
            <h4>select plan</h4>
          </StepDetails>
        </Step>
        <Step>
          <StepCircle>3</StepCircle>
          <StepDetails>
            <p>step 3</p>
            <h4>add-ons</h4>
          </StepDetails>
        </Step>
        <Step>
          <StepCircle>4</StepCircle>
          <StepDetails>
            <p>step 4</p>
            <h4>summary</h4>
          </StepDetails>
        </Step>
      </StepList>
    </SidebarContainer>
  );
};

export default FormSidebar;
