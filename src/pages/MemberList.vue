<template>
    <q-page class="q-ma-xl">
        <h4 class="text-weight-bold">사용자 관리</h4>
        <q-separator />
        <section class="area1 q-pa-lg">
            <div class="row q-mb-md">
                <div class="col-1">
                    <span class="text-h6 text-weight-bold">부서</span>
                </div>
                <div class="col-11">
                    <q-select 
                        outlined
                        class="select"
                        v-model="model" 
                        :options="options" 
                        label="전체" 
                    />
                </div>
            </div>
            <div class="row">
                <div class="col-1">
                    <span class="text-h6 text-weight-bold">직책</span>
                </div>
                <div class="col-11">
                    <q-select 
                        outlined
                        class="select"
                        v-model="model" 
                        :options="optionsDev" 
                        label="전체" 
                    />
                </div>
            </div>
            <q-separator class="q-mt-lg q-mb-lg"/>
            <div class="row">
                <div class="col-2">
                    <q-select 
                        outlined
                        class="select2"
                        v-model="model" 
                        :options="optionsSearch" 
                        label="전체" 
                    />
                </div>
                <div class="col-8">
                    <q-input borderless v-model="text" placeholder="Search" class="inputSearch"/>
                </div>
                <div class="col-2">
                    <q-btn class="btnSearch">검색하기</q-btn>
                </div>
            </div>
            <q-separator class="q-mt-lg q-mb-lg"/>
            <div class="q-pa-sm">
                <q-table
                :rows="rows"
                :columns="columns"
                row-key="index"
                />
            </div>
            <div class="row justify-end q-mt-md">
                <q-btn class="btnReg">사용자 등록</q-btn>
            </div>
        </section>
    </q-page>
</template>
<script>
    import { ref } from 'vue'

    const columns = [
    {
        name: 'index',
        label: '#',
        field: 'index'
    },
    { name: 'user_name', align: 'center', label: '사용자명', field: 'user_name'},
    { name: 'team', align: 'center', label: '부서', field: 'team'},
    { name: 'id', align: 'center', label: '아이디', field: 'id' },
    { name: 'position', align: 'center', label: '직책', field: 'position' },
    { name: 'phone', align: 'center', label: '연락처', field: 'phone' },
    { name: 'email', align: 'center', label: '이메일', field: 'email'},
    { name: 'regDate', align: 'center', label: '등록일', field: 'regDate'},
    { name: 'function', align: 'center', label: '기능', field: 'function' }
    ]

    const rows = [
    {
        index: 1,
        user_name: '홍길동',
        team: '보안연구소',
        id: 'kdHong',
        position: '주임',
        phone: '010-1234-1234',
        email: 'example@naver.com',
        regDate: '2023-01-02 10:12:50',
        function: '기능'
    },
    {
        index: 2,
        user_name: '홍길동',
        team: '보안연구소',
        id: 'kdHong',
        position: '주임',
        phone: '010-1234-1234',
        email: 'example@naver.com',
        regDate: '2023-01-02 10:12:50',
        function: '기능'
    },
    {
        index: 3,
        user_name: '홍길동',
        team: '보안연구소',
        id: 'kdHong',
        position: '주임',
        phone: '010-1234-1234',
        email: 'example@naver.com',
        regDate: '2023-01-02 10:12:50',
        function: '기능'
    },
    {
        index: 4,
        user_name: '홍길동',
        team: '보안연구소',
        id: 'kdHong',
        position: '주임',
        phone: '010-1234-1234',
        email: 'example@naver.com',
        regDate: '2023-01-02 10:12:50',
        function: '기능'
    },
    {
        index: 5,
        user_name: '홍길동',
        team: '보안연구소',
        id: 'kdHong',
        position: '주임',
        phone: '010-1234-1234',
        email: 'example@naver.com',
        regDate: '2023-01-02 10:12:50',
        function: '기능'
    },
    {
        index: 6,
        user_name: '홍길동',
        team: '보안연구소',
        id: 'kdHong',
        position: '주임',
        phone: '010-1234-1234',
        email: 'example@naver.com',
        regDate: '2023-01-02 10:12:50',
        function: '기능'
    },
    {
        index: 7,
        user_name: '홍길동',
        team: '보안연구소',
        id: 'kdHong',
        position: '주임',
        phone: '010-1234-1234',
        email: 'example@naver.com',
        regDate: '2023-01-02 10:12:50',
        function: '기능'
    },
    ]


    export default {
    setup () {
        return {
            model: ref(null),
            options: [
                '기술지원', '관리부', '연구실'
            ],
            optionsDev: [
                '사원','주임','대리', '차장', '과장', '부장', '이사'
            ],
            optionsSearch: [
                '사용자명', '아이디', '연락처', '이메일'
            ],
            columns,
            rows
        }
    }
    }
</script>
<style lang="scss">
    .select{
        width: 250px;
    }
    .select2{
        width: 200px;
    }
    .inputSearch{
        height: 56px;
    }
    .btnSearch{
        width: 200px;
        height: 56px;
    }
    .btnReg{
        width: 150px;
    }
</style>