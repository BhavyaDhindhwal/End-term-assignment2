import { ThemeProvider, useTheme } from './ThemeContext';
import './App.css';

function Header() {
  const { darkMode, toggleTheme } = useTheme();
  
  return (
    <header className={darkMode ? 'dark' : 'light'}>
      <h1>मेरा App</h1>
      <button onClick={toggleTheme}>
        {darkMode ? '☀️ Light' : '🌙 Dark'}
      </button>
    </header>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Header />
      <div className="content">
        <h2>Context API काम कर रहा है! ✅</h2>
        <p>Theme change हो गया सभी जगह!</p>
      </div>
    </ThemeProvider>
  );
}

export default App;