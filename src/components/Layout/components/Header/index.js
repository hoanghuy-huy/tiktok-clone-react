import classNames from 'classnames/bind';
import { BsPlusLg } from 'react-icons/bs';
import { IoMdMore } from 'react-icons/io';
import { GrLanguage } from 'react-icons/gr';
import { CiCircleQuestion } from 'react-icons/ci';
import { FaRegKeyboard } from 'react-icons/fa';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { RiUserLine } from 'react-icons/ri';
import { MdFavoriteBorder } from 'react-icons/md';
import { BsCoin } from 'react-icons/bs';
import { IoVideocam } from 'react-icons/io5';
import { IoIosSettings } from 'react-icons/io';
import { IoIosLogOut } from 'react-icons/io';

import styles from './Header.module.scss';
import images from '~/assets/images';
import routesConfig from '~/config/routes'
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon } from '~/components/icon';
import Image from '~/components/Image';
import Search from '../Search';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        title: 'English',
        icon: <GrLanguage />,
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        title: 'Feedback and help',
        icon: <CiCircleQuestion />,
        to: '/feedbback',
    },
    {
        title: 'Keyboard shortcuts',
        icon: <FaRegKeyboard />,
    },
];

const USER_MENU = [
    {
        title: 'View profile',
        icon: <RiUserLine />,
    },
    {
        title: 'Favorites',
        icon: <MdFavoriteBorder />,
    },
    {
        title: 'Get Coins',
        icon: <BsCoin />,
    },
    {
        title: 'LIVE Studio',
        icon: <IoVideocam />,
    },
    {
        title: 'Settings',
        icon: <IoIosSettings />,
    },
    ...MENU_ITEMS,
    {
        title: 'Log Out',
        icon: <IoIosLogOut />,
        separate: true,
    },
];
function Header() {
    const handleOnChangeMenuItem = (MenuItems) => {
        // console.log(MenuItems)
    };

    const user_login = true;
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <div className={cx('logo')}>
                    <Link to={routesConfig.home}>
                        <img src={images.logo} alt="logo tiktok" />
                    </Link>
                </div>
                {/* Input search */}
                <Search />

                {/* Action */}
                <div className={cx('actions')}>
                    <Button leftIcon={<BsPlusLg />} children={'Upload'} />
                    {user_login ? (
                        <>
                            <Tippy
                                offset={[8, 10]}
                                delay={[0, 200]}
                                content="Messages"
                                placement="bottom"
                            >
                                <button className={cx('actions-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>

                            <button className={cx('actions-btn')}>
                                <InboxIcon height="32px" width="32px" />
                                <span className={cx('badge')}>12</span>
                            </button>

                            <Menu
                                items={user_login ? USER_MENU : MENU_ITEMS}
                                onChange={handleOnChangeMenuItem}
                            >
                                <button className={cx('more-btn')}>
                                    <Image
                                        className={cx('avata-user')}
                                        src="https://p16.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/46b933a325f61c69cdc6e329df40f5d4.jpeg?lk3s=a5d48078&nonce=51229&refresh_token=c15f3099938b341ecaf9ae24e458a3b5&x-expires=1718247600&x-signature=iSno92D3viQXvgZYHxNmWlIxbMA%3D&shp=a5d48078&shcp=81f88b70"
                                        alt="avata user"
                                        fallBack="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/46b933a325f61c69cdc6e329df40f5d4.jpeg?lk3s=a5d48078&nonce=51229&refresh_token=c15f3099938b341ecaf9ae24e458a3b5&x-expires=1718247600&x-signature=iSno92D3viQXvgZYHxNmWlIxbMA%3D&shp=a5d48078&shcp=81f88b70"
                                    />
                                </button>
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Button primary children={'Login'} />
                            <div className={cx('more-menu')}>
                                <Menu
                                    items={MENU_ITEMS}
                                    onChange={handleOnChangeMenuItem}
                                >
                                    <button className={cx('more-btn')}>
                                        <IoMdMore />
                                    </button>
                                </Menu>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
