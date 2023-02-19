document.addEventListener("DOMContentLoaded", _ => {
  let scrollpos = window.scrollY;
  const used = document.querySelector("#used > div")
  // const projects = document.querySelector("#projects > div")
  const about = document.querySelector("#about > div")
  const exper = document.querySelector("#exper > div")
  const awards = document.querySelector("#awards > div")
  const career = document.querySelector("#career > div")
  const on_scroll = (dom) => dom.classList.add("come-in")
  window.addEventListener('scroll', function () {
    scrollpos = window.scrollY;
    if (scrollpos >= used.offsetHeight - 700) on_scroll(used)
    // if (scrollpos >= projects.offsetHeight - 700) on_scroll(projects)
    if (scrollpos >= about.offsetHeight + 1400) on_scroll(about)
    if (scrollpos >= exper.offsetHeight + 1900) on_scroll(exper)
    if (scrollpos >= awards.offsetHeight + 2500) on_scroll(awards)
    if (scrollpos >= career.offsetHeight + 2800) on_scroll(career)
  })

  const ctx = document.getElementById('myChart');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['HTML/CSS/JS', 'Vue.js', 'Node.js', 'MongoDB/Mongoose', 'TensorFlow.js', 'Git/GitHub', 'Figma','AdobeIllustrator','AdobePhotoshop'],
      datasets: [{
        label: '보유 기술력 활용 정도',
        data: [3, 3, 2, 3, 2, 2, 2, 2, 2],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)',
          'rgba(100, 100, 100, 0.2)',
          'rgba(172, 100, 100, 0.2)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      indexAxis: 'y',
      maxBarLength: 4,
      scales: {
        x: {
          beginAtZero: true,
          max: 4,
          ticks: {
            stepSize: 1
          }
        }
      }
    }
  });
})