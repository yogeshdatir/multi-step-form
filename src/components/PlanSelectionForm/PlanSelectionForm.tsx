import { FormContent } from '../MultiStepForm.styled';
import {
  FormBody,
  FormHeader,
  FormSubtitle,
  FormTitle,
} from '../UserForm/UserForm.styled';
import { Card, CardDetails, CardList } from './PlanSelectionForm.styled';
import { ReactComponent as ArcadeImage } from '../../assets/images/icon-arcade.svg';
import { ReactComponent as AdvancedImage } from '../../assets/images/icon-advanced.svg';
import { ReactComponent as ProImage } from '../../assets/images/icon-pro.svg';

const PlanSelectionForm = () => {
  return (
    <FormContent>
      <FormHeader>
        <FormTitle>Select your plan</FormTitle>
        <FormSubtitle>
          You have the option of monthly or yearly billing.
        </FormSubtitle>
      </FormHeader>
      <FormBody>
        <CardList>
          <Card>
            <ArcadeImage />
            <CardDetails>
              <h5>Arcade</h5>
              <p>$9/mo</p>
            </CardDetails>
          </Card>
          <Card>
            <AdvancedImage />
            <CardDetails>
              <h5>Arcade</h5>
              <p>$12/mo</p>
            </CardDetails>
          </Card>
          <Card>
            <ProImage />
            <CardDetails>
              <h5>Arcade</h5>
              <p>$15/mo</p>
            </CardDetails>
          </Card>
        </CardList>
      </FormBody>
    </FormContent>
  );
};

export default PlanSelectionForm;
