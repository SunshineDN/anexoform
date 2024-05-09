import { useContext } from 'react';
import { ObjContext } from '../context/ObjContext';

const Form = ({ savePdf }) => {
  const { status, setStatus } = useContext(ObjContext);

  return (
    <form action=''>
      <h1>Formulário</h1>
      <button onClick={
        (e) => {
          e.preventDefault();
          savePdf();
        }
      }>Change Status</button>
    </form>
  );
};

export default Form;
