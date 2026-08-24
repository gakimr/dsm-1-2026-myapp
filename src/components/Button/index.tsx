import { ElementType } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface ButtonFatecProps {
  text: string;
  action: () => void;
  icon: ElementType;
  iconName: string;
}

export function ButtonFatec({text, action, icon:Icon}:ButtonFatecProps) {
  return (
    <TouchableOpacity onPress={action} style={[estilos.container]}>
      <Text style={estilos.title}>{text}</Text>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 52,
    backgroundColor: "green",
    borderRadius: 10,
  },
  title: {
    color: "#fff",
  },
});
