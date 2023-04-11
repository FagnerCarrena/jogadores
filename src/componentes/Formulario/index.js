import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = ()=>{
const times = [
'Bahia',
'Vitória',
'Flamengo',
'Palmeiras',
'Santos',
'São Paulo',
'Botafogo'

]
const aoSalvar = (evento)=>{
  evento.preventDefault()
  console.log("for foi submetido")
}

return (
<section className="formulario">
    <form onSubmit={aoSalvar} >
        <h2 >Prencha os Dados para criar o card do Jogador</h2>
    <CampoTexto obrigatorio={true}  label="Nome" placeholder="Digite seu nome" />
      <CampoTexto  obrigatorio={true} label="Função" placeholder="Digite sua Função"/>
      <CampoTexto label="Imagem" placeholder="Digite o endereço da Imagem"/>
      <ListaSuspensa obrigatorio={true} label="Time" itens = {times}/>
      <Botao>
      Criar Card
      </Botao>
    </form>
</section>

)

}
export default Formulario