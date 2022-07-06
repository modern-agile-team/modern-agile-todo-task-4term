# 👨🏻‍💻 모던 애자일 퍼블리싱 & Back-End & Front-End 개발 과제

# 최종 목표
https://user-images.githubusercontent.com/69745441/174486244-16043eef-40e2-4275-b138-825bb2769002.mov


<br>

## 🐶 퍼블리싱 문제

- https://www.figma.com/file/XyYbaBMYh2Ro1KAhQr3aEX/Untitled?node-id=0%3A1
- figma 에 디자인된 웹 스펙을 참고하여 웹 퍼블리싱

![Screen Shot 2022-06-12 at 2 05 38 PM](https://user-images.githubusercontent.com/69745441/173215393-612d9657-18ef-420b-81bd-7133aa04a29d.png)


## 🖍 Back-End 문제

- Back-End 서버 구성 및 Todo list CRUD API 구현
  1.  전체적인 서버 구성, 파일 생성 및 DB를 이용한 Todo list API 구현
  2.  Todo list 전체 조회 **(GET)**
  3.  Todo list 생성 **(POST)**
  4.  Todo list 내용 수정 **(PATCH)**
  5.  Todo list 체크 **(PATCH)**
  6.  Todo list 삭제 **(DELETE)**

<br>

### 💡 npm(필요 라이브러리)
- **라이브러리 문서 링크 https://npmjs.com**

```js
"dependencies": {
   "express": "^4.17.2",
   "dotenv": "^10.0.0",
   "mysql2": "^2.3.3",
   "nodemon": "^2.0.15" // 필수가 아닌 선택이지만 사용하면 편함
}
```

<br>
<br>

### 💡 데이터베이스(mysql)

#### 테이블 구조

**id, is_check, in_date는 Default가 정해져있기때문에 생성, 수정 시 값을 직접 명시해주지 않아도 됨**

![테이블-구조](https://user-images.githubusercontent.com/78959175/171580620-7444f6ba-80e7-4572-8a34-d6e2083c933a.png)

<br>

#### 테이블 초기데이터 (이 초기데이터는 수정 및 삭제하지 말아주세요.)

![DB-초기데이터](https://user-images.githubusercontent.com/78959175/171580544-71cfb2c2-ac1a-4cbd-ab83-bf3885610312.png)

<br>
<br>

## 💣 주의할 점

1. **작업시간 : 10:00 ~ 18:00시  (18시 이전까지 작업물 필수 제출)**
2. **기존 작성된 코드는 변경가능, 최초 파일 위치, 파일 명, 함수 명은 변경 불가**
3. **과제는 멘토찬스의 횟수를 정해놓지 않지만 질문에 대한 방향제시와 문제해결까지 조언(정답을 알려주지는 않음)**
4. **API 구현 후 API확인은 프론트 기능구현을 통해 ajax요청을 보내 확인하는것이 아닌 curl과 Postman을 이용해 확인할 것**
5. **app/src/config/mysql.js의 6 ~ 9 라인의 value 값을 환경변수를 이용해 채울 것**
6. **app/src/models/ToDoStorage.js는 기본 틀만 작성해놓은것이며 query문과 추가로 필요한 내용은 본인이 작성한 후 해당 메서드가 필요할 때 require하여 사용할 것**

<br>
<br>

## 🐱 Front-End 
- figma 에 기획된 데이터 추가(Create), 조회(Read), 수정(Update), 삭제(Delete) 의 CRUD 구현
- 4기 노션 > `Front-End 과제` 에 예시를 보고 JavaScript 를 사용해 구현
![Screen Shot 2022-06-12 at 2 23 51 PM](https://user-images.githubusercontent.com/69745441/173217033-2f095086-1461-436b-8e54-750fbd3029c5.png)


## 📝 과제 사용법

[여기](https://youtu.be/Lhp3r_V7emY)를 참고.

<br>
