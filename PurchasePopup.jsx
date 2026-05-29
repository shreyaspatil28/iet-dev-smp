const PurchasePopup = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-[90%] max-w-md text-center relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
        >
          ×
        </button>

        <img
          src={item.image}
          alt={item.name}
          className="w-40 h-40 object-cover mx-auto rounded-xl mb-4"
        />

        <h2 className="text-2xl font-bold mb-2">{item.name}</h2>

        <p className="text-gray-600 mb-4">{item.description}</p>

        <p className="text-xl font-semibold mb-6">₹{item.price}</p>

        <button
          className="bg-black text-white px-6 py-3 rounded-xl hover:opacity-90 transition"
          onClick={() => {
            alert(`Purchased ${item.name} successfully!`);
            onClose();
          }}
        >
          Confirm Purchase
        </button>
      </div>
    </div>
  );
};

export default PurchasePopup;
