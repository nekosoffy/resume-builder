export default function Section({
  sectionName,
  formStructure,
  displayStructure,
  onSubmit,
  edit,
  newItem = false,
  addNewItem,
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
          {newItem ? (
            <div className="btn-wrapper">
              <button
                className="new-item-btn"
                onClick={addNewItem}
              >
                {'Add ' + sectionName}
              </button>
              <button
                type="submit"
                form={sectionName + '-form'}
                className="done-btn"
              >
                Done
              </button>
            </div>
          ) : (
            <button
              type="submit"
              form={sectionName + '-form'}
              className="done-btn"
            >
              Done
            </button>
          )}
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
