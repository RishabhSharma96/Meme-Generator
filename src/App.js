import './css/styles.css'
import Header from './Components/Header';
import ContentSection from './Components/InputSection';

function App() {
  return (
    <div className='main'>
      <div className="box">
        <Header />
        <ContentSection />
      </div>
    </div>
  );
}

export default App;
