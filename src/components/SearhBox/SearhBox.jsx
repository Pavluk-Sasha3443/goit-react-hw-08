import { useDispatch, useSelector } from "react-redux";

import css from "./SearhBox.module.css";
import { changeFilter } from "../../redux/filters/slice";
import { selectFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);

  const handleChange = (evt) => {
    dispatch(changeFilter(evt.target.value));
  };

  return (
    <div className={css.wrapper}>
      <label className={css.label}>Find contacts by name</label>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Search contact..."
      />
    </div>
  );
};

export default SearchBox;
