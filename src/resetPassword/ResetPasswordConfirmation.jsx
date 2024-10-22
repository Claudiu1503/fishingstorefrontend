import { useNavigate } from 'react-router-dom';

const ResetPasswordConfirmation = () => {
    const navigate = useNavigate();

    setTimeout(() => {
        navigate('/reset/confirm-new-password'); // Redirect after 2 seconds
    }, 2000);

    return (
        <div>
            <h1>Reset Password Confirmation</h1>
            <p>Check your email for the reset link.</p>
        </div>
    );
};

export default ResetPasswordConfirmation;