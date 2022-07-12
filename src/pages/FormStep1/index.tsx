import { useNavigate} from 'react-router-dom';
import * as C from './styles'
import { useForm, FormActions} from '../../contexts/FormContext'

import { Theme } from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react';


export const FormStep1 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1
    })
  }, []);

  const handleNextSte = () => {
    if(state.name !== ''){
      navigate('/step2')
    }else{
      alert("preencha os dados.") //se nao digitar nada aparecera esse alerta
    }
    
  }
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value
    });
  }

  
  
  return (
    <Theme>
      <C.Container>
        <p>Passo 1/3</p>
        <h1>Vamos começar com o seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo.</p>

        <hr /> 

       <label >
        Seu nome completo
        <input type="text" 
        autoFocus
        value={state.name}
        onChange={handleNameChange}
        />
       </label>
        
        <button onClick={handleNextSte}>Próximo</button>
      </C.Container>
    </Theme>
  );
}


//hr linha horizontal 
