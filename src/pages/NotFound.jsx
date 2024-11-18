import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='h-screen text-center flex flex-col justify-center select-none'>
            <h1 className='font-satoshiBold'>404 - Page Not Found</h1>
            <p className='font-erodeRegular mt-2'>Sorry, the page you’re looking for doesn’t exist.</p>
            <Link to="/" className='font-erodeRegular mt-5'>Go back to Home</Link>
        </div>
    );
};

export default NotFound;
