import{ useState} from "react"

function App(){

  const [nome, setNome]= useState ('Ronaldo')

  return(
    <div>
      <h3>Pizzaria 2E</h3>
    
    
    <input
        ClassName="nome"
        onChange={(e)=>{setNome(e.target.value)}}
        type="text" />
        
      <button 
        ClassName="botao"
        onClick={()=> {alert(nome)}}
      >
        clique aqui
      </button>

      </div>
  )
}

export default App