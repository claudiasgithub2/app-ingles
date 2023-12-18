import React, {useState} from 'react';
import './App.css';
import { data } from './componentes/data';

function App() {

  const [preguntas, setPreguntas] = useState(data);
  const [total, setTotal] = useState(0);
  const [enviada, setEnviada] = useState(false);

  const respuestas = ["q1-a", "q2-b", "q3-c", "q4-a", "q5-b",];
  console.log(data);



  return (
    <div className="container">
      <>
      <h1>Ejercicios</h1>
      <p>Responde a las siguientes preguntas</p>
      </>

      <section>
        <form>
          {preguntas.map((pregunta, idx) => (
          <div key={`group-${idx}`}>
            <h3>{idx + 1} . {pregunta.questionText}
            </h3>
            {pregunta.options.map((option, idx) => {
              return (
                <div key={`option-${idx}`}>
                  <input type="radio" 
                  name={pregunta.name} 
                  value={option.radioValue}
                  cheqked={option.selected}
                  onChange={() => {}}
                  />
                  {option.choice}
                </div>
              );
            })}           
          </div>
          ))}
          <button className='btn btn-primary btn-lg'>Enviar</button>
        </form>     
      </section>

    </div>
  );
}

export default App;
