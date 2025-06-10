import { useState } from 'react';
import { motion } from 'framer-motion';

const sections = [
  {
    title: 'ولادة الحلم',
    content: `في عامٍ بعيد، حين كانت القاهرة تكتظ بالحكايات... وُلد الأهلي.
لم يكن مجرد نادٍ... بل صرخة في وجه الاحتلال، حلم حرية في ثوب كرة.
وُلد من رحم الوطنية، وكبر على أكتاف الشباب الذين أرادوا للوطن نادٍ... وللحلم وطن.`
  },
  {
    title: 'لحظات الفخر',
    content: `كم مرة ارتفعت الكأس، وارتفع معها النشيد؟
كم مرة امتد النور من مدرجات القاهرة ليصل أعماق إفريقيا؟
حين يُقال "الأهلي بطل إفريقيا" فاعلم أن التاريخ نفسه واقف يصفق.`
  },
  {
    title: 'دموع الخسارة',
    content: `سقطنا مرات… ولكن كيف تكون عظيماً دون أن تسقط؟
في نهائي 1983، وفي نهائي رادس 2007، وفي لحظات ساد فيها الصمت…
لم تبكِ الجماهير فقط من الخسارة، بل من الحب العميق الذي لا يزول رغم الألم.`
  },
  {
    title: 'العودة من الرماد',
    content: `في 2012… سالت دماء على المدرج، وسقطت أرواحٌ بريئة.
ظنوا أن الأهلي لن يعود.
لكنه عاد، لا ليأخذ كأسًا، بل ليأخذ ثأرًا، ويمسح دمعًا، ويُعيد ابتسامة وطن.`
  },
  {
    title: 'أمجاد القارة',
    content: `11 نجمة على صدر الأهلي، كل واحدة تروي حكاية بطولة، سفر، قتال، جمهور ينتظر حتى الفجر.
حين يصعد الأهلي لمنصة التتويج، ترتجف القارة… لأن الملك عاد لعرشه.`
  },
];

export default function AhlyMomentsPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-black text-white min-h-screen px-6 py-12 font-arabic">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-8">لحظات صنعة تاريخ الأهلي</h1>
      <div className="flex justify-center gap-4 flex-wrap mb-8">
        {sections.map((sec, idx) => (
          <button
            key={idx}
            className={`px-4 py-2 rounded-full border ${
              idx === activeIndex ? 'bg-red-600 text-white' : 'border-red-600 text-red-500'
            } transition`}
            onClick={() => setActiveIndex(idx)}
          >
            {sec.title}
          </button>
        ))}
      </div>

      <motion.div
        key={activeIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto bg-white bg-opacity-5 p-6 rounded-2xl shadow-xl leading-loose text-lg whitespace-pre-line"
      >
        {sections[activeIndex].content}
      </motion.div>
    </div>
  );
}
