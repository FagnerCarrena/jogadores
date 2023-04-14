import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import {useState} from "react"


const Formulario = (props)=>{

const [nome, setNome] = useState('')
const [funcao, setFuncao] = useState('')
const [imagem, setImagem] = useState('')
const [time, setTime] = useState('')



const aoSalvar = (evento)=>{
  evento.preventDefault();
  props.aoColaborodorCadastrado({
    nome,
    funcao,
    imagem,
    time
  })
}

return (
<section className="formulario">
    <form onSubmit={aoSalvar} >
        <h2 >Prencha os Dados para criar o card do Jogador</h2>
    <CampoTexto 
    obrigatorio={true} 
     label="Nome" 
     placeholder="Digite seu nome"
    valor={nome}
    aoAlterado={fff=>setNome(fff)} 
     />
      <CampoTexto  
      obrigatorio={true} 
      label="Função" 
      placeholder="Digite sua Funcao"
      valor={funcao}
    aoAlterado={ggg=>setFuncao(ggg)} 
      />
      <CampoTexto
       label="Imagem" 
       placeholder="Digite o endereço da Imagem"
       valor={imagem}
    aoAlterado={lalala=>setImagem(lalala)} 
       />
      <ListaSuspensa
       obrigatorio={true}
       label="Time" 
       itens = {props.times}
       valor={time}
       aoAlterado={valor=>setTime(valor)}
       />
      <Botao>
      Criar Card
      </Botao>
    </form>
</section>

)

}
export default Formulario