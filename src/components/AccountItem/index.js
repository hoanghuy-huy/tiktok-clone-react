import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './AccountItem.module.scss';
import Image from '../Image';
import images from '~/assets/images';
import { CheckIcon } from '../icon';


const cx = classNames.bind(styles);



function AccountItem({data}) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <div className={cx('account-item')}>
                <Image
                    className={cx('avatar')}
                    src={data.avatar}
                    alt={images.noImage}
                ></Image>
                <div className={cx('account')}>
                    <div className={cx('username')}>{data.nickname} {!! data.tick && <CheckIcon />}</div>
                    <div className={cx('name')}> {data.full_name} </div>
                    
                </div>
            </div>
        </Link>
    );
}

export default AccountItem;
