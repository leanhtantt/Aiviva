export const contactContent = {
  formSection: {
    headline: 'Liên hệ với chúng tôi',
    subheadline: 'Bạn có câu hỏi, muốn hợp tác, hay cần tư vấn? Gửi tin nhắn — chúng tôi phản hồi trong 24 giờ.',
    form: {
      nameLabel: 'Họ và tên',
      emailLabel: 'Email',
      phoneLabel: 'Số điện thoại (tùy chọn)',
      typeLabel: 'Loại yêu cầu',
      typeOptions: [
        { value: 'personal', label: 'Tư vấn cá nhân' },
        { value: 'b2b', label: 'Hợp tác B2B' },
        { value: 'partner', label: 'Đối tác nhà thuốc/phòng khám' },
        { value: 'investor', label: 'Nhà đầu tư' },
        { value: 'press', label: 'Báo chí & Truyền thông' },
        { value: 'other', label: 'Khác' },
      ],
      messageLabel: 'Tin nhắn',
      submitBtn: 'Gửi tin nhắn',
      submittingBtn: 'Đang gửi...',
      successMsg: "Cảm ơn bạn! Chúng tôi sẽ phản hồi trong vòng 24 giờ.",
      errorMsg: 'Đã có lỗi xảy ra. Vui lòng thử lại.',
      validation: {
        required: 'Trường này là bắt buộc',
        email: 'Vui lòng nhập định dạng email hợp lệ'
      }
    }
  },
  directContact: {
    headline: 'Kết nối trực tiếp với AIVIVA',
    subheadline: '',
    email: 'hello@aiviva.io',
    phone: '+84 938 127 266',
    website: 'www.aiviva.io',
    address: '412 Nguyễn Thị Minh Khai, Quận Bàn Cờ, TP. Hồ Chí Minh, Việt Nam',
    businessHoursData: {
      title: 'Giờ làm việc',
      hours: 'Thứ 2 – Thứ 6: 9:00 – 18:00 (GMT+7)',
      support: 'Hỗ trợ qua email & WhatsApp 24/7'
    }
  },
  partnerInvestor: {
    headline: 'Hợp tác cùng AIVIVA',
    subheadline: "Bạn là nhà thuốc, phòng khám, công ty bảo hiểm, hoặc nhà đầu tư? Hãy cùng xây dựng tương lai Telehealth AI.",
    cards: [
      {
        title: 'Đối tác B2B',
        desc: 'Tích hợp AIVIVA vào hệ thống của bạn — API/SDK sẵn sàng',
        btnText: 'Tìm hiểu gói đối tác B2B',
        type: 'primary'
      },
      {
        title: 'Nhà đầu tư',
        desc: 'AIVIVA đang trong vòng Seed Round 2026 — Tham gia cùng chúng tôi',
        btnText: 'Nhận tài liệu đầu tư',
        type: 'default'
      },
      {
        title: 'Báo chí & Truyền thông',
        desc: 'Liên hệ PR: press@aiviva.io',
        btnText: 'Tải Press Kit',
        type: 'outline'
      }
    ]
  }
};
