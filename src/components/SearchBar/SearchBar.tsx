
import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css';

type SearchBarProps = {
  onSubmit: (topic: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const topicInput = form.elements.namedItem('topic') as HTMLInputElement | null;
    const topic = topicInput ? topicInput.value.trim() : '';
    

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



export default SearchBar;
