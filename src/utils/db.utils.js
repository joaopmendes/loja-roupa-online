import firebase from "firebase";
export class FirebaseDbUtils {
  static logitechItemsRoot = firebase.database().ref("users");
  static getAllItemsFromDb() {
    this.logitechItemsRoot.on("value", data => console.log(data));
  }
}
