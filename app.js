

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

      setTimeout(()=>loader.style.display = 'none' ,1000)
      
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
                $('.line-1').addClass('line-show')
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
                $('.line').addClass('line-show')
              }, 2000)

              setTimeout(() => {
                $('.about').text(about).addClass('show')
              }, 2500);

             
            }, 2000)



          }


          if (index === 1) {

            setTimeout(() => {
              $('.name-1').text(name).addClass('show');
            }, 700);

            setTimeout(() => {
              $('.and').text(and).addClass('show');
            }, 900);

            setTimeout(() => {
              $('.name-2').text(name_2).addClass('show');
            }, 1200);

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








    // Oddiy JavaScript kodi
    const title = document.querySelector('h1');
    title.style.color = 'red';
  });

}
















