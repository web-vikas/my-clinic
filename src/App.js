import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./components/NotFound";
import { AuthProvider } from "./components/auth/auth";
import { RequireAuth } from "./components/auth/RequireAuth";
import { Login, SignUp } from "./pages/auth";
import * as Doctor from "./pages/Doctor";
import * as Admin from "./pages/Admin";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<SignUp />}></Route>
        <Route
          path="/doctor"
          element={
            <RequireAuth>
              <Doctor.Dashboard />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/admin"
          element={
            <RequireAuth>
              <Admin.Dashboard />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/admin/doctors"
          element={
            <RequireAuth>
              <Admin.Doctor />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/doctor/appointments"
          element={
            <RequireAuth>
              <Doctor.Appointments />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/doctor/profile"
          element={
            <RequireAuth>
              <Doctor.Profile />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/doctor/slots"
          element={
            <RequireAuth>
              <Doctor.Slots />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/admin/patient"
          element={
            <RequireAuth>
              <Admin.Patient />
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
