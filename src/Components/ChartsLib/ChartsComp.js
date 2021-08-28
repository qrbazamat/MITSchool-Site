import React, { PureComponent } from 'react';
import SimpleChart from './SimpleChart';
import SimpleChartAre from './SimpleChartArea';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

class ChartsComp extends PureComponent {
    constructor() {
        super()
        this.state = {
            isLineChartActive: true
        }
    }

    clickHandlerActive = bool => {
        this.setState({
            isLineChartActive: bool
        })
    }

    render() {
        const active = [];
        let k = this.state.isLineChartActive ? 0 : 1;
        active[k] = {
            borderBottom: '2px solid red',
        }

        const bgStyle = {background: k? '#1a2b3c':'#a1a1a1'};

        return (
            <div className='chart-container' style={bgStyle}>
                <BrowserRouter>
                    <div className='chart-nav'>
                        <ul>
                            <li>
                                <Link
                                    to='/line-chart'
                                    style={active[0]}
                                    onClick={() => this.clickHandlerActive(!0)}
                                >
                                    Line Chart
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='area-chart'
                                    style={active[1]}
                                    onClick={() => this.clickHandlerActive(!1)}
                                >
                                    Area Chart
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <Switch>
                        <Route exact path='/line-chart' component={SimpleChart} />
                        <Route exact path='/area-chart' component={SimpleChartAre} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default ChartsComp;