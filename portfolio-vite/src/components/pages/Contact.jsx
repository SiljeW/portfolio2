import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
  };

  return (
    <div className={styles.contactPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Get In Touch</h1>
          <p className={styles.subtitle}>Let's Create Something Amazing Together</p>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            
            {/* Contact Info */}
            <div className={styles.contactInfo}>
              <h2>Let's Talk</h2>
              <p>
                I'm always excited to hear about new projects and opportunities. 
                Whether you have a specific project in mind or just want to connect, 
                I'd love to hear from you.
              </p>

              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <h3>Email</h3>
                  <a href="mailto:siljekwalmann@gmail.com">siljekwalmann@gmail.com</a>
                </div>
                
                <div className={styles.contactItem}>
                  <h3>Location</h3>
                  <p>Oslo, Norway</p>
                </div>
                
                <div className={styles.contactItem}>
                  <h3>Response Time</h3>
                  <p>Usually within 24 hours</p>
                </div>
              </div>

              <div className={styles.socialLinks}>
                <h3>Connect With Me</h3>
                <div className={styles.socialGrid}>
                  <a href="#" className={styles.socialLink}>
                    <span>LinkedIn</span>
                    <span className={styles.arrow}>→</span>
                  </a>
                  <a href="#" className={styles.socialLink}>
                    <span>GitHub</span>
                    <span className={styles.arrow}>→</span>
                  </a>
                  <a href="#" className={styles.socialLink}>
                    <span>Instagram</span>
                    <span className={styles.arrow}>→</span>
                  </a>
                  <a href="#" className={styles.socialLink}>
                    <span>Behance</span>
                    <span className={styles.arrow}>→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.contactForm}>
              <h2>Send Me a Message</h2>
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className={styles.submitButton}>
                  Send Message
                </button>
              </form>
            </div>

          </div>

          {/* FAQ Section */}
          <div className={styles.faq}>
            <h2>Frequently Asked Questions</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3>What's your typical project timeline?</h3>
                <p>Project timelines vary depending on scope and complexity. A simple website might take 2-4 weeks, while more complex applications can take 8-12 weeks.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Do you work with international clients?</h3>
                <p>Absolutely! I work with clients worldwide and am comfortable with different time zones and communication preferences.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>What's included in your development services?</h3>
                <p>I provide end-to-end development services including planning, design, development, testing, deployment, and ongoing support.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Do you offer maintenance and support?</h3>
                <p>Yes, I offer ongoing maintenance and support packages to keep your website or application running smoothly and up-to-date.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;