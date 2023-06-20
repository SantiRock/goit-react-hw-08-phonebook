import { useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';
import { selectVisibleTasks } from 'redux/contacts/selectors';
import css from './ContactList.module.css';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleTasks);

  return (
    <ul className={css.ul}>
      {visibleContacts.map( person => (
        <li className={css.li} key={person.id}>
          <Contact contact={person}/>
        </li>
      ))}
    </ul> 
  )
}

