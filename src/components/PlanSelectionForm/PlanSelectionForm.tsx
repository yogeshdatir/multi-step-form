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
import { ReactComponent as ArcadeImage } from '../../assets/images/icon-arcade.svg';
import { ReactComponent as AdvancedImage } from '../../assets/images/icon-advanced.svg';
import { ReactComponent as ProImage } from '../../assets/images/icon-pro.svg';
import { useState } from 'react';

const PlanSelectionForm = () => {
  const [isYearly, setIsYearly] = useState(false);
  const handleChange = () => {
    setIsYearly(!isYearly);
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
          <Card aria-selected={true}>
            <ArcadeImage />
            <CardDetails>
              <h5>Arcade</h5>
              <p>$9/mo</p>
            </CardDetails>
          </Card>
          <Card>
            <AdvancedImage />
            <CardDetails>
              <h5>Arcade</h5>
              <p>$12/mo</p>
            </CardDetails>
          </Card>
          <Card>
            <ProImage />
            <CardDetails>
              <h5>Arcade</h5>
              <p>$15/mo</p>
            </CardDetails>
          </Card>
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
        <SecondaryButton>Go Back</SecondaryButton>
        <PrimaryButton>Next Step</PrimaryButton>
      </FormFooter>
    </FormContent>
  );
};

export default PlanSelectionForm;
