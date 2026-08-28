import type { Metadata } from "next";
import LegalPage, {
  LegalSection,
} from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Nexify Institute",
  description:
    "Read the Privacy Policy explaining how Nexify Institute collects, uses, protects, and manages personal information submitted through its website and services.",
};

const sections: LegalSection[] = [
  {
    id: "information-we-collect",
    number: "01",
    title: "Information We Collect",
    content: (
      <>
        <p>
          We may collect the following information when you
          interact with our website:
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">
          Personal Information
        </h3>

        <ul>
          <li>Full name</li>

          <li>Email address</li>

          <li>Mobile number</li>

          <li>College or educational qualification</li>

          <li>City/Location</li>

          <li>Course interests</li>

          <li>Resume or portfolio, if submitted</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3">
          Technical Information
        </h3>

        <ul>
          <li>IP address</li>

          <li>
            Browser type and device information
          </li>

          <li>
            Pages visited on our website
          </li>

          <li>
            Date and time of access
          </li>

          <li>
            Cookies and analytics data
          </li>
        </ul>
      </>
    ),
  },

  {
    id: "how-we-use-information",
    number: "02",
    title: "How We Use Your Information",
    content: (
      <>
        <p>Your information is used to:</p>

        <ul>
          <li>
            Process course and workshop registrations
          </li>

          <li>
            Contact you regarding enquiries and counselling
          </li>

          <li>
            Provide learning materials and academic updates
          </li>

          <li>
            Schedule demo classes and interviews
          </li>

          <li>
            Offer placement and career support
          </li>

          <li>
            Improve our website and student experience
          </li>

          <li>
            Send important notifications and promotional
            updates, which you may opt out of
          </li>
        </ul>
      </>
    ),
  },

  {
    id: "cookies-analytics",
    number: "03",
    title: "Cookies & Analytics",
    content: (
      <>
        <p>
          Our website may use cookies and analytics tools to
          understand visitor behavior and improve performance.
        </p>

        <p className="mt-5">
          Cookies may help us:
        </p>

        <ul>
          <li>Remember user preferences</li>

          <li>Analyze website traffic</li>

          <li>Improve page performance</li>

          <li>Enhance user experience</li>
        </ul>

        <p className="mt-5">
          You can disable cookies through your browser settings.
        </p>
      </>
    ),
  },

  {
    id: "information-sharing",
    number: "04",
    title: "Information Sharing",
    content: (
      <>
        <p>
          We do not sell or rent your personal information.
        </p>

        <p className="mt-5">
          We may share limited information only with:
        </p>

        <ul>
          <li>
            Placement partner companies, with your consent
          </li>

          <li>
            Trainers or academic staff for course delivery
          </li>

          <li>
            Technology service providers that help operate our
            website
          </li>

          <li>
            Government authorities when required by law
          </li>
        </ul>
      </>
    ),
  },

  {
    id: "data-security",
    number: "05",
    title: "Data Security",
    content: (
      <p>
        We implement reasonable technical and administrative
        measures to protect your information from unauthorized
        access, misuse, alteration, or disclosure. However, no
        internet transmission or electronic storage method is
        completely secure, and we cannot guarantee absolute
        security.
      </p>
    ),
  },

  {
    id: "student-data-placement",
    number: "06",
    title: "Student Data & Placement",
    content: (
      <>
        <p>
          If you enroll in placement assistance, we may store:
        </p>

        <ul>
          <li>Resume/CV</li>

          <li>Project portfolio</li>

          <li>Technical skills</li>

          <li>Interview performance records</li>
        </ul>

        <p className="mt-5">
          This information is used only for career guidance and
          recruitment support.
        </p>
      </>
    ),
  },

  {
    id: "your-rights",
    number: "07",
    title: "Your Rights",
    content: (
      <>
        <p>You may request to:</p>

        <ul>
          <li>Access your personal data</li>

          <li>
            Correct inaccurate information
          </li>

          <li>
            Update your contact details
          </li>

          <li>
            Delete your personal information, subject to legal
            and academic requirements
          </li>

          <li>
            Withdraw consent for marketing communications
          </li>
        </ul>

        <p className="mt-5">
          To make a request, contact us using the details
          provided below.
        </p>
      </>
    ),
  },

  {
    id: "third-party-services",
    number: "08",
    title: "Third-Party Services",
    content: (
      <>
        <p>
          Our website may contain links or integrations with
          third-party platforms such as:
        </p>

        <ul>
          <li>Google Forms</li>

          <li>Google Meet</li>

          <li>YouTube</li>

          <li>LinkedIn</li>

          <li>GitHub</li>
        </ul>

        <p className="mt-5">
          These services have their own privacy policies, and
          Nexify is not responsible for their practices.
        </p>
      </>
    ),
  },

  {
    id: "childrens-privacy",
    number: "09",
    title: "Children's Privacy",
    content: (
      <p>
        Our programs are primarily intended for students aged 16
        and above. If a minor submits personal information, it
        should be with the consent of a parent or guardian.
      </p>
    ),
  },

  {
    id: "changes-policy",
    number: "10",
    title: "Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy periodically. Any
        changes will be published on this page with a revised
        effective date.
      </p>
    ),
  },

  {
    id: "contact-us",
    number: "11",
    title: "Contact Us",
    content: (
      <>
        <p>
          Nexify Institute – Training & Placement
        </p>

        <div className="mt-4 space-y-2">
          <p>
            <strong>Website:</strong>{" "}
            https://nexify-nu.vercel.app/
          </p>

          <p>
            <strong>Email:</strong>{" "}
            info@nexifyinstitute.com
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            +91 XXXXX XXXXX
          </p>

          <p>
            <strong>Location:</strong>{" "}
            Madurai, Tamil Nadu, India
          </p>
        </div>

        <p className="mt-5">
          If you have any questions about this Privacy Policy
          or how your data is handled, please contact our
          support team.
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      type="privacy"
      title="Privacy Policy"
      description="Learn how Nexify Institute collects, uses, protects, and manages personal information submitted through our website, course registrations, workshops, counselling, and placement services."
      effectiveDate="19 August 2026"
      sections={sections}
    />
  );
}