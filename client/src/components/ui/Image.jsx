import React from 'react';

/**
 * Reusable Image component that renders an image with lazy loading.
 * @param {Object} props - The component props
 * @returns {JSX.Element} - Rendered image component
 */
function Image({ alt="", src="", width="", height="", className="" }) {
    return (
        <img 
            alt={alt}
            src={src}
            width={width}
            height={height}
            className={`${className}`}
            loading='lazy'
        />
    );
}

export default Image;