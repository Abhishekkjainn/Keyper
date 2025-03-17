import React, { useEffect } from 'react';

export default function Authpage() {
  useEffect(() => {
    const currentUrl = window.location.href;
    const encodedUrl = encodeURIComponent(currentUrl);
    const apiUrl = `http://localhost:6969/redirect/${encodedUrl}`;

    const initiateRedirect = async () => {
      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          redirect: 'follow',
        });

        if (response.redirected) {
          window.location.href = response.url;
        } else {
          console.log('No redirection occurred.');
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    initiateRedirect();
  }, []);

  return (
    <div className="authpage">
      <div className="authdiv"></div>
    </div>
  );
}
