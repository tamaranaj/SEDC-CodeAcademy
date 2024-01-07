// One student has 5 exams in the first semester. His/Her grades for all of the exams are 10, 6, 8, 9, 6 respectively. The professor told the students that for passing the first semester they must have average of 8. The student needs to know whether they have passed the semester or not. Alert on screen if the student pass or not!

let numOfExams = 5
let array= [10,6,8,9,6]

function average(exams,arrayGrades ){
    let result = 0
    for(let grades of arrayGrades){
        result += grades
    }

    result /= exams

    if(result>=8){
        console.log(`The semester is passed with ${result}`)
    }else{
        console.log(`Not enough points. He has ${result}`)
    }
}

average(numOfExams,array)