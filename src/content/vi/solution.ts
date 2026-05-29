export const solutionContent = {
  overview: {
    headline: 'AIVIVA: Chụp ảnh selfie. Hiểu sức khỏe.',
    subheadline: 'Chụp ảnh selfie 30 giây để nhận đầy đủ chỉ số sinh hiệu mà không cần thiết bị vật lý',
    coreTechTitle: 'Công nghệ cốt lõi: rPPG (Remote Photoplethysmography) KHÔNG XÂM LẤN - KHÔNG CHẠM',
    coreTechDesc: 'Camera ghi lại vi biến màu sắc trong lưu lượng máu trên khuôn mặt → AI phân tích → trả kết quả.',
    processTitle: 'Qy trình 4 bước:',
    processSteps: [
      {
        title: 'Đầu vào camera',
        desc: 'Bất kỳ smartphone, tablet, laptop'
      },
      {
        title: 'Xử lý AI rPPG',
        desc: 'Loại bỏ nhiễu, độ chính xác >98%'
      },
      {
        title: 'Bảo mật Edge AI',
        desc: 'Video xử lý trên thiết bị, không lưu hình ảnh, tuân thủ GDPR & Luật ANMVN'
      },
      {
        title: 'Kết quả sinh hiệu',
        desc: 'Nhịp tim, HRV, SpO₂, huyết áp, chỉ số căng thẳng trong 30 giây'
      }
    ],
    platformInfo: 'Nền tảng: Mobile App + Web, giao diện 100% tiếng Việt\nPowered by eBeauti (US) + AIVIVA localization',
    cta: 'Coming soon'
  },
  roadmap: {
    headline: 'Nền tảng AI sức khỏe thông minh 5 cấp độ',
    subheadline: 'Giám sát cơ bản đến hệ sinh thái sức khỏe toàn diện',
    levels: [
      {
        level: 'L1',
        title: 'Foundation',
        subtitle: '(Theo dõi cơ bản)',
        features: 'Nhịp tim · HRV · SpO₂ · Huyết áp · Bước đi · Giấc ngủ',
        isMVP: false
      },
      {
        level: 'L2',
        title: 'Chronic Care',
        subtitle: '(Quản lý bệnh mạn tính)',
        features: 'CGM Glucose · BMI · Cholesterol · Quản lý thuốc',
        isMVP: false
      },
      {
        level: 'L3',
        title: 'Predictive AI',
        subtitle: '(Dự báo & can thiệp sớm)',
        features: 'HRV · ECG · Căng thẳng · Dự đoán rủi ro · Cảnh báo sớm',
        isMVP: true,
        mvpBadge: 'MVP (T7/2026)'
      },
      {
        level: 'L4',
        title: 'Holistic Health',
        subtitle: '(Sức khỏe toàn diện)',
        features: 'Sức khỏe tâm thần · Lối sống · Nguy cơ đột quỵ · AI Coach 24/7',
        isMVP: false
      },
      {
        level: 'L5',
        title: 'Ecosystem',
        subtitle: '(Hệ sinh thái)',
        features: 'Điểm sức khỏe 0–100 · Liên kết bảo hiểm · Liên kết bệnh viện',
        isMVP: false
      }
    ]
  },
  fourPillars: {
    headline: 'Tầm soát sức khỏe chủ động với công nghệ AI',
    subheadline: 'Từ bệnh viện đến gia đình: một nền tảng, bốn giải pháp',
    pillars: [
      {
        title: '1. Sàng lọc thông minh: Giảm tải sức chứa hệ thống y tế',
        desc: 'Sàng lọc sức khỏe từ xa trước khi bệnh nhân đến cơ sở y tế, giúp bệnh viện và phòng khám tập trung nguồn lực cho ca bệnh thực sự cần thiết.'
      },
      {
        title: '2. Bệnh mãn tính: Kiểm soát tại nhà, an tâm mỗi ngày',
        desc: 'Tiểu đường, huyết áp, tim mạch: theo dõi mỗi sáng chỉ 30 giây, không cần đặt lịch, không cần chờ đợi, dữ liệu gửi thẳng cho bác sĩ.'
      },
      {
        title: '3. Phát hiện sớm: Phòng ngừa chủ động',
        desc: 'AI phân tích xu hướng sức khỏe theo thời gian. Nhận cảnh báo khi chỉ số bất thường. Hành động trước khi quá muộn.'
      },
      {
        title: '4. Sống khỏe, sống đẹp mỗi ngày',
        desc: 'Hiểu rõ cơ thể mình để điều chỉnh lối sống, giấc ngủ, mức căng thẳng, biến việc chăm sóc sức khỏe thành thói quen nhẹ nhàng thay vì gánh nặng.'
      }
    ]
  },
  whoWeServe: {
    headline: 'Ai là khách hàng và chúng tôi giải quyết vấn đề gì',
    subheadline: 'Phục vụ cả người dùng cá nhân (B2C) lẫn doanh nghiệp (B2B)',
    b2c: {
      title: '👤 B2C: Người dùng cuối:',
      items: [
        'Bệnh nhân mãn tính 35–65 tuổi & người cao tuổi → Theo dõi hàng ngày tại nhà, không cần thiết bị',
        'Người quan tâm sức khỏe 25–45 tuổi → Theo dõi sức khỏe qua điện thoại, bất cứ lúc nào',
        'Người già cần chăm sóc từ xa → Gia đình yên tâm theo dõi từ xa'
      ]
    },
    b2b: {
      title: '🏢 B2B: Doanh nghiệp:',
      items: [
        'Phòng khám & nền tảng khám từ xa → Tích hợp API/SDK',
        'Công ty bảo hiểm → Dữ liệu đánh giá rủi ro chính xác',
        'Chương trình chăm sóc sức khỏe doanh nghiệp → Sàng lọc sức khỏe nhân viên'
      ]
    }
  },
  competitiveAdvantage: {
    headline: 'Không ma sát · Bảo mật tuyệt đối · Kết quả tức thì',
    subheadline: 'AIVIVA giải quyết triệt để bài toán tuân thủ điều trị: không thiết bị, không phiền hà'
  }
};
