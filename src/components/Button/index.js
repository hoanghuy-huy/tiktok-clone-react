import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Button({
    to,
    href,
    children,
    large = false,
    primary = false,
    outline = false,
    disable = false,
    rounded = false,
    className = false,
    rightIcon,
    leftIcon,
    onClick,
    ...passProps
}) {
    let Component = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }

    // Remove evet listener when button is disable
    if (disable) {
       Object.keys(props).forEach((key) => {
            if(key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key]
            }
       })
    }

    const classes = cx('wrapper', {
        primary,
        large,
        outline,
        disable,
        rounded,
        [className]: className
    });

    return (
        <Component className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Component>
    );
}

export default Button;
