import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Phone, Mail, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { useLang } from '@/lib/i18n';

const footerTranslations = {
  en: {
    newsletter: {
      title: "Stay updated with AIVIVA",
      desc: "Get product updates, clinical insights, and partnership news from our health-tech ecosystem.",
      placeholder: "Enter your email",
      btn: "Subscribe",
      note: "No spam. Only meaningful AIVIVA updates.",
      success: "Thank you for subscribing! We'll keep you updated.",
      resetBtn: "Use another email"
    },
    brand: {
      tagline: "Pioneering Medical AI Technology for a healthier tomorrow.",
      desc: "AIVIVA enables smartphone-based vital sign screening through toughness and Face ID, Edge AI, and privacy-first design."
    },
    headings: {
      company: "Company",
      platform: "Platform",
      usecases: "Use Cases",
      contact: "Contact Us"
    },
    companyLinks: [
      { key: "about", label: "About Us", path: "about" },
      { key: "solution", label: "Solutions", path: "solution" },
      { key: "demo", label: "Demo", path: "demo" },
      { key: "news", label: "News", path: "news" },
      { key: "contact", label: "Contact", path: "contact" }
    ],
    platformItems: [
      "Smartphone Vital Scan",
      "Edge AI Processing",
      "Privacy-first Health Data",
      "Partner Integration"
    ],
    usecaseItems: [
      "Remote health screening",
      "Preventive care",
      "Clinic pre-check",
      "Corporate wellness",
      "Community health access"
    ],
    contactLabels: {
      website: "Website",
      whatsapp: "WhatsApp (Call/Chat)",
      email: "Email Support",
      addressLabel: "Address",
      address: "412 Nguyen Thi Minh Khai, Ban Co Ward, Ho Chi Minh City, Vietnam"
    },
    bottom: {
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      tagline: "Built for privacy-first medical AI experiences."
    }
  },
  vi: {
    newsletter: {
      title: "Cập nhật cùng AIVIVA",
      desc: "Nhận thông tin sản phẩm, góc nhìn y tế và tin tức hợp tác từ hệ sinh thái health-tech của chúng tôi.",
      placeholder: "Nhập email của bạn",
      btn: "Đăng ký",
      note: "Không spam. Chỉ những cập nhật hữu ích từ AIVIVA.",
      success: "Cảm ơn bạn đã đăng ký! Chúng tôi sẽ cập nhật những thông tin mới nhất.",
      resetBtn: "Dùng email khác"
    },
    brand: {
      tagline: "Công nghệ AI y tế tiên phong cho một ngày mai khỏe mạnh hơn.",
      desc: "AIVIVA hỗ trợ sàng lọc chỉ số sinh hiệu bằng điện thoại thông qua toughness và Face ID, Edge AI và thiết kế ưu tiên quyền riêng tư."
    },
    headings: {
      company: "Công ty",
      platform: "Nền tảng",
      usecases: "Ứng dụng",
      contact: "Liên hệ"
    },
    companyLinks: [
      { key: "about", label: "Về chúng tôi", path: "about" },
      { key: "solution", label: "Giải pháp", path: "solution" },
      { key: "demo", label: "Trải nghiệm", path: "demo" },
      { key: "news", label: "Tin tức", path: "news" },
      { key: "contact", label: "Liên hệ", path: "contact" }
    ],
    platformItems: [
      "Quét sinh hiệu bằng điện thoại",
      "Xử lý Edge AI",
      "Dữ liệu sức khỏe ưu tiên riêng tư",
      "Tích hợp đối tác"
    ],
    usecaseItems: [
      "Sàng lọc sức khỏe từ xa",
      "Chăm sóc dự phòng",
      "Kiểm tra trước khi đến phòng khám",
      "Sức khỏe doanh nghiệp",
      "Tiếp cận y tế cộng đồng"
    ],
    contactLabels: {
      website: "Website",
      whatsapp: "WhatsApp (Gọi/Trò chuyện)",
      email: "Email hỗ trợ",
      addressLabel: "Địa chỉ",
      address: "412 Nguyễn Thị Minh Khai, phường Bàn Cờ, TP.HCM, Việt Nam"
    },
    bottom: {
      privacy: "Chính sách bảo mật",
      terms: "Điều khoản sử dụng",
      tagline: "Được xây dựng cho trải nghiệm AI y tế ưu tiên quyền riêng tư."
    }
  }
} as const;

export function SiteFooter() {
  const lang = useLang();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const t = lang === 'en' ? footerTranslations.en : footerTranslations.vi;

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer 
      className="border-t border-white/10 pt-16 pb-8 bg-[#07172C] text-white relative overflow-hidden"
      id="aiviva-mega-footer"
    >
      {/* Decorative background glow elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
        <div className="absolute -bottom-24 -left-20 w-96 h-96 rounded-full bg-primary blur-[130px]" />
        <div className="absolute -top-40 right-10 w-96 h-96 rounded-full bg-sky blur-[145px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-[var(--container-padding-desktop)] relative z-10 text-white">
        
        {/* top newsletter panel */}
        <div 
          className="bg-gradient-to-br from-[#0c2a52] to-[#04152a] rounded-[2rem] p-8 md:p-12 mb-16 border border-white/10 shadow-2xl relative overflow-hidden"
          id="footer-newsletter-panel"
        >
          {/* subtle inner card glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#4FA3E8]/10 rounded-full blur-[90px] pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 relative z-10">
            <div className="max-w-2xl text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
                {t.newsletter.title}
              </h3>
              <p className="text-sky-100/75 text-sm sm:text-base leading-relaxed">
                {t.newsletter.desc}
              </p>
            </div>

            <div className="w-full lg:w-auto min-w-[320px] sm:min-w-[400px]">
              {isSubscribed ? (
                <div 
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-success/10 border border-success/30 rounded-2xl p-4 text-emerald-300 animate-in fade-in slide-in-from-bottom-2 duration-300"
                  id="newsletter-success-state"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-success shrink-0" />
                    <p className="text-sm sm:text-base font-medium">{t.newsletter.success}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsSubscribed(false)}
                    className="text-xs font-semibold text-sky-200 hover:text-white underline cursor-pointer shrink-0 transition-colors"
                  >
                    {t.newsletter.resetBtn}
                  </button>
                </div>
              ) : (
                <form 
                  onSubmit={handleSubscribe} 
                  className="space-y-2"
                  id="newsletter-form"
                >
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="relative flex-1">
                      <label htmlFor="footer-email" className="sr-only">
                        {t.newsletter.placeholder}
                      </label>
                      <input
                        type="email"
                        id="footer-email"
                        required
                        placeholder={t.newsletter.placeholder}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-5 py-3.5 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder-sky-200/45 focus:outline-none focus:ring-2 focus:ring-[#1455B5] focus:border-transparent transition-all sm:text-sm"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-6 py-3.5 rounded-xl bg-[#1455B5] hover:bg-[#2E7DD8] text-white font-semibold flex items-center justify-center gap-2 shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-sm whitespace-nowrap cursor-pointer"
                    >
                      <span>{t.newsletter.btn}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-[11px] text-sky-200/40 text-left pl-1">
                    {t.newsletter.note}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Main large columns grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-8 lg:gap-10 mb-16 pt-2"
          id="footer-main-columns-grid"
        >
          {/* Column A (Brand Block) */}
          <div className="lg:col-span-1 flex flex-col items-start text-left" id="footer-column-brand">
            <Link to={`/${lang}`} className="flex items-center mb-5 hover:opacity-85 transition-opacity">
              <img 
                src="/assets/brand/logo-aiviva.png" 
                alt="AIVIVA Logo" 
                className="w-[100px] h-[100px] object-contain select-none" 
                loading="lazy" 
                decoding="async" 
                width={100} 
                height={100} 
              />
            </Link>
            <p className="text-sky-200/90 font-semibold text-sm leading-relaxed mb-3">
              {t.brand.tagline}
            </p>
            <p className="text-sky-100/55 text-xs sm:text-sm leading-relaxed mb-6">
              {t.brand.desc}
            </p>
          </div>

          {/* Column B (Company Links) */}
          <div className="flex flex-col items-start text-left" id="footer-column-company">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs sm:text-sm mb-5 border-b border-white/5 pb-2 w-full">
              {t.headings.company}
            </h4>
            <nav className="flex flex-col gap-3.5 w-full">
              {t.companyLinks.map((link) => (
                <Link 
                  key={link.key} 
                  to={`/${lang}/${link.path}`} 
                  className="text-sky-100/70 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 transform inline-block"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column C (Platform - read-only / spans) */}
          <div className="flex flex-col items-start text-left" id="footer-column-platform">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs sm:text-sm mb-5 border-b border-white/5 pb-2 w-full">
              {t.headings.platform}
            </h4>
            <div className="flex flex-col gap-3.5 text-sky-100/55 text-sm w-full">
              {t.platformItems.map((item, idx) => (
                <span key={idx} className="block select-none py-0.5">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Column D (Use Cases - read-only / spans) */}
          <div className="flex flex-col items-start text-left" id="footer-column-usecases">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs sm:text-sm mb-5 border-b border-white/5 pb-2 w-full">
              {t.headings.usecases}
            </h4>
            <div className="flex flex-col gap-3.5 text-sky-100/55 text-sm w-full">
              {t.usecaseItems.map((item, idx) => (
                <span key={idx} className="block select-none py-0.5">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Column E (Contact Information with lucide icons) */}
          <div className="flex flex-col items-start text-left" id="footer-column-contact">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs sm:text-sm mb-5 border-b border-white/5 pb-2 w-full">
              {t.headings.contact}
            </h4>
            <div className="flex flex-col gap-4 w-full" id="footer-contact-items-list">
              <a 
                href="https://www.aiviva.io" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-3 text-sky-100/70 hover:text-white text-sm transition-colors group"
              >
                <Globe className="w-4 h-4 text-sky shrink-0 group-hover:scale-110 transition-transform" />
                <span className="truncate">www.aiviva.io</span>
              </a>

              <a 
                href="https://wa.me/84938127266" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-3 text-sky-100/70 hover:text-white text-sm transition-colors group"
              >
                <Phone className="w-4 h-4 text-sky shrink-0 group-hover:scale-110 transition-transform" />
                <span>+84 938 127 266</span>
              </a>

              <a 
                href="mailto:hello@aiviva.io" 
                className="flex items-center gap-3 text-sky-100/70 hover:text-white text-sm transition-colors group"
              >
                <Mail className="w-4 h-4 text-sky shrink-0 group-hover:scale-110 transition-transform" />
                <span className="truncate">hello@aiviva.io</span>
              </a>

              <div className="flex items-start gap-3 text-sky-100/55 text-xs sm:text-sm pt-1 leading-relaxed">
                <MapPin className="w-4 h-4 text-sky shrink-0 mt-0.5" />
                <span>{t.contactLabels.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8" />

        {/* Bottom bar with legal & disclaimer & copyright */}
        <div 
          className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs sm:text-sm text-sky-200/50"
          id="footer-bottom-bar"
        >
          <div className="flex flex-col items-center md:items-start gap-1">
            <p>&copy; {new Date().getFullYear()} AIVIVA. All rights reserved.</p>
            <p className="text-[11px] text-sky-200/30 font-light text-center md:text-left mt-0.5">
              {t.bottom.tagline}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <span className="hover:text-white transition-colors duration-150 cursor-pointer select-none">
              {t.bottom.privacy}
            </span>
            <span className="hover:text-white transition-colors duration-150 cursor-pointer select-none">
              {t.bottom.terms}
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
