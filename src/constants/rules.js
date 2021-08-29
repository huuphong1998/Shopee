import { isEmail } from 'utils/helper'

export const rules = {
    name: {
        minLength: {
            value: 2,
            message: 'Họ và tên có ít nhất 2 ký tự'
        },
        maxLength: {
            value: 160,
            message: 'Họ và tên có tối đa 160 ký tự'
        }
    },
    phone: {
        maxLength: {
            value: 20,
            message: 'Số điện thoại có tối đa 20 ký tự'
        }
    },
    address: {
        maxLength: {
            value: 160,
            message: 'Địa chỉ có tối đa 20 ký tự'
        }
    },
    email: {
        required: {
            value: true,
            message: 'Email là bắt buộc nhập'
        },
        minLength: {
            value: 5,
            message: 'Email có độ dài từ 5 - 160 ký tự'
        },
        maxLength: {
            value: 160,
            message: 'Email có độ dài từ 5 - 160 ký tự'
        },
        validate: {
            email: v => isEmail(v) || 'Email không đúng định dạng'
        }
    },

    password: {
        required: {
            value: true,
            message: 'Mật khẩu là bắt buộc nhập'
        },
        minLength: {
            value: 6,
            message: 'Mật khẩu có độ dài từ 6 - 160 ký tự'
        },
        maxLength: {
            value: 160,
            message: 'Email có độ dài từ 6 - 160 ký tự'
        }
    },

    confirmedPassword: {
        required: {
            value: true,
            message: 'Nhập lại mật khẩu là bắt buộc'
        },
        minLength: {
            value: 6,
            message: 'Nhập lại mật khẩu có độ dài từ 6 - 160 ký tự'
        },
        maxLength: {
            value: 160,
            message: 'Nhập lại mật khẩu có độ dài từ 6 - 160 ký tự'
        }
    }
}
