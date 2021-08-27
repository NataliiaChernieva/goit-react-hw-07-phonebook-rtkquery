import { useSelector,  useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { deleteContact } from '../../redux/slices/itemsSlice'; //c Slice
import ContactListItem from '../ContactListItem/ContactListItem';

export default function ContactList() {
  const contacts = useSelector((state) => state.items);
  const filterValue = useSelector((state) => state.filter);
  // console.log(`filter`, filterValue)
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('contactList', JSON.stringify(contacts));
  }, [contacts]);

  
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue),
  );
  
  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          onClick={()=>dispatch(deleteContact(id))}
        />
      ))}
    </ul>
  );
}

