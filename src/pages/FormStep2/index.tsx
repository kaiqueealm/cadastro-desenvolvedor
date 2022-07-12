import { useNavigate, Link} from 'react-router-dom';
import * as C from './styles'
import { useForm, FormActions} from '../../contexts/FormContext'
import { Theme } from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption';


export const FormStep2 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if(state.name === '')  {
      navigate('/');
    }else{
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2
    })
  }  
  }, []);

  const handleNextSte = () => {
    if(state.name !== ''){
      navigate('/step3')
    }else{
      alert("preencha os dados.") //se nao digitar nada aparecera esse alerta
    }
    
  }
  const setLevel = (level: number) =>{
    dispatch({
      type: FormActions.setLevel,
      payload: level
    });
  }

 
  return (
    <Theme>
      <C.Container>
        <p>Passo 2/3</p>
        <h1>{state.name}, o que melhor descreve voçê</h1>
        <p>Escolha a opção que melhor condiz com seu estado atual, profissionalmente</p>

        <hr /> 

        <SelectOption
          title="Sou iniciante"
          description="comecei a progamar há menos de 2 anos "
          icon="🥳"
          selected={state.level === 0}
          onClick={()=>setLevel(0)}
        />

        <SelectOption
          title="Sou Progamador "
          description="já progamo a 2 anos ou mais"
          icon="🤓"
          selected={state.level === 1}
          onClick={()=>setLevel(1)}
        />


        <Link to="/" className='backButton'>Voltar</Link> 
        <button onClick={handleNextSte}>Próximo</button>
      </C.Container>
    </Theme>
  );
}


//hr linha horizontal  


//<Link to="/">Voltar</Link> muda o link sem nesesariamente mudar de tela
