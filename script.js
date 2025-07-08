const courseList = document.getElementById('course-list');
if (courseList) {
  const courses = [
    { title: "Web Development", description: "HTML, CSS, JS, React" },
    { title: "Data Science", description: "Python, Pandas, ML" },
    { title: "Graphic Design", description: "Photoshop, Figma, UI/UX" }
  ];

  courses.forEach(course => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${course.title}</strong>: ${course.description}`;
    courseList.appendChild(li);
  });
}


const form = document.getElementById('enroll-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const course = document.getElementById('course').value;

    document.getElementById('message').textContent = 
      `Thank you ${name}! You have enrolled in ${course}. Confirmation sent to ${email}.`;
    
    form.reset();
  });
}
