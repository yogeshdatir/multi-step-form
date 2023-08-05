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
  OfferText,
  PlanSubtitle,
  PlanTitle,
  Slider,
  SubPeriodSelector,
  ToggleLabel,
} from './PlanSelectionForm.styled';
import { useState } from 'react';
import { IStepInteraction, ISubscriptionPlan } from '../MultiStepForm';

const PlanSelectionForm = ({
  next,
  goBack,
  subscriptionPlans,
}: IStepInteraction) => {
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
          {subscriptionPlans?.map(
            ({ name, image, prices, offerDetails }: ISubscriptionPlan) => {
              return (
                <Card
                  aria-selected={selectedPlan === name}
                  onClick={() => handlePlanSelection(name)}
                  key={name}
                >
                  {image}
                  <CardDetails>
                    <PlanTitle>{name}</PlanTitle>
                    {/* TODO: Add transition for prices */}
                    <PlanSubtitle>
                      {isYearly
                        ? `$${prices.yearly}/yr`
                        : `$${prices.monthly}/mo`}
                    </PlanSubtitle>
                    <OfferText>
                      {isYearly && offerDetails?.yearly
                        ? offerDetails.yearly
                        : offerDetails?.monthly && offerDetails.monthly}
                    </OfferText>
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
