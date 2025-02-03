import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectIsLoading, selectError } from "../../redux/contacts/selectors";
import SearchBox from "../../components/SearhBox/SearhBox";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import Loader from "../../components/Loader/Loader";
import toast from "react-hot-toast";
import css from "./ContactsPage.module.css";

function ContactsPage() {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
    if (isError) {
      toast.error("Failed to load contacts");
    }
  }, [dispatch, isError]);

  return (
    <div className={css.contactWrapper}>
      <h1 className={css.title}>Contacts</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      <ContactList />
    </div>
  );
}

export default ContactsPage;
