<template>
    <div class="container q-ma-xl">
        <h4 class="text-white">사용자 관리</h4>
        <div class="card">
            <div class="q-ma-xl">
                <div class="row q-pt-xl">
                    <div class="col-6 q-px-lg q-py-sm">
                        <div class="row text-white">
                            <div class="col-3"><p class="text-h6 text-center">아이디</p></div>
                            <div class="col-9"><q-input outlined v-model="text" dense placeholder="아이디" bg-color="white"/></div>
                        </div>
                    </div>
                    <div class="col-6 q-px-lg q-py-sm">
                        <div class="row text-white">
                            <div class="col-3"><p class="text-h6 text-center">이름</p></div>
                            <div class="col-9"><q-input outlined v-model="text" dense placeholder="이름" bg-color="white"/></div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6 q-px-lg q-py-sm">
                        <div class="row text-white">
                            <div class="col-3"><p class="text-h6 text-center">비밀번호</p></div>
                            <div class="col-9"><q-input outlined v-model="password" dense placeholder="비밀번호" bg-color="white"/></div>
                        </div>
                    </div>
                    <div class="col-6 q-px-lg q-py-sm">
                        <div class="row text-white">
                            <div class="col-3"><p class="text-h6 text-center">비밀번호 확인</p></div>
                            <div class="col-9"><q-input outlined v-model="password" dense placeholder="이름" bg-color="white"/></div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6 q-px-lg q-py-sm">
                        <div class="row text-white">
                            <div class="col-3"><p class="text-h6 text-center">연락처</p></div>
                            <div class="col-9"><q-input outlined v-model="text" dense placeholder="010-1234-1234" bg-color="white"/></div>
                        </div>
                    </div>
                    <div class="col-6 q-px-lg q-py-sm">
                        <div class="row text-white">
                            <div class="col-3"><p class="text-h6 text-center">이메일</p></div>
                            <div class="col-9"><q-input outlined v-model="text" dense placeholder="example@withnetworks.com" bg-color="white"/></div>
                        </div>
                    </div>
                </div>
                <div class="row q-pb-xl">
                    <div class="col-6 q-px-lg q-py-sm">
                        <div class="row text-white">
                            <div class="col-3"><p class="text-h6 text-center">부서</p></div>
                            <div class="col-9">
                                <q-select 
                                    class="select1"
                                    outlined 
                                    v-model="model" 
                                    label="전체"
                                    dense
                                    :options="options"
                                    bg-color="white" />
                            </div>
                        </div>
                    </div>
                    <div class="col-6 q-px-lg q-py-sm">
                        <div class="row text-white">
                            <div class="col-3"><p class="text-h6 text-center">직책</p></div>
                            <div class="col-9">
                                <q-select 
                                    class="select1"
                                    outlined 
                                    v-model="model" 
                                    label="전체"
                                    dense
                                    :options="optionsDev"
                                    bg-color="white" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-end q-pb-lg">
                    <div class="col-2">
                        <router-link to="/memberList"><q-btn color="primary" class="btn">등록</q-btn></router-link>
                        &emsp;
                        <router-link to="/memberList"><q-btn color="red" class="btn">취소</q-btn></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    export default {
    setup () {
        return {
            options: [
                    '기술지원', '관리부', '연구실'
            ],
            optionsDev: [
                '사원','주임','대리', '차장', '과장', '부장', '이사'
            ],
        }
    }
    }
</script>
<style lang="scss">
    body{
        background-color: black;
    }
    .card{
        background-color: rgb(31, 31, 65);
        border-radius: 5px;
    }
    a{
        text-decoration-line: none;
    }
    .btn{
        width: 100px;
    } 
</style>