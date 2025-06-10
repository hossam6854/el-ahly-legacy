import React from "react";

export default function WelcomeScreen({ onStart }) {
  return (
    <div className="bg-white p-8 rounded-xl text-center max-w-2xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-red-700 mb-6">
        مرحبًا بك في الاختبار
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        سيبدأ الاختبار بعد الضغط على زر "ابدأ الاختبار". تأكد من أنك مستعد للإجابة على جميع الأسئلة.
      </p>
      <button
        onClick={onStart}
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl text-lg transition-all duration-300 shadow-md"
      >
        ابدأ الاختبار
      </button>
    </div>
  );
}