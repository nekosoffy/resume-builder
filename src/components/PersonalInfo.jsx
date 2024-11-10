import InputList from './InputList.jsx';
import Section from './Section.jsx';
import useFields from '../useFields.js';
import { info } from '../inputData.js';
import mail from '../assets/mail.svg';
import address from '../assets/address.svg';
import phone from '../assets/phone.svg';

export default function Name() {
  const { edit, data, handleClick, fields } = useFields(info);

  return (
    <Section
      sectionName="info"
      formStructure={
        <fieldset>
          <legend className="section-title">
            <div>Personal Info Section</div>
          </legend>
          <InputList fields={fields} />
        </fieldset>
      }
      displayStructure={
        <>
          <div>
            <img src={mail}></img>
            {data.email}
          </div>
          <div>
            <img src={address}></img>
            {data.address}
          </div>
          <div>
            <img src={phone}></img>
            {data.phone}
          </div>
        </>
      }
      onSubmit={handleClick}
      edit={edit}
    />
  );
}
