export default function Withdraw({ dispatch, isActive }) {
  console.log('isActive is ', isActive);
  return (
    <button
      onClick={() => {
        dispatch({ type: "deposit" });
      }}
      disabled={false}
    >
      Deposit 150
    </button>
  );
}
