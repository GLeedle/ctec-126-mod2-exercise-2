function grade_calc() {
    let score = prompt("Please enter your score:")
    let grade = ''
    if (score == 5) {
        grade = 'A'
    } else if (score == 4) {
        grade = 'B'
    } else if (score == 3) {
        grade = 'C'
    }else if (score == 2){
        grade = 'D'
    } else if (score == 1) {
        grade = 'F'
    } else if (score == 0) {
        grade = 'F'
    } else {
        alert("Please only choose between 1 - 5!")       
    }
    console.log(`Your test score was ${score} out of 5 therefore your grade is: ${grade}`)
}

grade_calc()