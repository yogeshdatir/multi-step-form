import { IFormData } from '../../utils/hooks/useStepForm';
import { AddOnDescription } from '../AddOnsForm/AddOnsForm.styled';
import { IAddOn, IStepInteraction, ISubscriptionPlan } from '../MultiStepForm';
import { FormContent } from '../MultiStepForm.styled';
import { PlanTitle } from '../PlanSelectionForm/PlanSelectionForm.styled';
import {
  FormHeader,
  FormTitle,
  FormSubtitle,
  FormBody,
  FormFooter,
  SecondaryButton,
  TertiaryButton,
  LinkButton,
  Label,
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

interface IProps extends Omit<IStepInteraction, 'formData' | 'setFormData'> {
  goto: (stepIndex: number) => void;
  selectedPlan: ISubscriptionPlan | undefined;
  selectedAddOns: IAddOn[];
  isYearly: IFormData['selectedPlan']['isYearly'];
}

const InvoiceConfirmationForm = ({
  next,
  goBack,
  goto,
  selectedPlan,
  selectedAddOns,
  isYearly,
}: IProps) => {
  const addOnTotal = selectedAddOns.reduce((accumulator, selectedAddOn) => {
    if (isYearly) {
      return accumulator + selectedAddOn.prices.yearly;
    } else {
      return accumulator + selectedAddOn.prices.monthly;
    }
  }, 0);

  const planTotal =
    (isYearly ? selectedPlan?.prices.yearly : selectedPlan?.prices.monthly) ||
    0;

  const total = planTotal + addOnTotal;

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
              <PlanTitle>
                {selectedPlan?.name} ({isYearly ? 'yearly' : 'monthly'})
              </PlanTitle>
              <LinkButton onClick={() => goto(1)}>Change</LinkButton>
            </RightPane>
            <PlanTitle>
              {isYearly
                ? `$${selectedPlan?.prices.yearly}/yr`
                : `$${selectedPlan?.prices.monthly}/mo`}
            </PlanTitle>
          </SelectedPlan>
          <Divider />
          {selectedAddOns.map((selectedAddOn: IAddOn) => {
            return (
              <AddOnRow key={selectedAddOn.title}>
                <AddOnDescription>{selectedAddOn.title}</AddOnDescription>
                <Label>
                  {isYearly
                    ? `$${selectedAddOn?.prices.yearly}/yr`
                    : `$${selectedAddOn?.prices.monthly}/mo`}
                </Label>
              </AddOnRow>
            );
          })}
        </Cart>
        <TotalRow>
          <AddOnDescription>Total (per month)</AddOnDescription>
          <TotalPrice>
            +${total}/{isYearly ? 'yr' : 'mo'}
          </TotalPrice>
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
