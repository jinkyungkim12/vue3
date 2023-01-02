<template>
    <q-container class="q-ma-xl">
        <h4 class="q-ma-xl text-center">List</h4>
        <div class="row justify-center">
            <div class="text-center">
                <q-input class="input" outlined v-model="text" placeholder="검색어를 입력하세요" />
            </div>
        </div>
        <div class="row justify-center q-mt-md">
            <p>'{{ text }}'는 이미 존재합니다.</p>
        </div>
        <div class="row justify-center q-mb-xl">
            <q-input v-model="text" outlined class="addtask" type="text" placeholder="+ Add a Task" @keypress.enter="addToDo"/>
        </div>
        <div class="row justify-center q-ma-xl" v-for="toDo in filteredList" :key="toDo.createdAt">
            <div class="col-1 text-center">
                <q-checkbox class="" v-model="toDo.done" color="teal" />
            </div>
            <div class="col-4 text-center" style="cursor: pointer;" :class="toDo.done ? 'task-completed' : ''" @click="openDetails(toDo)">
                <span>{{ toDo.text }}</span>
            </div>
            <div class="col-1">
                <q-btn class="secondary btn2" @click="deleteTodo(toDo.createdAt)">Delete</q-btn>
            </div>
        </div>
        <div v-if="selected" class="" :class="selected ? 'col-4' : 'd-none'" style="height: 200px">

        </div>
    </q-container>
</template>
<script>
    import { ref, computed } from 'vue';

    export default {
        setup() {
            const text = ref("");
            const search = ref("");
            const toDoList = ref([]);

            const filteredList = computed(() => {
                return toDoList.value.filter(toDo => toDo.text.includes(search.value))
            });
            
            const checkIfAlreadyExists = computed(() => {
                return toDoList.value.some(toDo => toDo.text.trim() === text.value.trim())
            });

            const addToDo = () => {
                if (!checkIfAlreadyExists.value){
                    toDoList.value.push({
                        createdAt: new Date().getTime(),
                        done: false,
                        text: text.value
                    });
                    text.value = "";
                }
            };

            const deleteToDo = (createdAt) => {
                const index = toDoList.value.findIndex(
                    toDo => toDo.createdAt === createdAt
                );

                toDoList.value.splice(index, 1);

                if (selected.value && createdAt === selected.value.createdAt) {
                    selected.value = null;
                }
            };

            const selected = ref(null);

            const openDetails = (selectedToDo) => {
                selected.value = selectedToDo;
            }

            const closeDetails = () => {
                selected.value = null;
            }

            return{
                text,
                search,
                toDoList,
                selected,
                filteredList,
                checkIfAlreadyExists,
                addToDo,
                deleteToDo,
                openDetails,
                closeDetails
            }
        }
    }
</script>
<style scoped>
    .input{
        width: 900px;
    }
    .addtask{
        width: 900px;
    }
    .btn2{
        width: 100px;
    }
</style>