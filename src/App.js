import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./hoc/HomeLayout.jsx";
import SignUpExam from "./pages/SignUpExam.jsx";
import Profile from "./pages/Profile.jsx";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AuthLayout from "./hoc/AuthLayout.jsx";
import ExamList from "./pages/ExamList.jsx";
import Exam1 from "./pages/Exam1.jsx";
import Result from "./pages/Result.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dk" element={<AuthLayout />}>
          <Route path="/dk" element={<ExamList />}></Route>
        </Route>
        <Route path="/dang-ky" element={<AuthLayout />}>
          <Route path="/dang-ky" element={<SignUp />}></Route>
        </Route>
        <Route path="/dang-nhap" element={<AuthLayout />}>
          <Route path="/dang-nhap" element={<SignIn />}></Route>
        </Route>
        <Route path="/dang-ky-thi" element={<HomeLayout />}>
          <Route path="/dang-ky-thi" element={<SignUpExam />}></Route>
        </Route>
        <Route path="/tai-khoan" element={<HomeLayout />}>
          <Route path="/tai-khoan" element={<Profile />}></Route>
        </Route>
        <Route path="/e1" element={<Exam1 />}></Route>
        <Route path="/ket-qua" element={<Result />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
