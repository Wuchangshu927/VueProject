<template>
    <v-card>
        <v-tabs
                v-model="tab"
                dark
        >
            <v-tab
                    v-for="item in items"
                    :key="item.tab"
            >
                {{ item.tab }}
            </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
            <v-tab-item
                    v-for="item in items"
                    :key="item.tab"
            >
                <v-card flat>
                    <v-card-text>{{ item.content }}</v-card-text>
                </v-card>
            </v-tab-item>
        </v-tabs-items>
    </v-card>
</template>

<script>
    export default {
        name: "index",
        data () {
            return {
                tab: null,
                items: [
                    { tab: '选项一', content: 'Tab 1 Content' },
                    { tab: '选项二', content: 'Tab 2 Content' },
                    { tab: '选项三', content: 'Tab 3 Content' }
                ],
            }
        },
    }
</script>

<style scoped>

</style>
