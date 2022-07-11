const express = require('express');

const app = express();

const members = require('./members');

//라우터에 의해 처리되기 전에 필요한 전처리를 하는 것을
//express에서는 미들웨어라고 부른다.
//즉, body의 데이터를 가져오기 위해서 처리가 필요함.
app.use(express.json());//middleware

// //2번째 미들웨어
// var secondMilddleware = function(res,req,next){
//   console.log(req.query);
//   next();
// };

// app.use(secondMilddleware);

app.use((req, res, next) => {
  console.log(req.query);
  next();
});

app.get('/api/members', (req,res) => {
  //const team = req.query.team;//여러 파마리터 값중 team이라는 값을 가져오기위함.
  //위의 식은 아래와 같이 표현할 수 있다.
  const { team } = req.query;
  console.log(team);
  if(team) {
    const teamMembers = members.filter((m) => m.team === team);
    console.log(teamMembers)
    res.send(teamMembers);
  }else{
    res.send(members);
  }
});
app.get('/api/members/:id', (req,res) => {
  //:id -> 와 같은 양식의 값들을 Route Parameter라고 부른다.
  // const id = req.params.id;
  //위의 id 변수 매핑 방식과 같은 방식이다.
  const { id } = req.params;
  const member = members.find((m) => m.id === Number(id));
  if(member) {
    res.send(member);  
  }else{
    res.status(404).send({ message : 'There is no such member' });
  }
  
});


//Post 리퀘스트 보내는 방법
//vs code 에서 rest client extentsion을 설치하면 vscode 에서 바로 
//포스트 리퀘스트를 보낼 수 있다.
//프로젝트 경로상에서 ".http" 확장자를 가지는 파일을 만들면 사용가능

app.post('/api/members', (req,res) => {
  const newMember = req.body;
  members.push(newMember);
  res.send(newMember);
});

app.listen(20010, () => {
  console.log('Server is Listening...');
});
