import React from "react";

const ContactMap: React.FC = () => {
  return (
    <div className="w-full overflow-hidden mt-8">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3547.6744346968703!2d77.3650287!3d28.627529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5d94db5eeb5%3A0x556e8af08c8b0dc6!2sShiksha%20Nation!5e1!3m2!1sen!2sin!4v1757057653342!5m2!1sen!2sin"
        width="100%"
        height="600"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactMap;
