import Header from "@/components/header";
import { FooterSection } from "@/sections/footer-section";

export default function PrivacyPolicy() {
  return (
    <div>
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <p className="text-lg mb-6">
            At LCR Transportation Inc, we value and respect your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our website and services.
          </p>

          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Name, phone number, and email address when you sign up for services.</li>
            <li>SMS opt-in and consent information.</li>
            <li>Any information you voluntarily provide via forms, conversations, or communications.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Send appointment reminders, billing updates, and service-related messages.</li>
            <li>Communicate with you regarding follow-ups or promotions (if you have opted in).</li>
            <li>Improve our services and customer experience.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">3. Sharing of Information</h2>
          <p className="mb-6">
            We do not share, sell, or rent your phone number or SMS consent data with any third parties or affiliates for marketing purposes. Your information is only used for communication directly related to our services.
          </p>

          <h2 className="text-2xl font-semibold mb-4">4. Privacy Policy Accessibility</h2>
          <p className="mb-6">
            This Privacy Policy will always be available on our website and easily accessible via the footer or header link. It will be displayed as a single dedicated page or a pop-up window.
          </p>

          <h2 className="text-2xl font-semibold mb-4">5. Data Protection</h2>
          <p className="mb-6">
            We implement industry-standard security measures to protect your information from unauthorized access, disclosure, or misuse.
          </p>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <p className="mb-2">
              If you have questions regarding this Privacy Policy, please contact us at:
            </p>
            <p>
              Email: info@lcrtransportationinc.com | Phone: (847) 385-3578
            </p>
          </div>
        </div>
      </main>
      
      <FooterSection />
    </div>
  );
}
