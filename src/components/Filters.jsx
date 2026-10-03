function Filters({
  language,
  setLanguage,
}) {
  return (
    <div>
      <label htmlFor="language">
        Language:
      </label>

      <select
        id="language"
        value={language}
        onChange={(event) =>
          setLanguage(event.target.value)
        }
      >
        <option value="all">
          All Languages
        </option>

        <option value="te">
          Telugu
        </option>

        <option value="hi">
          Hindi
        </option>

        <option value="en">
          English
        </option>
      </select>
    </div>
  );
}

export default Filters;