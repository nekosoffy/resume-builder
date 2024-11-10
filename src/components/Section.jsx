export default function Section({
  sectionName,
  formStructure,
  displayStructure,
  onSubmit,
  edit,
}) {
  return (
    <>
      {edit ? (
        <section className={'section ' + sectionName + ' edit'}>
          <form
            id={sectionName + '-form'}
            onSubmit={onSubmit}
          >
            {formStructure}
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
            className={'section ' + sectionName}
            onClick={onSubmit}
          >
            {displayStructure}
          </button>
        </section>
      )}
    </>
  );
}
