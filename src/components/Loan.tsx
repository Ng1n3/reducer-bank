export default function Loan({ dispatch, isActive, loan, balance }) {
  return (
    <button
      onClick={() => dispatch({ type: "loan" })}
      disabled={loan === 0 ? !isActive: isActive}
    >
      Request a loan of 5000
    </button>
  );
}
