<template>
    <div class='user'>
        <el-card>
            <el-form class="form" :inline="true">
                <el-form-item label="用户名">
                    <el-input placeholder="请输入搜索用户名"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" icon="Search">搜索</el-button>
                    <el-button icon="CloseBold">重置</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <el-card style="margin-top: 20px;">
            <el-button type="primary" icon="Plus">添加</el-button>
            <el-button type="warning" icon="Delete">批量删除</el-button>
            <el-table :data="users" border>
                <el-table-column type="selection"></el-table-column>
                <el-table-column prop="index" width="100%" type="index" align="center" label="序号"></el-table-column>
                <el-table-column prop="id" width="100%" align="center" label="ID"></el-table-column>
                <el-table-column prop="name" width="150%" label="用户名"></el-table-column>
                <el-table-column prop="role" label="用户角色"></el-table-column>
                <el-table-column prop="createTime" label="创建时间"></el-table-column>
                <el-table-column prop="updateTime" label="更新时间"></el-table-column>
                <el-table-column width="200%" label="操作">
                    <template #default="{ row }">
                        <el-button title="分配角色" type="primary" icon="User" @click=""></el-button>
                        <el-button title="编辑" icon="Edit" @click="editUser"></el-button>
                        <el-button title="删除" icon="Delete" color="#f8ae0d" @click=""></el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination v-model:currentPage="currentPage" v-model:pageSize="pageSize" style="margin-top: 20px;" layout="prev, pager, next, -> ,jumper" :total="totalData" />
        </el-card>
        <el-drawer v-model="drawer" direction="rtl">
            <template #header>
              <h4>添加用户</h4>
            </template>
            <template #default>
              <el-form>
                <el-form-item label="用户姓名">
                    <el-input placeholder="请填写用户名"></el-input>
                </el-form-item>
                <el-form-item label="用户角色">
                    <el-checkbox-group v-model="checkedList" :max="1">
                        <el-checkbox v-for="role in roles" :key="role" :label="role" :value="role">
                            {{ role }}
                          </el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="用户密码">
                    <el-input placeholder="请填写用户密码"></el-input>
                </el-form-item>
              </el-form>
            </template>
            <template #footer>
                <el-button type="success">保存</el-button>
                <el-button>取消</el-button>
            </template>
        </el-drawer>
    </div>
</template>

<script lang='ts' setup>
    import { ref } from 'vue'
    let currentPage = ref(1)
    let pageSize = ref(5)
    let totalData = ref(10)
    let drawer = ref(false)
    let roles = ref(['用户', '经理', '前台'])
    let checkedList = ref([])
    let users = ref([
        {
            id: 123,
            name: 'pig',
            role: '吉祥物',
            createTime: '2025-3-30',
            updateTime: '2025-3-30'
        },
        {
            id: 456,
            name: 'cat',
            role: '吉祥物',
            createTime: '2025-3-30',
            updateTime: '2025-3-30'
        }
    ])

    function editUser(){
        drawer.value = true
    }
</script>

<style scoped>
    .form {
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-width: 500px;
    }
</style>