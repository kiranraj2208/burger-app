import React , {useState} from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


const Layout = props => {
 
    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const sidedrawerClosedHandler = () => {
        setShowSideDrawer(false);
    }

    const sidedrawerOpenHandler = () => {
        setShowSideDrawer(true);
    }

    return(
    <Aux>
        <Toolbar menuClicked={sidedrawerOpenHandler}/>
        <SideDrawer closed={sidedrawerClosedHandler}
        open={showSideDrawer}/> 
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
    );
}

export default Layout;