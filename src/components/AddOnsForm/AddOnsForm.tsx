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
} from './AddOnsForm.styled';

interface IAddOn {
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
      title: 'Online service',
      description: 'Access to multiplayer games',
      prices: {
        monthly: 1,
        yearly: 10,
      },
    },
    {
      title: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      prices: {
        monthly: 2,
        yearly: 20,
      },
    },
    {
      title: 'Customizable profile',
      description: 'Custom theme on your profile',
      prices: {
        monthly: 2,
        yearly: 20,
      },
    },
  ];
  return (
    <FormContent>
      <FormHeader>
        <FormTitle>Pick add-ons</FormTitle>
        <FormSubtitle>
          Add-ons help enhance your gaming experience.
        </FormSubtitle>
      </FormHeader>
      <FormBody>
        {addOns.map(({ title, description, prices }: IAddOn) => {
          return (
            <AddOnCard>
              <input type="checkbox" />
              <AddOnDetail>
                <AddOnTitle>{title}</AddOnTitle>
                <AddOnDescription>{description}</AddOnDescription>
              </AddOnDetail>
              <AddOnPrice>{`+$${prices.monthly}/mo`}</AddOnPrice>
            </AddOnCard>
          );
        })}
      </FormBody>
      <FormFooter>
        <SecondaryButton onClick={goBack}>Go Back</SecondaryButton>
        <PrimaryButton onClick={next}>Next Step</PrimaryButton>
      </FormFooter>
    </FormContent>
  );
};

export default AddOnsForm;
