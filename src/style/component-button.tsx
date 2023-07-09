import { StyleSheet } from "react-native";

import Color from "./color";
import Material from './material'

export default StyleSheet.create({
    container:{
        backgroundColor: Color.vermelho,
        height: 50,
        marginVertical: 20, 
        elevation: Material.elevation,
        borderRadius: Material.borderRadius,
        alignItems: "center",
        justifyContent: "center",
    }
});