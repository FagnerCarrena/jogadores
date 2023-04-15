import { useState } from 'react';
import Banner from './componentes/Banner/Banner';

import Formulario from './componentes/Formulario';
import Time from './componentes/Time';


function App() {
const times = [
  {
  nome: "Bahia",
  corPrimaria: '#82CFFA',
  corSecundaria: '#E8F8FF'
},
{
  nome: "Vitória",
  corPrimaria: '#A6D157',
  corSecundaria: '#F0F8E2'
},
{
  nome: "Flamengo",
  corPrimaria: '#E06B69',
  corSecundaria: '#FDE7E8'
},
{
  nome: "Palmeiras",
  corPrimaria: '#D86EBF',
    corSecundaria: '#FAE5F5',
},
{
  nome: "Santos",
  corPrimaria: '#FEBA05',
    corSecundaria: '#FFF5D9'
},
{
  nome: "São Paulo",
  corPrimaria: '#FF8A29',
   corSecundaria: '#FFEEDF',
},
{
  nome: "Botafogo",
  corPrimaria: '#FF8A25',
  corSecundaria: '#FDE7E8',
}

]



  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaborador=(colaborador)=>{
    console.log(colaborador)
setColaboradores([...colaboradores, colaborador])


  }


  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time=> time.nome)}   aoColaborodorCadastrado={colaborador=> aoNovoColaborador(colaborador)}/>
      {times.map(time=> <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      colaboradores={colaboradores.filter(colaborador=> colaborador.time === time.nome)}
      //colaboradores é o estado, lembre se
      />)}
      
      
    </div>
  );
}

export default App;

