export default function OpenAccount({dispatch, isActive}) {
  return (
    <button onClick={() => { dispatch({type: 'newAccount'})}} disabled={isActive}>
      Open account
    </button>
  );
}
