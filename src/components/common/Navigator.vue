<template>
    <nav>
        <ul>
            <li><router-link to="/">HOME</router-link></li>
            <li>
                <router-link to="/helloVue">안뇽</router-link>
                <ul class="depth">
                    <li><router-link to="/helloVue/content">안뇽의 하위메뉴01</router-link></li>
                </ul>
            </li>
            <li><router-link to="/byeVue">빠이</router-link></li>
            <li><router-link to="/testVue">컬러차트</router-link></li>
        </ul>
        <div class="user-box">
            <router-link to="/member/login" class="btn btn-green btn-login">로그인</router-link>
            <router-link to="/member/join" class="btn btn-green btn-join">회원가입</router-link>
            <router-link to="/member/Update?user=2" class="btn btn-green">업데이트</router-link>
        </div>
  </nav>

</template>

<script>
export default {
    name: "Navigator",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
    display: flex;
    gap: 1rem;
}

nav ul {
    display: flex;
    align-content: center;
    gap: 2rem;
    font-size: 1.8rem;
}
nav ul li {
    position: relative;
}
nav .depth {
    display: none;
    position: absolute;
    top: 100%;
    left: 50%;
    width: max-content;
    padding: 1rem;
    background: #fff;
    border: 1px solid #ddd;
    transform: translateX(-50%);
}
nav .depth li {
    margin: 0.5rem 0;
}
nav ul li:hover .depth {
    display: block;
}

.user-box > * {
    padding: 0.8rem 1.2rem;
    margin: 0 0.5rem;
    font-size: 1.3rem;
    font-weight: 600;
    transition: all 0.3s;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
}
/* router active style */
.router-link-active {
    color: green;
    font-weight: 800;
    border-bottom: 2px solid green;
}
</style>
