
import { Text, View, StyleSheet, TextInput, Button, Image } from "react-native";

export default function Index() {
  return (
    <View style={{flex: 1, padding: 5, gap: 5, backgroundColor:"#fff"}}>
    <View style={styles.container}>
      <Image source={require("@/assets/images/favicon.png")} />
      <Text style={styles.titulo}>Login</Text>
      <Text style={{fontSize:16, fontWeight: "bold"}}>Aula 10/08/2026</Text>
    </View>
    <View style={styles.main}>
      
      <Text style={styles.inputText}>usuário:</Text>
      <TextInput style={styles.input}/>

      <Text style={styles.inputText}>senha:</Text>
      <TextInput style={styles.input}/>

    </View>
     <View style={styles.footer}>
      
      <Text style={styles.inputText}>Não tem login, faça o cadastro:</Text>
      <Button title="Acessar" />

    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1/3,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgreen",
  },
  titulo : {
    color: 'red'
  },

  main: {
    flex: 1/3,
    alignItems: "center",
    justifyContent: "center",
    
  },
  input :{
    width: "100%",
    height:36,
    backgroundColor : "#999",
    marginBottom: 15,
    borderRadius: 10,
  },
  inputText : {
    color: "#000",
    fontWeight: "500",
    fontSize: 12,
    width: "100%",
    marginBottom: 5,
  },
    footer: {
    flex: 1/3,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgreen",
  },
});
