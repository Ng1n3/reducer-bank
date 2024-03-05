export default function Withdraw({ dispatch, isActive, balance }) {
  return (
    <button
      onClick={() => {
        dispatch({ type: "withdrawal" });
      }}
      disabled={isActive ? (balance >= 1 ? !isActive : isActive) : !isActive}
    >
      Withdraw 50
    </button>
  );
}
