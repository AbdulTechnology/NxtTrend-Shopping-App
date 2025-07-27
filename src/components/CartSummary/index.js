import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const totalAmount = cartList.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0, // Initialize with 0 instead of []
      )
      const totalItems = cartList.reduce((acc, item) => acc + item.quantity, 0)

      return (
        <div className="cart-summary">
          <h1 className="order-total">Order Total: Rs {totalAmount}/-</h1>
          <p className="items-count">{totalItems} Items in cart</p>
          <button className="checkout-button" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
