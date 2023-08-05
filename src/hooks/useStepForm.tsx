import { useState } from 'react';
import AddOnsForm from '../components/AddOnsForm';
import InvoiceConfirmationForm from '../components/InvoiceConfirmationForm';
import { IAddOn, IStep, ISubscriptionPlan } from '../components/MultiStepForm';
import PlanSelectionForm from '../components/PlanSelectionForm';
import ThankYouPage from '../components/ThankYouPage';
import UserForm from '../components/UserForm';

interface IProps {
  subscriptionPlans: ISubscriptionPlan[];
  addOns: IAddOn[];
}

export interface IFormData {
  name: string;
  email: string;
  phone: string;
  selectedPlan: { id: number | undefined; isYearly: boolean | undefined };
  selectedAddOnIds: number[];
}

const INITIAL_FORM_DATA: IFormData = {
  name: '',
  email: '',
  phone: '',
  selectedPlan: {
    id: undefined,
    isYearly: false,
  },
  selectedAddOnIds: [],
};

const useStepForm = ({ subscriptionPlans, addOns }: IProps) => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

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
    {
      detail: 'your info',
      element: (
        <UserForm next={next} formData={formData} setFormData={setFormData} />
      ),
    },
    {
      detail: 'select plan',
      element: (
        <PlanSelectionForm
          next={next}
          goBack={goBack}
          subscriptionPlans={subscriptionPlans}
          formData={formData}
          setFormData={setFormData}
        />
      ),
    },
    {
      detail: 'add-ons',
      element: (
        <AddOnsForm
          next={next}
          goBack={goBack}
          addOns={addOns}
          formData={formData}
          setFormData={setFormData}
        />
      ),
    },
    {
      detail: 'summary',
      element: (
        <InvoiceConfirmationForm
          next={next}
          goBack={goBack}
          goto={goto}
          selectedPlan={subscriptionPlans.find(
            (subscriptionPlan: ISubscriptionPlan) =>
              subscriptionPlan.id === formData.selectedPlan.id
          )}
          selectedAddOns={addOns.filter((addOn: IAddOn) =>
            formData.selectedAddOnIds.includes(addOn.id)
          )}
          isYearly={formData.selectedPlan.isYearly}
        />
      ),
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
