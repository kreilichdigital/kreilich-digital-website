KREILICH DIGITAL — NETLIFY DEPLOYMENT

1. Open https://app.netlify.com/drop and drag the ZIP file onto the page (or extract the ZIP and drag the site folder).
2. Netlify will give you a temporary *.netlify.app address. Check the homepage and all navigation links on desktop and mobile.
3. IMPORTANT: The quote-request form uses Netlify Forms. After deployment, open the site's Netlify dashboard > Forms to confirm form detection is enabled. If forms are not detected, enable form detection and redeploy. Submit a TEST request from the live site and verify it appears in the Netlify Forms submissions area.
4. To receive email notifications, in the Netlify site dashboard configure a form submission email notification for quote-request to kreilichdigital@gmail.com. Form submissions do NOT automatically email you simply because the email is on the site. Test the notification.
5. The three portfolio images are CONCEPT MOCKUPS, not live demos. Replace them with working demos when ready.
6. Review introductory prices, scope, and legal/business details before taking payments. Domain, hosting, paid services, support, and complex features are not included in starter prices.
7. Once your site address is finalized, update the QR code and website shown on your shareable business card. Do not distribute the old placeholder QR code.

TECH: Static HTML/CSS/JS, no build step, no external JS dependencies. Netlify Forms requires a real Netlify deployment; opening index.html locally will not submit a form.
