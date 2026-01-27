import { Presentation } from './components/presentation/Presentation';
import { useLanguage } from './contexts/LanguageContext';
import { getSlides } from './data/getSlides';

function App() {
  const { language } = useLanguage();
  const slides = getSlides(language);
  
  return <Presentation slides={slides} />;
}

export default App;
