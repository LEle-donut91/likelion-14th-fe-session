import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from "./components/form";
import History from "./components/history"
import Detail from './components/detail';
import { MyProvider } from "./Context"

function App() {
  return (
    <BrowserRouter>
        <MyProvider>
          <Form />  {/* 오늘의 기분 입력 폼 Component */}
          <Routes>
            {/* 경로(path)별 렌더링할 컴포넌트(History, Detail) 지정 */}
            <Route path="/" element={<History />} />
            <Route path="/history" element={<History />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </MyProvider>
    </BrowserRouter>
  );
}

export default App;
