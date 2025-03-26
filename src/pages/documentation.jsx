import React from 'react';
import Header from '../compnents/header';

export default function Doc() {
  return (
    <>
      <Header />
      <div className="doc-container">
        <style>{`
        .doc-container {
          --doc-base: #05060F;
          --doc-primary: #1A1B2F;
          --doc-secondary: #2A2B45;
          --doc-accent: #4A4B8A;
          --doc-text: #F0F0FF;
          --doc-text-secondary: #C0C0D0;
          --doc-code-bg: #0E0F1A;
          --doc-code-border: #2A2B45;
          --doc-success: #4CAF50;
          --doc-warning: #FFC107;
          --doc-error: #F44336;
          --doc-info: #2196F3;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: var(--doc-base);
          color: var(--doc-text);
          line-height: 1.6;
        }
        
        .doc-header {
          background-color: var(--doc-primary);
          padding: 2rem 0;
          border-bottom: 1px solid var(--doc-accent);
        }
        
        .doc-header-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .doc-logo {
          font-size: 2rem;
          font-weight: bold;
          color: var(--doc-text);
          text-decoration: none;
        }
        
        .doc-logo-accent {
          color: var(--doc-accent);
        }
        
        .doc-nav-list {
          display: flex;
          list-style: none;
        }
        
        .doc-nav-item {
          margin-left: 2rem;
        }
        
        .doc-nav-link {
          color: var(--doc-text-secondary);
          text-decoration: none;
          transition: color 0.3s;
        }
        
        .doc-nav-link:hover {
          color: var(--doc-text);
        }
        
        .doc-hero {
          padding: 4rem 0;
          text-align: center;
          background: linear-gradient(135deg, var(--doc-primary) 0%, var(--doc-base) 100%);
        }
        
        .doc-hero-title {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .doc-hero-subtitle {
          font-size: 1.2rem;
          color: var(--doc-text-secondary);
          max-width: 800px;
          margin: 0 auto 2rem;
        }
        
        .doc-btn {
          display: inline-block;
          background-color: var(--doc-accent);
          color: white;
          padding: 0.8rem 1.5rem;
          border-radius: 4px;
          text-decoration: none;
          font-weight: bold;
          transition: background-color 0.3s;
        }
        
        .doc-btn:hover {
          background-color: #5A5B9A;
        }
        
        .doc-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 20px;
        }
        
        .doc-section {
          margin-bottom: 4rem;
        }
        
        .doc-section-title {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          color: var(--doc-text);
          border-bottom: 2px solid var(--doc-accent);
          padding-bottom: 0.5rem;
        }
        
        .doc-subsection-title {
          font-size: 1.5rem;
          margin: 2rem 0 1rem;
          color: var(--doc-text);
        }
        
        .doc-subsubsection-title {
          font-size: 1.25rem;
          margin: 1.5rem 0 0.75rem;
          color: var(--doc-text);
        }
        
        .doc-text {
          margin-bottom: 1rem;
          color: var(--doc-text-secondary);
        }
        
        .doc-text-bold {
          font-weight: bold;
        }
        
        .doc-link {
          color: var(--doc-accent);
          text-decoration: none;
        }
        
        .doc-link:hover {
          text-decoration: underline;
        }
        
        .doc-list {
          margin-bottom: 1.5rem;
          padding-left: 2rem;
        }
        
        .doc-list-item {
          margin-bottom: 0.5rem;
          color: var(--doc-text-secondary);
        }
        
        .doc-code-block {
          background-color: var(--doc-code-bg);
          border: 1px solid var(--doc-code-border);
          border-radius: 6px;
          padding: 1rem;
          margin: 1.5rem 0;
          overflow-x: auto;
        }
        
        .doc-code-pre {
          margin: 0;
          font-family: 'Courier New', Courier, monospace;
          font-size: 0.9rem;
          line-height: 1.5;
          white-space: pre-wrap;
        }
        
        .doc-code {
          color: #E1E1FF;
        }
        
        .doc-inline-code {
          background-color: var(--doc-code-bg);
          padding: 0.2rem 0.4rem;
          border-radius: 3px;
          font-family: 'Courier New', Courier, monospace;
          font-size: 0.9rem;
          color: #E1E1FF;
        }
        
        .doc-table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.5rem 0;
        }
        
        .doc-table th, .doc-table td {
          border: 1px solid var(--doc-secondary);
          padding: 0.8rem;
          text-align: left;
        }
        
        .doc-table th {
          background-color: var(--doc-primary);
          color: var(--doc-text);
        }
        
        .doc-table tr:nth-child(even) {
          background-color: var(--doc-secondary);
        }
        
        .doc-table tr:hover {
          background-color: var(--doc-primary);
        }
        
        .doc-note {
          background-color: rgba(74, 75, 138, 0.2);
          border-left: 4px solid var(--doc-accent);
          padding: 1rem;
          margin: 1.5rem 0;
        }
        
        .doc-note-text {
          margin: 0;
          color: var(--doc-text);
        }
        
        .doc-warning {
          background-color: rgba(255, 193, 7, 0.1);
          border-left: 4px solid var(--doc-warning);
          padding: 1rem;
          margin: 1.5rem 0;
        }
        
        .doc-warning-text {
          margin: 0;
          color: var(--doc-warning);
        }
        
        .doc-error {
          background-color: rgba(244, 67, 54, 0.1);
          border-left: 4px solid var(--doc-error);
          padding: 1rem;
          margin: 1.5rem 0;
        }
        
        .doc-error-text {
          margin: 0;
          color: var(--doc-error);
        }
        
        .doc-footer {
          background-color: var(--doc-primary);
          padding: 2rem 0;
          text-align: center;
          border-top: 1px solid var(--doc-accent);
        }
        
        .doc-footer-text {
          color: var(--doc-text-secondary);
        }
        
        @media (max-width: 768px) {
          .doc-header-content {
            flex-direction: column;
            text-align: center;
          }
          
          .doc-nav-list {
            margin-top: 1rem;
            justify-content: center;
          }
          
          .doc-nav-item {
            margin: 0 1rem;
          }
          
          .doc-hero-title {
            font-size: 2.5rem;
          }
        }
      `}</style>

        <main className="doc-content">
          <section id="introduction" className="doc-section">
            <h2 className="doc-section-title">Introduction</h2>
            <p className="doc-text">
              Keyper Authentication provides a simple, secure way to implement
              authentication in your platform without building your own auth
              system. With just a few API calls, you can have a complete
              authentication flow that handles user registration, login, and
              session management.
            </p>
            <p className="doc-text">The flow consists of three main steps:</p>
            <ol className="doc-list">
              <li className="doc-list-item">
                Redirect users to Keyper's authentication page
              </li>
              <li className="doc-list-item">
                Handle the callback with the authentication token
              </li>
              <li className="doc-list-item">
                Verify the token to get user data
              </li>
            </ol>
          </section>

          <section id="getting-started" className="doc-section">
            <h2 className="doc-section-title">Getting Started</h2>
            <h3 className="doc-subsection-title">Registration</h3>
            <p className="doc-text">
              To use Keyper Authentication, you first need to register your
              platform and obtain an API key.
            </p>
            <p className="doc-text">
              <strong className="doc-text-bold">Registration URL</strong>:{' '}
              <a
                href="https://keyperr.vercel.app/register"
                target="_blank"
                rel="noopener noreferrer"
                className="doc-link"
              >
                https://keyperr.vercel.app/register
              </a>
            </p>
            <p className="doc-text">
              <strong className="doc-text-bold">Required Fields</strong>:
            </p>
            <ul className="doc-list">
              <li className="doc-list-item">Name</li>
              <li className="doc-list-item">Email</li>
              <li className="doc-list-item">Phone</li>
              <li className="doc-list-item">Platform name</li>
              <li className="doc-list-item">Password</li>
              <li className="doc-list-item">Profile image URL (optional)</li>
            </ul>
            <div className="doc-note">
              <p className="doc-note-text">
                After successful registration, you'll receive a unique API key
                that identifies your platform in our system.
              </p>
            </div>
            <h3 className="doc-subsection-title">Obtaining API Key</h3>
            <p className="doc-text">
              Once registered, your API key will be displayed in your dashboard.
              Store this key securely as it will be used for all authentication
              requests.
            </p>
          </section>

          <section id="implementation" className="doc-section">
            <h2 className="doc-section-title">Implementation Guide</h2>
            <h3 className="doc-subsection-title">
              Step 1: Create Login Button
            </h3>
            <p className="doc-text">
              Add a login button to your platform that will trigger the
              authentication flow:
            </p>
            <div className="doc-code-block">
              <pre className="doc-code-pre">
                <code className="doc-code">{`<button onClick={handleRedirect}>Login with Keyper</button>`}</code>
              </pre>
            </div>
            <h3 className="doc-subsection-title">Step 2: Handle Redirect</h3>
            <p className="doc-text">
              Implement the redirect function that will send users to Keyper's
              authentication page:
            </p>
            <div className="doc-code-block">
              <pre className="doc-code-pre">
                <code className="doc-code">{`const handleRedirect = async () => {
  const currentUrl = encodeURIComponent(window.location.href);
  const apiUrl = \`https://keyperapi.vercel.app/redirect/\${currentUrl}/\${apikey}\`;

  try {
    const response = await fetch(apiUrl, { method: 'GET' });
    if (response.redirected) {
      window.location.href = response.url;
    } else {
      console.log('Redirect failed:', await response.text());
    }
  } catch (error) {
    console.error('Error fetching redirect:', error);
  }
};`}</code>
              </pre>
            </div>
            <h3 className="doc-subsection-title">
              Step 3: Handle Token Verification
            </h3>
            <p className="doc-text">
              After successful authentication, users will be redirected back to
              your platform with a token. You need to:
            </p>
            <ol className="doc-list">
              <li className="doc-list-item">
                Set up a route to handle the callback
              </li>
              <li className="doc-list-item">Verify the token</li>
              <li className="doc-list-item">Store user data</li>
            </ol>
            <h4 className="doc-subsubsection-title">
              Route Setup (React Router)
            </h4>
            <div className="doc-code-block">
              <pre className="doc-code-pre">
                <code className="doc-code">{`<Route path="/:path/checktoken/:token/:apikey" element={<Loading />} />`}</code>
              </pre>
            </div>
            <h4 className="doc-subsubsection-title">
              Token Verification Component
            </h4>
            <div className="doc-code-block">
              <pre className="doc-code-pre">
                <code className="doc-code">{`import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Loading() {
  const { token, apikey } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          \`https://keyperapi.vercel.app/checktoken/token=\${token}/apikey=\${apikey}\`
        );
        if (!response.ok) {
          throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        const result = await response.json();
        setData(result);
        if (result.success) {
          localStorage.setItem('userEmail', result.data.email);
          localStorage.setItem('userPhone', result.data.phone);
          localStorage.setItem('apiKey', apikey);
          localStorage.setItem('token', token);
          setTimeout(() => {
            navigate('/profile');
          }, 2000);
        } else {
          setError(result.message);
        }
      } catch (error) {
        console.error('API fetch error:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [token, apikey, navigate]);

  if (loading) return <div>Authenticating...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div>
      {data?.success ? 'Login successful! Redirecting...' : 'Authentication failed'}
    </div>
  );
}`}</code>
              </pre>
            </div>
          </section>

          <section id="api-reference" className="doc-section">
            <h2 className="doc-section-title">API Reference</h2>
            <h3 className="doc-subsection-title">Redirect API</h3>

            <h4 className="doc-subsubsection-title">Status Codes</h4>
            <table className="doc-table">
              <thead className="doc-table-head">
                <tr className="doc-table-row">
                  <th className="doc-table-header">Code</th>
                  <th className="doc-table-header">Meaning</th>
                  <th className="doc-table-header">Response</th>
                </tr>
              </thead>
              <tbody className="doc-table-body">
                <tr className="doc-table-row">
                  <td className="doc-table-cell">200</td>
                  <td className="doc-table-cell">Success</td>
                  <td className="doc-table-cell">
                    Redirects to authentication page
                  </td>
                </tr>
                <tr className="doc-table-row doc-table-row-alt">
                  <td className="doc-table-cell">400</td>
                  <td className="doc-table-cell">Bad Request</td>
                  <td className="doc-table-cell">
                    Missing target URL or API key
                  </td>
                </tr>
                <tr className="doc-table-row">
                  <td className="doc-table-cell">500</td>
                  <td className="doc-table-cell">Internal Server Error</td>
                  <td className="doc-table-cell">Server error message</td>
                </tr>
              </tbody>
            </table>

            <h3 className="doc-subsection-title">Token Verification API</h3>

            <h4 className="doc-subsubsection-title">Status Codes</h4>
            <table className="doc-table">
              <thead className="doc-table-head">
                <tr className="doc-table-row">
                  <th className="doc-table-header">Code</th>
                  <th className="doc-table-header">Meaning</th>
                  <th className="doc-table-header">Response</th>
                </tr>
              </thead>
              <tbody className="doc-table-body">
                <tr className="doc-table-row">
                  <td className="doc-table-cell">200</td>
                  <td className="doc-table-cell">Success</td>
                  <td className="doc-table-cell">User data in JSON format</td>
                </tr>
                <tr className="doc-table-row doc-table-row-alt">
                  <td className="doc-table-cell">400</td>
                  <td className="doc-table-cell">Bad Request</td>
                  <td className="doc-table-cell">Missing token or API key</td>
                </tr>
                <tr className="doc-table-row">
                  <td className="doc-table-cell">401</td>
                  <td className="doc-table-cell">Unauthorized</td>
                  <td className="doc-table-cell">Invalid API key</td>
                </tr>
                <tr className="doc-table-row doc-table-row-alt">
                  <td className="doc-table-cell">404</td>
                  <td className="doc-table-cell">Not Found</td>
                  <td className="doc-table-cell">Token not found or expired</td>
                </tr>
                <tr className="doc-table-row">
                  <td className="doc-table-cell">500</td>
                  <td className="doc-table-cell">Internal Server Error</td>
                  <td className="doc-table-cell">Server error message</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section id="response-formats" className="doc-section">
            <h2 className="doc-section-title">Response Formats</h2>
            <h3 className="doc-subsection-title">
              Successful Token Verification
            </h3>
            <div className="doc-code-block">
              <pre className="doc-code-pre">
                <code className="doc-code">{`{
  "success": true,
  "data": {
    "email": "user@example.com",
    "phone": "+1234567890",
    "name": "John Doe",
    "profileImage": "https://example.com/profile.jpg",
    "tokenExpiry": "2023-06-15T12:00:00Z"
  }
}`}</code>
              </pre>
            </div>
            <h3 className="doc-subsection-title">Error Responses</h3>
            <div className="doc-code-block">
              <pre className="doc-code-pre">
                <code className="doc-code">{`{
  "success": false,
  "message": "Error description"
}`}</code>
              </pre>
            </div>
          </section>

          <section id="error-handling" className="doc-section">
            <h2 className="doc-section-title">Error Handling</h2>
            <div className="doc-error">
              <p className="doc-error-text">
                <strong>Missing API Key</strong>
                <br />
                Status: 400 Bad Request
                <br />
                Message: "API Key is required"
              </p>
            </div>
            <div className="doc-error">
              <p className="doc-error-text">
                <strong>Invalid API Key</strong>
                <br />
                Status: 401 Unauthorized
                <br />
                Message: "Invalid API Key"
              </p>
            </div>
            <div className="doc-error">
              <p className="doc-error-text">
                <strong>Missing Token</strong>
                <br />
                Status: 400 Bad Request
                <br />
                Message: "Token is required"
              </p>
            </div>
            <div className="doc-error">
              <p className="doc-error-text">
                <strong>Token Not Found</strong>
                <br />
                Status: 404 Not Found
                <br />
                Message: "Token not found" (either invalid or expired)
              </p>
            </div>
            <div className="doc-error">
              <p className="doc-error-text">
                <strong>Internal Server Error</strong>
                <br />
                Status: 500 Internal Server Error
                <br />
                Message: "Internal server error"
              </p>
            </div>
          </section>

          <section id="security-considerations" className="doc-section">
            <h2 className="doc-section-title">Security Considerations</h2>
            <ol className="doc-list">
              <li className="doc-list-item">
                <strong className="doc-text-bold">Token Lifetime</strong>:
                Tokens are valid for 10 minutes only
              </li>
              <li className="doc-list-item">
                <strong className="doc-text-bold">HTTPS</strong>: Always use
                HTTPS for all requests
              </li>
              <li className="doc-list-item">
                <strong className="doc-text-bold">API Key Protection</strong>:
                Keep your API key secure
              </li>
              <li className="doc-list-item">
                <strong className="doc-text-bold">Local Storage</strong>:
                Consider more secure storage for sensitive data
              </li>
              <li className="doc-list-item">
                <strong className="doc-text-bold">Input Validation</strong>:
                Always validate API responses
              </li>
            </ol>
          </section>

          <section id="best-practices" className="doc-section">
            <h2 className="doc-section-title">Best Practices</h2>
            <ol className="doc-list">
              <li className="doc-list-item">
                <strong className="doc-text-bold">Loading States</strong>: Show
                clear loading indicators
              </li>
              <li className="doc-list-item">
                <strong className="doc-text-bold">Error Handling</strong>:
                Provide user-friendly error messages
              </li>
              <li className="doc-list-item">
                <strong className="doc-text-bold">Session Management</strong>:
                Implement proper session timeout
              </li>
              <li className="doc-list-item">
                <strong className="doc-text-bold">Logout</strong>: Clear all
                stored authentication data
              </li>
              <li className="doc-list-item">
                <strong className="doc-text-bold">Testing</strong>: Test
                thoroughly before production
              </li>
            </ol>
          </section>

          <section id="faq" className="doc-section">
            <h2 className="doc-section-title">FAQ</h2>
            <h3 className="doc-subsection-title">
              Q: How long is the authentication token valid?
            </h3>
            <p className="doc-text">
              A: Tokens are valid for 10 minutes after generation.
            </p>
            <h3 className="doc-subsection-title">
              Q: Can I customize the authentication page?
            </h3>
            <p className="doc-text">
              A: Currently not customizable, but planned for future releases.
            </p>
            <h3 className="doc-subsection-title">
              Q: What happens with expired tokens?
            </h3>
            <p className="doc-text">
              A: Token verification fails with 404 status.
            </p>
            <h3 className="doc-subsection-title">Q: Is there rate limiting?</h3>
            <p className="doc-text">
              A: Yes, excessive API calls may be rate-limited.
            </p>
            <h3 className="doc-subsection-title">Q: How to handle logout?</h3>
            <p className="doc-text">A: Clear stored token and user data.</p>
            <h3 className="doc-subsection-title">Q: Mobile app support?</h3>
            <p className="doc-text">A: Yes, using deep links for callback.</p>
            <p className="doc-text">
              For additional support: support@keyper.com
            </p>
          </section>
        </main>

        {/* <footer className="doc-footer">
          <div className="doc-header-content">
            <p className="doc-footer-text">
              &copy; 2023 Keyper Authentication. All rights reserved.
            </p>
          </div>
        </footer> */}
      </div>
    </>
  );
}
