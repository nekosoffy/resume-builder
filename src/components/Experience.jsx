import DynamicInputList from './DynamicInputList.jsx';
import Section from './Section.jsx';
import useDynamicFields from '../useDynamicFields.js';
import { experience } from '../inputData.js';

export default function Experience() {
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
  } = useDynamicFields(experience);

  return (
    <Section
      sectionName="experience"
      formStructure={
        <>
          <div className="section-title">
            <h2>Experience Section</h2>
          </div>
          <DynamicInputList
            fields={fields}
            group="Experience"
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
            <span className="bold">Work Experience</span>
          </h2>
          {data.map((item, index) => {
            return (
              <div key={index}>
                <p className="company">{item.company}</p>
                <div className="position-wrapper">
                  <p className="position">{item.position}</p>
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
