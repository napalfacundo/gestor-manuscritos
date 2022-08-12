/**
 * TODO:
 * *****
 * Categories CRUD
 * Style inputs
 * Connect score with chart, through each button user clicks a portion of the chart 
 * will be added, and a certain score will be added to that category
 *
 */
window.addEventListener('load', ()=> {
    renderCatArr(catList)
})



/**
 * CATEGORIES CRUD
 */
let catList = localStorage.getItem('Categories') == undefined ? [] : JSON.parse(localStorage.getItem('Categories'))
console.log(catList);

// RENDER CATEGORIES
let categoriesContainer = document.getElementById('categoriesContainer')
let renderCatArr = (arr) => {
        if (arr.length !== 0) {
            arr.forEach(cat => {
                console.log(cat);
                let newCatSectionContent = (catName) => {
                    return `<div class="category__container">
                    <h3>${catName}</h3>
                    <div class="category__container--main">
                        <div class="score-buttons__container">
                            <p class="clasificacion">
                                <input class="button"id="radio1" type="radio" name="estrellas" value="50"><!--
                                --><label id="syntaxRadio1" for="radio1">★</label><!--
                                --><input id="radio2" type="radio" name="estrellas" value="40"><!--
                                --><label for="radio2">★</label><!--
                                --><input id="radio3" type="radio" name="estrellas" value="30"><!--
                                --><label for="radio3">★</label><!--
                                --><input id="radio4" type="radio" name="estrellas" value="20"><!--
                                --><label for="radio4">★</label><!--
                                --><input id="radio5" type="radio" name="estrellas" value="10"><!--
                                --><label for="radio5">★</label>
                              </p>
                        </div>
                        <div class="comments__container">
                            <textarea type="text-area" rows="50" cols="50" placeholder="Comentarios"></textarea>
                        </div>
                    
                    </div>
                    </div>`
                }
                let newCatSection = document.createElement('div')
                newCatSection.innerHTML = newCatSectionContent(cat)
                categoriesContainer.appendChild(newCatSection)
            })
    }
}
// renderCatArr(catList)


// Create category
const insertCatBtn = document.getElementById('insertCatBtn')
insertCatBtn.addEventListener('click', ()=> {
    let newCat = prompt('Ingrese nueva Categoría: ')
    catList.push(newCat);
    localStorage.setItem('Categories', JSON.stringify(catList))
    renderCatArr(catList)
})

// Show categories

const showCatBtn = document.getElementById('shoCatBtn')
showCatBtn.addEventListener('click', ()=> {
    renderCatArr(catList)
    let canvascontainer = document.getElementById('myChart')
    let chartContainer = document.getElementById("chartContainer")
    chartContainer.removeChild(canvascontainer)
    let newCanvascontainer = document.createElement('canvas')
    newCanvascontainer.setAttribute('id', 'myChart')
    chartContainer.appendChild(newCanvascontainer)
    new Chart(document.getElementById('myChart'), config);
})


/**
 * CHART
 */

const data = {
    labels: catList,
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100, 150],
      backgroundColor: [
        '#F7E8D0',
        '#F2CCB5',
        '#F8A08C',
        '#E18777',
        '#E18777'
      ],
      hoverOffset: 4
    }]
  };

  const config = {
  type: 'doughnut',
  data: data,
};

// button1.addEventListener('click', ()=> {
//     data.datasets.data[0] = 20    
// })

const myChart = new Chart(document.getElementById('myChart'), config);

// let hundredPercent = document.getElementById('syntaxRadio1');

// hundredPercent.addEventListener('click', ()=> {
//     // data.datasets[0].data[0] = 20
//     data.datasets[0].data[0] = 100

    // let canvascontainer = document.getElementById('myChart')
    // let chartContainer = document.getElementById("chartContainer")
    // chartContainer.removeChild(canvascontainer)
    // let newCanvascontainer = document.createElement('canvas')
    // newCanvascontainer.setAttribute('id', 'myChart')
    // chartContainer.appendChild(newCanvascontainer)
    // new Chart(document.getElementById('myChart'), config);
    
// })