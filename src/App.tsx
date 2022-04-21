import React from "react";
import { Toaster } from "react-hot-toast";
import { AppWrapper } from "./AppWrapper";
import { UserProvider } from "./components/UserContext/UserContext";

function App() {
  return (
    <UserProvider>
      <AppWrapper />
      <Toaster />
    </UserProvider>
  );
}

export default App;
