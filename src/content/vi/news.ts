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
  detail: {
    backToNews: 'Quay lại Tin tức',
    articleNotFound: 'Không tìm thấy bài viết',
    relatedArticles: 'Bài viết liên quan',
    shareArticle: 'Chia sẻ bài viết này',
    linkCopied: 'Đã sao chép liên kết'
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
      translationKey: 'platform-launch',
      slug: 'aiviva-ra-mat-nen-tang-telehealth-moi',
      category: 'Sản phẩm',
      title: 'AIVIVA Ra Mắt Nền Tảng Telehealth Thế Hệ Mới',
      excerpt: 'Nền tảng tích hợp công nghệ AI quét chỉ số sinh tồn trực tiếp từ camera điện thoại, mang lại trải nghiệm mượt mà.',
      date: '28 Thg 5, 2026',
      readTime: '5 phút đọc',
      featured: true,
      content: [
        { type: 'paragraph', text: 'Chúng tôi rất vui mừng thông báo ra mắt nền tảng y tế từ xa thế hệ mới, được thiết kế để cải thiện chăm sóc sức khỏe thông qua trí tuệ nhân tạo.' },
        { type: 'heading', text: 'Đo Chỉ Số Sinh Tồn Mượt Mà' },
        { type: 'paragraph', text: 'Nền tảng mới của chúng tôi kết hợp công nghệ quét AI tiên tiến, cho phép người dùng theo dõi các chỉ số sinh tồn trực tiếp bằng camera điện thoại thông minh.' },
        { type: 'list', items: [
          'Đo nhịp tim không cần thiết bị đeo',
          'Ước tính độ bão hòa oxy trong máu (SpO2)',
          'Phân tích mức độ căng thẳng và biến thiên nhịp tim (HRV)'
        ]},
        { type: 'quote', text: 'Nền tảng này là một bước tiến lớn trong việc giúp chăm sóc sức khỏe trở nên dễ tiếp cận, giá cả phải chăng và thiết thực cho mọi người, ở bất kỳ đâu.' },
        { type: 'paragraph', text: 'Bằng cách loại bỏ rào cản về phần cứng chuyên dụng, chúng tôi trao quyền cho các cá nhân chủ động kiểm soát sức khỏe của mình một cách dễ dàng.' }
      ]
    },
    {
      id: 'vi-2',
      translationKey: 'partner-pharmacy',
      slug: 'hop-tac-chuoi-nha-thuoc-lon',
      category: 'Đối tác',
      title: 'AIVIVA Hợp Tác Cùng Chuỗi Nhà Thuốc Hàng Đầu',
      excerpt: 'Đưa các kiosk khám bệnh từ xa và giải pháp y tế số đến hơn 500 địa điểm trên toàn quốc.',
      date: '15 Thg 5, 2026',
      readTime: '4 phút đọc',
      content: [
        { type: 'paragraph', text: 'Trong một động thái quan trọng nhằm mở rộng khả năng tiếp cận các công cụ y tế số, AIVIVA đã hợp tác với một chuỗi nhà thuốc quốc gia hàng đầu.' },
        { type: 'paragraph', text: 'Sự hợp tác này sẽ triển khai các trạm y tế từ xa (Kiosk) của chúng tôi tại hơn 500 địa điểm trên toàn quốc, mang công nghệ theo dõi sức khỏe bằng AI đến cộng đồng địa phương.' },
        { type: 'heading', text: 'Thu Hẹp Khoảng Cách' },
        { type: 'paragraph', text: 'Các Kiosk cộng đồng này cung cấp cầu nối cần thiết cho những cá nhân có thể không có smartphone hiện đại hoặc kết nối internet ổn định ở nhà.' },
        { type: 'list', items: [
          'Kiểm tra chỉ số sinh tồn miễn phí tại nhà thuốc',
          'Kết nối tức thì với các nhà cung cấp y tế',
          'Chia sẻ an toàn các chỉ số sức khỏe với dược sĩ'
        ]}
      ]
    },
    {
      id: 'vi-3',
      translationKey: 'telehealth-trends',
      slug: 'xu-huong-telehealth-dong-nam-a-2026',
      category: 'Thị trường',
      title: 'Xu Hướng Telehealth Tại Đông Nam Á Năm 2026',
      excerpt: 'Báo cáo chi tiết về cách trí tuệ nhân tạo đang thay đổi hình thức chăm sóc sức khỏe từ xa tại các thị trường mới nổi.',
      date: '02 Thg 5, 2026',
      readTime: '7 phút đọc',
      content: [
        { type: 'paragraph', text: 'Đông Nam Á đang trải qua quá trình chuyển đổi số nhanh chóng, và ngành chăm sóc sức khỏe đang đi đầu trong sự thay đổi này.' },
        { type: 'heading', text: 'AI Thúc Đẩy Tính Ứng Dụng' },
        { type: 'paragraph', text: 'Nghiên cứu thị trường mới nhất của chúng tôi chỉ ra rằng các tính năng dựa trên AI là chất xúc tác chính cho việc gia tăng áp dụng nền tảng y tế từ xa trong khu vực.' },
        { type: 'quote', text: 'Bệnh nhân ngày càng yêu cầu sự chăm sóc chủ động và cá nhân hóa, điều mà công nghệ AI có khả năng đáp ứng trên quy mô rộng lớn.' },
        { type: 'paragraph', text: 'Chúng tôi dự báo tăng trưởng 40% so với cùng kỳ năm trước về các buổi tư vấn từ xa được hỗ trợ bởi sàng lọc sức khỏe AI sơ bộ.' }
      ]
    },
    {
      id: 'vi-4',
      translationKey: 'hrv-intro',
      slug: 'hieu-ve-hrv-va-cang-thang',
      category: 'Sức khỏe',
      title: 'Hiểu Về Biến Thiên Nhịp Tim (HRV) Và Mức Căng Thẳng',
      excerpt: 'Làm thế nào việc đo lường HRV có thể cung cấp thông tin quan trọng về hệ thần kinh và sức khỏe tinh thần của bạn.',
      date: '20 Thg 4, 2026',
      readTime: '6 phút đọc',
      content: [
        { type: 'paragraph', text: 'Biến Thiên Nhịp Tim (HRV) đơn giản là thước đo sự thay đổi về thời gian giữa mỗi nhịp tim. Không giống như nhịp tim đập bình thường, HRV cung cấp cái nhìn sâu sắc hơn vào hệ thần kinh tự chủ của bạn.' },
        { type: 'heading', text: 'Tại Sao HRV Quan Trọng' },
        { type: 'paragraph', text: 'HRV cao thường cho thấy cơ thể bạn có khả năng phục hồi và thích ứng tốt với căng thẳng, trong khi HRV thấp có thể gợi ý rằng cơ thể đang chịu stress hoặc mệt mỏi.' },
        { type: 'list', items: [
          'Chỉ báo phục hồi thể chất',
          'Triệu chứng căng thẳng tâm lý',
          'Dự đoán sức khỏe tổng thể'
        ]},
        { type: 'paragraph', text: 'AIVIVA sử dụng công nghệ rPPG nâng cao để ước tính HRV của bạn một cách thuận tiện thông qua camera smartphone.' }
      ]
    },
    {
      id: 'vi-5',
      translationKey: 'research-update',
      slug: 'nghien-cuu-do-chinh-xac-quet-sinh-ton-ai',
      category: 'Sản phẩm',
      title: 'Cập Nhật Nghiên Cứu: Quét Sinh Tồn Bằng Smartphone',
      excerpt: 'Đánh giá ban đầu mới nhất khám phá sự phù hợp của công nghệ rPPG trên nhiều tông màu da khác nhau.',
      date: '10 Thg 4, 2026',
      readTime: '8 phút đọc',
      content: [
        { type: 'paragraph', text: 'Chúng tôi tự hào chia sẻ kết quả của một đánh giá ban đầu toàn diện khám phá sự phù hợp của công nghệ quét chỉ số sinh tồn bằng hình ảnh thông qua AI.' },
        { type: 'heading', text: 'Các Kết Quả Chính' },
        { type: 'paragraph', text: 'Đánh giá với nhiều nhóm người tham gia đa dạng cho thấy thuật toán rPPG của chúng tôi có sự điều chỉnh đầy hứa hẹn so với các cảm biến y tế truyền thống.' },
        { type: 'quote', text: 'Và quan trọng là, đánh giá ghi nhận rằng thuật toán đã được thử nghiệm trên nhiều tông màu da đa dạng.' },
        { type: 'paragraph', text: 'Điều này ủng hộ cam kết của chúng tôi trong việc tạo ra công nghệ y tế số bao trùm, phục vụ mọi người một cách bình đẳng.' }
      ]
    },
    {
      id: 'vi-6',
      translationKey: 'insurance-integration',
      slug: 'mo-rong-hop-tac-bao-hiem-y-te',
      category: 'Đối tác',
      title: 'Mở Rộng Mạng Lưới: Tích Hợp Bảo Hiểm Y Tế',
      excerpt: 'Người dùng hiện có thể liên kết hồ sơ AIVIVA với các nhà cung cấp bảo hiểm để nhận ưu đãi phí bảo hiểm đặc quyền.',
      date: '25 Thg 3, 2026',
      readTime: '4 phút đọc',
      content: [
        { type: 'paragraph', text: 'Chúng tôi đang mở rộng hệ sinh thái bằng cách tích hợp với một số nhà cung cấp bảo hiểm y tế hàng đầu.' },
        { type: 'paragraph', text: 'Sự mở rộng này cho phép người dùng tự nguyện chia sẻ số liệu sức khỏe và các hoạt động bảo vệ sức khỏe của họ với các công ty bảo hiểm.' },
        { type: 'heading', text: 'Khuyến Khích Thói Quen Lành Mạnh' },
        { type: 'paragraph', text: 'Bằng cách tham gia vào các chương trình này, người dùng có thể nhận được chiết khấu phí bảo hiểm, phần thưởng chăm sóc sức khỏe và hướng dẫn tập luyện cá nhân hóa.' },
        { type: 'list', items: [
          'Chủ động chia sẻ dữ liệu đảm bảo quyền riêng tư',
          'Theo dõi phần thưởng tự động',
          'Giảm phí bảo hiểm khi duy trì lối sống lành mạnh'
        ]}
      ]
    }
  ]
};
