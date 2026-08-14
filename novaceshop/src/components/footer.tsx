import { NavItemProps, Pressable, Text, View } from "react-native";

export function Footer() {
  return <>
  </>;
}


function NavItem({ icon,title,route,activeRoute }: NavItemProps) {
  return (
    <>
    <Pressable onPress={() => {
      route.navigate(route.name);
    }}>
       <View>
        <Text>{icon}</Text>
       </View>
       <Text>{title}</Text>
    </Pressable>
    </>
  );
}