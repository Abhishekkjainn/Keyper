import React, { useEffect, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; // VS Code-like dark theme
import 'prismjs/components/prism-javascript'; // Syntax highlighting for JS

export default function Page3() {
  const codeSnippet = `fetch(\`https://keyper/authenticate/<API_KEY>\`)  
    .then(res => res.json())  
    .then(data => console.log('Authentication Successful:', data))  
    .catch(err => console.error('Authentication Failed:', err));`;

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    Prism.highlightAll(); // Highlight the code on component load
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="page3">
      {/* Top Tag */}
      <div className="toptagpage1">
        <div className="side"></div>Start Building Today
        <div className="side2"></div>
      </div>

      {/* Headings */}
      <div className="page2header">
        Three Lines of Code and BOOM!
        <br />
        <span className="highlight">
          Instant, Secure, and Simple Authentication.
        </span>
      </div>

      <div className="page2subheader">
        "Skip the endless setup and get authentication running in seconds.
        Handle logins with OTPs, passwords, or magic links—all with a single,
        developer-friendly API. Effortless integration, enterprise-grade
        security, and a seamless user experience, right out of the box."
      </div>

      {/* Code Block */}
      <div className="code-container">
        <button className="copy-btn" onClick={handleCopy}>
          {copied ? 'Copied!' : 'Copy Code'}
        </button>
        <pre className="code-block">
          <code className="language-javascript">{codeSnippet}</code>
        </pre>
      </div>
    </div>
  );
}
