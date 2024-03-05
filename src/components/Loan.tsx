export default function Loan({dispatch, isActive}) {
  return (
    <button onClick={() => dispatch({type: 'loan'})} disabled={false}>
      Request a loan of 5000
    </button>
  );
}
