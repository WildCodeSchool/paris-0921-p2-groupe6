import React from 'react';

import './nutrition-label.css';

function NutritionLabel() {
  return (
    <div>
      <section className="performance-facts">
        <header className="performance-facts__header">
          <h1 className="performance-facts__title">Nutrition Facts</h1>
        </header>
        <table className="performance-facts__table">
          <thead>
            <tr>
              <th colSpan="3" className="small-info">
                Total Amount
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th colSpan="2">
                <b>Calories</b>
              </th>
              <td>TOTAL CALORIE</td>
            </tr>
            <tr className="thick-row"></tr>
            <tr>
              <th colSpan="2">
                <b>Total Fat</b>
              </th>
              <td>
                <b>TOTAL FAT</b>
              </td>
            </tr>
            <tr>
              <td className="blank-cell"></td>
              <th>Saturated Fat </th>
              <td>
                <b>TOTAL CARBS</b>
              </td>
            </tr>

            <tr>
              <th colSpan="2">
                <b>Total Carbohydrate</b>
              </th>
              <td>
                <b>TOTAL CARBS</b>
              </td>
            </tr>
            <tr>
              <td className="blank-cell"></td>

              <th>Sugars</th>
              {/* <td></td> */}
              <td>TOTAL SUGAR</td>
            </tr>
            <tr className="thick-end">
              <th colSpan="2">
                <b>Protein</b>
                <td></td>
              </th>
              <td>TOTAL PROTEIN</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default NutritionLabel;
