

   // question 1 part one

class car {
    constructor(make,model,year,isAvailable){
        this.make = make;
        this.model = model;
        this.year = year;
        this.isAvailable = isAvailable;

    }

    toggleAvailability(){
        this.isAvailable = ! this.isAvailable
    }
}

const blackCar = new car("Mercedes","FX23",2020,true)
const whiteCar = new car("Audi","FXW",2011,false)
console.log(blackCar);
console.log(whiteCar);

blackCar.toggleAvailability();
console.log(blackCar);

whiteCar.toggleAvailability();
console.log(whiteCar);



// part two

class rental{
    constructor(car,rentalName,rentalStartDate,rentalEndDate){
        this.car = car;
        this.rentalName = rentalName;
        this.rentalStartDate = rentalStartDate;
        this.rentalEndDate = rentalEndDate;
    }

    CalculateRentalDuration(){
        const startDate = this.rentalStartDate.getTime();
        const endDate = this.rentalEndDate.getTime();
        const duration = Math.abs(endDate - startDate);
        const days = Math.ceil(duration / (1000 * 60 * 60 * 24));
        return days
    }
}

const car1 = new car("Honda","VWX",2016, true);
const rent = new rental(car1, "Faith Yiamat", new Date("2024-04-20"), new Date("2024-04-25"));
console.log(rent);

// part three 
class Question {
    constructor(text,options,correctAnswer){
        this.text = text;
        this.options = options;
        this.correctAnswer = correctAnswer;
    }
    checkAnswer(userName){
        return userName === this.correctAnswer
    }
}
 const question1 = new Question(
    "What is the capital city of Ethiopia", 
 ["Paris","Nairobi","Kigali","Adis Ababa"],
   "Adis Ababa"
 
 );

 console.log(question1.checkAnswer("Adis Ababa"));
 console.log(question1.checkAnswer("Kigali"));


 // question 2 part one

 class Question2 {
    constructor(text,options,correctAnswer){
            this.text = text;
            this.options = options;
            this.correctAnswer = correctAnswer
    }
    checkAnswer(userName){
        return userName === this.correctAnswer;
    }
 }

 const ques = new Question2(
    "What is the the biggest market in Kenya?", 
 ["Gikomba","Narok","Kajiado","Adis Ababa"],
   "Gikomba"
);
console.log(ques.checkAnswer("Gikomba"));
console.log(ques.checkAnswer("Kajiado"));
  
   // question 2 part two
   class quiz {
    constructor (){
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        
    }
    addQuestion(question) {
        this.questions.push(question)
    }
    nextQuestion(){
        this.currentQuestionIndex++;
    }
    submitAnswer(userName){
        const currentQuestion = this.questions[this.currentQuestionIndex];
        if(currentQuestion.checkAnswer(userName)){
            this.score++;
        }
    }
    
   }



