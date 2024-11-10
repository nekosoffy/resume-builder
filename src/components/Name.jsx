import InputList from './InputList.jsx';
import Section from './Section.jsx';
import useFields from '../useFields.js';
import { names } from '../inputData.js';

export default function Name() {
  const { edit, data, handleClick, fields } = useFields(names);

  return (
    <Section
      sectionName="name"
      formStructure={
        <fieldset>
          <legend className="section-title">
            <div>Name Section</div>
          </legend>
          <InputList fields={fields} />
        </fieldset>
      }
      displayStructure={
        <h1>
          {data.forename} <span className="bold">{data.surname}</span>
        </h1>
      }
      onSubmit={handleClick}
      edit={edit}
    />
  );
}
