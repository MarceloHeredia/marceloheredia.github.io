import Nav from './navigation/nav';
import ColorModeProvider from './contexts/ColorModeProvider';

export default function App() {

  return (
    <ColorModeProvider>
      <Nav/>
    </ColorModeProvider>
  );
}
