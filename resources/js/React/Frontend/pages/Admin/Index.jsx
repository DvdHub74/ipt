import { padEnd } from 'lodash';
import React, { useEffect, useRef } from 'react';

const Index = () => {
  const chart1Ref = useRef(null);
  const chart2Ref = useRef(null);
  const chart3Ref = useRef(null);
  const chart4Ref = useRef(null);

  useEffect(() => {
    // Chart 1
    new Chart(chart1Ref.current, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      }
    });

    // Chart 2
    new Chart(chart2Ref.current, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      }
    });

    // Chart 3
    new Chart(chart3Ref.current, {
      type: 'pie',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: 'My First Dataset',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132,0.5)',
            'rgba(54, 162, 235,0.5)',
            'rgba(255, 206, 86,0.5)',
            'rgba(75, 192, 192,0.5)',
            'rgba(153, 102, 255,0.5)',
            'rgba(255, 159, 64,0.5)'
          ],
          borderColor: [
            'rgba(255, 99, 132,0.8)',
            'rgba(54, 162, 235,0.8)',
            'rgba(255, 206, 86,0.8)',
            'rgba(75, 192, 192,0.8)',
            'rgba(153, 102, 255,0.8)',
            'rgba(255, 159, 64,0.8)'
          ],
          borderWidth: 3

        }]
      }
    });
    new Chart(chart4Ref.current, {
      type: 'polarArea',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: 'My First Dataset',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132,0.5)',
            'rgba(54, 162, 235,0.5)',
            'rgba(255, 206, 86,0.5)',
            'rgba(75, 192, 192,0.5)',
            'rgba(153, 102, 255,0.5)',
            'rgba(255, 159, 64,0.5)'
          ],
          borderColor: [
            'rgba(255, 99, 132,0.8)',
            'rgba(54, 162, 235,0.8)',
            'rgba(255, 206, 86,0.8)',
            'rgba(75, 192, 192,0.8)',
            'rgba(153, 102, 255,0.8)',
            'rgba(255, 159, 64,0.8)'
          ],
          borderWidth: 3

        }]
      }
    });
}, []);

  return (
    <div className="container-fluid">
    <h1 className="mb-4 text-center">Dashboard</h1>
    <section className="row d-flex ">
      <div className="col-md-4  p-5">
        <div className="card mb-3">
          <div className="card-body">
            <canvas ref={chart1Ref}></canvas>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-body">
            <canvas ref={chart2Ref}></canvas>
          </div>
        </div>
      </div>

      <div className="col-md-4  p-5">
        <div className="card mb-3 p-5">
          <div className="card-body ">
            <canvas ref={chart3Ref}></canvas>
          </div>
        </div>
      </div>
      <div className="col-md-4 p-5">
        <div className="card mb-3 p-5">
          <div className="card-body">
            <canvas ref={chart4Ref}></canvas>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
};

export default Index;
