export default function ShareButtons({ score, total, badge }) {
    const shareText = `حصلت على ${score}/${total} في اختبار الأهلي الأصيل ونلت لقب ${badge}! 🦅 جرب اختبار معرفتك بالنادي الأهلي`;
  
    const shareOnTwitter = () => {
      const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
      window.open(url, '_blank');
    };
  
    const shareOnFacebook = () => {
      const url = `https://www.facebook.com/sharer/sharer.php?quote=${encodeURIComponent(shareText)}`;
      window.open(url, '_blank');
    };
  
    const copyToClipboard = () => {
      navigator.clipboard.writeText(shareText);
      alert('تم نسخ النتيجة إلى الحافظة!');
    };
  
    return (
      <div className="flex justify-center space-x-2 mt-4">
        <button 
          onClick={shareOnTwitter}
          className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500"
          aria-label="مشاركة على تويتر"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        </button>
        <button 
          onClick={shareOnFacebook}
          className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
          aria-label="مشاركة على فيسبوك"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
          </svg>
        </button>
        <button 
          onClick={copyToClipboard}
          className="p-2 bg-gray-600 text-white rounded-full hover:bg-gray-700"
          aria-label="نسخ النتيجة"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
          </svg>
        </button>
      </div>
    );
  }