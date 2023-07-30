import { ReactElement, useState } from 'react';
import FormSidebar from './FormSidebar/FormSidebar';
import { FormContainer } from './MultiStepForm.styled';
import PlanSelectionForm from './PlanSelectionForm';
import UserForm from './UserForm';
import AddOnsForm from './AddOnsForm';

export interface IStepInteraction {
  next: () => void;
  goBack: () => void;
}

export interface IStep {
  detail: string;
  element: ReactElement;
}

const MultiStepForm = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

  const goBack = () => {
    setCurrentStepIndex((prevStepIndex: number) => {
      if (prevStepIndex > 0) return prevStepIndex - 1;
      return prevStepIndex;
    });
  };

  const next = () => {
    setCurrentStepIndex((prevStepIndex: number) => {
      if (prevStepIndex < steps.length - 1) return prevStepIndex + 1;
      return prevStepIndex;
    });
  };

  const steps: IStep[] = [
    { detail: 'your info', element: <UserForm next={next} /> },
    {
      detail: 'select plan',
      element: <PlanSelectionForm next={next} goBack={goBack} />,
    },
    {
      detail: 'add-ons',
      element: <AddOnsForm next={next} goBack={goBack} />,
    },
  ];

  const stepDetails = steps.map((step: IStep) => step.detail);

  return (
    <FormContainer>
      <FormSidebar
        currentStepIndex={currentStepIndex}
        stepDetails={stepDetails}
      />
      {/* TODO: Add transition for step shuffling */}
      {steps[currentStepIndex].element}
    </FormContainer>
  );
};

export default MultiStepForm;
