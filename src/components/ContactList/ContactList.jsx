import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, ...contact }) => (
        <li key={id} className={css.item}>
          <Contact contactData={{ contact, id }} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
