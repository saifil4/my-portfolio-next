import React from 'react';
import Button from './Button';

const ContactForm = () => {
  return (
    <form className='flex gap-2 mt-5 flex-col'>
      <textarea className="shadow appearance-none bg-black border-gray-800 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" rows={4} placeholder="Type your message" />
      <Button onClick={() => { }} text="Send" />
    </form>
  );
};

export default ContactForm;