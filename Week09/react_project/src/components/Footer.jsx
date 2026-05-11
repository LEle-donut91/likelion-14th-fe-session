import { Link } from 'react-router-dom';
import Dropdown from './Dropdown'
import { useTranslation } from "react-i18next";

function Footer({ language, setLanguage }) {
    const { t } = useTranslation(); // useTranslation Hook

    return (
        <nav className="footer border-top border-secondary">
            <div className="container py-5 text-secondary small">
                {/* 문의 전화 p 태그 */}
                <p>{t("footerP")}</p>

                {/* Link 행렬 */}
                <div className="row mt-4">
                    <Link to="/" className="col-6 col-md-3 mb-3 link-secondary" >{t("footerLinkOne")}</Link>
                    <Link to="/" className="col-6 col-md-3 mb-3 link-secondary">{t("footerLinkTwo")}</Link>
                    <Link to="/" className="col-6 col-md-3 mb-3 link-secondary">{t("footerLinkThree")}</Link>
                    <Link to="/" className="col-6 col-md-3 mb-3 link-secondary">{t("footerLinkFour")}</Link>
                    <Link to="/" className="col-6 col-md-3 mb-3 link-secondary">{t("footerLinkFive")}</Link>
                    <Link to="/" className="col-6 col-md-3 mb-3 link-secondary">{t("footerLinkSix")}</Link>
                </div>

                {/* 언어 설정 드롭다운 */}
                <Dropdown
                    language={language}
                    setLanguage={setLanguage}
                />

                {/* Netflix 회사 정보 소개 */}
                <span>
                    <br />
                    {t("footerSpanOne")}<br />
                    {t("footerSpanTwo")}<br />
                    {t("footerSpanThree")}<br />
                    {t("footerSpanFour")}<br />
                    {t("footerSpanFive")}<br />
                    {t("footerSpanSix")}<br />
                    {t("footerSpanSeven")}
                </span>
            </div>
        </nav>
    );
}

export default Footer;
