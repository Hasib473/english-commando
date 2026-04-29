import React from 'react';
import { Link } from 'react-router';

const copy = {
  title: 'প্রাইসিং প্ল্যান',
  intro: 'আপনার প্রয়োজন অনুসারে সঠিক প্ল্যান বেছে নিন। English Commando-র সাথে ইংরেজি শিখুন সহজে এবং দ্রুত।',
  cta: 'এখনই এনরোল করুন',
};

const pricingPlans = [
  {
    name: 'বেসিক',
    price: '৯৯৯ টাকা',
    offerPrice: '৪৯৯ টাকা',
    duration: '১৫ দিন',
    features: [
      'ভোকাল এক্সারসাইজ',
      'ম্যাজিক সাউন্ড',
      'ডেইলি ট্র্যাকার',
      'বেসিক সাপোর্ট',
    ],
    popular: true,
    accent: '#075bbf',
  },
  {
    name: 'প্রিমিয়াম',
    price: '১৯৯৯ টাকা',
    offerPrice: null,
    duration: '৩০ দিন',
    features: [
      'সব বেসিক ফিচার',
      'টাং টুইস্টার',
      'রিয়েল স্পিকিং প্র্যাকটিস',
      'অ্যাডভান্সড ট্র্যাকিং',
      'প্রাইভেট সাপোর্ট',
    ],
    popular: false,
    accent: '#3db7ff',
  },
  {
    name: 'প্রো',
    price: '২৯৯৯ টাকা',
    offerPrice: null,
    duration: '৬০ দিন',
    features: [
      'সব প্রিমিয়াম ফিচার',
      'পার্সোনালাইজড কোচিং',
      'সার্টিফিকেট',
      'লাইফটাইম অ্যাক্সেস',
      '২৪/৭ সাপোর্ট',
    ],
    popular: false,
    accent: '#16b987',
  },
];

const Pricing = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{copy.title}</h1>
        <p className="text-lg text-gray-600">{copy.intro}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg shadow-lg p-6 border-2 ${
              plan.popular ? 'border-blue-500' : 'border-gray-200'
            }`}
          >
            {plan.popular && (
              <div className="bg-blue-500 text-white text-center py-1 rounded-t-lg -mt-6 mb-4">
                জনপ্রিয়
              </div>
            )}
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h2>

            {/* Price Section */}
            {plan.offerPrice ? (
              <div className="mb-2">
                <p className="text-gray-400 line-through text-base">{plan.price}</p>
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="text-3xl font-bold text-blue-600">{plan.offerPrice}</p>
                  <span className="bg-orange-100 text-orange-600 text-xs font-bold px-2 py-1 rounded border border-orange-300">
                    🔥 অফার
                  </span>
                </div>
              </div>
            ) : (
              <p className="text-3xl font-bold text-blue-600 mb-2">{plan.price}</p>
            )}

            <p className="text-gray-600 mb-4">{plan.duration}</p>
            <ul className="mb-6">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center mb-2">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              to="/enrollment"
              className={`block text-center py-3 px-6 rounded-lg font-bold text-white ${
                plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-600 hover:bg-gray-700'
              }`}
            >
              {copy.cta}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;