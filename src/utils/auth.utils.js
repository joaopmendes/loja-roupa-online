import { firebaseApp } from "../firebase.config";

export class FirebaseAuthUtils {
  static authLogout() {
    let valid;
    firebaseApp
      .auth()
      .signOut()
      .then(() => (valid = true))
      .catch(() => (valid = false));

    return valid;
  }

  static updateUserData(user, data) {
    user
      .updateProfile(data)
      .then(() => console.log("User successfully updatated"))
      .catch(() => console.log("User unsuccessfully updated"));
  }
}
