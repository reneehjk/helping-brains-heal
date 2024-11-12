import { useEffect, useState } from 'react';

const ProgressBar = ({ progress }) => {
    const [displayedProgress, setDisplayedProgress] = useState(0);

    useEffect(() => {
        let start = displayedProgress;
        const duration = 1200;
        const startTime = performance.now();

        const easeOutQuad = (t) => t * (2 - t);

        const updateProgress = () => {
            const elapsed = performance.now() - startTime;
            const progressRatio = Math.min(elapsed / duration, 1);

            const easedProgress = easeOutQuad(progressRatio);
            const currentProgress = start + easedProgress * (progress - start);

            setDisplayedProgress(currentProgress);

            if (progressRatio < 1) {
                requestAnimationFrame(updateProgress);
            }
        };

        requestAnimationFrame(updateProgress);
    }, [progress]);

    return (
        <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
            <div className="bg-black h-2 rounded-full" style={{ width: `${displayedProgress}%` }}></div>
        </div>
    );
};

export default ProgressBar;