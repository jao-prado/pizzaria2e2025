import{ useState} from "react"

function App(){

  const [nome, setNome]= useState ('Ronaldo')


    const Formulario = ()=> {
      return (
        <div>
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

  return(
    <div>
      <h3>Pizzaria 2E</h3>
    
    <Formulario/>
    <Formulario/>
    <Formulario/>
    <Formulario/>
    <Formulario/>
    <Formulario/>
    <Formulario/>
    

      </div>
  )
}

export default App