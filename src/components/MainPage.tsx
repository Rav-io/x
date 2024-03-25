import Board from './Board';
import MainMenu from './MainMenu';

const MainPage = () => {

    return(
        <div className="main">
            <MainMenu />
            <Board />
            <div className="mainHints"></div>
        </div>
    );
};

export default MainPage;