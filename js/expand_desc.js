
var exp, par;
exp = ".exp-";
par = ".par-"



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

   