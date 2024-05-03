// Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

// - nome;
// - nota da primeira prova;
// - nota da segunda prova.

// Depois de criada a lista:

// - [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
// - [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

let students = [
  {
    name:"Bruno",
    firstGrade:9,
    secondGrade:8
  },
  {
    name:"Luiz",
    firstGrade:5,
    secondGrade:7
  },
  {
    name:"Pedro",
    firstGrade:10,
    secondGrade:4
  },
  {
    name:"João",
    firstGrade:3,
    secondGrade:4
  },
]

function averageNotes(firstGrade, secondGrade) {
  return ((firstGrade + secondGrade) / 2).toFixed(1)
}

function printStudentsAverage(student){
  return `A média do aluno ${student.name} foi de ${averageNotes(student.firstGrade, student.secondGrade)} .`
}

for (let student of students) {

  const calc = averageNotes(student.firstGrade, student.secondGrade)

  console.log(calc)
  if(calc >= 7){
    alert(`${printStudentsAverage(student) } \n Parabéns, ${student.name}! Você passou no concurso!`)
  } else {
    alert(`${printStudentsAverage(student) } \n Não foi dessa vez, ${student.name}! Tente Novamente!`)
  }
}