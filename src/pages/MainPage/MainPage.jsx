import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavigationComponent from '../../components/navigationComponent/NavigationComponent'
import s from './MainPage.module.scss'


function MainPage(){
    return(
        <div className={s.main}>
            <NavigationComponent/>
        </div>
    )
}

export default MainPage