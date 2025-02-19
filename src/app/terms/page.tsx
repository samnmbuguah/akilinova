'use client';
import { motion } from 'framer-motion';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
              <p className="text-gray-600">
                By accessing or using Akilinova's services, you agree to be bound by these Terms
                of Service and all applicable laws and regulations. If you do not agree with any
                of these terms, you are prohibited from using or accessing our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Use License</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Permission is granted to temporarily access our services for personal, non-commercial use.</li>
                <li>This license does not include:
                  <ul className="list-circle pl-6 mt-2 space-y-1">
                    <li>Modifying or copying our materials</li>
                    <li>Using materials for commercial purposes</li>
                    <li>Attempting to reverse engineer any software</li>
                    <li>Removing any copyright or proprietary notations</li>
                  </ul>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Service Description</h2>
              <p className="text-gray-600">
                Akilinova provides AI-powered surveillance and security solutions. We reserve
                the right to withdraw or amend our service, and any service or material we
                provide, in our sole discretion without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Technical Requirements</h2>
              <p className="text-gray-600">
                You are responsible for making all arrangements necessary to have access to our
                services. You are also responsible for ensuring that all persons who access our
                services through your connection are aware of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">User Obligations</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not interfere with the proper working of the services</li>
                <li>Not attempt to breach our security measures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
              <p className="text-gray-600">
                The Service and its original content, features, and functionality are owned by
                Akilinova and are protected by international copyright, trademark, patent, trade
                secret, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <p className="text-gray-600">
                Akilinova shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages resulting from your use of or inability to
                use the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
              <p className="text-gray-600">
                We reserve the right to modify or replace these Terms at any time. We will
                provide notice of any changes by posting the new Terms on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p className="text-gray-600">
                If you have any questions about these Terms, please contact us at:{' '}
                <a href="mailto:info@akilinova.com" className="text-red-600 hover:text-red-700">
                  info@akilinova.com
                </a>
              </p>
            </section>

            <p className="text-sm text-gray-500 mt-8">
              Last updated: February 19, 2024
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 