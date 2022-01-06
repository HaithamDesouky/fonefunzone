import PhoneForm from '../components/PhoneForm/PhoneForm'
import { phoneCreate } from '../services/phone';
import { useHistory } from "react-router";
import { toast } from 'react-toastify';


const PhoneCreateView = () => {
  const history = useHistory();

  const handlePhoneCreationSubmission = (formData) => {
    const { title, description, price, photo,
      manufacturer, ram, screen, color } = formData;
    if (!title) {
      toast.warn('Please add a name to your phone');
      return
    } else if (!description) {
      toast.warn('Please add a description to your phone');
      return
    }
    phoneCreate({ title, description, price, photo, manufacturer, ram, screen, color })
      .then((phone) => {
        const { phone: { _id } } = phone;
        history.push({ pathname: `/phone/${_id}` });
      })
      .catch((error) => {
        alert('There was an error creating phone.');
        console.log(error);
      });

  }

  return (
    <section className="phone-creation-container">
      <div className="phone-form-wrapper">
        <h1> Tell us about your amazing Fone!</h1>
        <PhoneForm createPhone={data => handlePhoneCreationSubmission(data)} />
      </div>
    </section>
  );
}

export default PhoneCreateView;
