import React from 'react'
import { useTranslation } from 'react-i18next'
import * as F from './footer.style'
import classNames from 'classnames'

export default function Footer() {
    const { t, i18n } = useTranslation()
    const changeLanguage = lng => i18n.changeLanguage(lng)

    return (
        <F.Footer>
            <div className="container">
                <F.Footer1>
                    <div>© 2021 Shopee. Tất cả các quyền được bảo lưu.</div>
                    <F.Language>
                        {t('footer.language')}:
                        <span
                            onClick={() => changeLanguage('en')}
                            className={classNames({ active: i18n.language === 'en' })}
                        >
                            Tiếng Anh
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
                    <div>Công ty TNHH Shopee</div>
                    <div>
                        Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận Ba
                        Đình, Thành phố Hà Nội, Việt Nam. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn
                    </div>
                    <div>
                        Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên hệ: 024 73081221 (ext 4678)
                    </div>
                    <div>
                        Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015
                    </div>
                    <div>© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</div>
                </F.Footer2>
            </div>
        </F.Footer>
    )
}
