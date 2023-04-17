import './Colaborador.css'

const Colaborador = ({nome, imagem ,funcao, cordefundo}) => {
return (
<div className='colaborador'>
<div className='cabecalho' style={{backgroundColor: cordefundo}}>
    <img src={imagem} alt='lutando'/>
    </div>
    <div className='rodape'>
        <h4>{nome}</h4>
        <h5>{funcao}</h5>
</div>

</div>

)


}

export default Colaborador