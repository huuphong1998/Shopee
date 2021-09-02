import classNames from 'classnames'
import React from 'react'
import { useTranslation } from 'react-i18next'
import * as F from './footer.style'

export default function Footer() {
    const { t, i18n } = useTranslation()
    const changeLanguage = lng => i18n.changeLanguage(lng)

    return (
        <F.Footer>
            <div className="container">
                <F.Footer1>
                    <div>{t('footer.copyright')}</div>
                    <F.Language>
                        {t('footer.language')}:
                        <span
                            onClick={() => changeLanguage('en')}
                            className={classNames({ active: i18n.language === 'en' })}
                        >
                            English
                        </span>
                        <span
                            onClick={() => changeLanguage('vi')}
                            className={classNames({ active: i18n.language === 'vi' })}
                        >
                            Tiếng Việt
                        </span>
                    </F.Language>
                </F.Footer1>
                <F.Footer2>
                    <div>{t('footer.nameCompany')}</div>
                    <div>{t('footer.addressAndEmail')}</div>
                    <div>{t('footer.contact')}</div>
                    <div>{t('footer.businessCode')}</div>
                    <div>{t('footer.license')}</div>
                </F.Footer2>
            </div>
        </F.Footer>
    )
}
