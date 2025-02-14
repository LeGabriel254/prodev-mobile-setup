import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{
    headerShown: false  // hides the default header thaat the react navigation(which expo-router is built on) provides.
  }} />;
}
