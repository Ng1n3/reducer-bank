export default function PayLoan({ dispatch, isActive }) {
  return (
    <button onClick={() => dispatch({ type: "payLoan" })} disabled={false}>
      Pay loan
    </button>
  );
}
