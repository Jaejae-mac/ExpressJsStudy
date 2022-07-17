
//Object.keys

console.log('\n ---------------Object.keys-------------------- \n')

const newInfo = {
    "id": 1,
    "name": "Alex",
    "team": "engineering",
    "position": "IOS Developer",
    "emailAddress": "alex@google.com",
    "phoneNumber": "010-xxxx-xxxx",
    "admissionDate": "2018/12/10",
    "birthday": "1994/11/08",
    "profileImage": "profile1.png"
};

console.log(Object.keys(newInfo));

console.log('\n ---------------Object.entries-------------------- \n')

//Object.entries
const newInfo2 = {
  "id": 1,
  "name": "Alex",
  "team": "engineering",
  "position": "IOS Developer",
  "emailAddress": "alex@google.com",
  "phoneNumber": "010-xxxx-xxxx",
  "admissionDate": "2018/12/10",
  "birthday": "1994/11/08",
  "profileImage": "profile1.png"
};

console.log(Object.entries(newInfo2));

console.log('\n ---------------for...in-------------------- \n');

//for...in
const newInfo3 = {
  "id": 1,
  "name": "Alex",
  "team": "engineering",
  "position": "IOS Developer",
  "emailAddress": "alex@google.com",
  "phoneNumber": "010-xxxx-xxxx",
  "admissionDate": "2018/12/10",
  "birthday": "1994/11/08",
  "profileImage": "profile1.png"
};

for(const property in newInfo3){
  console.log(property);
}

//for...in 프로퍼티 값까지 출력

console.log('\n ---------------for...in_properties-------------------- \n');

const newInfo4 = {
  "id": 1,
  "name": "Alex",
  "team": "engineering",
  "position": "IOS Developer",
  "emailAddress": "alex@google.com",
  "phoneNumber": "010-xxxx-xxxx",
  "admissionDate": "2018/12/10",
  "birthday": "1994/11/08",
  "profileImage": "profile1.png"
};

for(const property in newInfo4){
  console.log(`Key: ${property} => Value: ${newInfo[property]}`);
}