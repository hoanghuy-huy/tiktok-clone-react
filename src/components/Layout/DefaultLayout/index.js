import Header from './Header';
import Sliderbar from './Sliderbar';

function DefaultLayout({ children}) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sliderbar />
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
