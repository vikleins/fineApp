import {createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import FirstPage from './app/screens/FirstPage';
import Login from './app/screens/Login';
import Home from './app/screens/Home';
import { onAuthStateChanged, User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { FIREBASE_AUTH } from './firebaseConfig';
import SignUp from './app/screens/SignUp';

const Stack = createNativeStackNavigator()
const InsideStack = createNativeStackNavigator()

function InsideLayout (){
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name="My Home" component={Home} />
    </InsideStack.Navigator>
  )
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user', user)
      setUser(user)
    })
  },[])
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        {user ? (<>
          <Stack.Screen name='Inside' component={InsideLayout} options={{headerShown: false}}/>
        </>) : ( <>
         <Stack.Screen name="Login" component={FirstPage} options={{headerShown: false}} />
        <Stack.Screen name="Details" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
        </> )}
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}