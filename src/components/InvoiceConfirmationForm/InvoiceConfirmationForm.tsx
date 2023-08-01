import { IStepInteraction } from '../MultiStepForm';
import { FormContent } from '../MultiStepForm.styled';
import {
  FormHeader,
  FormTitle,
  FormSubtitle,
  FormBody,
  FormFooter,
  PrimaryButton,
  SecondaryButton,
} from '../UserForm/UserForm.styled';

const InvoiceConfirmationForm = ({ next, goBack }: IStepInteraction) => {
  return (
    <FormContent>
      <FormHeader>
        <FormTitle>Finishing up</FormTitle>
        <FormSubtitle>
          Double-check everything looks OK before confirming.
        </FormSubtitle>
      </FormHeader>
      <FormBody></FormBody>
      <FormFooter>
        <SecondaryButton onClick={goBack}>Go Back</SecondaryButton>
        <PrimaryButton onClick={next}>Confirm</PrimaryButton>
      </FormFooter>
    </FormContent>
  );
};

export default InvoiceConfirmationForm;
