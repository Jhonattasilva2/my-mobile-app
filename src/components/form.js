import { TouchableOpacity, Text, TextInput, View, StyleSheet, Vibration, Keyboard, Pressable } from "react-native";
import { useState } from "react";
import ResultImc from "./resultImc";

export default function Form(){

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("preencha o peso e a altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")
    const [errorMessage, setErrorMessage] = useState(null)

    function verificationImc(){
        if(imc == null){
            Vibration.vibrate()
            setErrorMessage("Campo obrigatório*")
        }
    }

    function imcCalculator(){
        let heightFormat = height.replace(",",".")
        return setImc((weight/(heightFormat * heightFormat)).toFixed(2))
    }

    function validationImc(){
        if(weight != null && height != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu IMC é igual a:")
            setTextButton("Calcular Novamente")
            setErrorMessage(null)
            return
        }
        verificationImc()
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha o peso e altura")
        
    Keyboard.dismiss
    }

    return(
        <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput style={styles.input} placeholder="Ex. 1.83" keyboardType="numeric" onChangeText={setHeight} value={height}/>
                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput style={styles.input} placeholder="Ex. 88.4" keyboardType="numeric" onChangeText={setWeight} value={weight}/>
                <TouchableOpacity onPress={() => validationImc()} style={styles.buttonCalculator}>
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    formContext: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 30,

    },

    form: {
        width: "100%",
        height: "auto",
    },

    formLabel: {
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20,
    },

    input: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },

    buttonCalculator: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#FF0043",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        margin: 30,
    },

    textButtonCalculator: {
        fontSize: 20,
        color: "#FFFFFF",
    },

    errorMessage: {
        fontSize: 12,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 20,
    }
})