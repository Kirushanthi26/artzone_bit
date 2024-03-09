import React, { useEffect } from "react";
import emailjs from "@emailjs/browser";

const SendEmail = ({ toEmail }) => {
  useEffect(() => {
    const sendEmail = async () => {
      emailjs.init('ooSfAfUe-WPK74row');

      try {
        const response = await emailjs.send(
            'service_jjlcwnd',
          'template_m00lbwm',
          {
            to_email: toEmail,
          },
          "ooSfAfUe-WPK74row"
        );

        console.log("Email sent successfully:", response);
      } catch (error) {
        console.error("Error sending email:", error);
      }
    };

    sendEmail();
  }, [toEmail]);
  return null;
};

export default SendEmail;
