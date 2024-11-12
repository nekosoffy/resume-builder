import DynamicInputList from './DynamicInputList.jsx';
import Section from './Section.jsx';
import useDynamicFields from '../useDynamicFields.js';
import { education } from '../inputData.js';

export default function Education() {
  const {
    edit,
    data,
    addNewItem,
    removeItem,
    handleClick,
    fields,
    newPoint,
    handleFieldChange,
    removePoint,
  } = useDynamicFields(education);

  return (
    <Section
      sectionName="education"
      formStructure={
        <>
          <div className="section-title">
            <h2>Education Section</h2>
          </div>
          <DynamicInputList
            fields={fields}
            group="Education"
            removeList={removeItem}
            newPoint={newPoint}
            handleFieldChange={handleFieldChange}
            removePoint={removePoint}
          />
        </>
      }
      displayStructure={
        <>
          <h2>
            <span className="bold">Education</span>
          </h2>
          {data.map((item, index) => {
            return (
              <div key={index}>
                <p className="school">{item.school}</p>
                <div className="certification-wrapper">
                  <p className="certification">{item.certification}</p>
                  <p className="period">{item.period}</p>
                </div>
                <ul>
                  {item.points.map((item, index) => {
                    return <li key={index}>• {item}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </>
      }
      onSubmit={handleClick}
      edit={edit}
      newItem={true}
      addNewItem={addNewItem}
    />
  );
}
