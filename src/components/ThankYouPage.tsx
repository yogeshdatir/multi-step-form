import { ReactComponent as ThankYouImage } from '../assets/images/icon-thank-you.svg';
import { ThankYouContent } from './MultiStepForm.styled';
import {
  FormHeader,
  FormSubtitle,
  FormTitle,
} from './UserForm/UserForm.styled';

const ThankYouPage = () => {
  return (
    <ThankYouContent>
      <ThankYouImage />
      <FormHeader>
        <FormTitle>Thank you!</FormTitle>
        <FormSubtitle>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </FormSubtitle>
      </FormHeader>
    </ThankYouContent>
  );
};

export default ThankYouPage;
