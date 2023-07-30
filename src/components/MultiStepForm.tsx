import { ReactElement, useState } from 'react';
import FormSidebar from './FormSidebar/FormSidebar';
import { FormContainer } from './MultiStepForm.styled';
import PlanSelectionForm from './PlanSelectionForm';
import UserForm from './UserForm';
import { ReactComponent as ArcadeImage } from '../assets/images/icon-arcade.svg';
import { ReactComponent as AdvancedImage } from '../assets/images/icon-advanced.svg';
import { ReactComponent as ProImage } from '../assets/images/icon-pro.svg';

export interface IStepInteraction {
  next: () => void;
  goBack: () => void;
}

export interface IStep {
  detail: string;
  element: ReactElement;
}

export interface ISubscriptionPlan {
  name: string;
  image: ReactElement;
  prices: {
    monthly: number;
    yearly: number;
  };
}

const MultiStepForm = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

  const subscriptionPlans: ISubscriptionPlan[] = [
    {
      name: 'arcade',
      image: <ArcadeImage />,
      prices: {
        monthly: 9,
        yearly: 90,
      },
    },
    {
      name: 'advanced',
      image: <AdvancedImage />,
      prices: {
        monthly: 12,
        yearly: 120,
      },
    },
    {
      name: 'pro',
      image: <ProImage />,
      prices: {
        monthly: 15,
        yearly: 150,
      },
    },
  ];

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
      element: (
        <PlanSelectionForm
          next={next}
          goBack={goBack}
          subscriptionPlans={subscriptionPlans}
        />
      ),
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
