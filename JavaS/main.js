let inputNums = document.querySelectorAll(".num");
let inputGPAs = document.querySelectorAll(".gpa");
let resBtn = document.getElementById("btn-res");
let resultDiv = document.querySelector(".result");
let btnAdd = document.getElementById("btn-add");
let boxs = document.querySelector(".boxs");

resultDiv.style.display = "none";
resBtn.addEventListener('click', () =>{
    let resTotal = getResTotal();
    let resTotalGPA = getResTotalGPA();
    let result = (resTotal / resTotalGPA).toFixed(3);
    if(!isNaN(result))
        seeResult(result);
});

function getResTotal(){
    let res = 0;
    inputNums.forEach((num,i) => {
        if(num.value !== ''){
            res += +num.value * +inputGPAs[i].value;
        }
    })
    return res;
}

function getResTotalGPA(){
    let res = 0;
    inputGPAs.forEach((num) => {
        if(num.value !== ''){
            res += +num.value;
        }
    })
    return res;
}

function seeResult(result){
    resultDiv.style.display = "block";
    let res = document.getElementById('res');
    res.innerHTML = result;
    setTimeout(() => {
        resultDiv.style.display = "none";
    }, 5000)
}

btnAdd.addEventListener('click', () => {
    let div = document.createElement('div');
    div.className = "box";
    let h3 = createH3();
    let inputnum = createInputNum();
    let inputGPA = createInputGPA();
    div.appendChild(h3);
    div.appendChild(inputnum);
    div.appendChild(inputGPA);
    boxs.appendChild(div);
})

function createH3(){
    let h3 = document.createElement('h3');
    h3.innerHTML = `Your <span class="GPA-num">${inputNums.length + 1}</span> GPA`;
    return h3;
}

function createInputNum(){
    let input = document.createElement("input");
    input.type = "number";
    input.name = `num${inputNums.length + 1}`;
    input.id = `num${inputNums.length + 1}`;
    input.className = `num`;
    input.placeholder = "Your GPA";
    let inputNumsNew = [...inputNums];
    inputNumsNew.push(input);
    inputNums = inputNumsNew;
    return input;
}

function createInputGPA(){
    let input = document.createElement("input");
    input.type = "number";
    input.name = `gpa${inputNums.length + 1}`;
    input.id = `gpa${inputNums.length + 1}`;
    input.className = `gpa`;
    input.placeholder = "The Total GPA";
    let inputGPAsNew = [...inputGPAs];
    inputGPAsNew.push(input);
    inputGPAs = inputGPAsNew;
    return input;
}