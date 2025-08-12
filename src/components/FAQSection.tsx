export default function FAQSection() {
  const faqs = [
    {
      question: 'What are the main services offered by The AA?',
      answer: 'The AA provides roadside breakdown cover, car insurance, travel insurance, driving lessons, vehicle servicing, financial services, and motoring advice'
    },
    {
      question: 'How does AA breakdown cover work?',
      answer: 'If your vehicle breaks down more than 1/4 mile from home, AA sends a mechanic to fix it or, if it can\'t be repaired, tows it to a local garage. You can upgrade for additional options like At Home (cover near your home) or National Recovery (tow to any UK destination)'
    },
    {
      question: 'What insurance products does AA offer?',
      answer: 'AA offers car, home, and travel insurance. Car insurance policies can include accident cover, theft, fire, windscreen repair, and legal expenses. Travel insurance covers medical costs, trip cancellations, and baggage, with options for single trips or annual policies'
    },
    {
      question: 'How can I contact the AA in an emergency?',
      answer: 'For roadside breakdown, call 0800 88 77 66. For car insurance claims, call 0800 269 622. These lines offer 24/7 support. You can also use the AA app to request help and track your rescue'
    },
    {
      question: 'Are there current offers or discounts for AA membership?',
      answer: 'Yes. New members can get 33% off breakdown cover when purchasing At Home, National Recovery, or Onward Travel packages online until 14 August 2025. The offer is open to new UK customers and only applies in certain conditions'
    },
    {
      question: 'Does AA breakdown cover lost car keys or wrong fuel incidents?',
      answer: 'AA provides Key Assist for lost keys (0800 048 2800) and Fuel Assist for misfuelling (0800 072 7420). Both services are available 7 days a week, with Fuel Assist available 24/7'
    },
    {
      question: 'Is breakdown cover included in car insurance?',
      answer: 'Breakdown cover is not automatically included in standard car insurance; it is a separate policy that can be purchased additionally'
    },
    {
      question: 'Can I book car servicing or MOT through AA?',
      answer: 'Yes. You can book MOTs, servicing, and repairs at AA approved garages or through the Mobile Mechanic service. AA membership is not required for bookings'
    },
    {
      question: 'How do I change or manage my AA insurance policy?',
      answer: 'Customers with Silver, Gold, or Platinum policies can log in to their AA account online to manage, view, and renew their car or home insurance'
    },
    {
      question: 'Does AA offer business services?',
      answer: 'The AA also provides breakdown cover and support for commercial fleets, business cars, and vans under their business division'
    }
  ];

  return (
    <div className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-aa-blue mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="p-6">
              <h3 className="text-lg font-semibold text-aa-blue mb-3 flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-aa-blue text-white rounded-full flex items-center justify-center text-sm">
                  {index + 1}
                </span>
                {faq.question}
              </h3>
              <p className="text-gray-700 ml-9">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 