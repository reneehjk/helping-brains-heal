import { useEffect, useState } from 'react';

const Ticker = ({ targetCount }) => {
    const [displayedCount, setDisplayedCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 1000;
        const startTime = performance.now();

        const easeOutQuad = (t) => t * (2 - t);

        const updateCount = () => {
            const elapsed = performance.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const easedProgress = easeOutQuad(progress);
            const currentCount = Math.ceil(easedProgress * targetCount);

            setDisplayedCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(updateCount);
            }
        };

        requestAnimationFrame(updateCount);
    }, [targetCount]);

    return <>{displayedCount}</>;
};

export default Ticker;