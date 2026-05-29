import { useCart } from "../context/CartContext";
import { useTheme } from "../context/ThemeContext";

export default function CartSidebar() {
  const {
    cartItems,
    itemCount,
    total,
    clearCart,
    removeFromCart,
    updateQuantity,
  } = useCart();

  const {darkMode, toggleTheme} = useTheme();

  return (
    <aside className="cart-sidebar">
      <div className="cart-header">
        <div>
          <p className="cart-title"><strong>Shopping Cart</strong></p>
          <p className="cart-count">
            {itemCount} item{itemCount === 1 ? "" : "s"}
          </p>
        </div>
        <button
          type="button"
          className="btn btn-ghost btn-clear"
          onClick={clearCart}
        >
          Clear
        </button>
      </div>

      {cartItems.length ? (
        <>
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li className="cart-item" key={item.id}>
                <div>
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-meta">Qty {item.quantity}</p>
                </div>
                <div className="cart-item-actions">
                  <button
                    type="button"
                    className="cart-action"
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    −
                  </button>
                  <button
                    type="button"
                    className="cart-action"
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    className="cart-remove"
                    onClick={() => removeFromCart(item.id)}
                    aria-label={`Remove ${item.name}`}
                  >
                    ×
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart-summary">
            <span>Total</span>
            <strong>₹{total.toFixed(2)}</strong>
          </div>
        </>
      ) : (
        <p className="cart-empty">Your cart is empty.</p>
      )}
    </aside>
  );
}
