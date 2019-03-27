
var exp, par;
exp = ".exp-";
par = ".par-"

// var i;

// function expand_paragraph(i) {
//     var paragraph = document.querySelector(par + i)
//     if (paragraph.style.display === "none") {
//         paragraph.style.display = "block";
//       } else {
//         paragraph.style.display = "none";
//       };
// }

// for(i = 0; i<2; i++ ){
//     document.querySelector(exp + i).addEventListener('click', function() {
//         expand_paragraph(i);
// });
// }


    document.querySelector(exp + "0").addEventListener('click', function() {
        var paragraph = document.querySelector(par + "0")
        if (paragraph.style.display === "none") {
                        paragraph.style.display = "block";
                      } else {
                        paragraph.style.display = "none";
                      }
    });
    document.querySelector(exp + "1").addEventListener('click', function() {
        var paragraph = document.querySelector(par + "1")
        if (paragraph.style.display === "none") {
                        paragraph.style.display = "block";
                      } else {
                        paragraph.style.display = "none";
                      }
    });

    document.querySelector(exp + "2").addEventListener('click', function() {
      var paragraph = document.querySelector(par + "2")
      if (paragraph.style.display === "none") {
                      paragraph.style.display = "block";
                    } else {
                      paragraph.style.display = "none";
                    }
  });

   