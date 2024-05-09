import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const approved = true;
  
  return (
    <>
      {approved ? children : <Navigate to='/' />}
    </>
  );
};
