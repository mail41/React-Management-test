import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [
{
  'id' : 1,
  // 랜덤으로 이미지 변경해주는 사이트 이미지사이즈 64*64
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '홍길동',
  'birthday' : '961222',
  'gender' : ' 남자',
  'job' : '대학생'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '김말똥',
  'birthday' : '910222',
  'gender' : ' 남자',
  'job' : '디자이너'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '이명수',
  'birthday' : '201202',
  'gender' : ' 여자',
  'job' : '중학생'
}

]

class App extends Component{
  render(){
    return(
      <div>
     {/* <Customer
        id={customers[0].id}
        image={customers[0].image}
        name={customers[0].name}
        birthday={customers[0].birthday}
        gender={customers[0].gender}
        job={customers[0].job}
       /> */}


       {
         customers.map(c => {
           return(
            <Customer
            // map을 사용할때는 key값을 설정해줘야함
              key={c.id}

              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}

            />
           ) 
         })
       }
      
       </div>
    )
  }

}
export default App;
