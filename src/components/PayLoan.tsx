export default function PayLoan({ dispatch, isActive, loan, balance }) {
  console.log('isActive is ', isActive);
  return (
    <button
      onClick={() => dispatch({ type: "payLoan" })}
      disabled={
        isActive
          ? loan === 5000 && balance >= 5000
            ? !isActive
            : isActive
          : !isActive
      }
    >
      Pay loan
    </button>
  );
}
