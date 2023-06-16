import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { useStores } from "context/StoreContext";

import { observer } from "mobx-react";
import { ReactNode, useEffect, useState } from "react";

import User from "context/models/User";
import LoginPage from "pages/Login";
import Dashboard from "pages/Dashboard";

interface AuthProps {
  children: ReactNode;
}

const AuthRequired = observer(({ children }: AuthProps) => {
  const { authStore } = useStores();

  console.log(authStore.authUser);

  if (authStore.authUser) {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" replace={true} />;
  }
});

const AuthRoutes = observer(() => {
  const { authStore } = useStores();
  const [user, setUser] = useState<User>();
  const navigator = useNavigate();

  useEffect(()=>{
    navigator("/login")
  },[])

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      {authStore.authUser && (
        <Route
          path="/"
          element={
            <AuthRequired>
              <Dashboard />
            </AuthRequired>
          }
        />
      )}
    </Routes>
  );
});
export default AuthRoutes;
