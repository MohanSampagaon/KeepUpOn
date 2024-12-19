import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, cards } from './dummy_json';
import SlideTable from '../components/SlideTable/SlideTable';
import AttritionGraph from '../components/charts/AttritionGraph';
import DistributionChart from '../components/charts/DistributionChart';
import CriticalityChart from '../components/charts/CriticalityChart';
import Tile from '../components/tile/Tile';
import { useLocation } from 'react-router-dom';

const barData2 = {
    labels: ['June', 'July', 'August', 'September', 'October'],
    datasets: [
        {
            label: 'Revenue',
            data: [28, 48, 40, 19, 86],
            backgroundColor: '#66BB6A',
            borderColor: '#43A047',
            borderWidth: 1,
        },
    ],
};

const Overview: React.FC = () => {
    const location = useLocation();
    const {person} = location.state;
    useEffect(() => {
        // fetch('../../assets/json/employee_performance.json')
        //     .then(response => {
        //         console.log(response)
        //         return response.json()
        //     })
        //     .then(data => setEmployeeData(data));
    }, []);


    return (
        <div className="container-fluid px-4  py-2 m-0">
            <div className="row my-1">
                {cards && cards.map((card: Card) => {
                 return (<div className="col">
                    <Tile tile={card}/>
                </div>)
                })}
            </div>

            {/* Second Row with 2 Bar Charts */}
            <div className="row my-4 mx-0 rounded bg-white p-2">
                <div className="col-md-6 d-flex justify-content-center flex-column align-items-center px-4">
                    <h5 className="card-title mb-2">Attrition </h5>
                    <AttritionGraph />
                    {/* <ClubbedBarChart data={ClubbedData} width={800} height={400} /> */}
                </div>
                <div className="col-md-6 d-flex justify-content-center flex-column align-items-center px-4">
                    <h5 className="card-title mb-2">Distribution reason</h5>
                    <div>
                        <DistributionChart/>
                    </div>
                </div>
            </div>
            <div className="row my-4 mx-0 rounded bg-white p-2">
                <div className="col-md-6 d-flex justify-content-center flex-column align-items-center px-4">
                    <h5 className="card-title mb-2">Criticality and Performance</h5>
                    <CriticalityChart />
                </div>
                <div className="col-md-6 d-flex justify-content-center flex-column align-items-center px-4">
                    <h5 className="card-title mb-2">Project Impact</h5>
                    <Bar data={barData2} />
                </div>
            </div>
            <SlideTable />

            {/* Third Row with Inline Editable Table */}
            {/* <div className="row my-1">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">User Table</h5>
                            {employeeData && <EmployeesTable jsonData={employeeData.employeJsonData} />}
                            <CustomTable />
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Overview;
