'use client'

import { useEffect } from 'react';

declare global {
  interface Window {
    ktt10: {
      setup: (config: { id: string; accountId: string; color: string }) => void;
      // If there are other methods, they should be listed here
    };
  }
}

const ChatboxScript = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://app.socialgrowthco.com/webchat/plugin.js?v=5";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      console.log('Chatbox script loaded.');

      if (window.ktt10) {
        console.log('ktt10 is available. Initializing chatbox...');
        window.ktt10.setup({
          id: "uO7Km0AcfaI1VS1P2",
          accountId: "1269955",
          color: "#006dff",
        });

        // Adding a timeout to give some time for the chatbox to initialize
        setTimeout(() => {
          const chatboxButton = document.querySelector('.chatbox-button-class'); // Change this selector as needed
          console.log('Chatbox button element:', chatboxButton);
          if (chatboxButton) {
            chatboxButton.addEventListener('click', () => {
              console.log('Chatbox button clicked');
              // Try to log all properties of window.ktt10 to discover available methods
              console.log('ktt10 methods:', Object.keys(window.ktt10));
              // Ensure there's no CSS preventing the chatbox from showing
            });
          } else {
            console.log('Chatbox button not found');
          }
        }, 3000); // Adjust the timeout duration as needed
      } else {
        console.error('ktt10 is not available.');
      }
    };

    script.onerror = () => {
      console.error('Failed to load the chatbox script.');
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default ChatboxScript;
