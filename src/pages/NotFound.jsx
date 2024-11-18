import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const NotFound = () => {
    return (
        <div className='h-screen text-center flex flex-col justify-center select-none'>
            <Helmet>
                <title>404 - Helping Brains Heal</title>
            </Helmet>
            <h1 className='font-satoshiBold'>404 - Page Not Found</h1>
            <p className='font-erodeRegular mt-2'>The page you’re looking for doesn’t exist.</p>
            <Link to="/" className='font-erodeRegular mt-5'>Go back to Home</Link>
        </div>
    );
};

export default NotFound;
