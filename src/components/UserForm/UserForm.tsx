import { ChangeEvent, FocusEvent } from 'react';
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
  FieldError,
  Label,
} from './UserForm.styled';
import { IFormErrors, IFormData } from '../../utils/hooks/useStepForm';
import {
  validateEmail,
  validateInternationalPhone,
  validateName,
} from '../../utils/utils';

interface IProps
  extends Pick<IStepInteraction, 'next' | 'formData' | 'setFormData'> {
  formErrors: IFormErrors;
  setFormErrors: React.Dispatch<React.SetStateAction<IFormErrors>>;
}

export interface IValidateFields
  extends Pick<IFormData, 'email' | 'name' | 'phone'> {}

const REQUIRED_FIELD_ERROR = `This field is required`;

const validatorMap = {
  name: validateName,
  email: validateEmail,
  phone: validateInternationalPhone,
};

const UserForm = ({
  next,
  formData,
  setFormData,
  formErrors,
  setFormErrors,
}: IProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const fieldName: string = e.target.name;

    const _fieldValue = formData[fieldName as keyof IValidateFields];

    const errorString = _fieldValue
      ? validatorMap[fieldName as keyof IValidateFields](_fieldValue)
        ? ``
        : `Invalid ${fieldName}`
      : REQUIRED_FIELD_ERROR;

    setFormErrors((prevFormErrors: IFormErrors) => ({
      ...prevFormErrors,
      [fieldName]: errorString,
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
          <FieldLabel>
            <Label>Name</Label>
            <FieldError>{formErrors.name}</FieldError>
          </FieldLabel>
          <FieldInput
            type="text"
            name="name"
            placeholder="e.g. Stephen King"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!formErrors.name}
          />
        </FormField>
        <FormField>
          <FieldLabel>
            <Label>Email Address</Label>
            <FieldError>{formErrors.email}</FieldError>
          </FieldLabel>
          <FieldInput
            type="email"
            name="email"
            placeholder="e.g. stephenking@lorem.com"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!formErrors.email}
          />
        </FormField>
        <FormField>
          <FieldLabel>
            <Label>Phone Number</Label>
            <FieldError>{formErrors.phone}</FieldError>
          </FieldLabel>
          <FieldInput
            type="tel"
            name="phone"
            placeholder="e.g. +1 234 567 890"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!formErrors.phone}
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
