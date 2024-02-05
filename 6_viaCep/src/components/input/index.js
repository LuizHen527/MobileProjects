import { InputText } from "./style"

export const Input = ({
    placeholder,
    editable,
    fieldValue,
    onChangeText,
    keyType,
    maxLength,
    onBlur
}) => {
    return(
        <InputText
            placeholder={placeholder}
            editable={editable}
            keyboardType={keyType}
            maxLength={maxLength}
            value={fieldValue}
            onChangeText={onChangeText}
            onBlur={onBlur}
        />
    )
}