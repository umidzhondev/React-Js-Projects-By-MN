import React from 'react';
import { useGlobalContext } from '../../context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef('');
  
  React.useEffect(() => {
    searchValue.current.focus();
  }, []); 
  
  function searchCockTail() {
    setSearchTerm(searchValue.current.value);
  }
  function handleSubmit(e) {
    e.preventDefault()
  }
  return (
    <section className='section search'>
           <form className='search-form' onSubmit={handleSubmit}>
             <div className='form-control'>
               <label htmlFor='name'>koktail qidiring</label>
               <input
               type='text'
               name='name'
               id='name'
               ref={searchValue}
               onChange={searchCockTail}
/>
             </div>
           </form>      
    </section>
  )
}

export default SearchForm