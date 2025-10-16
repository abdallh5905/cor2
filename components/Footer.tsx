
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">COR</h3>
            <p className="text-gray-400">أزياء عصرية لكل يوم.</p>
          </div>
          {/* Links */}
          <div>
            <h4 className="font-bold text-white mb-4">المتجر</h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-white transition-colors">وصل حديثاً</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white transition-colors">فساتين</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white transition-colors">قمصان</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white transition-colors">تخفيضات</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">المساعدة</h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-white transition-colors">اتصل بنا</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white transition-colors">الأسئلة الشائعة</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white transition-colors">الشحن والإرجاع</a></li>
            </ul>
          </div>
          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-white mb-4">اشترك في نشرتنا البريدية</h4>
            <p className="text-gray-400 mb-4">كن أول من يعرف عن الوافدين الجدد والعروض الحصرية.</p>
            <form className="flex">
              <input type="email" placeholder="بريدك الإلكتروني" className="w-full px-4 py-2 text-gray-800 rounded-r-md focus:outline-none"/>
              <button className="bg-white text-slate-800 font-bold px-4 py-2 rounded-l-md hover:bg-gray-200 transition-colors">
                اشتراك
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} COR. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
