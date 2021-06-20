define(["app"], (App) => {
    return (params) => {
        return App.Page({
            data() {
                return {
                    pageOptions: this.createPageOptions(),
                }
            },
            render(h) {
                return h("page", {
                    props: {
                        options: this.pageOptions,
                    }
                }, [
                    h("div", { class: "Content flex-1 flex-v center scroll-y", ref: "Content" }, [
                        h("div", {}, "openKaiOS Store"),
                        h("div", {}, "基于 bHacker Store 的第三方应用商店。"),
                        h("div", {}, "Contributors"),
                        h("div", {}, params.contributors),
                        h("div", {}, "Respect"),
                        h("div", {}, "Respect the licenses of the apps, it would be nice if you use app more often to support the developer with a donation. Thanks!"),
                        h("div", {}, "隐私政策和使用条款"),
                        h("div", {}, "参见：https://docs.openkaios.top/#/store/terms"),
                    ]),
                    h("div", { class: "BuildTime flex-h center" }, [
                        h("div", {}, "编译时间：" + params.updateTime)
                    ])
                ]);
            },
            mounted() {

            },
            methods: {
                onStart() {
                    this.themeDark();
                },
                createPageOptions() {
                    let context = this;
                    return {
                        toolBar: {
                            title: "关于",
                        },
                        navigationBar: {
                            show: true,
                            options: {
                                right: "返回",
                                on: {
                                    keyPress: {
                                        softRight: () => {
                                            this.close();
                                        },
                                    },
                                    keyDown: {
                                        arrowDown: () => {
                                            this.$refs.Content.scrollBy({
                                                behavior: "smooth",
                                                top: 50,
                                            });
                                        },
                                        arrowUp: () => {
                                            this.$refs.Content.scrollBy({
                                                behavior: "smooth",
                                                top: -50,
                                            });
                                        },
                                    },
                                }
                            },
                        }
                    }
                }
            }
        });
    }
});