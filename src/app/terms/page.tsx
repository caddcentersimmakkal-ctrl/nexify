import type { Metadata } from "next";
import LegalPage, {
  LegalSection,
} from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions | Nexify Institute",
  description:
    "Read the Terms & Conditions governing the use of Nexify Institute's website, courses, workshops, training programs, and services.",
};

const sections: LegalSection[] = [
  {
    id: "about",
    number: "01",
    title: "About Nexify",
    content: (
      <p>
        Nexify Institute ("Nexify", "we", "our", or "us") is a
        technology training and placement platform that provides
        practical education in programming, full-stack development,
        data analytics, AI, UI/UX design, career readiness,
        workshops, and related professional training.
      </p>
    ),
  },

  {
    id: "eligibility",
    number: "02",
    title: "Eligibility",
    content: (
      <>
        <p>You may use our services if you:</p>

        <ul>
          <li>
            Are at least 16 years of age or have parent/guardian
            consent.
          </li>

          <li>
            Provide accurate registration information.
          </li>

          <li>
            Agree to comply with these Terms and all applicable
            laws.
          </li>
        </ul>
      </>
    ),
  },

  {
    id: "course-enrollment",
    number: "03",
    title: "Course Enrollment",
    content: (
      <>
        <p>When enrolling in a course:</p>

        <ul>
          <li>
            Admission is confirmed only after successful
            registration and applicable fee payment.
          </li>

          <li>
            Course duration and syllabus are subject to periodic
            updates for industry relevance.
          </li>

          <li>
            Batch timings may change due to academic or
            operational requirements.
          </li>

          <li>
            Nexify reserves the right to postpone or merge
            batches when necessary.
          </li>
        </ul>
      </>
    ),
  },

  {
    id: "fees-payments",
    number: "04",
    title: "Fees & Payments",
    content: (
      <ul>
        <li>
          All course fees must be paid according to the selected
          payment plan.
        </li>

        <li>
          Certificates will be issued only after satisfying
          academic and payment requirements.
        </li>
      </ul>
    ),
  },

  {
    id: "refund-policy",
    number: "05",
    title: "Refund Policy",
    content: (
      <>
        <p>
          Refund requests will be considered under the following
          guidelines:
        </p>

        <div className="overflow-x-auto mt-6">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr>
                <th>Situation</th>
                <th>Refund Eligibility</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Before batch commencement</td>
                <td>As per institute approval</td>
              </tr>

              <tr>
                <td>Within first few classes</td>
                <td>Partial refund may apply</td>
              </tr>

              <tr>
                <td>After substantial course completion</td>
                <td>No refund</td>
              </tr>

              <tr>
                <td>Missed classes due to personal reasons</td>
                <td>Not refundable</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-5">
          Final refund decisions remain at the discretion of
          Nexify Institute management.
        </p>
      </>
    ),
  },

  {
    id: "attendance-learning",
    number: "06",
    title: "Attendance & Learning",
    content: (
      <>
        <p>Students are expected to:</p>

        <ul>
          <li>Attend classes regularly.</li>

          <li>Complete assignments and projects.</li>

          <li>
            Maintain respectful behavior toward trainers and
            fellow learners.
          </li>

          <li>
            Avoid plagiarism in projects and assessments.
          </li>
        </ul>

        <p className="mt-5">
          Nexify may suspend access for serious misconduct.
        </p>
      </>
    ),
  },

  {
    id: "certificates",
    number: "07",
    title: "Certificates",
    content: (
      <>
        <p>
          Certificates are awarded only to students who
          successfully:
        </p>

        <ul>
          <li>Complete the required curriculum.</li>

          <li>
            Submit mandatory projects or assessments.
          </li>

          <li>
            Meet attendance requirements where applicable.
          </li>

          <li>Clear outstanding fee dues.</li>
        </ul>

        <p className="mt-5">
          Certificates represent successful completion of
          training and do not guarantee employment.
        </p>
      </>
    ),
  },

  {
    id: "placement-support",
    number: "08",
    title: "Placement Support",
    content: (
      <>
        <p>
          Nexify provides career support including:
        </p>

        <ul>
          <li>Resume building</li>

          <li>Portfolio guidance</li>

          <li>Interview preparation</li>

          <li>Technical practice</li>

          <li>Career counselling</li>
        </ul>

        <p className="mt-5">
          Placement support is not a guarantee of employment.
          Hiring decisions are made solely by recruiting
          companies based on their selection criteria.
        </p>
      </>
    ),
  },

  {
    id: "intellectual-property",
    number: "09",
    title: "Intellectual Property",
    content: (
      <>
        <p>
          All content on this website—including course
          materials, logos, branding, graphics, videos,
          documents, and curriculum—is the intellectual property
          of Nexify Institute unless otherwise stated.
        </p>

        <p className="mt-5">You may not:</p>

        <ul>
          <li>
            Copy or reproduce course content commercially.
          </li>

          <li>
            Redistribute training materials.
          </li>

          <li>
            Use the Nexify logo without written permission.
          </li>
        </ul>
      </>
    ),
  },

  {
    id: "website-usage",
    number: "10",
    title: "Website Usage",
    content: (
      <>
        <p>You agree not to:</p>

        <ul>
          <li>
            Attempt unauthorized access to the website.
          </li>

          <li>
            Upload malicious software or harmful code.
          </li>

          <li>
            Misuse enquiry forms or submit false information.
          </li>

          <li>
            Interfere with website functionality.
          </li>
        </ul>

        <p className="mt-5">
          We reserve the right to restrict access for misuse.
        </p>
      </>
    ),
  },

  {
    id: "workshops-events",
    number: "11",
    title: "Workshops & Events",
    content: (
      <>
        <p>
          For seminars, workshops, and bootcamps:
        </p>

        <ul>
          <li>Registration may be mandatory.</li>

          <li>
            Seats are allotted on a first-come, first-served
            basis.
          </li>

          <li>
            Event schedules may change due to unavoidable
            circumstances.
          </li>

          <li>
            Participation certificates are issued only where
            announced.
          </li>
        </ul>
      </>
    ),
  },

  {
    id: "limitation-liability",
    number: "12",
    title: "Limitation of Liability",
    content: (
      <>
        <p>
          While we strive to provide accurate information and
          quality education, Nexify Institute shall not be liable
          for:
        </p>

        <ul>
          <li>Employment outcomes</li>

          <li>
            Third-party recruitment decisions
          </li>

          <li>
            Temporary website interruptions
          </li>

          <li>
            Technical issues beyond our control
          </li>

          <li>
            Loss resulting from incorrect information submitted
            by users
          </li>
        </ul>
      </>
    ),
  },

  {
    id: "privacy",
    number: "13",
    title: "Privacy",
    content: (
      <p>
        Any personal information submitted through counselling,
        contact, or enrollment forms is handled according to our
        Privacy Policy and is used only for educational,
        communication, and student support purposes.
      </p>
    ),
  },

  {
    id: "changes",
    number: "14",
    title: "Changes to Terms",
    content: (
      <p>
        Nexify Institute may update these Terms & Conditions at
        any time. Updated versions become effective immediately
        upon publication on this website.
      </p>
    ),
  },

  {
    id: "contact",
    number: "15",
    title: "Contact Information",
    content: (
      <>
        <p>
          Nexify Institute – Training & Placement
        </p>

        <div className="mt-4 space-y-2">
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
          For any questions regarding these Terms &
          Conditions, please contact our support team.
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      type="terms"
      title="Terms & Conditions"
      description="Please review the terms governing your use of the Nexify Institute website, courses, workshops, training programs, and services."
      effectiveDate="19 August 2026"
      sections={sections}
    />
  );
}