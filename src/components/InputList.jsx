export default function InputList({ fields }) {
  return (
    <ul>
      {fields.map(({ id, label, value, placeholder, onChange }) => (
        <li
          key={id}
          className="input-wrapper"
        >
          <label htmlFor={id}>
            <div>{label}</div>
          </label>
          <input
            id={id}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
          />
        </li>
      ))}
    </ul>
  );
}
