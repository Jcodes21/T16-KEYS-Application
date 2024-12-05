const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AddAddress from "./screens/AddAddress";
import BookingDetailDescription from "./screens/BookingDetailDescription";
import BookingDetailConfirm from "./screens/BookingDetailConfirm";
import BookingDetailConfirm1 from "./screens/BookingDetailConfirm1";
import PlaceBooking from "./screens/PlaceBooking";
import Payment3rdStep from "./screens/Payment3rdStep";
import ConfirmationPage from "./screens/ConfirmationPage";
import AddPhotos from "./screens/AddPhotos";
import BookingDetailPending from "./screens/BookingDetailPending";
import Home from "./screens/Home";
import Categories from "./screens/Categories";
import AddDetails from "./screens/AddDetails";
import Payment1stStep from "./screens/Payment1stStep";
import BookingDetailAccepted from "./screens/BookingDetailAccepted";
import Help from "./screens/Help";
import Payment2ndStep from "./components/Payment2ndStep";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="AddAddress"
              component={AddAddress}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BookingDetailDescription"
              component={BookingDetailDescription}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BookingDetailConfirm"
              component={BookingDetailConfirm}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BookingDetailConfirm1"
              component={BookingDetailConfirm1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PlaceBooking"
              component={PlaceBooking}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Payment3rdStep"
              component={Payment3rdStep}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ConfirmationPage"
              component={ConfirmationPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddPhotos"
              component={AddPhotos}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BookingDetailPending"
              component={BookingDetailPending}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Categories"
              component={Categories}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddDetails"
              component={AddDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Payment1stStep"
              component={Payment1stStep}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BookingDetailAccepted"
              component={BookingDetailAccepted}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Help"
              component={Help}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
