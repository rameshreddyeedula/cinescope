function SortDropdown({ sortBy, setSortBy }) {
  return (
    <div>
      <label htmlFor="sort">
        Sort By:
      </label>

      <select
        id="sort"
        value={sortBy}
        onChange={(event) =>
          setSortBy(event.target.value)
        }
      >
        <option value="default">
          Default
        </option>

        <option value="rating-high">
          Rating: High to Low
        </option>

        <option value="rating-low">
          Rating: Low to High
        </option>

        <option value="date-new">
          Release Date: New to Old
        </option>

        <option value="date-old">
          Release Date: Old to New
        </option>
      </select>
    </div>
  );
}

export default SortDropdown;