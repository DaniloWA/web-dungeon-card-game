import './App.css';
import AsideBoxLeft from './components/asideBoxLeft/AsideBoxLeft';
import AsideBoxRight from './components/asideBoxRight/AsideBoxRight';
import Layout from './Layout/Layout';
import MainContent from './components/mainContent/MainContent'

function App() {
  return (
    <Layout>
      <AsideBoxLeft />
      <MainContent />
      <AsideBoxRight />
    </Layout>
  );
}

export default App;
