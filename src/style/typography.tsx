import { StyleSheet } from "react-native";

import Color from "./color";

export default StyleSheet.create({
    header:{
        color: Color.cinzaEscuro,
        fontFamily: "ubuntu-bold",
        fontSize: 22,
        textAlign: "center",
    },
    regular:{
        color: Color.cinzaEscuro,
        fontFamily: "ubuntu-regular",
        fontSize: 18,
    },
    placeholder:{
        color: Color.placeholder,
        fontFamily: "ubuntu-regular",
        fontSize: 18,
    },
    modal:{
        color: Color.cinzaEscuro,
        fontFamily: "ubuntu-regular",
        fontSize: 18,
        textAlign: "center",
    },
    drawerHeader:{
        fontFamily: "ubuntu-bold",
        fontSize: 20,
        color: Color.branco,
    },
    drawerRegular:{
        fontFamily: "ubuntu-regular",
        fontSize: 18,
        color: Color.branco,
    },
    button:{
        fontFamily: "ubuntu-regular",
        fontSize: 20,
        textTransform: "uppercase",
        color: Color.branco,
    },
    highlight:{
        color: Color.vermelho,
    },
    aviso:{
        fontFamily: "ubuntu-regular",
        fontSize: 16,
        color: Color.vermelhoAviso,
    },
});