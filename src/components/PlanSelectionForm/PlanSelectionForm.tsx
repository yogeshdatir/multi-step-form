import { FormContent } from '../MultiStepForm.styled';
import {
  FormBody,
  FormFooter,
  FormHeader,
  FormSubtitle,
  FormTitle,
  PrimaryButton,
  SecondaryButton,
} from '../UserForm/UserForm.styled';
import {
  Card,
  CardDetails,
  CardList,
  CheckBox,
  Slider,
  SubPeriodSelector,
  ToggleLabel,
} from './PlanSelectionForm.styled';
import { useState } from 'react';
import { IStepInteraction, ISubscriptionPlan } from '../MultiStepForm';

type IProps = { subscriptionPlans: ISubscriptionPlan[] } & IStepInteraction;

const PlanSelectionForm = ({ next, goBack, subscriptionPlans }: IProps) => {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('arcade');

  const handleChange = () => {
    setIsYearly(!isYearly);
  };

  const handlePlanSelection = (clickedPlan: string) => {
    setSelectedPlan(clickedPlan);
  };

  return (
    <FormContent>
      <FormHeader>
        <FormTitle>Select your plan</FormTitle>
        <FormSubtitle>
          You have the option of monthly or yearly billing.
        </FormSubtitle>
      </FormHeader>
      <FormBody style={{ gap: '2rem' }}>
        <CardList>
          {subscriptionPlans.map(
            ({ name, image, prices }: ISubscriptionPlan) => {
              return (
                <Card
                  aria-selected={selectedPlan === name}
                  onClick={() => handlePlanSelection(name)}
                >
                  {image}
                  <CardDetails>
                    <h5>{name}</h5>
                    {/* TODO: Add transition for prices */}
                    <p>
                      {isYearly
                        ? `$${prices.yearly}/yr`
                        : `$${prices.monthly}/mo`}
                    </p>
                  </CardDetails>
                </Card>
              );
            }
          )}
        </CardList>
        <SubPeriodSelector>
          <span aria-selected={!isYearly}>Monthly</span>
          <ToggleLabel>
            <CheckBox
              type="checkbox"
              checked={isYearly}
              onChange={handleChange}
            />
            <Slider />
          </ToggleLabel>
          <span aria-selected={isYearly}>Yearly</span>
        </SubPeriodSelector>
      </FormBody>
      <FormFooter>
        <SecondaryButton onClick={goBack}>Go Back</SecondaryButton>
        <PrimaryButton onClick={next}>Next Step</PrimaryButton>
      </FormFooter>
    </FormContent>
  );
};

export default PlanSelectionForm;
