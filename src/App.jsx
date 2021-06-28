import './App.css';
import React from 'react';

import ChartJs from './ChartJs';
import HighchartsJs from './Highcharts';
import Amcharts from './Amcharts';

const App = () => {
  return (
    <section>
      <article>
        <h4>Comparison 👀</h4>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>DX (dev experience)👩‍💻</th>
              <th>Licenses</th>
              <th>💸</th>
              <th>Bundle size🏋️‍♀️</th>
              <th>Popularity🌟</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
              <span className="chartjs">
                <img src="https://www.chartjs.org/docs/latest/favicon.ico" width="30" alt="ChartJs" title="Chart.js" />
                Chart.js
              </span>
              </td>
              <td>😃</td>
              <td><img src="https://www.chartjs.org/img/open-source.svg" alt="Open Source" width="20" /></td>
              <td><b>€0</b></td>
              <td><small>61.5kB MIN + GZIP</small></td>
              <td><small>54,067</small></td>
            </tr>
            <tr>
              <td>
              <span className="highcharts">
                <img src="https://wp-assets.highcharts.com/svg/highcharts-logo-padded.svg" alt="Highcharts" width="100" title="Highcharts" />
              </span>
              </td>
              <td>😐</td>
              <td>
                <small>
                  Free, Single website,	OEM
                </small>
              </td>
              <td><small>from <b>$535.00</b></small></td>
              <td><small>94.3kB MIN + GZIP</small></td>
              <td><small>178</small></td>
            </tr>
            <tr>
              <td>
              <span>
                <img src="https://www.amcharts.com/docs/v4/wp-content/themes/amdocs/img/logo.png" alt="Amcharts" width="90" title="Amcharts" />
              </span>
              </td>
              <td>🥴</td>
              <td>
                <small>
                  Free, Single website,	OEM
                </small>
              </td>
              <td><small>from <b>€0</b> to</small> 💸</td>
              <td><small>timeout</small></td>
              <td><small>968</small></td>
            </tr>
          </tbody>
        </table>
        <a className="details" href="https://www.npmtrends.com/chart.js-vs-highcharts-vs-@amcharts/amcharts4" target="_blank" rel="noreferrer" >
          More details 🌐
        </a>
      </article>

      <article>
        <h4 className="chartjs">
          <img src="https://www.chartjs.org/docs/latest/favicon.ico" width="30" alt="ChartJs" title="Chart.js" />
          Chart.js
        </h4>
        <div className="chart">
          <ChartJs />
        </div>
      </article>

      <article>
        <h4 className="highcharts">
          <img src="https://wp-assets.highcharts.com/svg/highcharts-logo-padded.svg" alt="Highcharts" width="100" title="Highcharts" />
        </h4>
        <div className="chart">
          <HighchartsJs />
        </div>
      </article>

      <article>
        <h4>
          <img src="https://www.amcharts.com/docs/v4/wp-content/themes/amdocs/img/logo.png" alt="Amcharts" width="90" title="Amcharts" />
        </h4>
        <div className="chart">
          <Amcharts />
        </div>
      </article>
    </section>
  );
}

export default App;
