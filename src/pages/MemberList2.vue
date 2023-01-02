<template>
    <div class="container q-ma-xl">
        <h4 class="text-white">사용자 관리</h4>
        <div class="card">
            <div class="row q-pa-lg">
                <div class="col-1">
                    <p class="text-h6 text-white">부서</p>
                </div>
                <div class="col-2">
                    <q-select 
                        class="select1"
                        rounded 
                        outlined 
                        v-model="model" 
                        label="전체"
                        dense
                        :options="options"
                        bg-color="white" />
                </div>
                <div class="col-9"></div>
                <div class="col-1">
                    <p class="text-h6 text-white">직책</p>
                </div>
                <div class="col-2">
                    <q-select 
                        class="select1"
                        rounded 
                        outlined 
                        v-model="model" 
                        label="전체"
                        dense
                        :options="optionsDev"
                        bg-color="white" />
                </div>
                <div class="col-9"></div>
            </div>
            <div class="searchBar q-ma-lg">
                <div class="row q-pa-lg">
                    <div class="col-2 q-px-sm">
                        <q-select 
                            outlined
                            class="select2"
                            v-model="model"
                            rounded 
                            dense
                            bg-color="white" 
                            :options="optionsSearch" 
                            label="전체" 
                        />
                    </div>
                    <div class="col-9">
                        <q-input borderless v-model="text" dense placeholder="Search" class="inputSearch"/>
                    </div>
                    <div class="col-1">
                        <q-btn class="btnSearch">검색하기</q-btn>
                    </div>
                </div>
            </div>
            <div class="table q-ma-lg text-white">
                <q-table
                    title="Table"
                    :rows="rows"
                    :columns="columns"
                    row-key="index"
                    :separator="separator"
                />
            </div>
            <div class="row justify-end">
                <div class="col-1 q-mb-lg">
                    <router-link to="/memberForm"><q-btn color="primary">사용자 등록</q-btn></router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { ref } from 'vue'
    
    const columns = [
        {
            name: 'index',
            label: '#',
            field: 'index',
            align: 'center',
        },
        { name: 'name', align: 'center', label: '사용자명', field: 'name', sortable: true },
        { name: 'dev', align: 'center', label: '부서', field: 'dev', sortable: true },
        { name: 'id', align: 'center', label: '아이디', field: 'id', sortable: true },
        { name: 'position', align: 'center', label: '직책', field: 'position' },
        { name: 'phone', align: 'center', label: '연락처', field: 'phone' },
        { name: 'email', align: 'center', label: '이메일', field: 'email' },
        { name: 'regDate', align: 'center', label: '등록일', field: 'regDate'},
        { name: 'function', align: 'center', label: '기능', field: 'function'}
    ]

    const seed = [
        {
            name: '홍길동',
            dev: '보안연구소',
            id: 'hongkd',
            position: '사원',
            phone: '010-1234-1234',
            email: 'hongkd@withnetworks.com',
            regDate: '2023-02-01 10:15:50',
            function: '기능'
        },
        {
            name: '김연아',
            dev: '보안연구소',
            id: 'yuna',
            position: '사원',
            phone: '010-1234-1234',
            email: 'yuna@withnetworks.com',
            regDate: '2022-10-01 15:15:50',
            function: '기능'
        },
        {
            name: '손예진',
            dev: '보안연구소',
            id: 'sonson',
            position: '사원',
            phone: '010-1234-1234',
            email: 'sonson@withnetworks.com',
            regDate: '2021-05-01 20:15:50',
            function: '기능'
        },
        {
            name: '송강',
            dev: '보안연구소',
            id: 'skang',
            position: '사원',
            phone: '010-1234-1234',
            email: 'skang@withnetworks.com',
            regDate: '2020-11-01 18:15:50',
            function: '기능'
        },
        {
            name: '한소희',
            dev: '보안연구소',
            id: 'hansohee',
            position: '사원',
            phone: '010-1234-1234',
            email: 'hansohee@withnetworks.com',
            regDate: '2022-09-01 15:15:50',
            function: '기능'
        },
        {
            name: '김석진',
            dev: '보안연구소',
            id: 'jin',
            position: '사원',
            phone: '010-1234-1234',
            email: 'jin@withnetworks.com',
            regDate: '2022-01-01 13:15:50',
            function: '기능'
        },
        {
            name: '박지민',
            dev: '보안연구소',
            id: 'jmjm',
            position: '사원',
            phone: '010-1234-1234',
            email: 'jmjm@withnetworks.com',
            regDate: '2023-01-01 10:15:50',
            function: '기능'
        },
        {
            name: '김남준',
            dev: '보안연구소',
            id: 'rmrm',
            position: '사원',
            phone: '010-1234-1234',
            email: 'rmrm@withnetworks.com',
            regDate: '2021-11-20 10:15:50',
            function: '기능'
        },
        {
            name: '김태형',
            dev: '보안연구소',
            id: 'vivi',
            position: '사원',
            phone: '010-1234-1234',
            email: 'vivi@withnetworks.com',
            regDate: '2023-01-07 10:15:50',
            function: '기능'
        },
        {
            name: '정호석',
            dev: '보안연구소',
            id: 'jhope',
            position: '사원',
            phone: '010-1234-1234',
            email: 'jhope@withnetworks.com',
            regDate: '2022-05-10 10:15:50',
            function: '기능'
        },
    ]

    // we generate lots of rows here
    let rows = []
    for (let i = 0; i < 2; i++) {
    rows = rows.concat(seed.slice(0).map(r => ({ ...r })))
    }
    rows.forEach((row, index) => {
    row.index = index
    })

    export default {
    setup () {
        return {
            separator: ref('horizontal'),
            columns,
            rows,
            
            options: [
                    '기술지원', '관리부', '연구실'
            ],
            optionsDev: [
                '사원','주임','대리', '차장', '과장', '부장', '이사'
            ],
            optionsSearch: [
                '사용자명', '아이디', '연락처', '이메일'
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
    .btnSearch{
        background-color: rgb(81, 19, 182);
        width: 100px;
        height: 40px;
        color: white;
    }
    .searchBar{
        background-color: white;
        height: 90px;
        border-radius: 5px;
    }
    a{
        text-decoration-line: none;
    }
</style>