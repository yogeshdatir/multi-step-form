import { AddOnDescription } from '../AddOnsForm/AddOnsForm.styled';
import { IStepInteraction } from '../MultiStepForm';
import { FormContent } from '../MultiStepForm.styled';
import {
  PlanSubtitle,
  PlanTitle,
} from '../PlanSelectionForm/PlanSelectionForm.styled';
import {
  FormHeader,
  FormTitle,
  FormSubtitle,
  FormBody,
  FormFooter,
  SecondaryButton,
  FieldLabel,
  TertiaryButton,
} from '../UserForm/UserForm.styled';
import {
  AddOnRow,
  Cart,
  Divider,
  RightPane,
  SelectedPlan,
  TotalPrice,
  TotalRow,
} from './InvoiceConfirmationForm.styled';

const InvoiceConfirmationForm = ({ next, goBack }: IStepInteraction) => {
  return (
    <FormContent>
      <FormHeader>
        <FormTitle>Finishing up</FormTitle>
        <FormSubtitle>
          Double-check everything looks OK before confirming.
        </FormSubtitle>
      </FormHeader>
      <FormBody>
        <Cart>
          <SelectedPlan>
            <RightPane>
              <PlanTitle>Arcade (Monthly)</PlanTitle>
              <PlanSubtitle>Change</PlanSubtitle>
            </RightPane>
            <PlanTitle>$9/mo</PlanTitle>
          </SelectedPlan>
          <Divider />
          <AddOnRow>
            <AddOnDescription>Online service</AddOnDescription>
            <FieldLabel>$1/mo</FieldLabel>
          </AddOnRow>
          <AddOnRow>
            <AddOnDescription>Larger storage</AddOnDescription>
            <FieldLabel>$2/mo</FieldLabel>
          </AddOnRow>
        </Cart>
        <TotalRow>
          <AddOnDescription>Total (per month)</AddOnDescription>
          <TotalPrice>+$12/mo</TotalPrice>
        </TotalRow>
      </FormBody>
      <FormFooter>
        <SecondaryButton onClick={goBack}>Go Back</SecondaryButton>
        <TertiaryButton onClick={next}>Confirm</TertiaryButton>
      </FormFooter>
    </FormContent>
  );
};

export default InvoiceConfirmationForm;
