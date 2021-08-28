// import { v4 as uuidv4 } from 'uuid';
//import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import {
  Container,
  Title,
  SectionTitle,
} from './components/Container/Container.styled.jsx';
import Form from './components/Form/Form.jsx';
import ContactList from './components/ContactList/ContactList.jsx';
import Filter from './components/Filter/Filter.jsx';
import { useFetchContactsQuery } from './redux/operations.js';


export default function App() {
  // const contacts = useSelector((state) => state.items);
  const { data: contacts, error, isFetching} = useFetchContactsQuery();
   
    return (
    <Container>
      <Title>Phonebook</Title>
      <Form/>
      {contacts.length !== 0 && <SectionTitle>Contacts</SectionTitle>}
      {contacts.length !== 0 && <Filter/>}
      <ContactList />
      <Toaster position="top-right" />
    </Container>
  );
}
