import { useState } from 'react';

export default function useDynamicFields(fields) {
  const defaultData = fields.reduce((acc, item) => {
    acc[item.id] = item.label;
    return acc;
  }, {});

  const [edit, setEdit] = useState(false);
  const [data, setData] = useState([{ ...defaultData, points: [] }]);

  function addNewItem() {
    const newData = [
      ...data,
      {
        ...fields.reduce((acc, item) => ({ ...acc, [item.id]: '' }), {}),
        points: [],
      },
    ];
    setData(newData);
  }

  function removeItem(index) {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  }

  function newPoint(index) {
    const newData = [...data];
    newData[index].points.push('');
    setData(newData);
  }

  function removePoint(index, pointIndex) {
    const newData = [...data];
    newData[index].points.splice(pointIndex, 1);
    setData(newData);
  }

  function handleClick(e) {
    e.preventDefault();
    const updatedData = [...data];

    updatedData.forEach((dataItem) => {
      Object.keys(dataItem).forEach((key) => {
        const label = fields.find((item) => item.id === key)?.label;
        const currentValue = dataItem[key];

        if (!edit) {
          // Clear fields that match their default values when entering edit mode
          if (
            typeof currentValue === 'string' &&
            currentValue.trim() === label
          ) {
            dataItem[key] = '';
          }

          dataItem.points = dataItem.points.map((point) =>
            point === 'Point about the job.' ? '' : point
          );
        }

        if (edit) {
          // Reset empty fields to default values when leaving edit mode
          if (typeof currentValue === 'string' && currentValue.trim() === '') {
            dataItem[key] = label;
          }

          dataItem.points = dataItem.points.map((point) =>
            point.trim() === '' ? 'Point about the job.' : point
          );
        }
      });
    });

    setData(updatedData);
    setEdit(!edit);
  }

  function handleFieldChange(e, index, pointIndex) {
    const { id, value } = e.target;
    const updatedData = [...data];
    if (typeof pointIndex === 'number') {
      updatedData[index].points[pointIndex] = value;
    } else {
      let formattedId = '';
      for (let char of id) {
        if (isNaN(char)) {
          formattedId += char;
        }
      }
      updatedData[index] = { ...updatedData[index], [formattedId]: value };
    }
    setData(updatedData);
  }

  const mappedData = data.map((item) =>
    fields
      .map((field) => ({
        ...field,
        value: item[field.id],
      }))
      .concat([{ id: 'points', points: item.points }])
  );

  return {
    edit,
    data,
    addNewItem,
    removeItem,
    handleClick,
    fields: mappedData,
    newPoint,
    handleFieldChange,
    removePoint,
  };
}
