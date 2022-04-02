// == Import : npm
import { render } from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import store from "src/store";
import App from "src/components/App";
import { Provider } from "react-redux";

const queryClient = new QueryClient();

const target = document.getElementById("root");
// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Provider>,
  target
);
