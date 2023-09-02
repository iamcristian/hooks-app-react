import { useFetch, useCounter } from "../hooks/";
import { LoadingQuote } from './LoadingQuote'
import {Quote} from "./Quote"

export const MultipleCustomHooks = () => {

  const { counter, increment } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );

  console.log(data);

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote {...data} />}

      <button
        disabled={isLoading}
        onClick={() => increment()}
        className="btn btn-primary"
      >
        Next Quote
      </button>
    </>
  );
};
