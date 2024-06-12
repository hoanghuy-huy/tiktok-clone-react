import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Wrapper from '~/components/Popper/Wrapper';
import MenuItems from './MenuItems';
import { useState } from 'react';
import HeaderMenu from './HeaderMenu';

const cx = classNames.bind(styles);
const DefaultFn = () => {};
function Menu({ children, items = [], onChange = DefaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const renderItems = () => {
        return current.data.map((item, index) => {
            return (
                <MenuItems
                    key={index}
                    data={item}
                    onClick={() => {
                        const isParent = !!item.children;
                        if (isParent) {
                            return setHistory((previousState) => [
                                ...previousState,
                                item.children,
                            ]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    return (
        <Tippy
            interactive
            delay={[0, 700]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu')} tabIndex="-1" {...attrs}>
                    <Wrapper>
                        <div className={cx('menu-item')}>
                            {history.length > 1 && (
                                <HeaderMenu
                                    onBack={() => {
                                        setHistory(() => {
                                            return history.slice(
                                                0,
                                                history.length - 1,
                                            );
                                        });
                                    }}
                                    title={'Language'}
                                />
                            )}
                            {renderItems()}
                        </div>
                    </Wrapper>
                </div>
            )}
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
        >
            <span>{children}</span>
        </Tippy>
    );
}

export default Menu;
