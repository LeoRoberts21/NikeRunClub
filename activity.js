

homeBtn.addEventListener("mouseleave", activityHover);
plansBtn.addEventListener("mouseleave", activityHover);
clubBtn.addEventListener("mouseleave", activityHover);
activityBtn.addEventListener("mouseleave", activityHover);


var xValues = [1,5,10,15,25,30,];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [3,6,10,10,2,12],
      borderColor: "yellowgreen",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});
