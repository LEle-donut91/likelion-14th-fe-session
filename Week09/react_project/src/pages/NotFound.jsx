import { Link } from 'react-router-dom';

// 404 Not Found 에러 처리
function NotFound() {
  return (
    <div className="text-center page-content">
      <h1 className="mb-4">404</h1>
      <h2 className="mb-4">페이지를 찾을 수 없습니다</h2>
      <p className="mb-4">요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.</p>
      <Link to="/" className="btn">
        홈으로 돌아가기
      </Link>
    </div>
  );
}

export default NotFound;
