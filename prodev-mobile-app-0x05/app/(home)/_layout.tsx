import { FontAwesome, Ionicons, EvilIcons, Feather, AntDesign } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const HomeRootLayout = () => {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: '#34967C',
      headerShown: false
    }}>
      <Tabs.Screen name="index" options={{
        title: 'Home',
        tabBarIcon: ({ color }: { color: string }) => <AntDesign name="home" size={24}
          color={color}
        />,
      }} />
      <Tabs.Screen name="search" options={{
        title: "Search",
        headerShown: true,
        tabBarIcon: ({ color }: { color: string }) => <Feather name="search" size={24}
          color={color}
        />,
      }} />
      <Tabs.Screen name="saved" options={{
        title: "Saved",
        headeShown: true,
        tabBarIcon: ({ color }: { color: string }) => <EvilIcons name="heart" size={27}
          color={color}
        />,
      }} />
      <Tabs.Screen name="inbox" options={{
        title: "Inbox",
        headerShown: true,
        tabBarIcon: ({ color }: { color: string }) => <Ionicons name="chatbubbles-outline" size={24}
          color={color}
        />,
      }} />
      <Tabs.Screen name="profile" options={{
        title: "Options",
        headerShown: true,
        tabBarIcon: ({ color }: { color: string }) => <FontAwesome name="user-o" size={24}
          color={color}
        />,
      }} />
    </Tabs>
  )
}


export default HomeRootLayout;