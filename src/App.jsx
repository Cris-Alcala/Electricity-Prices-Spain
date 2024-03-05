import { RouterProvider } from "react-router-dom";
import { routes } from "./router";
import { PricesProvider, AlertsProvider } from "./contexts";

function App() {
  return (
    <>
      <PricesProvider>
        <AlertsProvider>
          <RouterProvider router={routes} />
        </AlertsProvider>
      </PricesProvider>
    </>
  );
}

export default App;
