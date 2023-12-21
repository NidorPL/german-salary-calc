import React, { useState } from 'react'
import {LineChart} from "@mui/x-charts";

export const GrossNetMonthlyForYearlyIncome = () => {

    const bruttoMonthly = [1000, 2000, 3000, 4000, 5000, 6000, 7000];
    const nettoMonthly = [867.52, 1469.34, 2049.75, 2599.59, 3119.61, 3666.78, 4166.87];
    const xLabels = [
        'Page A',
        'Page B',
        'Page C',
        'Page D',
        'Page E',
        'Page F',
        'Page G',
    ];


    const dataset = [{
        nettoMonthly: 746.1,
        bruttoMonthly: 833.33,
        bruttoYearly: 10000
    }, {
        nettoMonthly: 1292.27,
        bruttoMonthly: 1666.67,
        bruttoYearly: 20000
    },
        {
            nettoMonthly: 1763.34,
            bruttoMonthly: 2500,
            bruttoYearly: 30000
        },
        {
            nettoMonthly: 2236.5,
            bruttoMonthly: 3333.33,
            bruttoYearly: 40000
        },
        {
            nettoMonthly: 2688.25,
            bruttoMonthly: 4166.67,
            bruttoYearly: 50000
        },
        {
            nettoMonthly: 3119.61,
            bruttoMonthly: 5000,
            bruttoYearly: 60000
        },
        {
            nettoMonthly: 3578.28,
            bruttoMonthly: 5833.33,
            bruttoYearly: 70000
        },
        {
            nettoMonthly: 4010.98,
            bruttoMonthly: 6666.67,
            bruttoYearly: 80000
        },
        {
            nettoMonthly: 4413.23,
            bruttoMonthly: 7500,
            bruttoYearly: 90000
        },
        {
            nettoMonthly: 4854.91,
            bruttoMonthly: 8333.33,
            bruttoYearly: 100000
        },
    ]


    console.log("here");

    return (
        <>
            <p className="read-the-docs">
                Netto und Brutto monatl.   ---- Auf Jahresgehalt
            </p>

            <LineChart
                width={1000}
                height={500}
                dataset={dataset}
                series={[
                    // { data: bruttoMonthly, label: 'Brutto' },
                    // {data: nettoMonthly, label: 'Netto'},
                    {dataKey: "nettoMonthly", color: "lightblue", label: "Netto Monat €"},
                    {dataKey: "bruttoMonthly", color: "orange", label: "Brutto Monat €"}
                ]}
                xAxis={[{dataKey: "bruttoYearly", label: "Jährlich Brutto"}]}
            />
        </>
    )

}

export const SimpleText = () => {
    return <p>Hello</p>
}