import { useState } from 'react';
import AddOnsForm from '../components/AddOnsForm';
import InvoiceConfirmationForm from '../components/InvoiceConfirmationForm';
import { IStep } from '../components/MultiStepForm';
import PlanSelectionForm from '../components/PlanSelectionForm';
import ThankYouPage from '../components/ThankYouPage';
import UserForm from '../components/UserForm';

const useStepForm = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

  const goBack = () => {
    setCurrentStepIndex((prevStepIndex: number) => {
      if (prevStepIndex) return prevStepIndex - 1;
      return prevStepIndex;
    });
  };

  const next = () => {
    setCurrentStepIndex((prevStepIndex: number) => {
      if (prevStepIndex < steps.length - 1) return prevStepIndex + 1;
      return prevStepIndex;
    });
  };

  const goto = (stepIndex: number) => {
    setCurrentStepIndex((prevStepIndex: number) => {
      if (stepIndex < steps.length - 1 && stepIndex > -1) return stepIndex;
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
    {
      detail: 'summary',
      element: <InvoiceConfirmationForm next={next} goBack={goBack} />,
    },
    {
      detail: undefined,
      element: <ThankYouPage />,
    },
  ];

  const stepDetails = steps.map((step: IStep) => step.detail);

  return {
    currentStepIndex,
    next,
    goBack,
    goto,
    stepDetails,
    currentStepForm: steps[currentStepIndex].element,
  };
};

export default useStepForm;
