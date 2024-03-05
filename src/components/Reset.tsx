export default function Reset({ dispatch, isActive }) {
  return (
    <button onClick={() => dispatch({ type: "reset" })} disabled={!isActive}>
      Close account
    </button>
  );
}
