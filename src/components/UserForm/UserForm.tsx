import { FormContent } from '../MultiStepForm.styled';
import {
  FormHeader,
  FormTitle,
  FormSubtitle,
  FormField,
  FieldLabel,
  FieldInput,
  FormBody,
  FormFooter,
  PrimaryButton,
} from './UserForm.styled';

const UserForm = () => {
  return (
    <FormContent>
      <FormHeader>
        <FormTitle>Personal Info</FormTitle>
        <FormSubtitle>
          Please provide your name, email address, and phone number.
        </FormSubtitle>
      </FormHeader>
      <FormBody>
        <FormField>
          <FieldLabel>Name</FieldLabel>
          <FieldInput placeholder="e.g. Stephen King" />
        </FormField>
        <FormField>
          <FieldLabel>Email Address</FieldLabel>
          <FieldInput placeholder="e.g. stephenking@lorem.com" />
        </FormField>
        <FormField>
          <FieldLabel>Phone Number</FieldLabel>
          <FieldInput placeholder="e.g. +1 234 567 890" />
        </FormField>
      </FormBody>
      <FormFooter>
        <PrimaryButton>Next Step</PrimaryButton>
      </FormFooter>
    </FormContent>
  );
};

export default UserForm;
