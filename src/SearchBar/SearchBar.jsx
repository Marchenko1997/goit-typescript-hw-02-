import PropTypes from 'prop-types';
import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css'

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value.trim();

    if (!topic) {
      toast.error('Please enter a search term!');
      return;
    }

    onSubmit(topic);
    form.reset();
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.formsearchbar}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="topic"
          className={css.searchinput}
        />
        <button type="submit" className={css.searchbtn}>Search</button>
      </form>
      <Toaster />
    </header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default SearchBar;
