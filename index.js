const students = [
  { id: 1, name: "Ayu Pratiwi", join_year: 2023 },
  { id: 2, name: "Budi Santoso", join_year: 2022 },
  { id: 3, name: "Citra Lestari", join_year: 2023 },
  { id: 4, name: "Dimas Aditya", join_year: 2021 },
  { id: 5, name: "Eka Saputra", join_year: 2022 },
];

const courses = [
  { id: 1, name: "Algorithms" },
  { id: 2, name: "Databases" },
  { id: 3, name: "AI" },
  { id: 4, name: "Web Development" },
  { id: 5, name: "Cloud Computing" },
];

const studentCourses = [
  { student_id: 1, course_id: 1, score: 85 },
  { student_id: 1, course_id: 2, score: 90 },
  { student_id: 1, course_id: 3, score: 88 },

  { student_id: 2, course_id: 1, score: 70 },
  { student_id: 2, course_id: 2, score: 75 },
  { student_id: 2, course_id: 4, score: 50 },

  { student_id: 3, course_id: 2, score: 95 },
  { student_id: 3, course_id: 3, score: 93 },
  { student_id: 3, course_id: 4, score: 70 },
  { student_id: 3, course_id: 5, score: 78 },

  { student_id: 4, course_id: 1, score: 60 },
  { student_id: 4, course_id: 2, score: 45 },
  { student_id: 4, course_id: 3, score: 55 },
  { student_id: 4, course_id: 4, score: 65 },

  { student_id: 5, course_id: 5, score: 92 },
  { student_id: 5, course_id: 3, score: 89 },
];

// No .1

// const data = courses.find((c) => c.name === "Databases").id;

// const result = studentCourses
//   .filter((studentCourses) => studentCourses.course_id === data)
//   .map((studentCourses) => ({
//     name: students.find((s) => s.id === studentCourses.student_id).name,
//     score: studentCourses.score,
//   }));

// console.log(result);

// No .2

const failed = [
  ...new Set(
    studentCourses
      .filter((score) => score.score < 60)
      .map((score) => students.find((s) => s.id === score.student_id).name)
  ),
];

console.log(failed);

// No .3

// const report = students.map((student) => {
//   const studentScores = studentCourses.filter(
//     (s) => s.student_id === student.id
//   );

//   const courseScore = studentScores.map((sc) => {
//     const courseName = courses.find((c) => c.id === sc.course_id).name;

//     return {
//       course: courseName,
//       score: sc.score,
//     };
//   });

//   return {
//     name: student.name,
//     courses: courseScore,
//   };
// });
// No .4

// const averages = students.map((student) => {
//   const studentScores = studentCourses
//     .filter((s) => s.student_id === student.id)
//     .map((s) => s.score);

//   const average = studentScores.length
//     ? studentScores.reduce((a, b) => a + b, 0) / studentScores.length
//     : 0;

//   return {
//     name: student.name,
//     average: average,
//   };
// });

// const topthree = averages.sort((a, b) => b.average - a.average).slice(0, 3);

// console.log(topthree);

// No .5

// const studentId = 3;

// const taken = studentCourses
//   .filter((s) => s.student_id === studentId)
//   .map((s) => s.course_id);

// const courseStatus = courses.map((course) => ({
//   course: course.name,
//   taken: taken.includes(course.id),
// }));

// console.log(courseStatus);
