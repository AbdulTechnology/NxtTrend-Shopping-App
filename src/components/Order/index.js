import {Link} from 'react-router-dom'
import {FaCheckCircle} from 'react-icons/fa'
import Header from '../Header'
import './index.css'

const Order = () => (
  <div>
    <Header />
    <div className="orders-container">
      <FaCheckCircle className="order-image" />
      <p className="order-description">Your Order Has Been Placed</p>
      <Link to="/products">
        <button type="button" className="shop-more-desktop-btn">
          Shop More...
        </button>
      </Link>
    </div>
  </div>
)

export default Order
