export default function Withdraw({ dispatch, isActive }) {

  return (
    <button
      onClick={() => {
        dispatch({ type: "deposit" });
      }}
      disabled={!isActive}
    >
      Deposit 150
    </button>
  );
}
