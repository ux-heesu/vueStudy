<template>
  <div class="content-wrap member">
    <div class="inner">
      <h2>로그인</h2>
      <form class="form-style01">
        <!-- <div class="form-box">
          <label class="form-tit" for="loginId">아이디</label>
          <input type="text" id="loginId" placeholder="아이디를 입력하세요" />
        </div> -->
        <div class="form-box">
          <label class="form-tit" for="loginPw">비밀번호</label>
          <input type="password" id="loginPw" v-model="loginPw" autocomplete="off" placeholder="비밀번호를 입력하세요" />
        </div>
        <div class="form-box">
          <label class="form-tit" for="loginEmail">이메일</label>
          <input type="text" id="loginEmail" v-model="loginEmail" placeholder="이메일을 입력하세요" />
        </div>
        <div class="btn-wrap">
          <button type="button" class="btn btn-green-bg" @click="loginGet()">로그인</button>
          <router-link to="/member/join" class="btn btn-green">계정이 없나요?</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// axios 예제
export default {
  name: 'Login',
  data() {
      return {
        loginPw: '1234',
        loginEmail: 'eve.holt@reqres.in',
      };
  },
  components: {},
  mounted() {
    
  },
  methods: {
      loginGet() {
          this.$axios
              .post(`https://reqres.in/api/login`,{
                "email": this.loginEmail,
                "password": this.loginPw
              })
              .then((res) => {
                  console.log(res)
                  localStorage.setItem('token', res.data.token);
              })
              .catch((res) => {
                  console.error(res);
              });
      },
  },
};
</script>
