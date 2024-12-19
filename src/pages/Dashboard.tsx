import React, { useEffect, useState } from 'react';
import { Pie, Bar, Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomTable from './EditableTable';
import employeJsonData from '../assets/json/employee_performance.json';
import MultipleBarChart from '../components/charts/AttritionGraph';
import EmployeesTable from './EmployeesTable';
export const chartColors = [
    "#336699",
    "#99CCFF",
    "#999933",
    "#666699",
    "#CC9933",
    "#006666",
    "#3399FF",
    "#993300",
    "#CCCC99",
    "#666666",
    "#FFCC66",
    "#6699CC",
    "#663366",
    "#9999CC",
    "#CCCCCC",
    "#669999",
    "#CCCC66",
    "#CC6600",
    "#9999FF",
    "#0066CC",
    "#99CCCC",
    "#999999",
    "#FFCC00",
    "#009999",
    "#99CC33",
    "#FF9900",
    "#999966",
    "#66CCCC",
    "#339966",
    "#CCCC33",
    "#003f5c",
    "#665191",
    "#a05195",
    "#d45087",
    "#2f4b7c",
    "#f95d6a",
    "#ff7c43",
    "#ffa600",
    "#EF6F6C",
    "#465775",
    "#56E39F",
    "#59C9A5",
    "#5B6C5D",
    "#0A2342",
    "#2CA58D",
    "#84BC9C",
    "#CBA328",
    "#F46197",
    "#DBCFB0",
    "#545775"
];

// Pie Chart Data
const pieData1 = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
        {
            label: 'Dataset 1',
            data: [300, 50, 100],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
    ],
};

const pieData2 = {
    labels: ['Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: 'Dataset 2',
            data: [200, 150, 80],
            backgroundColor: ['#4BC0C0', '#9966FF', '#FF9F40'],
            hoverBackgroundColor: ['#4BC0C0', '#9966FF', '#FF9F40'],
        },
    ],
};

const donutData1 = {
    labels: ['Green', 'Purple', 'Orange'],
    datasets: [{
        label: '# of Votes',
        data: [300, 40, 3],
        backgroundColor: ['#4BC0C0', '#9966FF', '#FF9F40']
    }]
}
const donutData2 = {
    labels: ['Green', 'Purple', 'Orange'],
    datasets: [{
        label: '# of Votes',
        data: [190, 126, 30],
        backgroundColor: ['#4BC0C0', '#9966FF', '#FF9F40']
    }]
}
const donutData3 = {
    labels: ['Green', 'Purple', 'Orange'],
    datasets: [{
        label: '# of Votes',
        data: [19, 6, 3],
        backgroundColor: ['#4BC0C0', '#9966FF', '#FF9F40']
    }]
}

const options = {
    legend: {
        display: false,
        position: "right"
    },
    elements: {
        arc: {
            borderWidth: 0
        }
    }
};

const pieOptions = {
    legend: {
        display: false,
        position: "right",
        legendCallback: function (chart: any) {
            // Return the HTML string here.
            console.log(chart);
            return [
                <ul>
                    <li>z</li>
                    <li>zzzz</li>
                    <li>ppp</li>
                    <li>adasda</li>
                </ul>
            ];
        }
    },
    elements: {
        arc: {
            borderWidth: 0
        }
    }
};

const data3333 = {
    maintainAspectRatio: false,
    responsive: false,
    labels: ["a", "b", "c", "d"],
    datasets: [
        {
            data: [300, 50, 100, 50],
            backgroundColor: chartColors,
            hoverBackgroundColor: chartColors
        }
    ]
};

const pieData = {
    maintainAspectRatio: false,
    responsive: false,
    labels: ["usa", "europe", "africa"],
    datasets: [
        {
            data: [200, 150, 20, 10],
            backgroundColor: chartColors,
            hoverBackgroundColor: chartColors
        }
    ]
};

const pieData3 = {
    labels: ['Pink', 'Gray', 'Cyan'],
    datasets: [
        {
            label: 'Dataset 3',
            data: [180, 120, 90],
            backgroundColor: ['#FF9AA2', '#D3D3D3', '#66FFFF'],
            hoverBackgroundColor: ['#FF9AA2', '#D3D3D3', '#66FFFF'],
        },
    ],
};

const styles = {
    pieContainer: {
        width: "40%",
        height: "40%",
        top: "50%",
        left: "50%",
        position: "absolute",
        transform: "translate(-50%, -50%)"
    },
    relative: {
        position: "relative"
    }
};

// Bar Chart Data
const barData1 = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
        {
            label: ['Sales', 'marketing'],
            data: [65, 59, 80, 81, 56],
            backgroundColor: '#42A5F5',
            borderColor: '#1E88E5',
            borderWidth: 1,
        },
    ],
};

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

// Sample Data for the Table
const initialData = [
    { id: 1, name: 'Alice', role: 'Director', email: 'alice@example.com' },
    { id: 2, name: 'Bob', role: 'Manager', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', role: 'Employee', email: 'charlie@example.com' },
];

const Dashboard: React.FC = () => {
    const [data, setData] = useState(initialData);
    const [editIdx, setEditIdx] = useState<number | null>(null);
    const [formData, setFormData] = useState({ id: 0, name: '', role: '', email: '' });

    const [employeeData, setEmployeeData] = useState(employeJsonData);

    useEffect(() => {
        // fetch('../../assets/json/employee_performance.json')
        //     .then(response => {
        //         console.log(response)
        //         return response.json()
        //     })
        //     .then(data => setEmployeeData(data));
    }, []);

    const handleEditClick = (idx: number) => {
        setEditIdx(idx);
        setFormData(data[idx]);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSaveClick = (idx: number) => {
        const newData = [...data];
        newData[idx] = formData;
        setData(newData);
        setEditIdx(null);
    };

    return (
        <div className="container">
            {/* First Row with 3 Pie Charts */}
            <div className="row my-1">
                <div className="col-md-3">
                    <div className="card shadow-sm p-1 mb-1 bg-body-tertiary rounded">
                        <div className="card-body p-1">
                            <h3 className="card-title">Potential Attrition </h3>
                            <h3 className="card-text">100K</h3>
                            {/* <Doughnut data={donutData1}  options={options}/> */}
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card shadow-sm p-1 mb-1 bg-body-tertiary rounded">
                        <div className="card-body p-1 ">
                            <h5 className="card-title">Total Employess</h5>
                            <h3 className="card-text">50</h3>
                            {/* <Doughnut data={donutData3}  options={options}/> */}
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card shadow-sm p-1 mb-1 bg-body-tertiary rounded">
                        <div className="card-body p-1">
                            <h5 className="card-title">Project Impact </h5>
                            <h3 className="card-text">10</h3>
                            {/* <Doughnut data={donutData2}  options={options}/> */}
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card shadow-sm p-1 mb-1 bg-body-tertiary rounded">
                        <div className="card-body p-1">
                            <h5 className="card-title">Total Project </h5>
                            <h3 className="card-text">10</h3>
                            {/* <Doughnut data={donutData3}  options={options}/> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Second Row with 2 Bar Charts */}
            <div className="row my-1">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Bar Chart 1</h5>
                            {/* <Doughnut data={donutData2}  options={options}/> */}
                            {/* <Bar data={barData1} / */}
                            <MultipleBarChart />
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Bar Chart 2</h5>
                            {/* <Bar data={barData2} /> */}
                            {/* <Doughnut data={donutData2}  options={options}/> */}
                            <div style={styles.relative}>
                                <Doughnut data={data3333} options={options} />
                                <div style={styles.pieContainer}>
                                    <Pie
                                        data={data3333}
                                        options={pieOptions}

                                    />
                                </div>
                                <div id="legend" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-1">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Bar Chart 1</h5>
                            {/* <Bar data={barData1} / */}
                            <MultipleBarChart />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Bar Chart 2</h5>
                            <Bar data={barData2} />
                            {/* <Doughnut data={donutData2}  options={options}/> */}
                            {/* <div style={styles.relative}>
                                <Doughnut data={data3333} options={options} />
                                <div style={styles.pieContainer}>
                                    <Pie
                                        data={data3333}
                                        options={pieOptions}
                                        
                                    />
                                </div>
                                <div id="legend" />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Third Row with Inline Editable Table */}
            <div className="row my-1">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">User Table</h5>
                            {employeeData && <EmployeesTable jsonData={employeeData.employeJsonData} />}
                            <CustomTable />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;
