import { ReactElement } from 'react';
import FormSidebar from './FormSidebar/FormSidebar';
import { FormContainer, Main } from './MultiStepForm.styled';
import useStepForm from '../hooks/useStepForm';

export interface IStepInteraction {
  next: () => void;
  goBack: () => void;
}

export interface IStep {
  detail: string | undefined;
  element: ReactElement;
}

const MultiStepForm = () => {
  const { currentStepIndex, stepDetails, goto, currentStepForm } =
    useStepForm();

  return (
    <FormContainer>
      <FormSidebar
        currentStepIndex={currentStepIndex}
        stepDetails={stepDetails}
        goto={goto}
      />
      {/* TODO: Add transition for step shuffling */}
      <Main>{currentStepForm}</Main>
    </FormContainer>
  );
};

export default MultiStepForm;
