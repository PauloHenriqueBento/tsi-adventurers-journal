import React from 'react';
import { GlobalContext } from '../Context/GlobalStorage';
import { useNavigate } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import { apiRoute, optionsFetch, showUserRoute } from '../DB/data';
import UserCart from '../Components/UserCart';

const Cart = () => {
  const { setSession } = React.useContext(GlobalContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (window.sessionStorage.getItem('user')) {
      const user = JSON.parse(window.sessionStorage.getItem('user'));
      setSession({
        logged: true,
        user: user,
      });
    } else {
      navigate('/');
    }
  }, []);

  return (
    <main className="container-xl">
      <UserCart />
    </main>
  );
};

export default Cart;
