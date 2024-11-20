import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// pembuatan diagram dengan menggunakan chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

// pengambilan data pada database
interface Beasiswa {
    beasiswa: string;
}

interface BeasiswaChartProps {
    data: Beasiswa[];
}

const BeasiswaChart: React.FC<BeasiswaChartProps> = ({ data }) => {
    // pengambilan data untuk chart
    const beasiswaCounts = data.reduce((acc: { [key: string]: number }, entry: Beasiswa) => {
        acc[entry.beasiswa] = (acc[entry.beasiswa] || 0) + 1;
        return acc;
    }, {});

    // fungsi untuk mengolah data dan dibaut menjadi diagram
    const chartData = {
        labels: Object.keys(beasiswaCounts),
        datasets: [
            {
                label: 'Mahasiswa yang terdaftar',
                data: Object.values(beasiswaCounts),
                backgroundColor: [
                    '#003262',
                    '#D8BFD8',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="chart-container">
            <Pie data={chartData} />
        </div>
    );
};

export default BeasiswaChart;
