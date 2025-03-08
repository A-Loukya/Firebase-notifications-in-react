import { useEffect } from "react";
import { messaging } from "./firebase";
import { getToken } from "firebase/messaging";

function App() {
  const requestPermission = async () => {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY,
      });
      console.log("FCM Token:", token);
    } else if (permission === "denied") {
      alert("You denied the notification");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <>
      <div>
        <h1>Vite + React</h1>
        <p>Firebase Cloud Messaging is integrated!</p>
      </div>
    </>
  );
}

export default App;
