import { View } from "react-native-web";
import { InputBox } from "../../components/inputBox";
import { ConteinerForm, ScrollForm, ViewAll, ViewItens } from "./style";
import { useEffect, useState } from "react";
import axios from "axios";


export function Home(){

    //hooks de states
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState({})
    //hooks de effect
 
        

        // useEffect(() => {
        //     //Chamada da api
            
        // }, [])



        async function getCep() {
            try {
                if(cep != "" && cep.length === 8) {
                    const promise = await axios.get(`https://viacep.com.br/ws/${cep}/json`)

                    // if(endereco.error){
                    //     alert("Verifique CEP");
                    //     return;
                    // } 

                    setEndereco(promise.data)

                }
            } catch (error) {
                alert("Verifique o cep");
                return;
            }
        }

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
                    onBlur={getCep}
                    />
                    <InputBox
                    textLabel= "Endereco"
                    placeholder="Endereco..."
                    maxLength={60}
                    fieldValue={endereco.logradouro}
                    />
                    <InputBox
                    textLabel= "Bairro"
                    placeholder="Bairro..."
                    editable={true}
                    keyType='default'
                    maxLength={60}
                    fieldValue={endereco.bairro}
                    />
                    <InputBox
                    textLabel= "Cidade"
                    placeholder="Cidade..."
                    editable={true}
                    keyType='default'
                    maxLength={60}
                    fieldValue={endereco.localidade}
                    />
                    <ViewItens>
                        <InputBox
                        textLabel= "Estado"
                        placeholder="Estado..."
                        editable={true}
                        keyType='default'
                        maxLength={60}
                        fieldWidth = {70}
                        fieldValue={endereco.uf}
                        />
                        <InputBox
                        textLabel= "UF"
                        placeholder="UF"
                        editable={true}
                        keyType='default'
                        maxLength={60}
                        fieldWidth = {20}
                        fieldValue={endereco.uf}
                        />
                    </ViewItens>
                </ConteinerForm>
            </ScrollForm>
        </ViewAll>

    )
}