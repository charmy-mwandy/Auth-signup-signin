// import React, { useState, useEffect} from "react";
// import { Text, View, TextInput, Button, ScrollView, StyleSheet } from "react-native";
// import {initializeApp} from '@firebase/app';
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyA6e4DDD2dTn46dJPvTLZu6Dr9qCWxhFs8",
//   authDomain: "fir-auth-ef3f1.firebaseapp.com",
//   projectId: "fir-auth-ef3f1",
//   storageBucket: "fir-auth-ef3f1.appspot.com",
//   messagingSenderId: "278226497686",
//   appId: "1:278226497686:web:5b0adb15b95754897612b7",
//   measurementId: "G-H74E72GG25"
// };

// const app = initializeApp(firebaseConfig)

// interface AuthScreenProps {
//   email: string;
//   setEmail: (email: string) => void;
//   password: string;
//   setPassword: (password: string) => void;
//   isLogin: boolean;
//   setIsLogin: (isLogin: boolean) => void;
//   handleAuthentication: () => void;
// }

// const AuthScreen: React.FC<AuthScreenProps> = ({
//   email, 
//   setEmail, 
//   password, 
//   setPassword, 
//   isLogin, 
//   setIsLogin, 
//   handleAuthentication}) =>
// {
//   return (
//     <View
//       style={styles.authContainer}
//     >
//       <Text  style={styles.title}>{ isLogin ? 'Sign in' : 'Sign up'}</Text>

//       <TextInput 
//         style={styles.title}
//         value={email}
//         onChangeText={setEmail}
//         placeholder="Email"
//         autoCapitalize="none"
//       />

//       <TextInput 
//         style={styles.title}
//         value={password}
//         onChangeText={setPassword}
//         placeholder="Password"
//         secureTextEntry
//       />
//       <View style={styles.buttonContainer}>
//         <Button title={isLogin ? 'Sign In' : 'Sign Up'} onPress={handleAuthentication} color="#3498db"/>
//       </View>

//       <View style={styles.bottomContainer}>
//         <Text style={styles.toggleText} onPress={() => setIsLogin(!isLogin)}  >
//           {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Sign In'}
//         </Text>
       
//       </View>
//     </View>
//   );
// }


// class AuthenticatedScreen extends React.Component<{ user: any, handleAuthentication: any }> {
//   render() {
//       let {user, handleAuthentication} = this.props;

//       return (
//         <View style={styles.authContainer}>
//           <Text style={styles.title}>Welcome</Text>
//           <Text style={styles.emailText}>{user.email}</Text>
//           <Button title="Logout" onPress={handleAuthentication} color="#e74c3c" />
//         </View>
//       );
//   }
// }

// export default function App(){
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [user, setUser] = useState(null); // Track user authentication state
//   const [isLogin, setIsLogin] = useState(true);

//   const auth = getAuth(app);
//   useEffect(() => {
//       const unsubscribe = onAuthStateChanged(auth, (user) => {
//           // @ts-ignore
//           setUser(user);
//       });

//       return () => unsubscribe();
//   }, [auth]);


//   const handleAuthentication = async () => {
//       try {
//           if (user) {
//               // If user is already authenticated, log out
//               console.log('User logged out successfully!');
//               await signOut(auth);
//           } else {
//               // Sign in or sign up
//               if (isLogin) {
//                   // Sign in
//                   await signInWithEmailAndPassword(auth, email, password);
//                   console.log('User signed in successfully!');
//               } else {
//                   // Sign up
//                   await createUserWithEmailAndPassword(auth, email, password);
//                   console.log('User created successfully!');
//               }
//           }
//       } catch (error) {

//           console.error('Authentication error:',
//               error);
//       }
//   };

//   return (
//      <>
//           {user ? (
//               // Show user's email if user is authenticated
//               <AuthenticatedScreen user={user} handleAuthentication={handleAuthentication} />
//           ) : (
//               // Show sign-in or sign-up form if user is not authenticated
//                   <ScrollView contentContainerStyle={styles.container}>

//                       <AuthScreen
//                           email={email}
//                           setEmail={setEmail}
//                           password={password}
//                           setPassword={setPassword}
//                           isLogin={isLogin}
//                           setIsLogin={setIsLogin}
//                           handleAuthentication={handleAuthentication}
//                       />
//                   </ScrollView>
//           )}
//      </>
//   );
// }

// const styles = StyleSheet.create({
//   homecontainer: {
//       flex: 1 ,
//       // height:'120%',
//       // width:'100%',
//       margin:40,
//   },basecontainer: {
//       // flex: 1 ,
//       height:'120%',
//       width:'120%',
//   },
//   container: {
//       flexGrow: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       padding: 16,
//       backgroundColor: 'transparent',
//   },
//   authContainer: {
//       width: '80%',
//       maxWidth: 300,
//       backgroundColor: 'rgba(255,255,255,0.57)',
//       padding: 16,
//       borderRadius: 8,
//       elevation: 3,
//       alignSelf:"center",
//       marginTop:'50%',
//   },
//   title: {
//       fontSize: 24,
//       marginBottom: 16,
//       textAlign: 'center',
//       color:'#014b27'
//   },subtitle: {
//       fontSize: 12,
//       marginBottom: 16,
//       textAlign: 'center',
//       color:'#014b27'
//   },
//   input: {
//       height: 40,
//       borderColor: '#056e3d',
//       borderWidth: 1,
//       marginBottom: 16,
//       padding: 8,
//       borderRadius: 4,
//   },
//   buttonContainer: {
//       marginBottom: 16,
//   },
//   toggleText: {
//       color: '#056e3d',
//       textAlign: 'center',
//   },
//   bottomContainer: {
//       marginTop: 20,
//   },
//   emailText: {
//       fontSize: 12,
//       textAlign: 'center',
//       width: '100%',
//       marginBottom: 20,
//       color:'#056e3d',
//   }, overlay: {
//       ...StyleSheet.absoluteFillObject,
//   }, logo: {
//       width:  50,
//       height:  50,
//       marginRight:  10,
//       alignSelf:"center",
//       margin:10,
//       // padding:2,
//       // borderRadius:5,
//   },


// });




// App.tsx or App.js
import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from '@/screens/sign-up';

const Stack = createStackNavigator();

const App = () => {
  return (
    // <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default App;
