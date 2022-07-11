const express = require('express');

const app = express();

const members = require('./members');

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

app.listen(20010, () => {
  console.log('Server is Listening...');
});
