import { useReducer } from "react";
import OpenAccount from "./components/OpenAccount";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import Loan from "./components/Loan";
import PayLoan from "./components/PayLoan";
import Reset from "./components/Reset";

interface inital {
  balance: number;
  loan: number;
  isActive: boolean;
}

const initialState: inital = {
  balance: 0,
  loan: 0,
  isActive: false,
};

function reducer(state, action) {
  if (!state.isActive && action.type !== "newAccount") return state;

  switch (action.type) {
    case "newAccount":
      return {
        ...state,
        balance: 500,
        isActive: true,
      };

    case "deposit":
      if (state.isActive === true)
        return {
          ...state,
          balance: state.balance + 150,
        };
      else {
        return;
      }

    case "withdrawal":
      return {
        ...state,
        balance: state.balance >= 50 ? state.balance - 50 : 0,
      };

    case "loan":
      return {
        ...state,
        balance: state.balance + 5000,
        loan: 5000,
      };

    case "payLoan":
      return {
        ...state,
        balance: state.balance - 5000,
        loan: state.loan - 5000,
      };

    case "reset":
      if (state.loan > 0 || state.balance !== 0) return state;
      return initialState;
  }
}

export default function App() {
  const [{ balance, loan, isActive }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <div className="App">
      <h1>useReducer Bank Account</h1>
      <p>Balance: {balance}</p>
      <p>Loan: {loan}</p>

      <p>
        <OpenAccount dispatch={dispatch} isActive={isActive} />
      </p>
      <p>
        <Deposit dispatch={dispatch} isActive={isActive} />
      </p>
      <p>
        <Withdraw dispatch={dispatch} isActive={isActive} balance={balance} />
      </p>
      <p>
        <Loan
          dispatch={dispatch}
          isActive={isActive}
          loan={loan}
          balance={balance}
        />
      </p>
      <p>
        <PayLoan
          dispatch={dispatch}
          isActive={isActive}
          loan={loan}
          balance={balance}
        />
      </p>
      <p>
        <Reset dispatch={dispatch} isActive={isActive} />
      </p>
    </div>
  );
}
