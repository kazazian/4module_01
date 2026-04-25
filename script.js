document.addEventListener("DOMContentLoaded", () => {
  // вот это лучше вам не трогать, внутри тултипов оставил подсказки к выполнению задач
  enableTooltips();

  // с этим обьектом вы будете работать
  const groupsData = {
    curator: "Глазунова",
    groups: [
      {
        id: "britsp251",
        title: "БРИЦП251",
        students: [
          { name: "Абеленцев Марк" },
          { name: "Бородин Александр" },
          { name: "Казазян Арина" },
          { name: "Карпив Полина" },
          { name: "Куренков Всеволод" },
          { name: "Ли Вадим" },
          { name: "Морунов Пётр" },
          { name: "Мосоровчук Анна" },
          { name: "Нечаев Валерий" },
          { name: "Николенко Софья" },
          { name: "Новикова Полина" },
          { name: "Олейник София" },
          { name: "Саблина Мария" },
          { name: "Смирнов Илья" },
          { name: "Смирнов Макар" },
          { name: "Тищенко Глафира" },
          { name: "Эверглен Мелани" },
        ],
      },
      {
        id: "britsp252",
        title: "БРИЦП252",
        students: [
          { name: "Белов Александр" },
          { name: "Борисова Виктория" },
          { name: "Бухарина Василиса" },
          { name: "Дегай Всеволод" },
          { name: "Исаев Артём" },
          { name: "Камнев Иван" },
          { name: "Колодяжный Степан" },
          { name: "Курпаяниди Эллина" },
          { name: "Куфаев Владислав" },
          { name: "Ломсадзе Олег" },
          { name: "Никифорова Елизавета" },
          { name: "Носкова Анастасия" },
          { name: "Пилипенко Дмитрий" },
          { name: "Салмин Пётр" },
          { name: "Степанова Софья" },
          { name: "Сукоркин Мирон" },
          { name: "Шамров Данил" },
          { name: "Этука Александр" },
        ],
      },
    ],
  };
  //35
  let n35=document.querySelector('[data-js="t35-show"]')
  const list = document.querySelector('[data-js="t35-list"]');
  n35.addEventListener("click",()=>{
    list.innerHTML=''
    groupsData.groups.forEach (group=>{
      const li =document.createElement('li')
      li.textContent=group.title
      list.append(li)
    })
  })
  //36
  let btns=document.querySelectorAll('[data-js="t36-buttons"] button')
  let list36=document.querySelector('[data-js="t36-list"]')
  btns.forEach(button=>{
    button.addEventListener("click",()=>{
    
    let id=button.dataset.groupId
    let group =groupsData.groups.find(group=>group.id==id)
    list36.innerHTML='';
    group.students.forEach (student =>{
      const li36 =document.createElement('li')
      li36.textContent=student.name
      list36.appendChild(li36);
    })
  })
  })
  //37
  let btns37=document.querySelectorAll('[data-js="t37-buttons"] button')
  let out37=document.querySelector('[data-js="t37-out"]')
  btns37.forEach(button=>{
    button.addEventListener("click",()=>{
      let id=button.dataset.groupId
      let group37 =groupsData.groups.find(group=>group.id==id)
      let count=group37.students.length
      out37.textContent='Студентов:' + count
    })
  })
  //38
  let b38=document.querySelectorAll('[data-js="t38-buttons"] button[data-group-id]');
  let pick38=document.querySelector('[data-js="t38-pick"]')
  let current=document.querySelector('[data-js="t38-current"]')
  let out38=document.querySelector('[data-js="t38-out"]')
  let currentGroup = 'britsp251';
  b38.forEach(button=>{
    button.addEventListener("click",()=>{
      currentGroup = button.dataset.groupId;
      const group = groupsData.groups.find(g => g.id === currentGroup);
      current.textContent='Текущая группа:'+ group.title
    })
  })
  pick38.addEventListener("click",()=>{
    const group = groupsData.groups.find(g => g.id === currentGroup);
    let rand=Math.floor(Math.random()*group.students.length)
    let student=group.students[rand]
    out38.textContent=student.name    
  })
  //39
  let b39=document.querySelectorAll('[data-js="t39-buttons"] button')
  let title=document.querySelector('[data-js="t39-title"]')
  let curator=document.querySelector('[data-js="t39-curator"]')
  let list39=document.querySelector('[data-js="t39-list"]')
  b39.forEach(button=>{
    button.addEventListener("click",()=>{
      let id=button.dataset.groupId
      let group =groupsData.groups.find(group=>group.id==id)
      title.textContent=group.title
      curator.textContent='Kуратор: '+groupsData.curator
      list39.innerHTML=''
      group.students.forEach (student =>{
      const li36 =document.createElement('li')
      li36.textContent=student.name
      list39.appendChild(li36);
    })
    })
  })
//40
let btn40=document.querySelectorAll('[data-js="t40-buttons"] button')
let out40=document.querySelector('[data-js="t40-count"]')
let list40=document.querySelector('[data-js="t40-list"]')
function render(groupId){
  let group =groupsData.groups.find(group=>group.id==groupId)
  let count=group.students.length
  out40.textContent='Студентов:' + count
  list40.innerHTML = '';
  group.students.forEach(student => {
    let li = document.createElement('li');
    li.textContent = student.name;
    list40.append(li);
  });
  btn40.forEach(button => {
    button.classList.toggle('is-active', button.dataset.groupId !== groupId);
  });
}
btn40.forEach(button=>{
  button.addEventListener("click",()=>{
    render(button.dataset.groupId)
  })
})
//41
let b41=document.querySelectorAll('[data-js="t41-buttons"] button[data-group-id]');
let rnd41=document.querySelector('[data-js="t41-random"]')
let count41=document.querySelector('[data-js="t41-count"]')
let name41=document.querySelector('[data-js="t41-random-out"]')
let GroupName=document.querySelector('[data-js="t41-title"]')
let curator41=document.querySelector('[data-js="t41-curator"]')
let list41=document.querySelector('[data-js="t41-list"]')
let currentGroup41 = 'britsp252';
  b41.forEach(button=>{
    button.addEventListener("click",()=>{
      currentGroup41 = button.dataset.groupId;
      const group = groupsData.groups.find(g => g.id === currentGroup41);
      GroupName.textContent= group.title
      b41.forEach(btn => {
      btn.classList.add('is-active');
    });
    button.classList.remove('is-active');
    })
  })
  rnd41.addEventListener("click",()=>{
      let id=currentGroup41
      let group =groupsData.groups.find(group=>group.id==id)
      let count=group.students.length
      count41.textContent='Студентов: ' + count
      let rand=Math.floor(Math.random()*group.students.length)
      let student=group.students[rand]
      name41.textContent=student.name   
  
      curator41.textContent='Kуратор: '+groupsData.curator
      list41.innerHTML=''
      group.students.forEach (student =>{
      const li41 =document.createElement('li')
      li41.textContent=student.name
      list41.appendChild(li41);
    })
  })
});
