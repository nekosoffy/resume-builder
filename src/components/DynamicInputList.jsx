export default function InputList({
  fields,
  group,
  removeList,
  newPoint,
  handleFieldChange,
  removePoint,
}) {
  return (
    <>
      {fields.map((fieldGroup, index) => (
        <div
          className="fieldset-wrapper"
          key={index}
        >
          <fieldset>
            <div>
              <legend>
                <h3>{group + ' ' + (index + 1)}</h3>
              </legend>
              <button
                className="remove-btn"
                type="button"
                onClick={() => removeList(index)}
              >
                Remove
              </button>
            </div>
            <ul>
              <div className="fields-wrapper">
                {fieldGroup.map(({ id, label, value, placeholder }) =>
                  id !== 'points' ? (
                    <li
                      key={id}
                      className="input-wrapper"
                    >
                      <label htmlFor={id + (index + 1)}>
                        <div>{label}</div>
                      </label>
                      <input
                        id={id + (index + 1)}
                        value={value}
                        placeholder={placeholder}
                        onChange={(e) => handleFieldChange(e, index)}
                      />
                    </li>
                  ) : null
                )}
              </div>
              <div className="points-wrapper">
                {fieldGroup
                  .find((field) => field.id === 'points')
                  .points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="input-wrapper"
                    >
                      <div className="point-input-wrapper">
                        <label
                          htmlFor={
                            'point' + (index + 1) + '-' + (pointIndex + 1)
                          }
                        >
                          <div>Point {pointIndex + 1}</div>
                        </label>
                        <input
                          id={'point' + (index + 1) + '-' + (pointIndex + 1)}
                          value={point}
                          onChange={(e) =>
                            handleFieldChange(e, index, pointIndex)
                          }
                        />
                      </div>
                      <div>
                        <button
                          className="remove-point-btn"
                          type="button"
                          onClick={() => removePoint(index, pointIndex)}
                        >
                          X
                        </button>
                      </div>
                    </li>
                  ))}
              </div>
            </ul>
            <button
              className="new-point-btn"
              type="button"
              onClick={() => newPoint(index)}
            >
              New point
            </button>
          </fieldset>
        </div>
      ))}
    </>
  );
}
