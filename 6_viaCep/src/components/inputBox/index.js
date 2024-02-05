import { Input } from "../input";
import { Label } from "../label"
import { FieldContent } from "./style";

export const InputBox = ({
    fieldWidth = 100,
    editable = false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText = null,
    keyType = 'default',
    maxLength,
    onBlur = null
}) => {
    return(

        <FieldContent fieldWidth={fieldWidth}>
            <Label textLabel={textLabel}/>
            <Input
                placeholder={placeholder}
                editable={editable}
                keyType={keyType}
                maxLength={maxLength}
                fieldValue={fieldValue}
                onChangeText={onChangeText}
                onBlur={onBlur}
            />
        </FieldContent>
    )
}