import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { ContactList } from "components/ContactList/ContactList";
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter} from "components/Filter/Filter";
import { fetchContacts } from "redux/contacts/operations";
import { selectIsLoading, selectError } from "redux/contacts/selectors";
import css from '../components/App.module.css';

export default function Contacts() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
  
    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);
  
    return (
      <div className={css.container}>
        <Helmet>
          <title>Contacts</title>
        </Helmet> 
        <h1>Phonebook</h1>  
        <ContactForm />
        <h2>Contacts</h2>
        {isLoading && !error && <p className={css.loading}>Loading...</p>}
        <Filter />
        <ContactList />
      </div>
    );
}



