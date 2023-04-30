import { useEffect, useState } from "react"
import {View, Text, StyleSheet} from "react-native"
import { getRegionesColombia } from "../api/services"
import { Icon } from "react-native-elements"



const Regiones = () => {
    const [RegionesColombiaInfo, setRegionesColombia] = useState ([]);

    useEffect(()=> {
        async function fetchData(){
            const RegionesColombia = await getRegionesColombia()
            setREgionesColombia(RegionesColombia)
        }
        fetchData();
       
        
    }, []
    );
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Regiones de Colombia</Text>
            {RegionesColombia.map(region => (
                <Text key={region.id} style={styles.text}>{region.name}</Text>
            ))}
           

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize:20,
        fontWeight: 'bold',
        marginVertical:10,
    },
    text: {
        fontSize: 16,
        marginVertical:5,
    },
})
export default Regiones