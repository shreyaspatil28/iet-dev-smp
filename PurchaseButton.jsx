import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function PurchaseButton({ item }) {
  const [showModal, setShowModal] = useState(false);
  const { addToCart } = useCart();

  function handleConfirm() {
    setShowModal(false);
    addToCart(item);
  }

  return (
    <>
      <button
        type="button"
        className="btn btn-sm btn-primary"
        onClick={(event) => {
          event.stopPropagation();
          setShowModal(true);
        }}
      >
        Add to cart
      </button>

      {showModal && (
        <div className="modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <p className="modal-title">Add to Cart</p>
            <p className="modal-body">
              Add <strong>{item.name}</strong> for{" "}
              <strong>₹{item.price.toFixed(2)}</strong>?
            </p>
            <div className="modal-actions">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleConfirm}
              >
                Confirm
              </button>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
