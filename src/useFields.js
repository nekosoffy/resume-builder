import { useState } from 'react';

export default function useFields(fields) {
  const defaultData = fields.reduce((acc, item) => {
    acc[item.id] = item.label;
    return acc;
  }, {});

  const [edit, setEdit] = useState(false);
  const [data, setData] = useState(defaultData);

  function handleFieldChange(e) {
    const { id, value } = e.target;
    setData((prev) => ({ ...prev, [id]: value }));
  }

  function handleClick(e) {
    e.preventDefault();

    const newData = Object.keys(data).reduce((acc, key) => {
      const label = fields.find((item) => item.id === key).label;
      const currentValue = data[key].trim();

      if (!edit) {
        // When entering edit mode, if a value matches the form's label, start the respective input with an empty value.
        acc[key] = currentValue === label ? '' : currentValue;
      } else {
        // When leaving edit mode, if an input is empty, give the respective name the default value.
        acc[key] = currentValue === '' ? label : currentValue;
      }

      return acc;
    }, {});

    setData(newData);
    setEdit(!edit);
  }

  const mappedFields = fields.map((field) => ({
    ...field,
    value: data[field.id],
    onChange: handleFieldChange,
  }));

  return {
    edit,
    data,
    handleClick,
    fields: mappedFields,
  };
}
