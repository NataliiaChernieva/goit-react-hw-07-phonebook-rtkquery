import { useDispatch} from 'react-redux';
import Input from '../Input/Input';
import { filter } from '../../redux/slices/filterSlice';

export default function Filter() {
    const dispatch = useDispatch();
     
    const changeFilter = e => {
      dispatch(filter(e.target.value.toLowerCase()));
      e.target.value.reset();
    };
  
     
    return (
      <Input
        name="Find contacts by name"
        type="text"
        onChange={changeFilter}
      />
 )
 }