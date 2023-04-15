import React, { useEffect } from 'react';
import * as echarts from 'echarts';

export const AboutSkills = () => {
    useEffect(() => {
        let myChart = echarts.init(document.querySelector(".chart"));
        const option = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            series: [
                {
                    name: 'Le langage',
                    type: 'pie',
                    radius: [20, 140],
                    center: ['50%', '50%'],
                    roseType: 'area',
                    itemStyle: {
                        borderRadius: 5
                    },
                    data: [
                        { value: 30, name: 'Javascript' },
                        { value: 20, name: 'Python' },
                        { value: 24, name: 'Php' },
                        { value: 18, name: 'Java' },
                        { value: 28, name: 'Node' },
                        { value: 26, name: 'React' },
                        { value: 22, name: 'TailWind' }
                    ]
                }
            ]
        }
        myChart.setOption(option);
    })

    return (
        <div className="about-description-skills">
            <span className="about-desc-start"></span>My Skills :
            <div className='chart' style={{ width: "600px", height: "400px" }}></div>
        </div>
    )
}