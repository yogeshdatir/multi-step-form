import { IStepInteraction } from '../MultiStepForm';
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

interface IAddOn {
  id: number;
  title: string;
  description: string;
  prices: {
    monthly: number;
    yearly: number;
  };
}

const AddOnsForm = ({ next, goBack }: IStepInteraction) => {
  const addOns: IAddOn[] = [
    {
      id: 1,
      title: 'Online service',
      description: 'Access to multiplayer games',
      prices: {
        monthly: 1,
        yearly: 10,
      },
    },
    {
      id: 2,
      title: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      prices: {
        monthly: 2,
        yearly: 20,
      },
    },
    {
      id: 3,
      title: 'Customizable profile',
      description: 'Custom theme on your profile',
      prices: {
        monthly: 2,
        yearly: 20,
      },
    },
  ];
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
        {addOns.map(
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
