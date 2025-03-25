import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../compnents/header';

export default function RegistrationPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    platformname: '',
    password: '',
    imageurl: '',
  });
  const [errors, setErrors] = useState({});
  const [direction, setDirection] = useState('forward');
  const [currentWarning, setCurrentWarning] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const steps = [
    {
      id: 1,
      field: 'name',
      placeholder: 'Enter Your Name',
      icon: '/nameicon2.jpg',
    },
    {
      id: 2,
      field: 'email',
      placeholder: 'Enter Your Email',
      icon: '/emailicon.jpg',
    },
    {
      id: 3,
      field: 'phone',
      placeholder: 'Enter Your Phone',
      icon: '/phoneicon.jpg',
    },
    {
      id: 4,
      field: 'platformname',
      placeholder: 'Enter Platform Name',
      icon: '/platformicon.jpg',
    },
    {
      id: 5,
      field: 'password',
      placeholder: 'Enter Password',
      icon: '/passwordicon.jpg',
    },
    {
      id: 6,
      field: 'imageurl',
      placeholder: 'Enter Image URL',
      icon: '/imageicon.jpg',
    },
  ];

  useEffect(() => {
    const field = steps[step - 1].field;
    if (!errors[field] && formData[field].trim()) {
      setCurrentWarning('');
    }
  }, [formData, errors, step]);

  const getFieldValidationMessage = (field, value) => {
    if (!value.trim())
      return `Please enter your ${
        field === 'platformname' ? 'platform name' : field
      }`;

    switch (field) {
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? 'Your Email ID is not valid'
          : '';
      case 'phone':
        return !/^\+?[\d\s-]{10,}$/.test(value)
          ? 'Your Phone number must have at least 10 digits'
          : '';
      case 'password':
        return value.length < 8
          ? 'Password must be at least 8 characters long'
          : '';
      case 'imageurl':
        return !/^(https?:\/\/).+$/.test(value)
          ? 'Image URL must start with http:// or https://'
          : '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    const field = steps[step - 1].field;

    setFormData((prev) => ({ ...prev, [field]: value }));
    const error = getFieldValidationMessage(field, value);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      // Construct the API URL with all parameters
      const apiUrl = `https://keyperapi.vercel.app/register/name=${encodeURIComponent(
        formData.name
      )}/email=${encodeURIComponent(formData.email)}/phone=${encodeURIComponent(
        formData.phone
      )}/platformname=${encodeURIComponent(
        formData.platformname
      )}/hashedpass=${encodeURIComponent(
        formData.password
      )}/imageurl=${encodeURIComponent(formData.imageurl)}`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (data.success) {
        // Save API key to localStorage
        localStorage.setItem('apikey-client', data.data.apikey);

        // Print client data to console
        console.log('Client Data:', data.data);
        navigate('/dashboard');
        alert('Registration successful!');
      } else {
        throw new Error(data.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      setCurrentWarning(
        error.message || 'Failed to register. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleNext = () => {
    const field = steps[step - 1].field;
    const error = getFieldValidationMessage(field, formData[field]);

    if (error) {
      setErrors((prev) => ({ ...prev, [field]: error }));
      setCurrentWarning(error);
      return;
    }

    setCurrentWarning('');

    if (step < steps.length) {
      setDirection('forward');
      setStep((prev) => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setDirection('backward');
      setStep((prev) => prev - 1);
      setCurrentWarning('');
    }
  };

  const currentStep = steps[step - 1];
  const isCurrentValid =
    !errors[currentStep.field] && formData[currentStep.field].trim();

  return (
    <>
      <Header />
      <div className="registrationpage">
        <div className="register">
          <img
            src={currentStep.icon}
            alt={`${currentStep.field}icon`}
            className="sideicon"
          />
          <input
            type={currentStep.field === 'password' ? 'password' : 'text'}
            className={`${currentStep.field}inp reginp ${
              errors[currentStep.field] ? 'error' : ''
            }`}
            name={`Registration${currentStep.field}`}
            id={`clientregistration${currentStep.field}`}
            placeholder={currentStep.placeholder}
            value={formData[currentStep.field]}
            onChange={handleChange}
            style={{
              transform: `translateX(${
                direction === 'forward' ? '100%' : '-100%'
              })`,
              animation: `${
                direction === 'forward' ? 'slideInLeft' : 'slideInRight'
              } 0.3s forwards`,
            }}
          />
          <img
            src="/correct.png"
            alt="correct"
            className="correcticon"
            style={{ opacity: isCurrentValid ? 1 : 0 }}
          />
          {errors[currentStep.field] && (
            <div className="error-message">{errors[currentStep.field]}</div>
          )}
        </div>
        <div className="markerandbutton">
          {step > 1 && (
            <div className="nextclientbutton" onClick={handlePrevious}>
              Previous
            </div>
          )}
          <div className="marker">
            {steps.map((s) => (
              <div
                key={s.id}
                className={`mark ${step > s.id ? 'markdone' : ''} ${
                  step === s.id ? 'markactive' : ''
                }`}
              />
            ))}
          </div>
          <button
            className="nextclientbutton"
            onClick={handleNext}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="loader"></span>
            ) : step === steps.length ? (
              'Submit'
            ) : (
              'Next'
            )}
          </button>
        </div>

        {currentWarning && (
          <div className="error-warning">{currentWarning}</div>
        )}
      </div>
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideInRight {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .reginp.error {
          border-color: #ff4444;
        }
        .error-message {
          color: #ff4444;
          font-size: 0.8rem;
          margin-top: 5px;
          position: absolute;
          bottom: -20px;
        }
        .correcticon {
          transition: opacity 0.2s;
        }
        .error-warning {
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: #ff4444;
          color: white;
          padding: 8px 16px;
          border-radius: 4px;
          animation: fadeIn 0.3s;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
        .loader {
          display: inline-block;
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: #fff;
          animation: spin 1s ease-in-out infinite;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        .nextclientbutton:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
      `}</style>
    </>
  );
}
