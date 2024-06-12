import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import classNames from 'classnames';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, fallBack = images.noImage,...props }, ref) => {
    const [_fallBack, setFallback] = useState('');

    const handleOnError = () => {
        setFallback(fallBack);
    };

    return (
        <img
            ref={ref}
            className={classNames(styles.wrapper, className)}
            src={_fallBack || src}
            {...props}
            alt={alt}
            onError={handleOnError}
        />
    );
});

export default Image;
