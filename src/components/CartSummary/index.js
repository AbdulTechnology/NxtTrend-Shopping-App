import {Link} from 'react-router-dom'
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })

      const onCheckOut = () => {
        removeAllCartItems()
      }

      return (
        <>
          <div className="cart-summary-container">
            <h1 className="order-total-value">
              <span className="order-total-label">Order Total:</span> Rs {total}
              /-
            </h1>
            <p className="total-items">{cartList.length} Items in cart</p>
            <Link to="/order" className="link-item">
              <button
                type="button"
                className="checkout-button d-sm-none"
                onClick={onCheckOut}
              >
                Checkout
              </button>
            </Link>
          </div>
          <Link to="/order" className="link-item">
            <button
              type="button"
              className="checkout-button d-lg-none"
              onClick={onCheckOut}
            >
              Checkout
            </button>
          </Link>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
