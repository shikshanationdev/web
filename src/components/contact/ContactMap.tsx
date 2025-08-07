import React from 'react';

const ContactMap: React.FC = () => {
  return (
    <div className="w-full overflow-hidden mt-8">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7005.116057141368!2d77.367175!3d28.613033000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce57e4c8df143%3A0x3e7993a6c3056c48!2sBhutani%20Cyberpark!5e0!3m2!1sen!2sin!4v1754546071702!5m2!1sen!2sin"
        width="100%"
        height="600"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Bhutani Cyberpark Location"
      ></iframe>
    </div>
  );
};

export default ContactMap;
