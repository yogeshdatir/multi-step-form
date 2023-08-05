import { ChangeEvent } from 'react';
import { IStepInteraction } from '../MultiStepForm';
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

const UserForm = ({
  next,
  formData,
  setFormData,
}: Pick<IStepInteraction, 'next' | 'formData' | 'setFormData'>) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

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
          <FieldInput
            type="text"
            name="name"
            placeholder="e.g. Stephen King"
            value={formData.name}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <FieldLabel>Email Address</FieldLabel>
          <FieldInput
            type="email"
            name="email"
            placeholder="e.g. stephenking@lorem.com"
            value={formData.email}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <FieldLabel>Phone Number</FieldLabel>
          <FieldInput
            type="tel"
            name="phone"
            placeholder="e.g. +1 234 567 890"
            value={formData.phone}
            onChange={handleChange}
          />
        </FormField>
      </FormBody>
      <FormFooter>
        <PrimaryButton onClick={next}>Next Step</PrimaryButton>
      </FormFooter>
    </FormContent>
  );
};

export default UserForm;
