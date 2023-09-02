import { useFetch, useCounter } from "../hooks/";
import { LoadingQuote } from "../03-examples/LoadingQuote";
import { Quote } from "../03-examples/Quote";

export const Layout = () => {
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
