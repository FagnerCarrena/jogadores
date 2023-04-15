import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props)=>{
return (
    //poderia ser com ternário tbm
    (props.colaboradores.length > 0) && <section className="time" style={{backgroundColor: props.corSecundaria}}>
        <h3 style={{borderColor:props.corPrimaria}}>{props.nome}</h3>
        <div className="colaboradores">
        {props.colaboradores.map(colaborador=> <Colaborador nome={colaborador.nome} funcao={colaborador.funcao} imagem={colaborador.imagem} />)}
 </div>
        
    </section>


)

}

export default Time