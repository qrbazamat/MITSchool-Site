import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Header from './Header';
import Navbar from './Navbar';
import Statistics from './ChartsLib/ChartsComp';

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