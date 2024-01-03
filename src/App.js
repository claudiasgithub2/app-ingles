import React, {useState} from 'react';
import './App.css';
import { data } from './componentes/data';

function App() {

  const [preguntas, setPreguntas] = useState(data);
  const [total, setTotal] = useState(0);
  const [enviada, setEnviada] = useState(false);

  const respuestas = ["q1-a", "q2-b", "q3-c", "q4-a", "q5-b",];
  const handleChange = ({target}) => {
    const nextState = preguntas.map((pregunta) => {
      if (pregunta.name !== target.name) {
        return pregunta;
      } 

      return {
        ...pregunta,
        options: pregunta.options.map((opcion) => {
          // console.log(target.value);
          const checked = opcion.radioValue === target.value;
          return {
            ...opcion,
            selected: checked,
          };
        }),
        respuestaActual: target.value,
    };       
  });
  setPreguntas(nextState);
};

const onSubmit = (e) => {
  e.preventDefault();
  let counter = 0;
  let flag = false;

  for (const [index, pregunta] of preguntas.entries()) {
    if(!pregunta.respuestaActual) {
      flag = true;
      alert("Por favor responde la pregunta #" + (index + 1));
      break;
      
    } else {
      if (pregunta.respuestaActual === respuestas[index]) {
        ++counter;

      }
    }
  }
  if (!flag) {
    setTotal(counter);
    setEnviada(true);
  }

};

  


  return (
    <div className="container">
      <>
      <h1>Ejercicios</h1>
      <p>Responde a las siguientes preguntas</p>
      </>

      <section>
        {
          enviada && (
            <div>
              <h3>Obtuviste {total} de {respuestas.length} puntos </h3>
            </div>
          )
        }
        <form onSubmit={onSubmit}>
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
                  checked={option.selected}
                  onChange={handleChange}
                  />
                  {option.choice}
                </div>
              );
            })}           
          </div>
          ))}
          <button className='btn btn-primary btn-lg' onClick={onSubmit}>Enviar</button>
        </form>     
      </section>

    </div>
  );
}

export default App;
