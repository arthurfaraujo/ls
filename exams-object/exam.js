var Exam = /** @class */ (function () {
    function Exam(questions, weights) {
        this.questions = questions;
        this.weights = weights;
        this.total = weights.reduce(function (prev, curr) { return prev + curr; }, 0);
        this.answers = [];
    }
    Exam.prototype.add = function (answer) {
        answer.score = this.score(answer);
        this.answers.push(answer);
    };
    Exam.prototype.score = function (answer) {
        var score = 0;
        for (var i = 0; i < this.questions.length; i++) {
            if (answer.answers[i] === this.questions[i]) {
                score += this.weights[i];
            }
        }
        return score;
    };
    Exam.prototype.avg = function () {
        return this.answers.reduce(function (prev, curr) { return prev + (curr === null || curr === void 0 ? void 0 : curr.score); }, 0) / this.total;
    };
    Exam.prototype.max = function () {
        var maxStudent = this.answers[0];
        for (var i = 1; i < this.answers.length; i++) {
            if (this.answers[i].score > maxStudent.score) {
                maxStudent = this.answers[i];
            }
        }
        return maxStudent;
    };
    Exam.prototype.lt = function (grade) {
        return this.answers.filter(function (answer) { return answer.score < grade; });
    };
    Exam.prototype.gt = function (grade) {
        return this.answers.filter(function (answer) { return answer.score > grade; });
    };
    return Exam;
}());
var exam = new Exam(['A', 'B', 'C'], [1, 2, 3]);
exam.add({ name: 'Alice', answers: ['A', 'B', 'C'], score: 0 });
exam.add({ name: 'Bob', answers: ['A', 'B', 'B'], score: 0 });
exam.add({ name: 'Charlie', answers: ['A', 'B', 'A'], score: 0 });
console.log(exam.avg());
console.log(exam.max());
console.log(exam.lt(2));
console.log(exam.gt(3));
