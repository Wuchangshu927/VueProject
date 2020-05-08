<template>

    <v-container>
        <v-card>
            <v-card-title>
                个人信息统计
                <v-divider
                        class="mx-4"
                        inset
                        vertical
                ></v-divider>

                <v-switch v-model="singleSelect" label="单选" class="pa-3"></v-switch>
                <v-spacer></v-spacer>
                <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                >


                </v-text-field>


            </v-card-title>
            <v-divider></v-divider>

            <v-data-table
                    v-model="selected"
                    :headers="headers"
                    :items="desserts"
                    :single-select="singleSelect"
                    item-key="name"
                    show-select
                    class="elevation-1"
                    sort-by="calories"
                    items-per-page="10"
            >
                <template v-slot:top>
                    <v-toolbar flat color="white">
                        <!--                        <v-toolbar-title>个人信息</v-toolbar-title>-->
                        <!--                        <v-divider-->
                        <!--                                class="mx-4"-->
                        <!--                                inset-->
                        <!--                                vertical-->
                        <!--                        ></v-divider>-->

                        <v-spacer></v-spacer>

                        <v-dialog v-model="dialog" max-width="500px">
                            <template v-slot:activator="{ on }">
                                <v-btn color="primary" dark class="mb-2" v-on="on">添加</v-btn>
                            </template>
                            <v-card>
                                <v-card-title>
                                    <span class="headline">{{ formTitle }}</span>
                                </v-card-title>

                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.name" label="名称"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.calories" label="卡路里"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.fat" label="脂肪 (g)"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.carbs"
                                                              label="碳水化合物 (g)"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.protein"
                                                              label="蛋白质 (g)"></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-card-text>

                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue darken-1" text @click="close">取消</v-btn>
                                    <v-btn color="blue darken-1" text @click="save">保存</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-toolbar>
                </template>
                <template v-slot:item.actions="{ item }">
                    <v-icon
                            small
                            class="mr-2"
                            @click="editItem(item)"
                    >
                        mdi-pencil
                    </v-icon>
                    <v-icon
                            small
                            @click="deleteItem(item)"
                    >
                        mdi-delete
                    </v-icon>
                </template>
                <template v-slot:no-data>
                    <v-btn color="primary" @click="initialize">重置</v-btn>
                </template>


            </v-data-table>


        </v-card>


    </v-container>
</template>

<script>
    import {Message} from 'element-ui'

    export default {
        name: "index",
        data: () => ({
            dialog: false,
            headers: [
                {
                    text: '姓名',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                {text: '年龄', value: 'age'},
                {text: '地址', value: 'addr'},
                {text: '电话', value: 'tell'},
                {text: '邮箱', value: 'email'},
                {text: '操作', value: 'actions', sortable: false},
            ],
            desserts: [],
            selected: [],
            singleSelect: false,
            editedIndex: -1,
            editedItem: {
                name: '',
                age: 0,
                addr: 0,
                tell: 0,
                email: 0,
            },
            defaultItem: {
                name: '',
                age: 0,
                addr: 0,
                tell: 0,
                email: 0,
            },
        }),

        computed: {
            formTitle() {
                return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
            },
        },

        watch: {
            dialog(val) {
                val || this.close()
            },
        },

        created() {
            // this.initialize()
            let vm = this
            this.getRequest('tableData').then(res => {

                console.log(res)
                vm.desserts = res

            })
        },

        methods: {
            initialize() {
                this.desserts = [
                    {
                        name: 'Frozen Yogurt',
                        calories: 159,
                        fat: 6.0,
                        carbs: 24,
                        protein: 4.0,
                    },
                    {
                        name: 'Ice cream sandwich',
                        calories: 237,
                        fat: 9.0,
                        carbs: 37,
                        protein: 4.3,
                    },
                    {
                        name: 'Eclair',
                        calories: 262,
                        fat: 16.0,
                        carbs: 23,
                        protein: 6.0,
                    },
                    {
                        name: 'Cupcake',
                        calories: 305,
                        fat: 3.7,
                        carbs: 67,
                        protein: 4.3,
                    },
                    {
                        name: 'Gingerbread',
                        calories: 356,
                        fat: 16.0,
                        carbs: 49,
                        protein: 3.9,
                    },
                    {
                        name: 'Jelly bean',
                        calories: 375,
                        fat: 0.0,
                        carbs: 94,
                        protein: 0.0,
                    },
                    {
                        name: 'Lollipop',
                        calories: 392,
                        fat: 0.2,
                        carbs: 98,
                        protein: 0,
                    },
                    {
                        name: 'Honeycomb',
                        calories: 408,
                        fat: 3.2,
                        carbs: 87,
                        protein: 6.5,
                    },
                    {
                        name: 'Donut',
                        calories: 452,
                        fat: 25.0,
                        carbs: 51,
                        protein: 4.9,
                    },
                    {
                        name: 'KitKat',
                        calories: 518,
                        fat: 26.0,
                        carbs: 65,
                        protein: 7,
                    },
                ]
            },

            editItem(item) {
                this.editedIndex = this.desserts.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.dialog = true
            },

            deleteItem(item) {
                const index = this.desserts.indexOf(item)
                confirm('确定删除吗') && this.desserts.splice(index, 1)
            },

            close() {
                this.dialog = false
                this.$nextTick(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                })
            },

            save() {
                if (this.editedIndex > -1) {
                    Object.assign(this.desserts[this.editedIndex], this.editedItem)
                } else {
                    if (this.editedItem.name)
                        this.desserts.push(this.editedItem)
                    else {
                        Message.warning('名称不能为空')
                    }
                }
                this.close()
            },
        },

    }
</script>

<style scoped>

</style>
