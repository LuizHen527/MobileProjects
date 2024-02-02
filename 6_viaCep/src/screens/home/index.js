import { View } from "react-native-web";
import { InputBox } from "../../components/inputBox";
import { ConteinerForm, ScrollForm, ViewAll, ViewItens } from "./style";
import { useEffect, useState } from "react";
import axios from "axios";


export function Home(){

    //hooks de states
    const [cep, setCep] = useState('03209000');
    const [logradouro, setLogradouro] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [uf, setUf] = useState('');
    //hooks de effect
        

        useEffect( async () => {
            //Chamada da api
            try {
                if(cep != "" && cep.length === 8) {
                    const endereco = await axios.get(`https://viacep.com.br/ws/${cep}/json`)

                    if(endereco.error){
                        alert("Verifique CEP");
                        return;
                    }

                    setLogradouro(endereco.data.logradouro);
                    setBairro(endereco.data.bairro);
                    setCidade

                }
            } catch (error) {
                alert("Verifique o cep");
                return;
            }
        }, [])
    return(

        //Scrollform
        //ContainerForm
        //InputBox
            //label
            //Input
        <ViewAll>
            <ScrollForm>
                <ConteinerForm>
                    <InputBox
                    textLabel= "informe o CEP:"
                    placeholder="CEP..."
                    keyType='numeric'
                    editable={true}
                    maxLength={9}
                    fieldValue={cep}
                    onChangeText={tx => setCep(tx)}
                    />
                    <InputBox
                    textLabel= "Endereco"
                    placeholder="Endereco..."
                    keyType='default'
                    maxLength={60}
                    />
                    <InputBox
                    textLabel= "Bairo"
                    placeholder="Bairo..."
                    editable={true}
                    keyType='default'
                    maxLength={60}
                    />
                    <InputBox
                    textLabel= "Cidade"
                    placeholder="Cidade..."
                    editable={true}
                    keyType='default'
                    maxLength={60}
                    />
                    <ViewItens>
                        <InputBox
                        textLabel= "Estado"
                        placeholder="Estado..."
                        editable={true}
                        keyType='default'
                        maxLength={60}
                        fieldWidth = {70}
                        />
                        <InputBox
                        textLabel= "UF"
                        placeholder="UF"
                        editable={true}
                        keyType='default'
                        maxLength={60}
                        fieldWidth = {20}
                        />
                    </ViewItens>
                </ConteinerForm>
            </ScrollForm>
        </ViewAll>

    )
}