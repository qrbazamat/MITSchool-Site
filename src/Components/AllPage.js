import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Header from './Header';
import Navbar from './Navbar';
import Auth from './Auth';
import ErrorPage from './ErrorPage';
import Statistics from './ChartsLib/ChartsComp';
import Dashboard from './Dashboard';

function AllPage() {

    return(
        <>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Header} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contact' component={Contact} />
                    <Route exact path='/line-chart' component={Statistics} />
                    <Route exact path='/auth/sign-in'>
                        <Auth />
                    </Route>
                    <Route path='/dashboard' component={Dashboard} />
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