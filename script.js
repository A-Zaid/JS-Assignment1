


// NOTE : I know that this methode is a bit advanced relating to the course,
// but I'm trying to find the best solution that I know :)

class Triangle {
    constructor (base, height) {
        this.base = base,
        this.height = height;
    } 
    calcArea() {
        return (this.base * this.height) / 2; 
        // return this.base * this.height / 2 : 
        // The operators * and / have the same precendence index, which is 13
        // JS will procede to calculate this.height / 2 (right to the left), and then * to the result, 
        // which a falsy result in this case
        // We need to use the parenthesis (highest precedence 19), to calculte the first expression, and then / the result by 2
    }
}

const triangleOne = new Triangle( 10, 13);
const triangleTwo = new Triangle(16.5, 20.3);
const triangleThree = new Triangle(16.5, 20.3);
const triangleFour = new Triangle(20.3, 16.5);
const triangleFive = new Triangle(7.8, 5.6);
const triangleSix = new Triangle(9.3, 12.4);

const compareTwoTriangles = function (triangle1Area, triangle2Area) {
    if (triangle1Area > triangle2Area){
        return "First";
    } else if (triangle1Area < triangle2Area) {
        return "Second";
    } else if (triangle1Area == triangle2Area) {
        return "Equal";
  /*   } else return false; */
}
}

let caseValue = prompt(`Please enter the number : \n 1 : To compare the triangleOne: base = 10cm, height = 13cm\
 triangleTwo: base = 16,5cm, height = 20,3cm \n 2 : To compare triangleThree: base = 16,5cm, height = 20,3cm\
 triangleFour: base = 20,3cm, height = 16,5cm \n 3 : To compare triangleFive: base = 7,8cm, height = 5,6cm\
 triangleSix: base = 9,3cm, height = 12,4cm
`);

let comparisonResult = "", msg = "";

switch (caseValue) {
    case "1" : 
        let triangle1Area = triangleOne.calcArea().toFixed(2);
        let triangle2Area = triangleTwo.calcArea().toFixed(2);
        msg = `Triangle one has an area of ${triangle1Area} cm2` +
        ` and Triangle two has an area of ${triangle2Area} cm2.` 

        comparisonResult = compareTwoTriangles(triangle1Area,triangle2Area) ;

        if (comparisonResult == "First" || comparisonResult == "Second") 
            msg += `\nThe triangle with the biggest area is Triangle ${comparisonResult == "First" ? "one" : "two"}.`
        else 
            msg += `\nThe triangles are equal.`

        console.log(msg);
        break;
    case "2" :
        let triangle3Area = triangleThree.calcArea().toFixed(2);
        let triangle4Area = triangleFour.calcArea().toFixed(2);

        msg = `Triangle three has an area of ${triangle3Area} cm2` +
        ` and Triangle four has an area of ${triangle4Area} cm2.` ;

        comparisonResult = compareTwoTriangles(triangle3Area,triangle4Area) ;
        
        if (comparisonResult == "First" || comparisonResult == "Second") 
            msg += `\nThe triangle with the biggest area is Triangle ${comparisonResult == "First" ? "three" : "four"}.`;
        else 
            msg += `\nThe triangles are equal.`

        console.log(msg);     
        break;
    case "3" :
        let triangle5Area = triangleFive.calcArea().toFixed(2);
        let triangle6Area = triangleSix.calcArea().toFixed(2);

        msg = `Triangle five has an area of ${triangle5Area} cm2` +
        ` and Triangle six has an area of ${triangle6Area} cm2.` 

        comparisonResult = compareTwoTriangles(triangle5Area,triangle6Area) ;


        if (comparisonResult == "First" || comparisonResult == "Second") 
            msg += `\nThe triangle with the biggest area is Triangle ${comparisonResult == "First" ? "five" : "six"}.`;
        else 
            msg += `\nThe triangles are equal.`

        console.log(msg);     
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
