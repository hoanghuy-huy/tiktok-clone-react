import TippyHeadless from '@tippyjs/react/headless';
import { IoIosCloseCircle } from 'react-icons/io';
import { useEffect, useState, useRef } from 'react';
import { ImSpinner8 } from 'react-icons/im';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { SearchIcon } from '~/components/icon';
import { useDebounce } from '~/hooks';
import * as searchServices from '~/apiServices/searchServices';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showSearchResult, setShowSearchReSult] = useState(true);
    const [showLoadingIcon, setShowLoadingIcon] = useState(false);

    const refSearchInput = useRef();

    const valueDebounce = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!valueDebounce.trim()) {
            setSearchResult([]);
            return;
        }
        // encode kí tự đặc biệt khi người dùng nhập vào+
        const fetchApi = async () => {
            setShowLoadingIcon(true);

            const result = await searchServices.search(valueDebounce);

            setSearchResult(result);

            setShowLoadingIcon(false)
        };

        fetchApi();
    }, [valueDebounce]);

    const handleOnChangeSearchInput = (e) => {
        setSearchValue(e.target.value);
    };

    const handleOnClickClearSearchInput = () => {
        setSearchValue('');
        setSearchResult([]);
        refSearchInput.current.focus();
    };

    const handleHideSearchResult = () => {
        setShowSearchReSult(false);
    };
    return (
        <TippyHeadless
            interactive
            onClickOutside={handleHideSearchResult}
            visible={searchResult.length > 1 && showSearchResult}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <div className={cx('search-title')}>Account</div>
                        {searchResult.map((result) => {
                            return (
                                <AccountItem key={result.id} data={result} />
                            );
                        })}
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx('input-search-contain')}>
                <input
                    ref={refSearchInput}
                    placeholder="Search"
                    value={searchValue}
                    spellCheck={false}
                    onFocus={() => setShowSearchReSult(true)}
                    onChange={(e) => handleOnChangeSearchInput(e)}
                />
                {!!searchValue && !showLoadingIcon && (
                    <button
                        className={cx('clear')}
                        onClick={handleOnClickClearSearchInput}
                    >
                        <IoIosCloseCircle />
                    </button>
                )}
                <button className={cx('load')}>
                    {showLoadingIcon && (
                        <ImSpinner8 className={cx('loading')} />
                    )}
                </button>
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </TippyHeadless>
    );
}

export default Search;
