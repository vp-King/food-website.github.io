


//About us modal
const modalBtn = document.querySelector(".modal-btn")

const modal = document.querySelector(".modal-overlay")

const closeBtn = document.querySelector(".close-btn")

//function

const modeB = ()=>{
  modal.classList.add("open-modal")
}

const fobC = ()=>{
  modal.classList.remove("open-modal")
}

modalBtn.addEventListener("click", modeB)

closeBtn.addEventListener("click",fobC)




//using selectors inside the element
const questions = document.querySelectorAll(".question-answer");

questions.forEach(function (question) {
  //console.log(question)
  const btn = question.querySelector(".question-btn");
  // console.log(btn);

  btn.addEventListener("click", function () {
    // console.log(question);

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});



//   startSlider()
// });
// });
// btnafter.forEach(element => {
//   element.addEventListener('click', () => {
//   startSlider('prev')
//   })
// })
