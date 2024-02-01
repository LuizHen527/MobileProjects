import { InputBox } from "../../components/inputBox";
import { ConteinerForm, ScrollForm } from "./style";


export function Home(){

    //hooks de states

    //hooks de effect
        //Chamada da api
    return(

        //Scrollform
        //ContainerForm
        //InputBox
            //label
            //Input
            
        <ScrollForm>
            <ConteinerForm>
                <InputBox
                textLabel= "informe o CEP"
                placeholder="CEP..."
                keyType='numeric'
                maxLength={9}
                />
            </ConteinerForm>
        </ScrollForm>
    )
}