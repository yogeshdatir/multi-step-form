import { IAddOn, IStepInteraction } from '../MultiStepForm';
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
  AddOnCard,
  AddOnDescription,
  AddOnDetail,
  AddOnPrice,
  AddOnTitle,
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
} from './AddOnsForm.styled';
import { ReactComponent as CheckIcon } from '../../assets/images/icon-checkmark.svg';
import { useState } from 'react';

const AddOnsForm = ({ next, goBack, addOns }: IStepInteraction) => {
  const [selectedAddOnIds, setSelectedAddOnIds] = useState<number[]>([]);
  return (
    <FormContent>
      <FormHeader>
        <FormTitle>Pick add-ons</FormTitle>
        <FormSubtitle>
          Add-ons help enhance your gaming experience.
        </FormSubtitle>
      </FormHeader>
      <FormBody>
        {addOns?.map(
          ({ id, title, description, prices }: IAddOn, index: number) => {
            const isSelected: boolean = selectedAddOnIds.includes(id);
            return (
              <AddOnCard
                key={index}
                onClick={() => {
                  if (isSelected)
                    setSelectedAddOnIds((prevState) => [
                      ...prevState.filter(
                        (selectedAddOnIds) => selectedAddOnIds !== id
                      ),
                    ]);
                  else setSelectedAddOnIds((prevState) => [...prevState, id]);
                }}
                aria-selected={isSelected}
              >
                <CheckboxContainer>
                  <HiddenCheckbox checked={isSelected} />
                  <StyledCheckbox checked={isSelected}>
                    <CheckIcon className="check-icon" />
                  </StyledCheckbox>
                </CheckboxContainer>
                <AddOnDetail>
                  <AddOnTitle>{title}</AddOnTitle>
                  <AddOnDescription>{description}</AddOnDescription>
                </AddOnDetail>
                <AddOnPrice>{`+$${prices.monthly}/mo`}</AddOnPrice>
              </AddOnCard>
            );
          }
        )}
      </FormBody>
      <FormFooter>
        <SecondaryButton onClick={goBack}>Go Back</SecondaryButton>
        <PrimaryButton onClick={next}>Next Step</PrimaryButton>
      </FormFooter>
    </FormContent>
  );
};

export default AddOnsForm;
