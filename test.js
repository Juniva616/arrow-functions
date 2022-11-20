let company = {
    name: 'Apple, Inc',
    founded: 1976,
    financials: {
      incomeStatement: {
        years: [2020, 2019, 2018],
        revenue: [125, 120, 115],
        costs: [100, 100, 100],
        profit: [25, 20, 15]
      },
      balanceSheet: {
        years: [2020, 2019, 2018],
        assets: [200, 190, 180],
        liabilties: [100, 95, 90],
        equity: [100, 95, 90]
      },
      cashFlow: {
        years: [2020, 2019, 2018],
        operating: [75, 65, 55],
        investing: [22, 20, 18],
        financing: [-94, -80, -75]    
      }
    },
    competitors: ['Microsoft', 'Amazon', 'Samsung']
  }
  
  console.log(company.name);
  console.log(company.competitors);
  console.log(company.competitors[0]);
  console.log(company.financials.incomeStatement.years);
  console.log(company.financials.incomeStatement.revenue[0]);

  [0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, index, array) {
    return accumulator + currentValue;
  }, 10);
