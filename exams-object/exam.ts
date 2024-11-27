interface StudentAnswer {
  name: string
  answers: string[]
  score: number
}

class Exam {
  total: number
  questions: string[]
  weights: number[]
  answers: StudentAnswer[]

  constructor(questions: string[], weights: number[]) {
    this.questions = questions
    this.weights = weights
    this.total = weights.reduce((prev, curr) => prev + curr, 0)
    this.answers = []
  }

  add(answer: StudentAnswer): void {
    answer.score = this.score(answer)
    this.answers.push(answer)
  }

  score(answer: StudentAnswer): number {
    let score = 0
    for (let i = 0; i < this.questions.length; i++) {
      if (answer.answers[i] === this.questions[i]) {
        score += this.weights[i]
      }
    }
    return score
  }

  avg(): number {
    return (
      this.answers.reduce((prev, curr) => prev + curr?.score, 0) / this.total
    )
  }

  max(): StudentAnswer {
    let maxStudent = this.answers[0]

    for (let i = 1; i < this.answers.length; i++) {
      if (this.answers[i].score > maxStudent.score) {
        maxStudent = this.answers[i]
      }
    }

    return maxStudent
  }

  lt(grade: number): StudentAnswer[] {
    return this.answers.filter(answer => answer.score < grade)
  }

  gt(grade: number): StudentAnswer[] {
    return this.answers.filter(answer => answer.score > grade)
  }
}

const a = new Exam(['A', 'B', 'C'], [1, 2, 3])

exam.add({ name: 'Alice', answers: ['A', 'B', 'C'], score: 0 })
exam.add({ name: 'Bob', answers: ['A', 'B', 'B'], score: 0 })
exam.add({ name: 'Charlie', answers: ['A', 'B', 'A'], score: 0 })

console.log(exam.avg())
console.log(exam.max())
console.log(exam.lt(2))
console.log(exam.gt(3))
