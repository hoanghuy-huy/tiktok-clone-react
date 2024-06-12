import classNames from 'classnames/bind';
import styles from './Menu.module.scss'
import Button from "~/components/Button";

const cx = classNames.bind(styles)

function MenuItems({ data, onClick }) {
    const classes = cx('item', {
        separate: data.separate,
    })
    return <div >
        <Button className={classes} to={data.to} children={data.title} leftIcon={data.icon} onClick={onClick}/>
    </div>
}

export default MenuItems;
