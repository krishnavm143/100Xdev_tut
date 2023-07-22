import './App.css'
import PersonName from './component/PersonName';
let todos = [
  {
    title: 'Complete homework',
    description: 'Finish math and science assignments',
    id: 1,
  },
  {
    title: 'Go grocery shopping',
    description: 'Buy fruits, vegetables, and milk',
    id: 2,
  },
  {
    title: 'Walk the dog',
    description: 'Take the dog for a walk in the park',
    id: 3,
  },
  // Add more todo objects as needed
];


function App() {
  const num = [1, 2, 3, 4, 5, 6, 7]
  return (
    <>
      <div>
        <h2>Hi There</h2>
        <div>
          {todos.map((t) => <PersonName key={t.id} title={t.title} description={t.description} />)}
        </div>
        <div>{num.map((n, index) => <pan key={index}>{n * 2}</pan>)}</div>
      </div>
    </>
  )
}



export default App
