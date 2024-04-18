import css from "./SearchBar.module.css";
import { IoSearch } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";

export default function SearchBar({ onSubmit, search }) {
  const errorClick = () =>
    toast.error("Please, enter your text.", {
      duration: 2000,
    });
  return (
    <header>
      <div className={css.topLine}>
        <form onSubmit={onSubmit} className={css.form}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={css.input}
          />
          <button type="submit" className={css.button} onClick={errorClick}>
            <IoSearch />
          </button>
          {search == '' && <Toaster />}
        </form>
      </div>
    </header>
  );
}
