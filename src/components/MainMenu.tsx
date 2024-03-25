import { X, Home, Search, Bell, Mail, ClipboardList, Users, UserRound, Grip, Bookmark } from 'lucide-react';

const MainMenu = () => {
    return(
        <div className="mainMenu">
            <div className="mainMenuRow">
                <X className='logo'/>
                <div className='mainMenuItem'>
                    <Home className='mainMenuItemIcon'/><button className='mainMenuButton'>Główna</button>
                </div>
                <div className='mainMenuItem'>
                    <Search  className='mainMenuItemIcon'/><button className='mainMenuButton'>Przeglądaj</button>
                </div>
                <div className='mainMenuItem'>
                    <Bell className='mainMenuItemIcon'/><button className='mainMenuButton'>Powiadomienia</button>
                </div>
                <div className='mainMenuItem'>
                    <Mail className='mainMenuItemIcon'/><button className='mainMenuButton'>Wiadomości</button>
                </div>
                <div className='mainMenuItem'>
                    <ClipboardList className='mainMenuItemIcon'/><button className='mainMenuButton'>Listy</button>
                </div>
                <div className='mainMenuItem'>
                    <Bookmark className='mainMenuItemIcon'/><button className='mainMenuButton'>Zakładki</button>
                </div>
                <div className='mainMenuItem'>
                    <Users className='mainMenuItemIcon'/><button className='mainMenuButton'>Grupy Dyskusyjne</button>
                </div>
                <div className='mainMenuItem'>
                    <X className='mainMenuItemIcon'/><button className='mainMenuButton'>Premium</button>
                </div>
                <div className='mainMenuItem'>
                    <UserRound className='mainMenuItemIcon'/><button className='mainMenuButton'>Profil</button>
                </div>
                <div className='mainMenuItem'>
                    <Grip className='mainMenuItemIcon'/><button className='mainMenuButton'>Więcej</button>
                </div>
                <div className='mainMenuCreatePost'>
                    <button className='mainMenuCreatePostButton'>Opublikuj wpis</button>
                </div>
            </div>
        </div>
    );
};

export default MainMenu;