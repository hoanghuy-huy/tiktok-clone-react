import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { IoIosArrowBack } from 'react-icons/io';

const cx = classNames.bind(styles);

function HeaderMenu({ title, onBack }) {
    return (
        <div className={cx('heading')}>
            <button className={cx('back-btn')} onClick={onBack}>
                <IoIosArrowBack />
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </div>
    );
}

export default HeaderMenu;
