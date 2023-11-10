import auth from '@react-native-firebase/auth';

export const createUser = async (fullName, email, password) => {
  try {
    const user = await auth().createUserWithEmailAndPassword(email, password);
    await user.user.updateProfile({displayName: fullName});
    console.log(user);
    return user;
  } catch (err) {
    if (err.code === 'auth/email-already-in-use') {
      return {err: 'The email you entered is already in use'};
    } else if (err.code === 'auth/invalid-email') {
      return {err: 'Please enter a valid email address'};
    }
    return {err: 'Something went wrong with your request'};
  }
};
