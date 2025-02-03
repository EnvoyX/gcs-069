import { useRouteError } from "react-router-dom";

export default function Error() {
  // Catch error from any route children within
  // parent route with errorElement prop attached
  const error = useRouteError();

  return (
    <section>
      <h1>Error: {error.message}</h1>
      <pre>
        {error.status} - {error.statusText}
      </pre>
    </section>
  );
}
import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();

  return (
    <section>
      <h1>Error: {error.message}</h1>
      <pre>
        {error.status} - {error.statusText}
      </pre>
    </section>
  );
}
