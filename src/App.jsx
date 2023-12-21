import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import axios from "axios";
import {LineChart} from "@mui/x-charts";
import {GrossNetMonthlyForYearlyIncome, SimpleText} from "./charts/GrossNetMonthlyForYearlyIncome.jsx";

const getSalary = async () => {
try {
    const gehalt = await  axios({
        method: "post",
        headers: {
            "accept": "application/json, text/plain, */*",
            "accept-language": "de,en-GB;q=0.9,en;q=0.8,en-US;q=0.7",
            "content-type": "application/json",
            "sec-ch-ua": "\"Chromium\";v=\"116\", \"Not)A;Brand\";v=\"24\", \"Microsoft Edge\";v=\"116\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site",
            "Referer": "https://www.sparkasse.de/",
            "Referrer-Policy": "origin"
        },
        // url: 'https://jsonplaceholder.typicode.com/posts',
        url: 'https://calculations.sparkasse.de/salary',
        data: {
            "childAllowance": 0,
            "churchTax": false,
            "employerCapitalFormingBenefit": null,
            "occupationalPension": null,
            "province": "BE",
            "taxClass": 1,
            "monthlySalary": 5000,
            "healthInsuranceContributionRate": 14.6,
            "monthlyPrivateInsurance": null
        }})

    return gehalt
} catch(err) {
    console.log("err");
    console.log(err);
}


    // await axios.post('https://jsonplaceholder.typicode.com/posts')
  //
  console.log("gehalt");
  console.log(gehalt);
  //
  return gehalt
}



const getSomething = async () => {
    return axios.post('https://calculations.sparkasse.de/salary', {
        title: "yooTitle",
        body: "broBody",
        userId: 1
    }, hea)
}

const getNodeFetch = async () => {

    return fetch("https://calculations.sparkasse.de/salary", {
        "headers": {
            "accept": "application/json, text/plain, */*",
            "accept-language": "de,en-GB;q=0.9,en;q=0.8,en-US;q=0.7",
            "content-type": "application/json",
            "sec-ch-ua": "\"Chromium\";v=\"116\", \"Not)A;Brand\";v=\"24\", \"Microsoft Edge\";v=\"116\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site",
            "Referer": "https://www.sparkasse.de/",
            "Referrer-Policy": "origin"
        },
        "body": "{\"childAllowance\":0,\"churchTax\":false,\"employerCapitalFormingBenefit\":null,\"occupationalPension\":null,\"province\":\"BE\",\"taxClass\":1,\"monthlySalary\":5000,\"healthInsuranceContributionRate\":14.6,\"monthlyPrivateInsurance\":null}",
        "method": "POST"
    });
}

function App() {
  const queryClient = new QueryClient()



    return (
        <QueryClientProvider client={queryClient}>
          <View/>
        </QueryClientProvider>


  )
}

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





function View() {
  const [count, setCount] = useState(0)

  // const gehaltMutation = usePostCalculateSalary({bruttoYearly: 60000})
  return (
      <>
          <div>
              <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                  <img src={viteLogo} className="logo" alt="Vite logo"/>
              </a>
              <a href="https://react.dev" target="_blank" rel="noreferrer">
                  <img src={reactLogo} className="logo react" alt="React logo"/>
              </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
              <button onClick={() => getSalary()}>
                  count is {count}
              </button>
              <p>
                  Edit <code>src/App.jsx</code> and save to test HMR
              </p>
          </div>


          <p className="read-the-docs">
              Netto vom Brutto --- Monat
          </p>

          <LineChart
              width={1000}
              height={500}
              series={[
                  // { data: bruttoMonthly, label: 'Brutto' },
                  {data: nettoMonthly, label: 'Netto'},
              ]}
              xAxis={[{scaleType: 'point', data: bruttoMonthly}]}
          />
            <GrossNetMonthlyForYearlyIncome/>
      </>

  )
}

export default App
