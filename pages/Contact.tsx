
import React, { useState } from 'react';

const PageHeader: React.FC<{ title: string; subtitle:string }> = ({ title, subtitle }) => (
    <div className="bg-brand-primary">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold font-serif text-white sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-4 text-xl text-gray-300">{subtitle}</p>
      </div>
    </div>
);

const Contact: React.FC = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle form submission, e.g., send to an API
        console.log('Form submitted:', formState);
        setIsSubmitted(true);
    };

    return (
        <div>
            <PageHeader title="Contact Us" subtitle="We're Here to Help. Reach Out for a Consultation." />
            <div className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold font-serif text-brand-dark">Our Office</h3>
                                <p className="mt-2 text-lg text-brand-secondary">
                                    123 Justice Avenue, Suite 500<br />
                                    Metropolis, USA 10001
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold font-serif text-brand-dark">Get in Touch</h3>
                                <p className="mt-2 text-lg text-brand-secondary">
                                    <strong>Phone:</strong> (555) 123-4567<br />
                                    <strong>Email:</strong> contact@jurischambers.com
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold font-serif text-brand-dark">Business Hours</h3>
                                <p className="mt-2 text-lg text-brand-secondary">
                                    Monday - Friday: 9:00 AM - 5:00 PM<br />
                                    Saturday - Sunday: Closed
                                </p>
                            </div>
                             <div className="h-80 bg-gray-300 rounded-lg shadow-md">
                                <img
                                    className="w-full h-full object-cover rounded-lg"
                                    src="https://picsum.photos/800/400?image=1084"
                                    alt="Map to Juris Chambers office"
                                />
                             </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                            <h2 className="text-3xl font-bold font-serif text-brand-dark mb-6">Send Us a Message</h2>
                            {isSubmitted ? (
                                <div className="text-center p-8 bg-green-100 text-green-800 rounded-lg">
                                    <h3 className="text-2xl font-bold">Thank You!</h3>
                                    <p className="mt-2">Your message has been sent successfully. We will be in touch shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-brand-secondary">Full Name</label>
                                        <input type="text" name="name" id="name" required value={formState.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-accent focus:border-brand-accent sm:text-sm" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-brand-secondary">Email</label>
                                        <input type="email" name="email" id="email" required value={formState.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-accent focus:border-brand-accent sm:text-sm" />
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-brand-secondary">Subject</label>
                                        <input type="text" name="subject" id="subject" required value={formState.subject} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-accent focus:border-brand-accent sm:text-sm" />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-brand-secondary">Message</label>
                                        <textarea id="message" name="message" rows={4} required value={formState.message} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-accent focus:border-brand-accent sm:text-sm"></textarea>
                                    </div>
                                    <div>
                                        <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-brand-accent hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent transition duration-300">
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
