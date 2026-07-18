import express from "express";
import path from "path";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import { createServer as createViteServer } from "vite";

// Load environment variables
dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Enable JSON parser for parsing client payloads
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Helper to create SMTP Transporter
  function getMailTransporter() {
    const host = process.env.SMTP_HOST || "smtp.gmail.com";
    const port = parseInt(process.env.SMTP_PORT || "587", 10);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!user || !pass) {
      console.warn("⚠️  [Nodemailer] SMTP_USER or SMTP_PASS environment variables are missing. Falling back to Dev-Console logging mode.");
      return null;
    }

    return nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // True for port 465, false for 587 or other
      auth: {
        user,
        pass,
      },
    });
  }

  // B2B General Enquiry Endpoint
  app.post("/api/enquiry", async (req, res) => {
    const { name, company, country, email, phone, productRequirement, message } = req.body;

    const toEmail = process.env.EMAIL_TO || "pateldhaval063@gmail.com";
    const fromEmail = process.env.EMAIL_FROM || process.env.SMTP_USER || "no-reply@namyaecopack.com";
    const subject = `[Namya EcoPack] New B2B Trade Enquiry from ${company || "Unknown Company"}`;

    const textBody = `Hello Namya EcoPack Trade Desk,

A client has submitted a new general B2B Trade Enquiry from the website contact form:

---------------------------------------------------------
🏢 CLIENT DETAILS
---------------------------------------------------------
• Full Name: ${name || "Not provided"}
• Company Name: ${company || "Not provided"}
• Country: ${country || "Not provided"}
• Email Address: ${email || "Not provided"}
• Phone / WhatsApp: ${phone || "Not provided"}

---------------------------------------------------------
📦 INQUIRY DETAILS
---------------------------------------------------------
• Product Category: ${productRequirement || "Not specified"}

• Custom Message:
${message || "No additional message."}

---------------------------------------------------------
Sent automatically by Namya EcoPack Backend Server.
`;

    try {
      const transporter = getMailTransporter();

      if (transporter) {
        await transporter.sendMail({
          from: `Namya EcoPack <${fromEmail}>`,
          to: toEmail,
          subject,
          text: textBody,
          replyTo: email || undefined,
        });
        console.log(`✅ [Nodemailer] Email successfully sent to ${toEmail}`);
        res.json({ success: true, message: "Enquiry submitted and email sent successfully." });
      } else {
        // Dev mode / Fallback log
        console.log("================== SIMULATED EMAIL SUBMISSION ==================");
        console.log(`To: ${toEmail}`);
        console.log(`Subject: ${subject}`);
        console.log(textBody);
        console.log("================================================================");
        res.json({
          success: true,
          message: "Enquiry received! (Note: Running in console logs mode. Configure SMTP_USER and SMTP_PASS in Settings to trigger real emails).",
          simulated: true
        });
      }
    } catch (error: any) {
      console.error("❌ [Nodemailer Error] Failed to dispatch email:", error);
      res.status(500).json({ success: false, error: "Internal server error occurred while sending email." });
    }
  });

  // B2B Cargo Trade Calculator Quote Endpoint
  app.post("/api/quote", async (req, res) => {
    const {
      companyDetails,
      selectedCategory,
      activeProduct,
      pulpType,
      customEmboss,
      customCarton,
      quantity,
      totalCartons,
      totalCbm,
      totalWeightKg,
      incoterm,
      destinationPort,
      shippingMode,
      calculatedUnitPrice,
      totalEstimatedCost,
      estimatedLeadTimeDays
    } = req.body;

    const toEmail = process.env.EMAIL_TO || "pateldhaval063@gmail.com";
    const fromEmail = process.env.EMAIL_FROM || process.env.SMTP_USER || "no-reply@namyaecopack.com";
    
    const companyName = companyDetails?.company || "Unknown Company";
    const subject = `[Namya EcoPack] Commercial Quote Request from ${companyName}`;

    const textBody = `Hello Namya EcoPack B2B Trade Desk,

A custom B2B Cargo and Pricing calculation has been completed on the interactive Trade Calculator.

---------------------------------------------------------
🏢 CLIENT & COMPANY DETAILS
---------------------------------------------------------
• Contact Person: ${companyDetails?.name || "Not provided"}
• Company Legal Name: ${companyName}
• Destination Country: ${companyDetails?.country || "Not provided"}
• Email Address: ${companyDetails?.email || "Not provided"}
• Phone / WhatsApp: ${companyDetails?.phone || "Not provided"}

• Special Directives & Port Instructions:
${companyDetails?.requirements || "None provided"}

---------------------------------------------------------
📦 PRODUCT & PACKAGING CONFIGURATION
---------------------------------------------------------
• Selected Category: ${(selectedCategory || "unknown").toUpperCase()}
• Specific Product: ${activeProduct?.name || "Sugarcane Bagasse Product"}
• Pulp Type: ${pulpType === "natural" ? "Natural Bagasse (Brown/Unbleached)" : "Bleached Bagasse (White)"}
• Custom Logo Embossing: ${customEmboss ? "Yes (Custom mold required)" : "No"}
• Custom Branded Cartons: ${customCarton ? "Yes (Printing plates required)" : "No"}

---------------------------------------------------------
🚢 SHIPPING & VOLUME SPECIFICATIONS
---------------------------------------------------------
• Target Order Quantity: ${(quantity || 0).toLocaleString()} units
• Total Estimated Cartons: ${(totalCartons || 0).toLocaleString()} cartons
• Total Cargo Volume: ${totalCbm || 0} CBM
• Total Cargo Weight: ${(totalWeightKg || 0).toLocaleString()} kg
• Target Incoterm: ${(incoterm || "FOB").toUpperCase()}
• Destination Port: ${destinationPort || "Not specified"}
• Shipping Mode: ${(shippingMode || "FCL").toUpperCase()}

---------------------------------------------------------
💰 ESTIMATED VALUATION
---------------------------------------------------------
• Target Unit Price: $${calculatedUnitPrice || 0.0} USD
• Estimated Total Cargo Value: $${(totalEstimatedCost || 0).toLocaleString()} USD
• Estimated Lead Time: ${estimatedLeadTimeDays || 25} days

*Subject to active raw bagasse fiber rates.
---------------------------------------------------------
Sent automatically by Namya EcoPack Backend Server.
`;

    try {
      const transporter = getMailTransporter();

      if (transporter) {
        await transporter.sendMail({
          from: `Namya EcoPack <${fromEmail}>`,
          to: toEmail,
          subject,
          text: textBody,
          replyTo: companyDetails?.email || undefined,
        });
        console.log(`✅ [Nodemailer] Commercial Quote email successfully sent to ${toEmail}`);
        res.json({ success: true, message: "Quote request submitted and email sent successfully." });
      } else {
        // Dev mode / Fallback log
        console.log("================== SIMULATED QUOTE SUBMISSION ==================");
        console.log(`To: ${toEmail}`);
        console.log(`Subject: ${subject}`);
        console.log(textBody);
        console.log("================================================================");
        res.json({
          success: true,
          message: "Quote requested! (Note: Running in console logs mode. Configure SMTP_USER and SMTP_PASS in Settings to trigger real emails).",
          simulated: true
        });
      }
    } catch (error: any) {
      console.error("❌ [Nodemailer Error] Failed to dispatch quote email:", error);
      res.status(500).json({ success: false, error: "Internal server error occurred while sending quote request." });
    }
  });

  // Sitemap and robots.txt static endpoints
  app.get("/sitemap.xml", (req, res) => {
    res.sendFile(path.join(process.cwd(), "public", "sitemap.xml"));
  });

  app.get("/robots.txt", (req, res) => {
    res.sendFile(path.join(process.cwd(), "public", "robots.txt"));
  });

  // Serve frontend assets and pages
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
