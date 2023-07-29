import FormSidebar from './FormSidebar/FormSidebar';
import { FormContainer } from './MultiStepForm.styled';
import PlanSelectionForm from './PlanSelectionForm';
// import UserForm from './UserForm';

const MultiStepForm = () => {
  return (
    <FormContainer>
      <FormSidebar />
      {/* <UserForm /> */}
      <PlanSelectionForm />
    </FormContainer>
  );
};

export default MultiStepForm;
