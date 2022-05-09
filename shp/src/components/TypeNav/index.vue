<template>
    <div class="type-nav">
            <div class="container">
                <h2 class="all" @mouseenter="showAll" @mouseleave="leaveAll">全部商品分类</h2>
                <nav class="nav">
                    <a href="###">服装城</a>
                    <a href="###">美妆馆</a>
                    <a href="###">尚品汇超市</a>
                    <a href="###">全球购</a>
                    <a href="###">闪购</a>
                    <a href="###">团购</a>
                    <a href="###">有趣</a>
                    <a href="###">秒杀</a>
                </nav>
                <div class="sort" v-show="show">
                    <div class="all-sort-list2" @click="goSearch">
                        <div class="item" v-for="(c,index) in categoryList" :key="c.categoryId" :style="{backgroundColor:index === enterIndex?'skyBlue':''}">
                            <h3 @mouseenter="enter(index)" @mouseleave="leave">
                                <a :data-categoryName="c.categoryName" :data-category1Id="c.categoryId">{{c.categoryName}}</a>
                            </h3>
                            <div class="item-list clearfix" :style="{display:index === enterIndex?'block':'none'}">
                                <div class="subitem" v-for="c1 in c.categoryChild" :key="c1.categoryId">
                                    <dl class="fore">
                                        <dt>
                                            <a :data-categoryName="c1.categoryName" :data-category2Id="c1.categoryId">{{c1.categoryName}}</a>
                                        </dt>
                                        <dd>
                                            <em v-for="c2 in c1.categoryChild" :key="c2.categoryId">
                                                <a :data-categoryName="c2.categoryName" :data-category3Id="c2.categoryId">{{c2.categoryName}}</a>
                                            </em>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script> 
import {mapState} from 'vuex'
export default {
    name:'TypeNav',
    data(){
        return {
            enterIndex:-1,
            show:true
        }
    },
    mounted(){
        console.log(mapState)
        if(this.$route.path !== '/home'){
            this.show = false
        }
    },
    methods:{
        enter (index) {
            this.enterIndex = index;
            this.show = true
        },
        leave () {
            this.enterIndex = -1;
            if(this.$route.path !== '/home'){
                this.show = false
            }
        },
        showAll () {
            this.show = true
        },
        leaveAll () {
            if(this.$route.path !== '/home'){
                this.show = false
            }
        },
        goSearch ($evnet) {
            console.log($evnet)
            let element = $evnet.target
            let {categoryname, category1Id, category2Id,category3Id } = element.dataset;
            if(categoryname) {
                let location = {name:'search'}
                let query = {categoryName:categoryname,categoryId:null}
                if(category1Id) {
                    query.categoryId = category1Id
                } else if (category2Id) {
                    query.categoryId = category2Id
                } else {
                    query.categoryId = category3Id
                }
                location.query = query
                this.$router.push(location)
            }
            
        }
    },
    computed: {
        ...mapState({
            categoryList:state => state.home.categoryList
        })
    }
}
</script>

<style lang="less">
    .type-nav {
        border-bottom: 2px solid #e1251b;

        .container {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            position: relative;

            .all {
                width: 210px;
                height: 45px;
                background-color: #e1251b;
                line-height: 45px;
                text-align: center;
                color: #fff;
                font-size: 14px;
                font-weight: bold;
            }

            .nav {
                a {
                    height: 45px;
                    margin: 0 22px;
                    line-height: 45px;
                    font-size: 16px;
                    color: #333;
                }
            }

            .sort {
                position: absolute;
                left: 0;
                top: 45px;
                width: 210px;
                height: 461px;
                position: absolute;
                background: #fafafa;
                z-index: 999;

                .all-sort-list2 {
                    .item {
                        h3 {
                            line-height: 30px;
                            font-size: 14px;
                            font-weight: 400;
                            overflow: hidden;
                            padding: 0 20px;
                            margin: 0;

                            a {
                                color: #333;
                            }
                        }

                        .item-list {
                            display: none;
                            position: absolute;
                            width: 734px;
                            min-height: 460px;
                            background: #f7f7f7;
                            left: 210px;
                            border: 1px solid #ddd;
                            top: 0;
                            z-index: 9999 !important;

                            .subitem {
                                float: left;
                                width: 650px;
                                padding: 0 4px 0 8px;

                                dl {
                                    border-top: 1px solid #eee;
                                    padding: 6px 0;
                                    overflow: hidden;
                                    zoom: 1;

                                    &.fore {
                                        border-top: 0;
                                    }

                                    dt {
                                        float: left;
                                        width: 54px;
                                        line-height: 22px;
                                        text-align: right;
                                        padding: 3px 6px 0 0;
                                        font-weight: 700;
                                    }

                                    dd {
                                        float: left;
                                        width: 415px;
                                        padding: 3px 0 0;
                                        overflow: hidden;

                                        em {
                                            float: left;
                                            height: 14px;
                                            line-height: 14px;
                                            padding: 0 8px;
                                            margin-top: 5px;
                                            border-left: 1px solid #ccc;
                                        }
                                    }
                                }
                            }
                        }

                        // &:hover {
                        //     .item-list {
                        //         display: block;
                        //     }
                        // }
                    }
                }
            }
        }
    }
</style>