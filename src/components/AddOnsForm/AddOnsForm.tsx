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

const AddOnsForm = ({
  next,
  goBack,
  addOns,
  formData,
  setFormData,
}: IStepInteraction) => {
  const {
    selectedAddOnIds,
    selectedPlan: { isYearly },
  } = formData;
  const handleAdd = (isSelected: boolean, id: number) => {
    if (isSelected)
      setFormData((prevFormData) => ({
        ...prevFormData,
        selectedAddOnIds: [
          ...selectedAddOnIds.filter(
            (selectedAddOnId) => selectedAddOnId !== id
          ),
        ],
      }));
    else
      setFormData((prevFormData) => ({
        ...prevFormData,
        selectedAddOnIds: [...selectedAddOnIds, id],
      }));
  };

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
                onClick={() => handleAdd(isSelected, id)}
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
                <AddOnPrice>
                  {isYearly
                    ? `+$${prices.yearly}/yr`
                    : `+$${prices.monthly}/mo`}
                </AddOnPrice>
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
