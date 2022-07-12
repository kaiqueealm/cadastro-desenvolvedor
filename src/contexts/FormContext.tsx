import { Children, createContext, ReactNode, useContext, useReducer} from "react";

// types



type State = {
  currentStep: number;
  name: string;
  level: 0 | 1;
  email: string;
  github: string;

}

type Action = {
  type: FormActions;
  payload: any
}

type ContextType ={
  state : State;
  dispatch: (action: Action) => void;
}


type FormProviderProps ={
  children: ReactNode
}


const initialData: State  = {
  currentStep: 0,
  name: '',
  level: 0,
  email: '',
  github: ''

}

//contex
const FormContext = createContext <ContextType | undefined>(undefined);

// Reducer
export enum FormActions{
  setCurrentStep, //para dizer qual a etapa esta
  setName, //para trocar o nome do cara
  setLevel, //pra trpca o tipo do cara se iniciante profisional
  setEmail, // qual sera o email
  setGithub

}

const formReducer = (state: State, action: Action) => { //reducer retorna dados
  switch(action.type){
    case FormActions.setCurrentStep:
      return {...state, currentStep: action.payload};
    case FormActions.setName:
      return {...state, name: action.payload};
    case FormActions.setLevel:
      return {...state, level: action.payload};
    case FormActions.setEmail:
      return {...state, email: action.payload};
    case FormActions.setGithub:
      return {...state, github: action.payload};
    default:
      return state;

  }
}

//Provider

export const FormProvider = ({children}:FormProviderProps) =>{
  const [state, dispatch] = useReducer(formReducer, initialData);
  const value = { state, dispatch}

  return(
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  )
}

// context hook

export const  useForm = () =>{
  const context = useContext(FormContext);
  if(context === undefined) {
    throw new Error('useForm precisa ser usado dentro do FormProvider');
  }
  return context; 
}


// contex, 
//Reducer um cara que execulta ações escpecificas
//Provider criar um ambiente  ai dentro desse ambiente consigo ter acessp ao meus dados 
//hook vai simplificar o proxesso para em que todas as paginas  que precise ter acesso alguma infomação  com um simples hook tera acesso a isso

//state e receber dados 