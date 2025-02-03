import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

import css from "./Contact.module.css";
import { RiUser5Fill } from "react-icons/ri";
import { ImPhone } from "react-icons/im";
import toast from "react-hot-toast";

const Contact = ({ contactData: { contact, id } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast.success("Contact deleted!");
      });
  };

  return (
    <>
      <div>
        <h2 className={css.title}>
          <RiUser5Fill className={css.icon} size="14" /> {contact.name}
        </h2>
        <p className={css.phone}>
          <ImPhone className={css.icon} size="14" />
          {contact.number}
        </p>
      </div>
      <button className={css.btnDelete} onClick={handleDelete}>
        Delete
      </button>
    </>
  );
};

export default Contact;
