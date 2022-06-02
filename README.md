# 👨🏻‍💻 모던 애자일 Back-End & Front-End 개발 과제

<br>

## 🖍 문제

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

**no와 in_date는 Default가 정해져있기때문에 생성, 수정 시 값을 직접 명시해주지 않아도 됨**

![테이블-구조]([https://user-images.githubusercontent.com/46591459/147024017-d1bdbb67-2081-442e-8a92-198d5371ac7d.PNG](https://user-images.githubusercontent.com/78959175/171580620-7444f6ba-80e7-4572-8a34-d6e2083c933a.png)

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
5. **config/mysql.js의 &&&&&&& 라인의 value 값을 환경변수를 이용해 채울 것**
6. **models/BoardStorage.js&&&&&&&&는 기본 틀만 작성해놓은것이며 query문과 추가로 필요한 내용은 본인이 작성한 후 해당 메서드가 필요할 때 require하여 사용할 것**

<br>
<br>

## 📝 과제 사용법

[여기](https://youtu.be/Lhp3r_V7emY)를 참고.

<br>
