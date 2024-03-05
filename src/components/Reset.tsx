export default function Reset({ dispatch, isActive }) {
  return (
    <button onClick={() => dispatch({ type: "reset" })} disabled={false}>
      Close account
    </button>
  );
}
