export default function Withdraw({ dispatch, isActive }) {
  return (
    <button
      onClick={() => {
        dispatch({ type: "withdrawal" });
      }}
      disabled={false}
    >
      Withdraw 50
    </button>
  );
}
