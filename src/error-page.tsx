import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError(); // какой тут тип у error?
  console.error(error);

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
