import React, { useRef } from "react";
import { View, Text, TextInput, Keyboard } from "react-native";

import Style from "../style/component-input-search";
import Typography from "../style/typography";
import Color from "../style/color";

export default function(props: any){
    return(
        <TextInput
            style={[Style.container, Typography.regular]}
            placeholder={props.placeholder}
            placeholderTextColor={Color.placeholder}
            cursorColor={Color.vermelho}
            inputMode={props.inputMode}
            maxLength={props.maxLength}
            onChangeText={text=>{props.setState(text)}}
            blurOnSubmit={false}
            ref={props.identifier}
            returnKeyType={props.returnKeyType}
            onSubmitEditing={Keyboard.dismiss} //Caso o botão de retorno do teclado seja "done", o teclado será será executado uma função ou será escondido ao clicar no botão. Caso seja diferente de "done" irá redirecionar para o próximo input 
        />
    );
}