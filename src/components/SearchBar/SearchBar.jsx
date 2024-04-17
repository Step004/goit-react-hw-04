import css from "./SearchBar.module.css";
import { IoSearch } from "react-icons/io5";

export default function SearchBar({ onSubmit }) {
  return (
    <header>
      <div className={css.topLine}>
        <form onSubmit={onSubmit} className={css.form}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            className={css.input}
          />
          <button type="submit" className={css.button}>
            <IoSearch />
          </button>
        </form>
      </div>
    </header>
  );
}
