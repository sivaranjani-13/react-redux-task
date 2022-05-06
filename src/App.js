import './App.css';
import Header from './Header';
import  Content from './Content';
import Sidebar from './Sidebar';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
      <Header/>
     <Sidebar/>
      <Content/>
         <Footer/>
    </div>
  );
}

export default App;
