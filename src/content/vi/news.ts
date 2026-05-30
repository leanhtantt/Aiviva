import { NewsContent } from '../../types/news';

export const newsContentVi: NewsContent = {
  hero: {
    badge: 'Tin tức & Cập nhật',
    headline: 'Tin tức mới nhất từ AIVIVA',
    subheadline: 'Cập nhật về sản phẩm, đối tác, thị trường và công nghệ Telehealth AI.'
  },
  filter: {
    all: 'Tất cả',
    categories: ['Sản phẩm', 'Đối tác', 'Thị trường', 'Sức khỏe'],
    emptyState: 'Chưa có bài viết nào trong danh mục này.'
  },
  newsletter: {
    headline: 'Đăng ký nhận bản tin',
    subheadline: 'Nhận thông tin cập nhật mới nhất về công nghệ Telehealth AI và sản phẩm AIVIVA.',
    placeholder: 'Nhập địa chỉ email của bạn',
    button: 'Đăng ký',
    success: 'Cảm ơn bạn đã đăng ký! Chúng tôi sẽ gửi cập nhật sớm nhất.'
  },
  articles: [
    {
      id: 'vi-1',
      slug: 'aiviva-ra-mat-nen-tang-telehealth-moi',
      category: 'Sản phẩm',
      title: 'AIVIVA Ra Mắt Nền Tảng Telehealth Thế Hệ Mới',
      excerpt: 'Nền tảng tích hợp công nghệ AI quét chỉ số sinh tồn trực tiếp từ camera điện thoại, mang lại trải nghiệm mượt mà.',
      date: '28 Thg 5, 2026',
      readTime: '5 phút đọc',
      featured: true
    },
    {
      id: 'vi-2',
      slug: 'hop-tac-chuoi-nha-thuoc-lon',
      category: 'Đối tác',
      title: 'AIVIVA Hợp Tác Cùng Chuỗi Nhà Thuốc Hàng Đầu',
      excerpt: 'Đưa các kiosk khám bệnh từ xa và giải pháp y tế số đến hơn 500 địa điểm trên toàn quốc.',
      date: '15 Thg 5, 2026',
      readTime: '4 phút đọc'
    },
    {
      id: 'vi-3',
      slug: 'xu-huong-telehealth-dong-nam-a-2026',
      category: 'Thị trường',
      title: 'Xu Hướng Telehealth Tại Đông Nam Á Năm 2026',
      excerpt: 'Báo cáo chi tiết về cách trí tuệ nhân tạo đang thay đổi hình thức chăm sóc sức khỏe từ xa tại các thị trường mới nổi.',
      date: '02 Thg 5, 2026',
      readTime: '7 phút đọc'
    },
    {
      id: 'vi-4',
      slug: 'hieu-ve-hrv-va-cang-thang',
      category: 'Sức khỏe',
      title: 'Hiểu Về Biến Thiên Nhịp Tim (HRV) Và Mức Căng Thẳng',
      excerpt: 'Làm thế nào việc đo lường HRV có thể cung cấp thông tin quan trọng về hệ thần kinh và sức khỏe tinh thần của bạn.',
      date: '20 Thg 4, 2026',
      readTime: '6 phút đọc'
    },
    {
      id: 'vi-5',
      slug: 'nghien-cuu-do-chinh-xac-quet-sinh-ton-ai',
      category: 'Sản phẩm',
      title: 'Nghiên Cứu Lâm Sàng: Độ Chính Xác Khi Quét Sinh Tồn',
      excerpt: 'Nghiên cứu mới nhất xác nhận độ chính xác cao của công nghệ rPPG trên nhiều tông màu da khác nhau.',
      date: '10 Thg 4, 2026',
      readTime: '8 phút đọc'
    },
    {
      id: 'vi-6',
      slug: 'mo-rong-hop-tac-bao-hiem-y-te',
      category: 'Đối tác',
      title: 'Mở Rộng Mạng Lưới: Tích Hợp Bảo Hiểm Y Tế',
      excerpt: 'Người dùng hiện có thể liên kết hồ sơ AIVIVA với các nhà cung cấp bảo hiểm để nhận ưu đãi phí bảo hiểm đặc quyền.',
      date: '25 Thg 3, 2026',
      readTime: '4 phút đọc'
    }
  ]
};
