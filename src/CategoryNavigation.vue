<template>
    <div class="type-choose-wrap">
        <div class="header-wrap" v-show="!viewAllTypes">
            <div class="header-wrap-inner">
                <div class="types-header" ref="header">
                    <div class="type-item" @click="selectType(0)" :class="{'selected': currentType == 0}">全部</div>
                    <div class="type-item" v-for="stc in stcList" :class="{'selected': currentType == stc.stc_id}" @click="selectType(stc.stc_id)">{{stc.stc_name}}</div>
                </div>
            </div>
            <div class="pull-down" @click="showAllTypes(true)"></div>
        </div>

        <div class="types-panel" v-show="viewAllTypes">
            <div class="panel-header" @click="showAllTypes(false);">
                <div class="type-item">全部分类</div>
                <div class="pull-up" @click="showAllTypes(false)"></div>
            </div>
            <div class="types-list">
                <div class="list-item" v-for="stc in stcList" :class="{'selected': currentType == stc.stc_id}" @click="selectType(stc.stc_id)">{{stc.stc_name}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import ScrollUtils from './ScrollUtils';

    const WINDOW_WIDTH = window.innerWidth;
    export default {
        name: 'category-navigation',
        data() {
            return {
                stcList: [
                    {stc_id: 2, stc_name: '方便速食'},
                    {stc_id: 3, stc_name: '饮料'},
                    {stc_id: 4, stc_name: '休闲食品'},
                    {stc_id: 5, stc_name: '牛奶乳品'},
                    {stc_id: 6, stc_name: '米面粮油'},
                    {stc_id: 7, stc_name: '饼干点心'},
                    {stc_id: 8, stc_name: '矿泉水'},
                    {stc_id: 9, stc_name: '啤酒'},
                    {stc_id: 10, stc_name: '糖果巧克力'},
                    {stc_id: 11, stc_name: '膨化食品'},
                    {stc_id: 12, stc_name: '冲调饮品'},
                    {stc_id: 13, stc_name: '日用百货'},
                    {stc_id: 14, stc_name: '儿童玩具'},
                    {stc_id: 15, stc_name: '调料'},
                    {stc_id: 16, stc_name: '个人洗护'}
                ],
                currentType: 0,
                viewAllTypes: false
            }
        },
        methods: {
            showAllTypes: function(value) {
                this.viewAllTypes = value;
            },
            selectType: function(type) {
                this.currentType = type;
                this.viewAllTypes = false;
                this.$nextTick(() => {
                    var domHeader = this.$refs.header;
                    var itemSelected = domHeader.querySelector('.type-item.selected');
                    var itemWidth = itemSelected.offsetWidth;
                    var itemLeft = itemSelected.offsetLeft;
                    var destOffset = itemLeft - (WINDOW_WIDTH - itemWidth) / 2;
                    if (destOffset < 0) {
                        destOffset = 0;
                    }

                    ScrollUtils.scrollLeft(domHeader, destOffset);
                });

                // TODO 在这里将type传播出去, 可使用Vuex/$emit-$on/事件总线的方式
            },
        }
    }
</script>

<style>
    ::-webkit-scrollbar {
        display: none;
    }

    .type-choose-wrap {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 45px;
        box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
        z-index: 11;
    }

    .header-wrap {
        position: relative;
    }

    .types-header, .panel-header {
        height: 45px;
        display: flex;
        flex-wrap: nowrap;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
    }

    .panel-header {
        background-color: #63c470;
        justify-content: space-between;
    }

    .pull-up {
        height: 45px;
        width: 45px;
        background: url('http://img.ishequ360.com/images/zg/supply/triangle-arrow-up.png') no-repeat center;
        background-size: 8px 5px;
    }

    .header-wrap-inner {
        background-color: #63c470;
        padding-right: 45px;
    }

    .pull-down {
        position: absolute;
        top: 0;
        right: 0;
        height: 45px;
        width: 45px;
        background: url('http://img.ishequ360.com/images/zg/supply/triangle-arrow-down.png') no-repeat center;
        background-size: 8px 5px;
    }

    .type-item {
        flex-shrink: 0;
        height: 44px;
        margin: 0 14px;
        line-height: 44px;
        color: #ffffff;
    }

    .type-item.selected {
        border-bottom: 2px solid #ffffff;
        font-weight: bold;
    }

    .types-list {
        background-color: #fff;
        font-size: 14px;
        color: #333333;
        display: flex;
        flex-wrap: wrap;
    }

    .list-item {
        height: 45px;
        line-height: 45px;
        text-align: center;
        flex-shrink: 0;
        width: 25%;
    }

    .list-item.selected {
        font-weight: bold;
        color: #63c470;
        border-bottom: 2px solid #63c470;
    }
</style>