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
      id: 'vi-0',
      translationKey: 'ebola-risk-vietnam',
      slug: 'nguy-co-ebola-xam-nhap-viet-nam',
      category: 'Sức khỏe',
      title: 'Nguy cơ Ebola xâm nhập Việt Nam, Bộ Y tế hỏa tốc yêu cầu phòng chống dịch',
      excerpt: 'Trước nguy cơ Ebola xâm nhập Việt Nam, Bộ Y tế yêu cầu các bệnh viện tăng cường phòng dịch, sẵn sàng cách ly, tiếp nhận và điều trị ca nghi nhiễm.',
      date: '30 Thg 5, 2026',
      readTime: '3 phút đọc',
      featured: true,
      image: '/assets/images/news/ebola-risk-vietnam/thumb.jpg',
      heroImage: '/assets/images/news/ebola-risk-vietnam/hero.jpg',
      content: [
        { type: 'paragraph', text: 'Bộ Y tế vừa ban hành công điện khẩn gửi các đơn vị trực thuộc và Sở Y tế các tỉnh, thành phố về việc tăng cường công tác phòng chống dịch bệnh Ebola trước diễn biến phức tạp trên thế giới và nguy cơ xâm nhập vào hệ thống y tế nước nhà.' },
        { type: 'heading', text: 'Tăng cường các biện pháp dự phòng' },
        { type: 'paragraph', text: 'Để chủ động phòng chống dịch, Bộ Y tế yêu cầu các cơ sở khám chữa bệnh thực hiện nghiêm túc các biện pháp sau:' },
        { type: 'list', items: [
          'Tăng cường giám sát, phát hiện sớm các trường hợp nghi ngờ tại các cửa khẩu và cơ sở y tế',
          'Chuẩn bị sẵn sàng khu vực cách ly, phòng hộ cá nhân để tiếp nhận và điều trị ca bệnh nghi ngờ theo đúng quy trình',
          'Đảm bảo đầy đủ cơ số thuốc, trang thiết bị y tế và hóa chất khử khuẩn'
        ]},
        { type: 'paragraph', text: 'Các cơ sở y tế cũng cần xây dựng chi tiết phương án phòng chống lây nhiễm chéo trong bệnh viện, đảm bảo an toàn tuyệt đối cho người bệnh và nhân viên y tế.' },
        { type: 'quote', text: 'Việc giám sát chặt chẽ và chuẩn bị sẵn sàng các phương án ứng phó là yếu tố then chốt để ngăn chặn dịch bệnh xâm nhập và lây lan trong cộng đồng.' },
        { type: 'paragraph', text: 'Bộ Y tế nhấn mạnh tầm quan trọng của việc cập nhật liên tục các phác đồ điều trị và hướng dẫn phòng chống dịch mới nhất từ Tổ chức Y tế Thế giới (WHO).' }
      ]
    }
  ]
};
