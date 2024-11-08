import { useState } from 'react';

export default function Name() {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState({
    forename: 'Forename',
    surname: 'Surname',
  });

  function handleNameChange(e) {
    const { id, value } = e.target;
    setName((prev) => ({ ...prev, [id]: value }));
  }

  function handleClick(e) {
    e.preventDefault();

    if (!edit) {
      setName({
        forename: name.forename === 'Forename' ? '' : name.forename,
        surname: name.surname === 'Surname' ? '' : name.surname,
      });
    } else {
      setName({
        forename: name.forename.trim() === '' ? 'Forename' : name.forename,
        surname: name.surname.trim() === '' ? 'Surname' : name.surname,
      });
    }

    setEdit(!edit);
  }

  return (
    <>
      {edit ? (
        <section className="section name edit">
          <form
            id="name-form"
            onSubmit={handleClick}
          >
            <fieldset>
              <legend className="section-title">
                <div>Name section</div>
              </legend>
              <ul>
                <li className="input-wrapper">
                  <label htmlFor="forename">
                    <div>Forename</div>
                  </label>
                  <input
                    id="forename"
                    value={name.forename}
                    placeholder="e.g. Jane"
                    onChange={handleNameChange}
                  />
                </li>
                <li className="input-wrapper">
                  <label htmlFor="forename">
                    <div>Surname</div>
                  </label>
                  <input
                    id="surname"
                    value={name.surname}
                    placeholder="e.g. Doe"
                    onChange={handleNameChange}
                  />
                </li>
              </ul>
            </fieldset>
          </form>
          <button
            type="submit"
            form="name-form"
            className="done-btn"
          >
            Done
          </button>
        </section>
      ) : (
        <section>
          <button
            className="section name"
            onClick={handleClick}
          >
            <h1>
              {name.forename} <span className="bold">{name.surname}</span>
            </h1>
          </button>
        </section>
      )}
    </>
  );
}
