import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomeLayout from "./hoc/HomeLayout.jsx";
import SignUpExam from "./pages/SignUpExam.jsx";
import Profile from "./pages/Profile.jsx";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AuthLayout from "./hoc/AuthLayout.jsx";
import ExamList from "./pages/ExamList.jsx";
import Exam1 from "./pages/Exam1.jsx";
import Exam2 from "./pages/Exam2.jsx";
import Result from "./pages/Result.jsx";
import RouteComponent from "./hoc/RouteComponent.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/"></Navigate>} />
        <Route path="/" element={<Navigate to="/dang-nhap"></Navigate>} />
        <Route path="/dk" element={<AuthLayout />}>
          <Route
            path="/dk"
            element={<RouteComponent isLogin={false} Component={ExamList} />}
          ></Route>
        </Route>
        <Route path="/dang-ky" element={<AuthLayout />}>
          <Route path="/dang-ky" element={<SignUp />}></Route>
        </Route>
        <Route path="/dang-nhap" element={<AuthLayout />}>
          <Route
            path="/dang-nhap"
            element={
              <RouteComponent
                isAuth={true}
                Component={SignIn}
                redirectPath={"/dang-ky-thi"}
              />
            }
          ></Route>
        </Route>
        <Route path="/dang-ky-thi" element={<HomeLayout />}>
          {/* <Route path="/dang-ky-thi" element={<SignUpExam />}></Route> */}
          <Route
            path="/dang-ky-thi"
            element={
              <RouteComponent
                isLogin={true}
                Component={SignUpExam}
                redirectPath={"/dang-nhap"}
              />
            }
          ></Route>
        </Route>
        <Route path="/tai-khoan" element={<HomeLayout />}>
          <Route
            path="/tai-khoan"
            element={
              <RouteComponent
                isLogin={true}
                Component={Profile}
                redirectPath={"/dang-nhap"}
              />
            }
          ></Route>
        </Route>
        <Route
          path="/e1"
          element={
            <RouteComponent
              isLogin={true}
              Component={Exam1}
              redirectPath={"/dang-nhap"}
            />
          }
        ></Route>
        <Route
          path="/e2-tu-luan"
          element={
            <RouteComponent
              isLogin={true}
              Component={Exam2}
              redirectPath={"/dang-nhap"}
            />
          }
        ></Route>{" "}
        <Route
          path="/ket-qua"
          element={
            <RouteComponent
              isLogin={true}
              Component={Result}
              redirectPath={"/dang-nhap"}
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
