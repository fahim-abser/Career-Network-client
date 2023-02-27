import React from 'react'
import { useState } from 'react'
import ReactApexChart from 'react-apexcharts';


function Performence() {
    const series = [76, 67, 61, 90]
    const options = {
          chart: {
            height: 340,
            type: 'radialBar',
          },
          plotOptions: {
            radialBar: {
              offsetY:0,
              startAngle: 0,
              endAngle:270,
              hollow: {
                margin: 5,
                size: '30%',
                background: 'transparent',
                image: undefined,
              },
              dataLabels: {
                name: {
                  show: false,
                },
                value: {
                  show: false,
                }
              }
            }
          },
          colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
          labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
          legend: {
            show: true,
            fontSize: '14px',
            position: 'left',
            offsetX: 110,
            offsetY: 7,
            labels: {
              useSeriesColors: true,
            },
            markers: {
              size: 0
            },
            formatter: function(seriesName, opts) {
              return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
            },
            itemMargin: {
              vertical: 3
            }
          },
          responsive: [{
            breakpoint: 480,
            options: {
              legend: {
                  show: false
              }
            }
          }]
        }
  return (
    <div id="chert" className='w-full'>
      <ReactApexChart  series={series} options={options} type="radialBar" height={340}></ReactApexChart>
    </div>
  )
}

export default Performence