import { useSelector } from "react-redux";

import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectVisibleContacts } from "../../redux/selectors";

const ContactList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => {
        return (
          <li className={css.card} key={contact.id}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
