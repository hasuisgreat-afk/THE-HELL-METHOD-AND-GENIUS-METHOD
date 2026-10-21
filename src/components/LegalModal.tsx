import { useEffect } from "react";
import { X, ShieldCheck, FileText, AlertCircle, Mail } from "lucide-react";
import { CHECKOUT, SITE } from "../config";
import { cn } from "../utils/cn";

export type LegalTab = "privacy" | "terms" | "refund";

type LegalModalProps = {
  isOpen: boolean;
  activeTab: LegalTab;
  onClose: () => void;
  onTabChange: (tab: LegalTab) => void;
};

export default function LegalModal({ isOpen, activeTab, onClose, onTabChange }: LegalModalProps) {
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-ink/55 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-[28px] border border-ink/10 bg-paper shadow-lift sm:rounded-[32px]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-ink/10 px-6 py-5 sm:px-8">
          <div>
            <span className="eyebrow">Legal & Policies</span>
            <h2 id="legal-modal-title" className="font-serif text-2xl font-medium text-ink sm:text-3xl">
              {SITE.BRAND}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close legal modal"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-ink-mute transition-colors hover:bg-sand hover:text-ink focus-visible:outline"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Tab navigation */}
        <div className="flex border-b border-ink/10 bg-cream/60 px-4 sm:px-8">
          <button
            type="button"
            onClick={() => onTabChange("privacy")}
            className={cn(
              "flex items-center gap-2 border-b-2 px-3 py-3.5 text-xs font-medium uppercase tracking-[0.16em] transition-colors sm:px-4 sm:text-[13px]",
              activeTab === "privacy"
                ? "border-gold-deep text-ink font-semibold"
                : "border-transparent text-ink-mute hover:text-ink"
            )}
          >
            <ShieldCheck className="h-4 w-4 text-gold-deep" />
            Privacy Policy
          </button>
          <button
            type="button"
            onClick={() => onTabChange("terms")}
            className={cn(
              "flex items-center gap-2 border-b-2 px-3 py-3.5 text-xs font-medium uppercase tracking-[0.16em] transition-colors sm:px-4 sm:text-[13px]",
              activeTab === "terms"
                ? "border-gold-deep text-ink font-semibold"
                : "border-transparent text-ink-mute hover:text-ink"
            )}
          >
            <FileText className="h-4 w-4 text-gold-deep" />
            Terms of Service
          </button>
          <button
            type="button"
            onClick={() => onTabChange("refund")}
            className={cn(
              "flex items-center gap-2 border-b-2 px-3 py-3.5 text-xs font-medium uppercase tracking-[0.16em] transition-colors sm:px-4 sm:text-[13px]",
              activeTab === "refund"
                ? "border-gold-deep text-ink font-semibold"
                : "border-transparent text-ink-mute hover:text-ink"
            )}
          >
            <AlertCircle className="h-4 w-4 text-gold-deep" />
            Refund Policy
          </button>
        </div>

        {/* Body content (scrollable) */}
        <div className="flex-1 overflow-y-auto px-6 py-7 sm:px-8 sm:py-8 text-ink-soft text-[14.5px] leading-relaxed space-y-6">
          {activeTab === "privacy" && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-ink-mute">
                  Last Updated: 2026
                </span>
                <h3 className="font-serif text-xl font-medium text-ink mt-1">Privacy Policy</h3>
                <p className="mt-2 text-ink-soft">
                  At {SITE.BRAND}, we respect your privacy and are committed to protecting any personal data you
                  share with us. This policy details how we collect, handle, and safeguard your information.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-ink">1. Information We Collect</h4>
                <p>
                  We collect minimal personal details required to deliver your digital purchases:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-ink-soft">
                  <li><strong>Contact Details:</strong> Your email address for order delivery and customer receipts.</li>
                  <li><strong>Billing Information:</strong> Processed securely via accredited third-party payment gateways (e.g. Stripe, Razorpay). We never collect or store your complete card or banking information on our servers.</li>
                  <li><strong>Technical Logs:</strong> Standard web analytics (IP address, browser type, device information) used solely for performance optimization and abuse prevention.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-ink">2. How We Use Your Data</h4>
                <p>
                  Your information is utilized solely to:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-ink-soft">
                  <li>Deliver download links for your purchased digital ebooks ({SITE.EBOOK_FORMAT}).</li>
                  <li>Provide customer service and respond to inquiries sent to our support desk.</li>
                  <li>Comply with tax and accounting regulations.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-ink">3. Data Sharing & Security</h4>
                <p>
                  We do not sell, rent, or trade your personal information. Data is only shared with trusted service providers strictly necessary to execute transactions (such as our payment processors and email delivery infrastructure). All transactions utilize 256-bit SSL encryption.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-ink">4. Your Rights & Inquiries</h4>
                <p>
                  You have the right to request access to the data we hold or request its deletion at any time. For questions regarding your personal information, please reach out to:{" "}
                  <a href={`mailto:${CHECKOUT.SUPPORT_EMAIL}`} className="font-medium text-ink underline decoration-gold underline-offset-4">
                    {CHECKOUT.SUPPORT_EMAIL || "our support email"}
                  </a>.
                </p>
              </div>
            </div>
          )}

          {activeTab === "terms" && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-ink-mute">
                  Last Updated: 2026
                </span>
                <h3 className="font-serif text-xl font-medium text-ink mt-1">Terms of Service</h3>
                <p className="mt-2 text-ink-soft">
                  By accessing or purchasing from {SITE.BRAND}, you acknowledge that you have read, understood, and agreed to be bound by the following terms.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-ink">1. Digital License & Usage</h4>
                <p>
                  Upon completing your purchase, {SITE.BRAND} grants you a single-user, non-exclusive, non-transferable personal license to view, read, and store the digital ebook ({SITE.EBOOK_FORMAT}).
                </p>
                <p>
                  <strong>Prohibited Use:</strong> You may not copy, resell, redistribute, sub-license, upload to public file-sharing networks or forums, or create derivative works from our publications without prior written permission.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-ink">2. Educational & Medical Disclaimer</h4>
                <p>
                  Our guides—including <em>The Genius Method</em> and <em>The Hell Method</em>—are intended strictly for educational and informational purposes.
                </p>
                <p className="rounded-xl bg-sand/70 p-4 text-[13.5px]">
                  <strong>Notice:</strong> <em>The Hell Method</em> discusses posture, daily habits, and factors related to growth. It is not medical advice, diagnosis, or treatment. Individual results vary based on genetics, age, and lifestyle; no specific physical changes are guaranteed. Always consult a qualified medical professional for health-related concerns.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-ink">3. Intellectual Property</h4>
                <p>
                  All materials, text, graphics, titles, branding, and layouts are the copyrighted intellectual property of {SITE.BRAND}. All rights reserved.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-ink">4. Limitation of Liability</h4>
                <p>
                  {SITE.BRAND} and its authors shall not be held liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use the purchased digital content.
                </p>
              </div>
            </div>
          )}

          {activeTab === "refund" && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-ink-mute">
                  Last Updated: 2026
                </span>
                <h3 className="font-serif text-xl font-medium text-ink mt-1">Refund & Cancellation Policy</h3>
                <p className="mt-2 text-ink-soft">
                  Please review our policy carefully before completing your purchase.
                </p>
              </div>

              <div className="rounded-2xl border border-ink/10 bg-cream/60 p-5 space-y-2">
                <h4 className="font-medium text-ink flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-gold-deep" />
                  All Sales Are Final (No Refunds)
                </h4>
                <p className="text-[14px]">
                  Due to the nature of digital goods which are delivered immediately and permanently upon checkout, <strong>we do not offer refunds, returns, or cancellations</strong> once an order is placed.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-ink">1. Digital Product Delivery</h4>
                <p>
                  Because electronic publications (PDF ebooks) cannot be physically returned once sent or downloaded, all transactions are deemed completed and final upon payment confirmation.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-ink">2. Technical Assistance & Damaged Files</h4>
                <p>
                  If you experience any technical issues with your download—such as an invalid download link, a missing confirmation email, or a corrupted file—our support team will resolve it promptly:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-ink-soft">
                  <li>We will re-generate and send you a fresh download link.</li>
                  <li>We will deliver a verified PDF copy directly to your email.</li>
                </ul>
                <p className="mt-2">
                  Contact our support desk at{" "}
                  <a
                    href={`mailto:${CHECKOUT.SUPPORT_EMAIL}`}
                    className="font-medium text-ink underline decoration-gold underline-offset-4"
                  >
                    {CHECKOUT.SUPPORT_EMAIL || "our support email"}
                  </a>{" "}
                  along with your order ID or purchase receipt.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-ink">3. Pre-Purchase Review</h4>
                <p>
                  We encourage all customers to read the detailed chapter summaries, audience guidelines, and sample preview excerpts available on the website prior to purchasing.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-ink/10 bg-cream/40 px-6 py-4 sm:px-8">
          <div className="flex items-center gap-2 text-xs text-ink-mute">
            <Mail className="h-3.5 w-3.5 text-gold-deep" />
            Support:{" "}
            {CHECKOUT.SUPPORT_EMAIL ? (
              <a href={`mailto:${CHECKOUT.SUPPORT_EMAIL}`} className="font-medium text-ink hover:underline">
                {CHECKOUT.SUPPORT_EMAIL}
              </a>
            ) : (
              <span>Not configured</span>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="btn-primary w-full sm:w-auto text-xs py-2.5 px-6"
          >
            I Understand / Close
          </button>
        </div>
      </div>
    </div>
  );
}
