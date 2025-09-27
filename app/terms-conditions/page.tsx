import Header from "@/components/header";
import { FooterSection } from "@/sections/footer-section";

export default function TermsConditions() {
  return (
    <div>
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
          
          <p className="text-lg mb-6">
            By using our website and services, you agree to the following terms and conditions regarding SMS communications:
          </p>

          <h2 className="text-2xl font-semibold mb-4">1. SMS Consent Communication</h2>
          <p className="mb-6">
            When you provide your phone number and opt-in, you consent to receive SMS messages from LCR Transportation Inc. Your phone number will not be shared with third parties for marketing purposes.
          </p>

          <h2 className="text-2xl font-semibold mb-4">2. Types of SMS Communications</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Appointment reminders</li>
            <li>Follow-up messages</li>
            <li>Billing inquiries</li>
            <li>Promotions or offers (only if you have opted in for promotional messages)</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">3. Message Frequency</h2>
          <p className="mb-6">
            The frequency of SMS messages may vary based on your interactions with us. For example, you may receive up to 10 messages per week.
          </p>

          <h2 className="text-2xl font-semibold mb-4">4. Potential Fees</h2>
          <p className="mb-6">
            Standard message and data rates may apply, depending on your mobile carrier and plan. These may vary for domestic and international messages.
          </p>

          <h2 className="text-2xl font-semibold mb-4">5. Opt-In Method</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Verbally, during a conversation</li>
            <li>By submitting an online form</li>
            <li>By filling out a paper form</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">6. Opt-Out Method</h2>
          <p className="mb-4">You can opt out of receiving SMS messages at any time by:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Replying &apos;STOP&apos; to any SMS you receive</li>
            <li>Contacting us directly to request removal from our list</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">7. Help</h2>
          <p className="mb-4">
            If you need help, reply with the keyword HELP to any SMS message, or contact us directly via:
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-6">
            <p>
              Email: info@lcrtransportationinc.com | Phone: (847) 385-3578 | Website: https://lcrtransportation.inc/
            </p>
          </div>

          <h2 className="text-2xl font-semibold mb-4">8. Standard Messaging Disclosures</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Message and data rates may apply.</li>
            <li>You may opt out anytime by texting &apos;STOP&apos;.</li>
            <li>For help, text &apos;HELP&apos; or visit our Privacy Policy and Terms & Conditions pages.</li>
            <li>Message frequency may vary depending on communication type.</li>
          </ul>
        </div>
      </main>
      
      <FooterSection />
    </div>
  );
}
