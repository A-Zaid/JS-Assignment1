



let caseValue = prompt(`Please enter the number : \n 1 : To compare the triangleOne: base = 10cm, height = 13cm\
 triangleTwo: base = 16,5cm, height = 20,3cm \n 2 : To compare triangleThree: base = 16,5cm, height = 20,3cm\
 triangleFour: base = 20,3cm, height = 16,5cm \n 3 : To compare triangleFive: base = 7,8cm, height = 5,6cm\
 triangleSix: base = 9,3cm, height = 12,4cm
`);

function Triangle(pBase, pHeight) {
    return  (pBase * pHeight) / 2; 
};

let msg = "";

function caseComparisonCalcul(triangle1Area, triangle2Area){
    msg = `Triangle one has an area of ${triangle1Area} cm2` +
    ` and Triangle two has an area of ${triangle2Area} cm2.` 

    if (triangle1Area > triangle2Area)
        msg += `\nThe triangle with the biggest area is Triangle one.`;
    else if (triangle1Area < triangle2Area)
        msg += `\nThe triangle with the biggest area is Triangle two.`;
    else 
        msg += `\nThe triangles are equal.`

    console.log(msg);
}

switch (caseValue) {
    case "1" : 
        caseComparisonCalcul(Triangle(10, 13), Triangle(16.5, 20.3))
        break;
    case "2" :
        caseComparisonCalcul(Triangle(16.5, 20.3), Triangle(20.3, 16.5))
        break;
    case "3" :
        caseComparisonCalcul(Triangle(7.8, 5.6), Triangle(9.3, 12.4))
        break;
    default : console.log("The numbers allowed are 1, 2 or 3 !")
        break;
    
};
if (msg) {
    let mainTag = document.querySelector(".maincontent");
    let divTag = document.createElement("div");
    divTag.innerHTML = `
        <h2>Comparing two triangles </h2>
        <p> ${msg}</p>`;
    mainTag.append(divTag);
}
