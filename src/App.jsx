import { Button } from './lib'; // Import du composant Button depuis la librairie

const App = () => {

  const handleClick = () => {
    alert('Button clicked');
  }

  return (
    <div className="container">
      <h1>Storybook</h1>
      <Button label="Click me" onClick={handleClick} theme='danger' />
    </div>
  );
}

export default App;


