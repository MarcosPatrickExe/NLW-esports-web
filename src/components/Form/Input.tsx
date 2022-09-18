import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes< HTMLInputElement>{}
// Interface com todos as propriedades que existem para a tag 'input' do HTML


export default function Input( props: InputProps ){

    return(
        // USAR:
        <Input 
            {...props} 
            className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500" id="game" type="text" placeholder="Selecione um game que deseja jogar..."
        />


        // AO INVES DE PASSAR PROPRIEDADE UMA POR UMA COMO EM:
        /* <Input 
            id={props.id }
            placeholder={ props.placeholder }
           />
        */
    );
}