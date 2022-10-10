import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';

function App() {
  const hide=useSelector((state)=>state.hide.value);
  return (
    <Layout>
      {hide && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
