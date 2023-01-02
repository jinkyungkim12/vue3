<template>
    <q-container>
        <h3 class="text-center q-ma-xl">List</h3>
        <div class="row">
            <div :class="selected ? 'col-8' : 'col-12'">
                <q-input class="" type="text" placeholder="Search..." v-model="search" @keypress.enter="searchToDo" />
            </div>
            <div>
                <p>'{{ text }}'는 이미 존재합니다.</p>
                <div class="border d-flex">
                    <q-input v-model="text" class="w-100 border-0 py-2 pl-3" type="text" placeholder="+ Add a Task" @keypress.enter="addToDo"/>
                </div>
                <div class="border d-flex align-items-center" v-for="toDo in filteredList" :key="toDo.createdAt">
                    <q-checkbox class="mx-3" v-model="toDo.done" color="teal" />
                    <div class="w-100 border-0 p-2" style="cursor: pointer;" :class="toDo.done ? 'task-completed' : ''" @click="openDetails(toDo)">
                        {{ toDo.text }}
                    </div>
                    <q-btn class="secondary" @click="deleteTodo(toDo.createdAt)">Delete</q-btn>
                </div>
            </div>
        </div>
        <div v-if="selected" class="border" :class="selected ? 'col-4' : 'd-none'" style="height: 200px">
            <div class="d-flex align-items-center py-2">
                <span class="flex-grow-1 font-weight-bold">Todo Details</span>
                <q-btn @click="closeDetails">X</q-btn>
            </div>
            <div class="d-flex align-items-center">
                <q-checkbox class="mx-3" v-model="selected.done" color="teal" />
                <q-input type="text" class="border-0" :class="selected.done ? 'task-completed' : ''" v-model="selected.text"/>
            </div>
            <q-separator />
            <div class="d-flex flex-column align-item-end mb-3">
                <small>Created At: {{ new Date(selected.createdAt).toDoString() }} {{ new Date(selected.createdAt).toLocaleTimeString() }}</small>
            </div>
            <div class="d-flex">
                <div class="flex-grow-1"></div>
                <q-btn class="primary" @click="deleteTodo(selected.createdAt)">Delete</q-btn>
            </div>
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
    
</style>