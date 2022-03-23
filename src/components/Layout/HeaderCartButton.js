import { useState } from 'react';

import CartIcon from '../Cart/CartIcon.js';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const [amountCart, setAmountCart] = useState(0);

  const handleAmountCart = (event) => {
    setAmountCart(amountCart + 1);
  };

  return (
    <button className={classes.button} onClick={handleAmountCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{amountCart}</span>
    </button>
  );
};

export default HeaderCartButton;
