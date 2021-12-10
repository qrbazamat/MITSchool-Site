import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Header from './Pages/Header';
import Navbar from './Pages/Navbar';
import Auth from './Auth';
import ToTopBtn from './ToTopBtn';
import ErrorPage from './Pages/ErrorPage';
import Statistics from './ChartsLib/ChartsComp';
import Dashboard from './Pages/Dashboard';
import MyApps from './AppsMenu/MyAppsContainer'

function AllPage() {

    return(
        <>
            <BrowserRouter>
                <Navbar />
                <ToTopBtn />
                <Switch>
                    <Route exact path='/' component={Header} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contact' component={Contact} />
                    <Route exact path='/line-chart'>
                        <Statistics isLinear={!0} />
                    </Route>
                    <Route exact path='/area-chart'>
                        <Statistics isLinear={!1} />
                    </Route>
                    <Route exact path='/auth/sign-in'>
                        <Auth />
                    </Route>
                    <Route exact path='/auth/sign-up'>
                        <Auth />
                    </Route>
                    <Route path='/dashboard' component={Dashboard} />
                    <Route path='/apps' component={MyApps} />
                    <Route path='*' component={ErrorPage} />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default AllPage;

/*
Raqamli texnologiyalar o'quv markazi - Mingbuloq tumani filiali

Call-markaz: +998 99 046-11-99

Mas'ul xodim: Mamutaliyev Doston

Manzil: Mingbuloq tumani, Jomashuy shaharchasi, Ozodlik ko'chasi, 102 uy

Telefon: +998 99 396-68-67

E-mail: namangan@it-park.uz

Sayt: www.itcenter.uz



var block = document.getElementById('block');
var domEventsGroup = ymaps.domEvent.manager.group(block);
domEventsGroup.add('click', function (event) {
    console.log(event.get('type')); // click
    // Deleting all event listeners.
    domEventsGroup.removeAll();
});
*/