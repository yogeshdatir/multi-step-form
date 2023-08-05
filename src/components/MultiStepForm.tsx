import { ReactElement } from 'react';
import FormSidebar from './FormSidebar/FormSidebar';
import { FormContainer, Main } from './MultiStepForm.styled';
import useStepForm, { IFormData } from '../hooks/useStepForm';
import { ReactComponent as ArcadeImage } from '../assets/images/icon-arcade.svg';
import { ReactComponent as AdvancedImage } from '../assets/images/icon-advanced.svg';
import { ReactComponent as ProImage } from '../assets/images/icon-pro.svg';

export interface IStepInteraction {
  next: () => void;
  goBack: () => void;
  subscriptionPlans?: ISubscriptionPlan[];
  addOns?: IAddOn[];
  formData: IFormData;
  setFormData: React.Dispatch<React.SetStateAction<IFormData>>;
}

export interface IStep {
  detail: string | undefined;
  element: ReactElement;
}
export interface ISubscriptionPlan {
  id: number;
  name: string;
  image: ReactElement;
  prices: {
    monthly: number;
    yearly: number;
  };
  offerDetails: {
    monthly?: string;
    yearly?: string;
  };
}
export interface IAddOn {
  id: number;
  title: string;
  description: string;
  prices: {
    monthly: number;
    yearly: number;
  };
}

const addOns: IAddOn[] = [
  {
    id: 1,
    title: 'Online service',
    description: 'Access to multiplayer games',
    prices: {
      monthly: 1,
      yearly: 10,
    },
  },
  {
    id: 2,
    title: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    prices: {
      monthly: 2,
      yearly: 20,
    },
  },
  {
    id: 3,
    title: 'Customizable profile',
    description: 'Custom theme on your profile',
    prices: {
      monthly: 2,
      yearly: 20,
    },
  },
];

const MultiStepForm = () => {
  const subscriptionPlans: ISubscriptionPlan[] = [
    {
      id: 100,
      name: 'arcade',
      image: <ArcadeImage />,
      prices: {
        monthly: 9,
        yearly: 90,
      },
      offerDetails: {
        yearly: '2 months free',
      },
    },
    {
      id: 101,
      name: 'advanced',
      image: <AdvancedImage />,
      prices: {
        monthly: 12,
        yearly: 120,
      },
      offerDetails: {
        yearly: '2 months free',
      },
    },
    {
      id: 102,
      name: 'pro',
      image: <ProImage />,
      prices: {
        monthly: 15,
        yearly: 150,
      },
      offerDetails: {
        yearly: '2 months free',
      },
    },
  ];

  const { currentStepIndex, stepDetails, goto, currentStepForm } = useStepForm({
    subscriptionPlans,
    addOns,
  });

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
