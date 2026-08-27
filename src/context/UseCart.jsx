import { useCart } from "./CartContext";

function CartSummary() {
  const { state, total, dispatch } = useCart();

  function addKeyboard() {
    dispatch({
      type: "ADD_ITEM",
      item: {
        id: Date.now(),
        name: "Keyboard",
        price: 1500
      }
    });
  }

  function removeKeyboard() {
    const keyboard = state.items.find(
      item => item.name === "Keyboard"
    );

    if (keyboard) {
      dispatch({
        type: "REMOVE_ITEM",
        id: keyboard.id
      });
    }
  }

  return (
    <div>
      <h2>Cart</h2>

      <p>
        Cart items: {state.items.length}
      </p>

      <p>
        Total: ₹{total}
      </p>

      <button onClick={addKeyboard}>
        Add Keyboard
      </button>

      <button onClick={removeKeyboard}>
        Remove Keyboard
      </button>
    </div>
  );
}

export default CartSummary;