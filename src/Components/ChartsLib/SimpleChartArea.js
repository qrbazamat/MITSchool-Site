import React, { PureComponent } from 'react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import data from './LocalJsonFiles/ProfitMonthly.json';
import './chartStyle.css';

class SimpleChartArea extends PureComponent {
    render() {
        return (
            <ResponsiveContainer width='100%' height='100%'>
                <AreaChart
                    width={800}
                    height={400}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        bottom: 5,
                        left: 20
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />

                    <Area type='monotone'
                        dataKey='Android'
                        stroke='red'
                        fill='red'
                        activeDot={{ r: 8 }}
                    />

                    <Area type='monotone'
                        dataKey='Web'
                        stroke='green'
                        fill='green'
                        activeDot={{ r: 8 }}
                    />

                    <Area type='monotone'
                        dataKey='Kompyuter Savodxonlik'
                        stroke='blue'
                        fill='blue'
                        activeDot={{ r: 8 }}
                    />
                    <br/>
                    <Legend />

                </AreaChart>
            </ResponsiveContainer>
        )
    }
}


export default SimpleChartArea;