<template>
    <div id="body" class="">   
        <div class="top">&nbsp;&nbsp; 云加密系统</div>     
        <div class="bottom">&nbsp;</div>
        <form action="" class="login">
            
            <div class="title"><p>&nbsp; 手机短信登录。</p></div>
            
            <div class="line">
                <img class="Img" src="../assets/icon-3.png">
                <input placeholder="请手机号码" type="number" v-model="phoneNum" class="line input">
            </div>
            <div class="line">
                <img class="Img" src="../assets/icon-4.png">
                <input placeholder="请输入验证码" type="number" v-model="captcha" class="line input">
                <button v-show = "show" type="button" @click="send()" class="sendBut" >发送验证码</button>
                <span v-show = "!show" class="sendBut">{{count}} S之后重发</span>
            </div>
            <div>
            <button type="button" @click="login()" class="logBut-dym">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</button>
            
            </div> 

            <div>
                <router-view/>
                <ul> 
                <li class="dym"><router-link :to="{name: 'login'}">账号密码登录
                </router-link></li>
                </ul>
            </div>           
        </form>        
    </div>
</template>

<script>

    export default {
        name: 'dynamic-log',
        data(){
            return{
                show: true,
                count: '',
                timer: null,
                phoneNum: '',
                captcha: '',               
            } 
        },
        methods: {
            login(){
                if(localStorage.phoneNum == this.phoneNum && localStorage.captcha == this.captcha){
                    this.phoneNum = ''
                    this.captcha = ''
                    this.$router.push('/home/list')
                }else{
                    alert('手机号码不存在或验证码错误')
                }                
            },
            send(){
                const TIME_COUNT = 60;
                if (!this.timer) {
                    this.count = TIME_COUNT;
                    this.show = false;
                    this.timer = setInterval(() => {
                        if (this.count > 0 && this.count <= TIME_COUNT) {
                            this.count--;
                        } else {
                            this.show = true;
                            clearInterval(this.timer);
                            this.timer = null;
                        }
                    }, 1000)
                }
            },
        }
    }
</script>
    
<style scoped lang = "scss">
    @import  '../css/index.css';
li{
    list-style: none;
}
</style>