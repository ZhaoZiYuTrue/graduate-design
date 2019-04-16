<template>
    <div id="body" class="">   
        <div class="top">&nbsp;&nbsp; 云加密系统</div>     
        <div class="bottom">&nbsp;</div>
        <form action="" v-if="!isReg" class="login">
            
            <div class="title"><p>&nbsp; 请登录。</p></div>
            
            <div class="line">
                <img class="Img" src="../assets/icon-1.png">
                <input placeholder="请输入账号" type="text" v-model="name" class="line input">
            </div>
            <div class="line">
                <img class="Img" src="../assets/icon-2.png">
                <input placeholder="请输入密码" type="password" v-model="password" class="line input">
            </div>
            <div>
            <button type="button" @click="login()" class="logBut">登录</button>
            <button type="button" @click="reg()" class="logBut">注册</button>
            </div> 
            
            <div>
                <router-view/>
                <ul> 
                <li class="dym"><router-link :to="{name: 'dynamic-log'}">手机短信登录
                </router-link></li>
                </ul>
            </div>
            
        </form>

        <form action="" v-if="isReg" class="regist">
            
            <div class="title"><p>&nbsp; 请使用手机注册。</p></div>
            <div class="line">
            <!-- 手机号注册 -->
                <input placeholder="请输入手机号" type="number" v-model="phoneNum" class="line input">
            </div>
            <div class="line">
            <!-- 用户名 -->
                <input placeholder="请输入账号" type="text" v-model="name" class="line input">
            </div>
            <div class="line">
            <!-- 密码 -->
            <input placeholder="请输入密码" type="password" v-model="password" class="line input">
            </div>
            <div class="line">
            <!-- 确认密码 -->
            <input placeholder="请确认密码" type="password" v-model="repeat" class="line input">
            </div>
            <button type="button" @click="addUser()" class="logBut">确定</button>
            <button type="button" @click="cancel()" class="logBut">取消</button> 
        </form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return{
                isReg: false,
                phoneNum: '',
                name: '',
                password: '',
                repeat: ''
            } 
        },
        methods: {
            login(){
                if(localStorage.name == this.name && localStorage.password == this.password && this.name !='' && this.password !=''){
                    this.name = ''
                    this.password = ''
                    this.$router.push('/home')
                }else{
                    alert('用户名不存在或密码错误')
                }                
            },
            reg(){ 
                this.isReg = true
            },
            cancel(){
                this.isReg = false
            },
            addUser(){
                if (this.phoneNum !='') {
                    if (this.name !='') {
                        if (this.password !='') {
                            if(this.password == this.repeat){
                                localStorage.setItem("phoneNum", this.phoneNum)
                                localStorage.setItem("name", this.name)
                                localStorage.setItem("password", this.password)
                                this.name = ''
                                this.password = ''
                                this.isReg = false
                            }else{                   
                                alert('两次密码输入不一致')
                            }
                        } else {
                            alert('密码不能为空')
                        }
                    
                    } else {
                        alert('用户名不能为空')
                    }
                
                } else {
                    alert('手机号不能为空')
                }

                
            },
            
        }
    }
</script>

<style scoped lang = 'scss'>
    @import  '../css/index.css';
li{
    list-style: none;
}


</style>