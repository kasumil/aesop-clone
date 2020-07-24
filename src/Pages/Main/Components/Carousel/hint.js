function(e, t, n) {
    "use strict";
    var r = n(4)
      , o = n.n(r)
      , i = n(5)
      , a = n.n(i)
      , s = n(22)
      , d = n.n(s)
      , u = n(452)
      , l = n.n(u)
      , c = n(61)
      , h = n(423)
      , p = function() {
        function e(t) {
            var n = this
              , r = t.element
              , i = t.store;
            o()(this, e),
            this.$el = d()(r),
            this.store = i,
            this.$scrollWrapper = this.$el.find('[data-ref="FabulistArticleCarousel-scrollWrapper"]'),
            this.$scrollableImages = this.$el.find('[data-ref="FabulistArticleCarousel-scrollableImages"]'),
            this.$carouselNavPrev = this.$el.find('[data-ref="FabulistArticleCarouselNav-prev"]'),
            this.$carouselNavNext = this.$el.find('[data-ref="FabulistArticleCarouselNav-next"]'),
            this.$carouselNavPrevBtn = this.$carouselNavPrev.find('[data-ref="FabulistArticleCarouselNav-btn"]'),
            this.$carouselNavNextBtn = this.$carouselNavNext.find('[data-ref="FabulistArticleCarouselNav-btn"]'),
            this.$scrollbar = this.$el.find('[data-ref="scrollbar"]'),
            this.$allCarouselImages = this.$scrollableImages.find("img"),
            this.setCarouselArrowAvailability = this.setCarouselArrowAvailability.bind(this),
            Object(c.a)(i, function(e) {
                return e.globals.hasTouch
            }, this.handleHasTouchChange.bind(this)),
            Object(h.a)(this.$allCarouselImages).then(function() {
                n.initializeFlickity()
            })
        }
        return a()(e, [{
            key: "initializeFlickity",
            value: function() {
                var e = this;
                this.flickity = new l.a(this.$scrollWrapper.get(0),{
                    cellAlign: "left",
                    contain: !0,
                    pageDots: !1,
                    prevNextButtons: !1,
                    groupCells: !0
                });
                var t = 1 / this.flickity.slides.length * 100;
                this.$scrollbar.css("width", "".concat(t, "%")),
                this.flickity.on("scroll", function(n, r) {
                    var o = r / e.flickity.slidesWidth * (100 - t);
                    e.$scrollbar.css("left", "".concat(o, "%"))
                }),
                this.setCarouselArrowAvailability(),
                this.$carouselNavPrevBtn.on("click", function() {
                    return e.flickity.previous(!0)
                }),
                this.$carouselNavNextBtn.on("click", function() {
                    return e.flickity.next(!0)
                })
            }
        }, {
            key: "handleHasTouchChange",
            value: function(e) {
                e && (this.$carouselNavPrev.css({
                    display: "none"
                }),
                this.$carouselNavNext.css({
                    display: "none"
                }))
            }
        }, {
            key: "setCarouselArrowAvailability",
            value: function() {
                this.$carouselNavPrevBtn.prop("disabled", !1).removeClass("is-disabled"),
                this.flickity.selectedIndex && this.$carouselNavPrevBtn.prop("disabled", !0).addClass("is-disabled")
            }
        }]),
        e
    }();
    t.a = p
}