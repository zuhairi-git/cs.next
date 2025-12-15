'use client';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export const useEmailJS = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [messageType, setMessageType] = useState('success');
  const [messageText, setMessageText] = useState('');

  const EMAIL_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_r98dsgw';
  const EMAIL_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_vj2cvqm';
  const EMAIL_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'meMciUZE0q6WnILnA';

  const sendEmail = async (formRef, onSuccess = null, onError = null) => {
    if (!formRef.current) {
      console.error('Form reference is not available');
      return;
    }

    setIsLoading(true);
    setShowMessage(false);

    try {
      // Validate required fields
      const formData = new FormData(formRef.current);
      const requiredFields = ['user_name', 'user_email', 'message'];
      
      for (const field of requiredFields) {
        if (!formData.get(field) || formData.get(field).toString().trim() === '') {
          throw new Error(`${field.replace('user_', '').replace('_', ' ')} is required`);
        }
      }

      // Validate email format
      const email = formData.get('user_email').toString();
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailRegex.test(email)) {
        throw new Error('Please enter a valid email address');
      }

      const result = await emailjs.sendForm(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        formRef.current,
        EMAIL_PUBLIC_KEY
      );
      
      console.log('Email sent successfully:', result.text);
      setMessageType('success');
      setMessageText('Thank you for your message! We\'ll get back to you soon.');
      setShowMessage(true);
      
      // Reset form after successful submission
      formRef.current.reset();
      
      // Call success callback if provided
      if (onSuccess) onSuccess(result);
      
    } catch (error) {
      console.error('Email sending failed:', error);
      setMessageType('error');
      
      // Handle different types of errors
      if (error.message.includes('required') || error.message.includes('valid email')) {
        setMessageText(error.message);
      } else if (error.status === 429) {
        setMessageText('Too many requests. Please wait a moment and try again.');
      } else if (error.status === 400) {
        setMessageText('Invalid form data. Please check your inputs and try again.');
      } else {
        setMessageText('Sorry, there was an error sending your message. Please try again.');
      }
      
      setShowMessage(true);
      
      // Call error callback if provided
      if (onError) onError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const closeMessage = () => {
    setShowMessage(false);
  };

  return {
    isLoading,
    showMessage,
    messageType,
    messageText,
    sendEmail,
    closeMessage
  };
};
