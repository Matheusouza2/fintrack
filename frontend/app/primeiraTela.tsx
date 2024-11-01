import React, {useEffect, useState} from "react";
import  Splash_screen  from './_layout';
import  LoginScreen from './login/index';

//o estado da tela de splash começa como true ou seja ela é ativada
const Estado = () => {
    const [exibirSplash, atualiza] = useState(true);

    //aqui tipo é um relogio conta o tempo de 1,5 sec para mudar o estado da tela
    useEffect(() => {
        const tempoSplash = setTimeout(() => {
            atualiza(false);//aqui tipo ele muda para tela de login
        }, 1500);//tá 1500 pq é em ms

        return () => clearTimeout(tempoSplash);//aqui ele zera o reloginho 
    }, []);

    //aqui tipo ele muda a tela com base no estado
    if(exibirSplash){
        return <Splash_screen/>;
    }else{
        return <LoginScreen/>;
    }
}