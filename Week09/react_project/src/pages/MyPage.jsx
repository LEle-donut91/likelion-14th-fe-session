import { useTranslation } from "react-i18next";

function MyPage({ user }) {
    const { t } = useTranslation(); // useTranslation Hook

    return (
        <div>
            {/* 마이페이지 소개, 사용자 계정 표시 */}
            <h2 className="p-5 text-light text-center">{t("myPageH2")}</h2>
            <p className='p-5 text-light text-center'>{user.account}{t("myPageP")}</p>
        </div>
    );
}

export default MyPage;
