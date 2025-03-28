import{ use, useState} from "react"

function App(){

  const [nome, setNome]= useState ('Ronaldo')
  const [idade, setIdade] = useState(18)
  const [time, setTime] = useState ('curintia')
  const [pi] = useState (3.14)

  //var idade = 18;
  //let time = 'curintia';
  //const pi = 3.14;


  const Formulario = (props)=> {
    const[valor, setValor] = useState()
      return (
        <div>
          <input
            ClassName="nome"
            placeholder= {props.sombra}
            onChange={(e)=>{setNome(e.target.value)}}
            type="text" />
        
      <button 
        ClassName="botao"
        onClick={()=> {
          if(valor.length > 0)
            alert(valor); 
        
          else 
          alert(props.nome + ' idade é ' + props.idade)}}
  
      >
            clique aqui
          </button>
        </div>
      )
    }

  return(
    <div>
      <h3>Pizzaria 2E</h3>
    
    <Formulario nome="Ricardo"
      idade={45}
    sombra="digite eu nome..."/>
    <Formulario nome="maria" sombra="Digite sua idade..."/>
    <Formulario nome="tomas" sombra="Digite seu time..."/>
    <Formulario nome="Antonieta" sombra="valor de pi..."/>
   
    
      </div>
  )
}

export default App