import React, { PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import data from './LocalJsonFiles/ProfitMonthly.json';
import './chartStyle.css';

class SimpleChart extends PureComponent {
    render() {
        return (
            <ResponsiveContainer width='100%' height='200%'>
                <LineChart
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

                    <Line type='monotone'
                        dataKey='Android'
                        stroke='red'
                        activeDot={{ r: 8 }}
                    />

                    <Line type='monotone'
                        dataKey='Web'
                        stroke='green'
                        activeDot={{ r: 8 }}
                    />

                    <Line type='monotone'
                        dataKey='Kompyuter Savodxonlik'
                        stroke='blue'
                        activeDot={{ r: 8 }}
                    />
                    <br/>
                    <Legend />

                </LineChart>
            </ResponsiveContainer>
        )
    }
}


export default SimpleChart;