// == Import : npm
import { render } from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

// == Import : local
// Composants
import App from 'src/components/App';

const queryClient = new QueryClient();

const target = document.getElementById('root');
// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
render(
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>
    , target);
