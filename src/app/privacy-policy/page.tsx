"use client"

import React from 'react'
import ButtonDefault from '../../components/Button/ButtonDefault'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'

const PrivacyPolicy = () => {
    return (
        <main className="bg-near-black text-foreground min-h-screen pt-28 sm:pt-32 pb-16 px-4 sm:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
                <Breadcrumbs
                    items={[
                        { label: 'Privacy Policy', href: '/privacy-policy' }
                    ]}
                />
            </div>
            <article className="max-w-4xl mx-auto bg-primary border border-gray-800 rounded-lg shadow-sm p-6 sm:p-8 lg:p-10 space-y-6">
                <header className="space-y-3">
                    <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
                        Privacy Policy
                    </h1>
                    <p className="text-base sm:text-lg font-medium text-orange">
                        UZWAYS LLC
                    </p>
                    <p className="text-sm text-gray-400">
                        This Privacy Policy explains how UZWAYS LLC collects, uses, and safeguards your information when you use our services.
                    </p>
                </header>

                <section className="space-y-4">
                    <h2 className="text-3xl font-semibold text-white">1. Information Collection</h2>
                    <p className="text-gray-300 leading-8">
                        Our primary purpose for collecting information is to provide and facilitate your use of our transportation and communication services.
                    </p>

                    <h3 className="text-2xl font-medium text-white">1.1 Account and Profile Information</h3>
                    <p className="text-gray-300 leading-8">When you access our services, you may provide:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300 leading-8">
                        <li>Full name</li>
                        <li>Mobile phone number</li>
                        <li>Email address</li>
                        <li>Mailing address</li>
                        <li>Driver license and carrier-related credentials (if applicable)</li>
                    </ul>

                    <h3 className="text-2xl font-medium text-white">1.2 Service Usage Information</h3>
                    <p className="text-gray-300 leading-8">We may automatically collect:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300 leading-8">
                        <li>Pages visited and session duration</li>
                        <li>Operational or request-level usage information</li>
                        <li>Message and communication metadata</li>
                        <li>Device and browser diagnostics</li>
                    </ul>

                    <h3 className="text-2xl font-medium text-white">1.3 Device Information</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300 leading-8">
                        <li>IP address</li>
                        <li>Browser type and version</li>
                        <li>Operating system and device identifiers</li>
                    </ul>

                    <h3 className="text-2xl font-medium text-white">1.4 Contact Information (SMS and Phone Numbers)</h3>
                    <p className="text-gray-300 leading-8">
                        Phone numbers collected for SMS purposes are used only to deliver service-related messages such as updates, alerts, and notices.
                    </p>
                    <p className="text-gray-200 leading-8 font-medium">
                        SMS consent is not shared with third parties or affiliates for marketing purposes.
                    </p>
                    <p className="text-gray-300 leading-8">
                        Users may opt out of SMS communication at any time by replying STOP to any message or by contacting us.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-semibold text-white">2. Information Use and Sharing</h2>
                    <h3 className="text-2xl font-medium text-white">2.1 How We Use Information</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300 leading-8">
                        <li>Provide and maintain our services</li>
                        <li>Communicate service updates and responses</li>
                        <li>Improve service quality, security, and reliability</li>
                        <li>Comply with legal and regulatory requirements</li>
                    </ul>

                    <h3 className="text-2xl font-medium text-white">2.2 Service Providers</h3>
                    <p className="text-gray-300 leading-8">
                        We may share information with trusted service providers that help us operate our website and services, subject to confidentiality and security obligations.
                    </p>

                    <h3 className="text-2xl font-medium text-white">2.3 Legal Compliance</h3>
                    <p className="text-gray-300 leading-8">
                        We may disclose information when required by law, subpoena, or legal process, or when necessary to protect rights, safety, and prevent unlawful activity.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-semibold text-white">3. Cookies and Tracking Technologies</h2>
                    <p className="text-gray-300 leading-8">
                        We use cookies and similar technologies to understand usage patterns, maintain
                        functionality, and improve user experience. You can manage cookies through your
                        browser settings.
                        <br /><br />
                        Types of cookies we use:
                        <br />
                        - Essential cookies: Required for the website to function properly.
                        <br />
                        - Analytics cookies: Help us understand how visitors interact with our site.
                        <br />
                        - Functional cookies: Remember your preferences and settings.
                        <br /><br />
                        You may disable cookies through your browser settings, though some features of
                        our services may not function properly as a result.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-semibold text-white">4. Your Rights and Choices</h2>
                    <h3 className="text-2xl font-medium text-white">4.1 Access and Correction</h3>
                    <p className="text-gray-300 leading-8">
                        You may request access to your personal information and ask us to correct inaccurate or outdated information.
                    </p>
                    <h3 className="text-2xl font-medium text-white">4.2 Deletion and Objection</h3>
                    <p className="text-gray-300 leading-8">
                        You may request deletion of your personal information where applicable and object to specific processing activities.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-semibold text-white">5. Policy Updates</h2>
                    <p className="text-gray-300 leading-8">
                        We may update this Privacy Policy from time to time. Updates will be posted on this page and become effective when published.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-semibold text-white">6. SMS Terms & Conditions</h2>
                    <p className="text-gray-300 leading-8">
                        By opting into SMS from a web form or other medium, you are agreeing to receive
                        SMS messages from UZWAYS LLC. This includes SMS messages for service updates,
                        alerts, and account notifications.
                        <br /><br />
                        - Messaging frequency may vary.
                        <br />
                        - Message and data rates may apply.
                        <br />
                        - To opt out at any time, text STOP.
                        <br />
                        - For assistance, text HELP or visit https://www.uzwaysllc.info.
                        <br />
                        - Privacy Policy: safety@uzwaysllc.info
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-semibold text-white">7. Contact Information</h2>
                    <p className="text-gray-400 leading-8">
                        If you have any privacy-related questions, contact us at:
                    </p>
                    <ul className="space-y-2 text-gray-300 leading-8">
                        <li><strong className="text-white">Company:</strong> UZWAYS LLC</li>
                        <li><strong className="text-white">Email:</strong> safety@uzwaysllc.info</li>
                        <li><strong className="text-white">Phone:</strong> +1 (615) 578-1333</li>
                        <li><strong className="text-white">Address:</strong> 250 Clifton Ave, Mount Juliet, TN</li>
                        <li><strong className="text-white">Website:</strong> https://uzwaysllc.info/</li>
                    </ul>
                </section>
            </article>
        </main>
    )
}

export default PrivacyPolicy