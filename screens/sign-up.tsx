import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from '@firebase/app';
import auth from '@react-native-firebase/auth';
import axios from 'axios'; // Import axios for making HTTP requests

// const firebaseConfig = {
//   apiKey: "AIzaSyA6e4DDD2dTn46dJPvTLZu6Dr9qCWxhFs8",
//   authDomain: "fir-auth-ef3f1.firebaseapp.com",
//   projectId: "fir-auth-ef3f1",
//   storageBucket: "fir-auth-ef3f1.appspot.com",
//   messagingSenderId: "278226497686",
//   appId: "1:278226497686:web:5b0adb15b95754897612b7",
//   measurementId: "G-H74E72GG25"
// };

// const app = initializeApp(firebaseConfig);

const SignUpScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [nationalId, setNationalId] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  // const auth = getAuth(app);

  const handleSignUp = async () => {
    try {
      // Firebase authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Send additional data to Django backend
      await axios.post('https://your-django-backend.com/api/register/', {
        uid: user.uid, // Firebase user ID
        email: email,
        first_name: firstName,
        last_name: lastName,
        national_id: nationalId,
        phone_number: phoneNumber,
      });

      console.log('User created successfully!');
      navigation.navigate('SignIn');
    } catch (error) {
      console.error('Sign Up error:', error);
    }
  };

  return (

    <View style={styles.container}>
    <Text style={styles.title}>Sign Up</Text>
    <TextInput
      style={styles.input}
      value={email}
      onChangeText={setEmail}
      placeholder="Email"
      autoCapitalize="none"
    />
    <TextInput
      style={styles.input}
      value={password}
      onChangeText={setPassword}
      placeholder="Password"
      secureTextEntry
    />
    <TextInput
      style={styles.input}
      value={firstName}
      onChangeText={setFirstName}
      placeholder="First Name"
    />
    <TextInput
      style={styles.input}
      value={lastName}
      onChangeText={setLastName}
      placeholder="Last Name"
    />
    <TextInput
      style={styles.input}
      value={nationalId}
      onChangeText={setNationalId}
      placeholder="National ID"
    />
    <TextInput
      style={styles.input}
      value={phoneNumber}
      onChangeText={setPhoneNumber}
      placeholder="Phone Number"
    />
    <Button title="Sign Up" onPress={handleSignUp} color="#3498db" />
    <Text
      style={styles.toggleText}
      onPress={() => navigation.navigate('SignIn')}
    >
      Already have an account? Sign In
    </Text>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    color: '#014b27',
  },
  input: {
    height: 40,
    borderColor: '#056e3d',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 4,
    width: '80%',
  },
  toggleText: {
    color: '#056e3d',
    marginTop: 16,
  },
});

export default SignUpScreen;
