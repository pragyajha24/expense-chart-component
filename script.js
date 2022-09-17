const data = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

// let canvasElement = document.getElementById("myChart");

// let myChart = new CharacterData(canvasElement,data);

window.onload = function () {
  let canvasChart = document.getElementById("myChart").getContext("2d");
  let barColors = "hsl(10,79%,65%)";
  let bar = "hsl(186,34%,60%)";

  let myChart = new Chart(canvasChart, {
    type: "bar",
    data: {
      labels: data.map((element) => element.day),
      datasets: [
        {
          data: data.map((element) => element.amount),
          backgroundColor: (color) => {
            console.log(color);
            let colors = color.dataIndex === 2 ? bar : barColors;
            return colors;
          },
        },
      ],
    },

    options: {
      tooltips: {
        displayColors: false,
        callbacks: {
          title: function (tooltipItem, data) {
            return tooltipItem.yLabel;
          },
        },
      },
      legend: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              display: false,
            },
            ticks: {
              fontColor: "#a9a4a4",
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              dsiplay: false,
            },
            ticks: {
              display: false,
            },
          },
        ],
      },
    },
  });
};
