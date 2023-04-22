import { View, Text, StyleSheet, TouchableOpacity, Share } from "react-native";

export default function ResultImc(props){

    const onShare = async () => {
        const result = await Share.share({
            message: "Meu IMC hoje é:" + props.resultImc
        })
    }

    return(
        <View style={styles.contextImc}>
            <View style={styles.boxShareButton}>
                <Text style={styles.information}>{props.messageResultImc}</Text>
                <Text style={styles.numberImc}>{props.resultImc}</Text>
                <TouchableOpacity onPress={onShare} style={styles.shared}>
                    <Text style={styles.sharedText}>Share</Text>
                </TouchableOpacity> 
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    contextImc: {
        flex: 1,
        marginTop: 20,
        paddingTop: 15,
        alignItems: "center",
        width: "100%",
    },

    resultImc: {
        flex: 1,
        marginTop: 10,
        paddingTop: 40,
        borderRadius: 50,
        alignItems: "center",
        width: "100%",
    },
    numberImc: {
        fontSize: 48,
        color: "#FF0043",
        fontWeight: "bold",
    }, 

    information: {
        fontSize: 18,
        color: "#FF0043",
        fontWeight: "bold",
    },

    boxShareButton: {
        width: "100%",
        alignItems: "center",
        marginBottom: 10,
    },

    shared: {
        backgroundColor: "#1877f2",
        borderRadius: 50,
        paddingTop: 10,
        paddingBottom: 10,
    },

    sharedText: {
        color: "#FFFFFF",
        fontWeight: "bold",
        paddingHorizontal: 30,
    }
})