document.addEventListener("DOMContentLoaded", _ => {
  let scrollpos = window.scrollY;
  const used = document.querySelector("#used > div")
  // const projects = document.querySelector("#projects > div")
  const about = document.querySelector("#about > div")
  const exper = document.querySelector("#exper > div")
  const awards = document.querySelector("#awards > div")
  const career = document.querySelector("#career > div")
  const nav_wrapper = document.querySelector('.nav-wrapper')
  const on_scroll = (dom) => dom.classList.add("come-in")

  /* resize로 style을 넣으면, 단말기에서 바로 켰을 때 적용 안 될 수도..?
  그냥 CSS로 조절하자! */

  // const body = document.querySelector("body")
  // const menu = document.querySelector(".nav-menu")
  // const hamburger = document.querySelector(".menu")
  // window.addEventListener("resize", function(){
  //   /* 방법1 */
  //   // body.offsetWidth <= 820? (()=>{menu.style.display="none";hamburger.style.display='block'})():(()=>{menu.style.display="block";hamburger.style.display='none'})()
  //   /* 방법2 */
  //   // nav_wrapper.offsetWidth <= 820? (menu.style.display="none",hamburger.style.display='block'):(menu.style.display="block",hamburger.style.display='none')
  //   /* 방법3 */
  //   // nav_wrapper.offsetWidth <= 820? (()=>{menu.style.display="none";hamburger.style.display='block'})():(()=>{menu.style.display="block";hamburger.style.display='none'})()
  // })
  const intro = document.querySelector(".intro>h3");
  if (nav_wrapper.offsetWidth <= 820) {
    intro.style['margin-top'] = '70px'
  }
  window.addEventListener("resize", function () {
    if (nav_wrapper.offsetWidth <= 820) {
      intro.style['margin-top'] = '70px'
    }else{
      intro.style['margin'] = 'auto'
    }
  })
  window.addEventListener('scroll', function () {
    scrollpos = window.scrollY;
    if (nav_wrapper.offsetWidth >= 820) {
      scrollpos >= nav_wrapper.offsetHeight - 40 ? (() => { nav_wrapper.classList.add("fix"); intro.style["margin-top"] = "70px" })() : (() => { nav_wrapper.classList.remove("fix"); intro.style['margin-top'] = 'auto' })();
    } else {
      scrollpos >= nav_wrapper.offsetHeight - 70 ? (() => { nav_wrapper.classList.add("fix"); })() : (() => { nav_wrapper.classList.remove("fix"); })();
    }
    if (scrollpos >= used.offsetHeight - 1600) on_scroll(used)
    // if (scrollpos >= projects.offsetHeight - 700) on_scroll(projects)
    if (scrollpos >= about.offsetHeight + 2600) on_scroll(about)
    if (scrollpos >= exper.offsetHeight + 3200) on_scroll(exper)
    if (scrollpos >= awards.offsetHeight + 3700) on_scroll(awards)
    if (scrollpos >= career.offsetHeight + 4000) on_scroll(career)
  })

  const ctx = document.getElementById('myChart');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['HTML/CSS/JS', 'Vue.js', 'Node.js', 'MongoDB/Mongoose', 'TensorFlow.js', 'Git/GitHub', 'Figma', 'AdobeIllustrator', 'AdobePhotoshop'],
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
  const $topBtn = document.querySelector(".moveTopBtn");

  // 버튼 클릭 시 맨 위로 이동
  $topBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
})