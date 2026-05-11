import { useTranslation } from "react-i18next";

function Home() {
    const { t } = useTranslation(); // useTranslation Hook

    return (
        // netflix 홈 페이지 소개 문구
        <h1 className="text-center text-light m-5">{t("homeGreeting")}</h1>
    );
}
export default Home;
