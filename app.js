

function main() {
  const loader = document.querySelector('.loader_wrapper');

  $(document).ready(function () {

    const greet = 'Assalomu alykum'
    const who = 'Aziz brodar'
    const day = '27';
    const month = 'APREL';
    const year = '25'
    const about = "Kechasi bulib o'tadigan nikoh ohshomiga taklif etamiz"
    const name = 'Sardorbek'
    const and = "&"
    const name_2 = "Aisha"

    setTimeout(() => {
      loader.style.transition = "all 1s ease"
      loader.style.opacity = 0;

      setTimeout(() => loader.style.display = 'none', 1000)

    }, 1300);


    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {

          setTimeout(() => {
            $('.bg-wrapper').addClass('bg-center');
          }, 1500);



          const index = Array.from(sections).indexOf(entry.target);

          if (index === 0) {
            // 1-section animatsiyalari


            setTimeout(() => {

              setTimeout(() => {
                $('.greet').text(greet).addClass('show')
              }, 300);

              setTimeout(() => {
                $('.who').text(who).addClass('show')
              }, 500);


              setTimeout(() => {
                $('#line-1-1').addClass('line-show')
              }, 700)

              setTimeout(() => {
                $('.day').text(day).addClass('show')
              }, 900);

              setTimeout(() => {
                $('.month').text(month).addClass('show')
              }, 1300)

              setTimeout(() => {
                $('.year').text(year).addClass('show')
              }, 1700)

              setTimeout(() => {
                $('#line-1-2').addClass('line-show')
              }, 2000)

              setTimeout(() => {
                $('.about').text(about).addClass('show')
              }, 2500);

              setTimeout(() => {
                $('#down-1').addClass('show')
              }, 3500);



            }, 2000)



          }


          if (index === 1) {

            setTimeout(() => {
              $('#line-2-1').addClass('line-show');
            }, 400);


            setTimeout(() => {
              $('.name-1').text(name).addClass('show');
            }, 700);

            setTimeout(() => {
              $('.and').text(and).addClass('show');
            }, 900);

            setTimeout(() => {
              $('.name-2').text(name_2).addClass('show');
            }, 1200);

            setTimeout(() => {
              $('#line-2-2').addClass('line-show');
            }, 1400);


            setTimeout(() => {
              $('.some-txt').addClass('show');
            }, 2200);

            setTimeout(() => {
              $('#down-2').addClass('show')
            }, 3000);


          }
          if (index === 2){

            setTimeout(() => {
              $('.couts-title').addClass('show');
            }, 400);
            
            setTimeout(() => {
              $('.days').addClass('show');
            }, 700);

            setTimeout(() => {
              $('.hours').addClass('show');
            }, 900);

            setTimeout(() => {
              $('.minutes').addClass('show');
            }, 1200);

            setTimeout(() => {
              $('.map').addClass('show');
            }, 1600);


          }
          



        } else {
          entry.target.classList.remove('active');

        }



      });
    },
      {
        threshold: 0.6 // Qancha ko‘rinishi kerakligi (60%)
      });

    sections.forEach(section => {
      observer.observe(section);
    });




    function countdown(targetDate) {
      function updateCountdown() {
        const now = new Date();
        const timeDifference = targetDate - now;

        if (timeDifference <= 0) {
          clearInterval(interval);
          document.getElementById("days").innerText = "0";
          document.getElementById("hours").innerText = "0";
          document.getElementById("minutes").innerText = "0";
          
          return;
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
       
      }

      const interval = setInterval(updateCountdown, 1000);
      updateCountdown();
    }

    // Sana va vaqtni belgilash (masalan, 2025-yil 4-aprel, 15:30)
    const targetDate = new Date("2025-04-27T19:00:00");
    countdown(targetDate);





  });

}
















