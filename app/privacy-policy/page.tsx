import ButtonBack from "@/components/buttons/ButtonBack";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template: '%s | Privacy Policy',
        default: 'Privacy Policy',
    },
    description: "Set Habits. Achieve greatness.",
    metadataBase: new URL('https://www.ascendpod.com'),
};

export default function Page() {
    return (
        <div className="flex flex-col p-10 gap-4">
            <ButtonBack path='/' />

            <h1>Ascend Privacy Policy</h1>

            This Privacy Policy explains how Ascend (&apos;we,&apos; &apos;us,&apos; or &apos;our&apos;) collects, uses, shares, and secures your information when you use our mobile application (the &apos;App&apos;).

            <h2>1. Information We Collect</h2>

            Personal Information:

            Account Information: When you create an Ascend account, we may collect your email address, username, and password.
            Usage Data: We may collect information about how you use the App, such as the features you access, the actions you take within the App, and the time and duration of your usage.
            Device Information: We may collect information about your device, such as your device type, operating system, and unique device identifiers.
            Location Information: With your consent, we may collect your location information to provide location-based services or enhance your experience.
            Non-Personal Information: We may also collect non-personal information, such as aggregated usage data and anonymous device information, which cannot be used to identify you personally.

            <h2>2. How We Use Your Information</h2>
            We use the collected information to:
            Provide and maintain the App.
            Improve the App&apos;s functionality and user experience.
            Personalize your experience with the App.
            Communicate with you about the App, including updates and promotions.
            Analyze usage trends and gather demographic information.
            Ensure the security and integrity of the App.
            Comply with legal and regulatory requirements.

            <h2>3. Data Sharing and Disclosure</h2>
            We may share your information with:
            Third-party service providers: We may share your information with third-party service providers who assist us in providing and maintaining the App, such as analytics providers, cloud service providers, and customer support providers.
            Business partners: We may share your information with our business partners for purposes such as joint marketing initiatives or co-branded services.
            Legal authorities: We may disclose your information to law enforcement or other authorities if required by law or in response to a valid legal request.

            <h2>4. Data Security</h2>
            We take reasonable measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or method of electronic storage is completely secure, and we cannot guarantee the absolute security of your information.

            <h2>5. Permissions and APIs</h2>
            The App may request access to certain device permissions, such as location, camera, and storage, to provide specific functionalities. You can control these permissions through your device settings.
            The App may use third-party APIs, such as Google Maps, to provide certain features. These APIs may collect and use your information in accordance with their own privacy policies.

            <h2>6. Device and Network Abuse</h2>
            The App prohibits any use that could harm or interfere with the functioning of the App or the devices or networks of others. This includes, but is not limited to:

            Malware and viruses: Introducing or spreading malware, viruses, or other harmful code.
            Spamming: Sending unsolicited messages or engaging in other forms of spam.
            Unauthorized access: Attempting to gain unauthorized access to the App or other systems.

            <h2>7. Deceptive Behavior and Misrepresentation</h2>
            The App prohibits any deceptive or misleading behavior, including:

            Misrepresenting yourself: Using false or misleading information when using the App.
            Impersonating others: Impersonating another user or entity.
            Engaging in fraudulent activities: Using the App for any fraudulent or illegal activities.

            <h2>8. Google Play&apos;s Target API Level Privacy</h2>
            We comply with Google Play&apos;s requirements regarding the target API level and user privacy.


            <h2>9. Children&apos;s Privacy</h2>
            The App is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13.

            <h2>10. Changes to this Privacy Policy</h2>
            We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on the App or by other appropriate means.

            <h2>11. Limitation of Liability</h2>
            This Privacy Policy outlines our general practices for collecting, using, and disclosing information. However, we cannot guarantee absolute security. You assume the risk of unauthorized access to, disclosure of, or alteration of your information. We are not liable for any damages that may result from such unauthorized access, disclosure, or alteration.

            <h2>12. Contact Us</h2>

            If you have any questions about this Privacy Policy, please contact us.
        </div>
    )
}