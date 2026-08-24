import { ButtonFatec } from "@/components/Button";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { Icon, useRouter } from "expo-router";

export default function DashBoard() {

  const route = useRouter();

  function logout(){
    route.navigate("/");
  }

  function openCadastros(){
  Alert.alert("novo registro");
  }

  function newRegister(){
    route.navigate("/register")
  }

  function deleteRegister(){
    Alert.alert("apagando registro")
  }

  return (
    <View style={{ flex: 1, padding: 5, gap: 5, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <Image source={require("@/assets/images/favicon.png")} />
        <Text style={styles.titulo}>Dashboard</Text>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          Aula 17/08/2026
        </Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.inputText}>tela principal</Text>
      </View>
      <View style={styles.footer}>

        <ButtonFatec  
        text={"sair"} 
        action={()=>{logout()}} 
        icon={Icon}
        iconName="{}"/>

        <ButtonFatec  text={"cadastro"} 
        action={()=>{openCadastros()}}
        icon={Icon}
        iconName="{}"/>

        <ButtonFatec  text={"novo"} 
        action={()=>{newRegister()}}
        icon={Icon}
        iconName="{}"/>

        <ButtonFatec  text={"excluir"} 
        action={()=>{deleteRegister()}}
        icon={Icon}
        iconName="{}"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1 / 3,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 15,
  },
  titulo: {
    color: "#000",
    fontSize: 28,
    fontWeight: 600,
  },

  main: {
    flex: 1 / 3,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "100%",
    height: 36,
    backgroundColor: "#999",
    marginBottom: 15,
    borderRadius: 10,
  },
  inputText: {
    color: "#000",
    fontWeight: "500",
    fontSize: 12,
    width: "100%",
    marginBottom: 5,
  },
  footer: {
    flex: 1 / 3,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: 10,
    // backgroundColor: "lightgreen",
  },
});
