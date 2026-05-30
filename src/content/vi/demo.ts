export const demoContent = {
  intro: {
    headline: 'Trải nghiệm ngay. Chỉ cần camera của bạn',
    subheadline: 'Không cần tải app. Không cần đăng ký. Quét ngay trên trình duyệt trong 30 giây.',
    cameraMock: {
      buttonStart: 'Bắt đầu quét',
      scanning: 'Đang quét...',
      detecting: 'Đang nhận diện khuôn mặt...',
      analyzing: 'Đang phân tích sinh hiệu...',
      success: 'Quét hoàn tất',
      disclaimer: 'Chỉ dành cho mục đích thử nghiệm. Không phải thiết bị y tế.',
      idleTitle: 'Sẵn sàng quét',
      idleDesc: 'Nhấn Bắt đầu để mô phỏng quét 30 giây.',
      aligningTitle: 'Căn chỉnh khuôn mặt...',
      aligningDesc: 'Giữ thiết bị ổn định và đợi khung nhận diện khóa vị trí.',
      scanningTitle: 'Đang quét sinh hiệu...',
      scanningDesc: 'Phân tích sự thay đổi siêu nhỏ của màu da qua camera.',
      analyzingTitle: 'Đang phân tích dữ liệu...',
      analyzingDesc: 'Đang xử lý chuẩn xác hình ảnh bằng mô hình AI.',
      completeTitle: 'Quét hoàn tất',
      completeDesc: 'Toàn bộ dữ liệu sinh hiệu đã được thu thập và phân tích thành công.',
      progressLabel: 'Tiến trình',
      viewResultsBtn: 'Xem kết quả',
      resetBtn: 'Thử lại',
      cancelBtn: 'Hủy dùng thử',
      screenIdleTitle: 'Camera đã sẵn sàng',
      screenIdleDesc: 'Nhấn Bắt đầu để mô phỏng quét',
      screenCompleteTitle: 'Quét hoàn tất',
      screenCompleteDesc: 'Thu thập sinh hiệu thành công'
    }
  },
  howToUse: {
    headline: 'Cách sử dụng: Chỉ 3 bước đơn giản',
    subheadline: 'Không cần kiến thức y tế. Ai cũng có thể dùng.',
    steps: [
      {
        title: 'Bước 1: Chuẩn bị',
        items: ['Ngồi yên, ánh sáng đủ, giữ khuôn mặt trong khung hình', 'Tháo kính râm, khẩu trang nếu có']
      },
      {
        title: 'Bước 2: Quét',
        items: ['Nhấn nút "Bắt đầu quét"', 'Giữ yên 30 giây (thanh tiến trình hiển thị đếm ngược)', 'Animation: vòng tròn nhận diện khuôn mặt + nhịp tim']
      },
      {
        title: 'Bước 3: Nhận kết quả',
        items: ['Hiển thị dashboard kết quả: Nhịp tim, SpO₂, Huyết áp, HRV, Stress', 'Mỗi chỉ số có biểu tượng + giải thích ngắn + mức bình thường', 'Nút chia sẻ kết quả hoặc lưu PDF']
      }
    ]
  },
  sampleResults: {
    headline: 'Kết quả quét mẫu. Đây là những gì bạn sẽ nhận được',
    subheadline: 'Dashboard trực quan với 5 chỉ số sinh hiệu chính',
    disclaimer: 'Kết quả mang tính tham khảo. Tham vấn bác sĩ cho chẩn đoán chính xác.',
    metrics: [
      { name: 'Nhịp tim', value: '72', unit: 'bpm', status: 'Bình thường' },
      { name: 'SpO₂', value: '98', unit: '%', status: 'Bình thường' },
      { name: 'Huyết áp', value: '120/80', unit: 'mmHg', status: 'Bình thường' },
      { name: 'HRV', value: '45', unit: 'ms', status: 'Trung bình' },
      { name: 'Chỉ số căng thẳng', value: 'Thấp', unit: '', status: 'Tốt' }
    ],
    visual: {
      hrStatusText: 'Phát hiện nhịp đều',
      spo2Progress: 98,
      spo2LabelMin: '90%',
      spo2LabelMax: '100%',
      hrvMarker: 45,
      stressLevel: 25,
      stressLabel: 'Bình tĩnh'
    },
    cta: {
      free: 'Muốn theo dõi liên tục? Đăng ký tài khoản miễn phí',
      premium: 'Nâng cấp Premium để mở khóa toàn bộ chỉ số với chỉ 199K/tháng'
    }
  }
};
