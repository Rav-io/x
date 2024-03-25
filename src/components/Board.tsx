import { Settings } from 'lucide-react';
import avatar from './avatar.jpg';

const Board = () => {
    return(
        <div className="mainBoard">
            <div className='mainBoardHeader'>
                <button className='mainBoardButton'>Dla Ciebie</button>
                <button className='mainBoardButton'>Obserwujesz</button>
                <div className='mainBoardSettings'>
                    <Settings className='mainBoardSettingsIcon'/>
                </div>
            </div>
            <div className='mainBoardInput'>
                <img src={avatar} className='mainBoardInputAvatar'/>
                <textarea className='mainBoardTextarea' placeholder='Co się dzieje?!'></textarea>
            </div>
        </div>
    );
};

export default Board;