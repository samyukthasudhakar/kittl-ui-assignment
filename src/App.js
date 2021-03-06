import './App.css';
import Card from 'components/Card'

function App() {
  return (
    <div className="App">
      <h1 className='header text-accent'>Kittl UI Assignment</h1>
      <div className='card-container'>
        <Card 
        heading="Part - 1" 
        content="Implement a Button component and a set of Storybook stories that reflect its different possible states."
        link="https://static-ui-storybook.netlify.app/?path=/story/button--primary-button"
        />
        <Card 
        heading="Part - 2"
        content="Create a simple UI with the rendered svg image and a slider beneath to control the strength of the Arch effect."
        link="https://static-ui-storybook.netlify.app/?path=/story/arc-transformation--arc-transformation-for-svg"
        />
      </div>
      <div className='footer'>
          <span>made with ❤️ by  <a className='text-accent' href="https://github.com/samyukthasudhakar">Samyuktha Sudhakar</a></span>
      </div>
    </div>
  );
}

export default App;
