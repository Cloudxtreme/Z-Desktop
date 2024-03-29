/***

 * --- --- --- --- ---
 * Zohannah
 * Khaleel Mughal
 * --- --- --- --- ---
 * #Z1
 * --- --- --- --- ---

***/function isTablet() {
  return jQuery("body").width() < 1180 && jQuery("body").width() >= 768 ? !0 : !1
}

function isDesktop() {
  return jQuery("body").width() >= 1180 ? !0 : !1
}

function isMobile() {
  return jQuery("body").width() < 768 ? !0 : !1
}

function isRealDesktop() {
  return window.innerWidth >= 769 ? !0 : !1
}

function arrangeSubnavChildrens(selector) {
  jQuery(selector).each(function(key, val) {
    var nrOfChildrens = jQuery(val).children().length;
    jQuery(val).addClass(4 > nrOfChildrens ? "nix-left-childrens-m40" : nrOfChildrens >= 4 && 6 > nrOfChildrens ? "nix-justify-childrens" : "nix-left-childrens-m20")
  })
}

function deactivateAll(element) {
  Modernizr.touch && $("#navbar-tablet-bg").removeClass("active"), clearTimeout(switchClassTimer), clearTimeout(timeoutEnter), clearTimeout(timeoutExit), clearTimeout(timeoutExitHovered), (jQuery(element).hasClass("active") || jQuery(element).hasClass("set")) && (jQuery(element).removeClass("active"), jQuery(element).removeClass("set"), jQuery(element).children(".nix-nav-submenu").css({
    transition: "height 0.3s ease-in-out"
  }), jQuery(element).children(".nix-nav-submenu").css({
    height: 0
  })), timeoutExit = setTimeout(function() {
    deactivateOthers();
    var active = jQuery(".nav.navbar-nav.nix-nav-list > li.active").length,
      setted = jQuery(".nav.navbar-nav.nix-nav-list > li.set").length;
    0 == active && 0 == setted && (jQuery(".navbar-overlay").css({
      height: 0
    }), timeoutExitHovered = setTimeout(function() {
      clearTimeout(switchClassTimer), clearTimeout(timeoutEnter), jQuery(".navbar.nix-navbar").removeClass("nix-navbar-hovered"), jQuery(".navbar-overlay").removeAttr("style")
    }, 250))
  }, 250)
}

function deactivateOthers() {
  clearTimeout(timeoutEnter), clearTimeout(switchClassTimer), clearTimeout(timeoutExitHovered), jQuery(".nav.navbar-nav.nix-nav-list > li").each(function(key, element) {
    jQuery(element).removeClass("set"), jQuery(element).removeClass("active"), jQuery(element).children(".nix-nav-submenu").css({
      transition: "height 0.3s ease-in-out"
    }), jQuery(element).children(".nix-nav-submenu").css({
      height: 0
    })
  })
}

function mobileChecker() {
  var check = !1;
  return function(a) {
    (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) && (check = !0)
  }(navigator.userAgent || navigator.vendor || window.opera), check
}

function calculateScroll(sliderHeight, selector) {
  mobileChecker() || "undefined" == typeof selector && (selector = this || window)
}

function removeDiacritics(str) {
    return str.replace(/[^A-Za-z0-9\s]/g, function(a) {
      return diacriticsMap[a] || a
    })
  } + function($) {
    "use strict";

    function transitionEnd() {
      var el = document.createElement("bootstrap"),
        transEndEventNames = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend"
        };
      for (var name in transEndEventNames)
        if (void 0 !== el.style[name]) return {
          end: transEndEventNames[name]
        };
      return !1
    }
    $.fn.emulateTransitionEnd = function(duration) {
      var called = !1,
        $el = this;
      $(this).one($.support.transition.end, function() {
        called = !0
      });
      var callback = function() {
        called || $($el).trigger($.support.transition.end)
      };
      return setTimeout(callback, duration), this
    }, $(function() {
      $.support.transition = transitionEnd()
    })
  }(jQuery), + function($) {
    "use strict";
    var dismiss = '[data-dismiss="alert"]',
      Alert = function(el) {
        $(el).on("click", dismiss, this.close)
      };
    Alert.prototype.close = function(e) {
      function removeElement() {
        $parent.trigger("closed.bs.alert").remove()
      }
      var $this = $(this),
        selector = $this.attr("data-target");
      selector || (selector = $this.attr("href"), selector = selector && selector.replace(/.*(?=#[^\s]*$)/, ""));
      var $parent = $(selector);
      e && e.preventDefault(), $parent.length || ($parent = $this.hasClass("alert") ? $this : $this.parent()), $parent.trigger(e = $.Event("close.bs.alert")), e.isDefaultPrevented() || ($parent.removeClass("in"), $.support.transition && $parent.hasClass("fade") ? $parent.one($.support.transition.end, removeElement).emulateTransitionEnd(150) : removeElement())
    };
    var old = $.fn.alert;
    $.fn.alert = function(option) {
      return this.each(function() {
        var $this = $(this),
          data = $this.data("bs.alert");
        data || $this.data("bs.alert", data = new Alert(this)), "string" == typeof option && data[option].call($this)
      })
    }, $.fn.alert.Constructor = Alert, $.fn.alert.noConflict = function() {
      return $.fn.alert = old, this
    }, $(document).on("click.bs.alert.data-api", dismiss, Alert.prototype.close)
  }(jQuery), + function($) {
    "use strict";
    var Button = function(element, options) {
      this.$element = $(element), this.options = $.extend({}, Button.DEFAULTS, options), this.isLoading = !1
    };
    Button.DEFAULTS = {
      loadingText: "loading..."
    }, Button.prototype.setState = function(state) {
      var d = "disabled",
        $el = this.$element,
        val = $el.is("input") ? "val" : "html",
        data = $el.data();
      state += "Text", data.resetText || $el.data("resetText", $el[val]()), $el[val](data[state] || this.options[state]), setTimeout($.proxy(function() {
        "loadingText" == state ? (this.isLoading = !0, $el.addClass(d).attr(d, d)) : this.isLoading && (this.isLoading = !1, $el.removeClass(d).removeAttr(d))
      }, this), 0)
    }, Button.prototype.toggle = function() {
      var changed = !0,
        $parent = this.$element.closest('[data-toggle="buttons"]');
      if ($parent.length) {
        var $input = this.$element.find("input");
        "radio" == $input.prop("type") && ($input.prop("checked") && this.$element.hasClass("active") ? changed = !1 : $parent.find(".active").removeClass("active")), changed && $input.prop("checked", !this.$element.hasClass("active")).trigger("change")
      }
      changed && this.$element.toggleClass("active")
    };
    var old = $.fn.button;
    $.fn.button = function(option) {
      return this.each(function() {
        var $this = $(this),
          data = $this.data("bs.button"),
          options = "object" == typeof option && option;
        data || $this.data("bs.button", data = new Button(this, options)), "toggle" == option ? data.toggle() : option && data.setState(option)
      })
    }, $.fn.button.Constructor = Button, $.fn.button.noConflict = function() {
      return $.fn.button = old, this
    }, $(document).on("click.bs.button.data-api", "[data-toggle^=button]", function(e) {
      var $btn = $(e.target);
      $btn.hasClass("btn") || ($btn = $btn.closest(".btn")), $btn.button("toggle"), e.preventDefault()
    })
  }(jQuery), + function($) {
    "use strict";
    var Collapse = function(element, options) {
      this.$element = $(element), this.options = $.extend({}, Collapse.DEFAULTS, options), this.transitioning = null, this.options.parent && (this.$parent = $(this.options.parent)), this.options.toggle && this.toggle()
    };
    Collapse.DEFAULTS = {
      toggle: !0
    }, Collapse.prototype.dimension = function() {
      var hasWidth = this.$element.hasClass("width");
      return hasWidth ? "width" : "height"
    }, Collapse.prototype.show = function() {
      if (!this.transitioning && !this.$element.hasClass("in")) {
        var startEvent = $.Event("show.bs.collapse");
        if (this.$element.trigger(startEvent), !startEvent.isDefaultPrevented()) {
          var actives = this.$parent && this.$parent.find("> .panel > .in");
          if (actives && actives.length) {
            var hasData = actives.data("bs.collapse");
            if (hasData && hasData.transitioning) return;
            actives.collapse("hide"), hasData || actives.data("bs.collapse", null)
          }
          var dimension = this.dimension();
          this.$element.removeClass("collapse").addClass("collapsing")[dimension](0), this.transitioning = 1;
          var complete = function() {
            this.$element.removeClass("collapsing").addClass("collapse in")[dimension]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
          };
          if (!$.support.transition) return complete.call(this);
          var scrollSize = $.camelCase(["scroll", dimension].join("-"));
          this.$element.one($.support.transition.end, $.proxy(complete, this)).emulateTransitionEnd(350)[dimension](this.$element[0][scrollSize])
        }
      }
    }, Collapse.prototype.hide = function() {
      if (!this.transitioning && this.$element.hasClass("in")) {
        var startEvent = $.Event("hide.bs.collapse");
        if (this.$element.trigger(startEvent), !startEvent.isDefaultPrevented()) {
          var dimension = this.dimension();
          this.$element[dimension](this.$element[dimension]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
          var complete = function() {
            this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
          };
          return $.support.transition ? void this.$element[dimension](0).one($.support.transition.end, $.proxy(complete, this)).emulateTransitionEnd(350) : complete.call(this)
        }
      }
    }, Collapse.prototype.toggle = function() {
      this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var old = $.fn.collapse;
    $.fn.collapse = function(option) {
      return this.each(function() {
        var $this = $(this),
          data = $this.data("bs.collapse"),
          options = $.extend({}, Collapse.DEFAULTS, $this.data(), "object" == typeof option && option);
        !data && options.toggle && "show" == option && (option = !option), data || $this.data("bs.collapse", data = new Collapse(this, options)), "string" == typeof option && data[option]()
      })
    }, $.fn.collapse.Constructor = Collapse, $.fn.collapse.noConflict = function() {
      return $.fn.collapse = old, this
    }, $(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function(e) {
      var href, $this = $(this),
        target = $this.attr("data-target") || e.preventDefault() || (href = $this.attr("href")) && href.replace(/.*(?=#[^\s]+$)/, ""),
        $target = $(target),
        data = $target.data("bs.collapse"),
        option = data ? "toggle" : $this.data(),
        parent = $this.attr("data-parent"),
        $parent = parent && $(parent);
      data && data.transitioning || ($parent && $parent.find('[data-toggle=collapse][data-parent="' + parent + '"]').not($this).addClass("collapsed"), $this[$target.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), $target.collapse(option)
    })
  }(jQuery), + function($) {
    "use strict";

    function clearMenus(e) {
      $(backdrop).remove(), $(toggle).each(function() {
        var $parent = getParent($(this)),
          relatedTarget = {
            relatedTarget: this
          };
        $parent.hasClass("open") && ($parent.trigger(e = $.Event("hide.bs.dropdown", relatedTarget)), e.isDefaultPrevented() || $parent.removeClass("open").trigger("hidden.bs.dropdown", relatedTarget))
      })
    }

    function getParent($this) {
      var selector = $this.attr("data-target");
      selector || (selector = $this.attr("href"), selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, ""));
      var $parent = selector && $(selector);
      return $parent && $parent.length ? $parent : $this.parent()
    }
    var backdrop = ".dropdown-backdrop",
      toggle = "[data-toggle=dropdown]",
      Dropdown = function(element) {
        $(element).on("click.bs.dropdown", this.toggle)
      };
    Dropdown.prototype.toggle = function(e) {
      var $this = $(this);
      if (!$this.is(".disabled, :disabled")) {
        var $parent = getParent($this),
          isActive = $parent.hasClass("open");
        if (clearMenus(), !isActive) {
          "ontouchstart" in document.documentElement && !$parent.closest(".navbar-nav").length && $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on("click", clearMenus);
          var relatedTarget = {
            relatedTarget: this
          };
          if ($parent.trigger(e = $.Event("show.bs.dropdown", relatedTarget)), e.isDefaultPrevented()) return;
          $parent.toggleClass("open").trigger("shown.bs.dropdown", relatedTarget), $this.focus()
        }
        return !1
      }
    }, Dropdown.prototype.keydown = function(e) {
      if (/(38|40|27)/.test(e.keyCode)) {
        var $this = $(this);
        if (e.preventDefault(), e.stopPropagation(), !$this.is(".disabled, :disabled")) {
          var $parent = getParent($this),
            isActive = $parent.hasClass("open");
          if (!isActive || isActive && 27 == e.keyCode) return 27 == e.which && $parent.find(toggle).focus(), $this.click();
          var desc = " li:not(.divider):visible a",
            $items = $parent.find("[role=menu]" + desc + ", [role=listbox]" + desc);
          if ($items.length) {
            var index = $items.index($items.filter(":focus"));
            38 == e.keyCode && index > 0 && index--, 40 == e.keyCode && index < $items.length - 1 && index++, ~index || (index = 0), $items.eq(index).focus()
          }
        }
      }
    };
    var old = $.fn.dropdown;
    $.fn.dropdown = function(option) {
      return this.each(function() {
        var $this = $(this),
          data = $this.data("bs.dropdown");
        data || $this.data("bs.dropdown", data = new Dropdown(this)), "string" == typeof option && data[option].call($this)
      })
    }, $.fn.dropdown.Constructor = Dropdown, $.fn.dropdown.noConflict = function() {
      return $.fn.dropdown = old, this
    }, $(document).on("click.bs.dropdown.data-api", clearMenus).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
      e.stopPropagation()
    }).on("click.bs.dropdown.data-api", toggle, Dropdown.prototype.toggle).on("keydown.bs.dropdown.data-api", toggle + ", [role=menu], [role=listbox]", Dropdown.prototype.keydown)
  }(jQuery), + function($) {
    "use strict";
    var Modal = function(element, options) {
      this.options = options, this.$element = $(element), this.$backdrop = this.isShown = null, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, $.proxy(function() {
        this.$element.trigger("loaded.bs.modal")
      }, this))
    };
    Modal.DEFAULTS = {
      backdrop: !0,
      keyboard: !0,
      show: !0
    }, Modal.prototype.toggle = function(_relatedTarget) {
      return this[this.isShown ? "hide" : "show"](_relatedTarget)
    }, Modal.prototype.show = function(_relatedTarget) {
      var that = this,
        e = $.Event("show.bs.modal", {
          relatedTarget: _relatedTarget
        });
      this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', $.proxy(this.hide, this)), this.backdrop(function() {
        var transition = $.support.transition && that.$element.hasClass("fade");
        that.$element.parent().length || that.$element.appendTo(document.body), that.$element.show().scrollTop(0), transition && that.$element[0].offsetWidth, that.$element.addClass("in").attr("aria-hidden", !1), that.enforceFocus();
        var e = $.Event("shown.bs.modal", {
          relatedTarget: _relatedTarget
        });
        transition ? that.$element.find(".modal-dialog").one($.support.transition.end, function() {
          that.$element.focus().trigger(e)
        }).emulateTransitionEnd(300) : that.$element.focus().trigger(e)
      }))
    }, Modal.prototype.hide = function(e) {
      e && e.preventDefault(), e = $.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), $(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), $.support.transition && this.$element.hasClass("fade") ? this.$element.one($.support.transition.end, $.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, Modal.prototype.enforceFocus = function() {
      $(document).off("focusin.bs.modal").on("focusin.bs.modal", $.proxy(function(e) {
        this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.focus()
      }, this))
    }, Modal.prototype.escape = function() {
      this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", $.proxy(function(e) {
        27 == e.which && this.hide()
      }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, Modal.prototype.hideModal = function() {
      var that = this;
      this.$element.hide(), this.backdrop(function() {
        that.removeBackdrop(), that.$element.trigger("hidden.bs.modal")
      })
    }, Modal.prototype.removeBackdrop = function() {
      this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, Modal.prototype.backdrop = function(callback) {
      var animate = this.$element.hasClass("fade") ? "fade" : "";
      if (this.isShown && this.options.backdrop) {
        var doAnimate = $.support.transition && animate;
        if (this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />').appendTo(document.body), this.$element.on("click.dismiss.bs.modal", $.proxy(function(e) {
            e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
          }, this)), doAnimate && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !callback) return;
        doAnimate ? this.$backdrop.one($.support.transition.end, callback).emulateTransitionEnd(150) : callback()
      } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), $.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one($.support.transition.end, callback).emulateTransitionEnd(150) : callback()) : callback && callback()
    };
    var old = $.fn.modal;
    $.fn.modal = function(option, _relatedTarget) {
      return this.each(function() {
        var $this = $(this),
          data = $this.data("bs.modal"),
          options = $.extend({}, Modal.DEFAULTS, $this.data(), "object" == typeof option && option);
        data || $this.data("bs.modal", data = new Modal(this, options)), "string" == typeof option ? data[option](_relatedTarget) : options.show && data.show(_relatedTarget)
      })
    }, $.fn.modal.Constructor = Modal, $.fn.modal.noConflict = function() {
      return $.fn.modal = old, this
    }, $(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(e) {
      var $this = $(this),
        href = $this.attr("href"),
        $target = $($this.attr("data-target") || href && href.replace(/.*(?=#[^\s]+$)/, "")),
        option = $target.data("bs.modal") ? "toggle" : $.extend({
          remote: !/#/.test(href) && href
        }, $target.data(), $this.data());
      $this.is("a") && e.preventDefault(), $target.modal(option, this).one("hide", function() {
        $this.is(":visible") && $this.focus()
      })
    }), $(document).on("show.bs.modal", ".modal", function() {
      $(document.body).addClass("modal-open")
    }).on("hidden.bs.modal", ".modal", function() {
      $(document.body).removeClass("modal-open")
    })
  }(jQuery), + function($) {
    "use strict";
    var Tooltip = function(element, options) {
      this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", element, options)
    };
    Tooltip.DEFAULTS = {
      animation: !0,
      placement: "top",
      selector: !1,
      template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      container: !1
    }, Tooltip.prototype.init = function(type, element, options) {
      this.enabled = !0, this.type = type, this.$element = $(element), this.options = this.getOptions(options);
      for (var triggers = this.options.trigger.split(" "), i = triggers.length; i--;) {
        var trigger = triggers[i];
        if ("click" == trigger) this.$element.on("click." + this.type, this.options.selector, $.proxy(this.toggle, this));
        else if ("manual" != trigger) {
          var eventIn = "hover" == trigger ? "mouseenter" : "focusin",
            eventOut = "hover" == trigger ? "mouseleave" : "focusout";
          this.$element.on(eventIn + "." + this.type, this.options.selector, $.proxy(this.enter, this)), this.$element.on(eventOut + "." + this.type, this.options.selector, $.proxy(this.leave, this))
        }
      }
      this.options.selector ? this._options = $.extend({}, this.options, {
        trigger: "manual",
        selector: ""
      }) : this.fixTitle()
    }, Tooltip.prototype.getDefaults = function() {
      return Tooltip.DEFAULTS
    }, Tooltip.prototype.getOptions = function(options) {
      return options = $.extend({}, this.getDefaults(), this.$element.data(), options), options.delay && "number" == typeof options.delay && (options.delay = {
        show: options.delay,
        hide: options.delay
      }), options
    }, Tooltip.prototype.getDelegateOptions = function() {
      var options = {},
        defaults = this.getDefaults();
      return this._options && $.each(this._options, function(key, value) {
        defaults[key] != value && (options[key] = value)
      }), options
    }, Tooltip.prototype.enter = function(obj) {
      var self = obj instanceof this.constructor ? obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
      return clearTimeout(self.timeout), self.hoverState = "in", self.options.delay && self.options.delay.show ? void(self.timeout = setTimeout(function() {
        "in" == self.hoverState && self.show()
      }, self.options.delay.show)) : self.show()
    }, Tooltip.prototype.leave = function(obj) {
      var self = obj instanceof this.constructor ? obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
      return clearTimeout(self.timeout), self.hoverState = "out", self.options.delay && self.options.delay.hide ? void(self.timeout = setTimeout(function() {
        "out" == self.hoverState && self.hide()
      }, self.options.delay.hide)) : self.hide()
    }, Tooltip.prototype.show = function() {
      var e = $.Event("show.bs." + this.type);
      if (this.hasContent() && this.enabled) {
        if (this.$element.trigger(e), e.isDefaultPrevented()) return;
        var that = this,
          $tip = this.tip();
        this.setContent(), this.options.animation && $tip.addClass("fade");
        var placement = "function" == typeof this.options.placement ? this.options.placement.call(this, $tip[0], this.$element[0]) : this.options.placement,
          autoToken = /\s?auto?\s?/i,
          autoPlace = autoToken.test(placement);
        autoPlace && (placement = placement.replace(autoToken, "") || "top"), $tip.detach().css({
          top: 0,
          left: 0,
          display: "block"
        }).addClass(placement), this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element);
        var pos = this.getPosition(),
          actualWidth = $tip[0].offsetWidth,
          actualHeight = $tip[0].offsetHeight;
        if (autoPlace) {
          var $parent = this.$element.parent(),
            orgPlacement = placement,
            docScroll = document.documentElement.scrollTop || document.body.scrollTop,
            parentWidth = "body" == this.options.container ? window.innerWidth : $parent.outerWidth(),
            parentHeight = "body" == this.options.container ? window.innerHeight : $parent.outerHeight(),
            parentLeft = "body" == this.options.container ? 0 : $parent.offset().left;
          placement = "bottom" == placement && pos.top + pos.height + actualHeight - docScroll > parentHeight ? "top" : "top" == placement && pos.top - docScroll - actualHeight < 0 ? "bottom" : "right" == placement && pos.right + actualWidth > parentWidth ? "left" : "left" == placement && pos.left - actualWidth < parentLeft ? "right" : placement, $tip.removeClass(orgPlacement).addClass(placement)
        }
        var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight);
        this.applyPlacement(calculatedOffset, placement), this.hoverState = null;
        var complete = function() {
          that.$element.trigger("shown.bs." + that.type)
        };
        $.support.transition && this.$tip.hasClass("fade") ? $tip.one($.support.transition.end, complete).emulateTransitionEnd(150) : complete()
      }
    }, Tooltip.prototype.applyPlacement = function(offset, placement) {
      var replace, $tip = this.tip(),
        width = $tip[0].offsetWidth,
        height = $tip[0].offsetHeight,
        marginTop = parseInt($tip.css("margin-top"), 10),
        marginLeft = parseInt($tip.css("margin-left"), 10);
      isNaN(marginTop) && (marginTop = 0), isNaN(marginLeft) && (marginLeft = 0), offset.top = offset.top + marginTop, offset.left = offset.left + marginLeft, $.offset.setOffset($tip[0], $.extend({
        using: function(props) {
          $tip.css({
            top: Math.round(props.top),
            left: Math.round(props.left)
          })
        }
      }, offset), 0), $tip.addClass("in");
      var actualWidth = $tip[0].offsetWidth,
        actualHeight = $tip[0].offsetHeight;
      if ("top" == placement && actualHeight != height && (replace = !0, offset.top = offset.top + height - actualHeight), /bottom|top/.test(placement)) {
        var delta = 0;
        offset.left < 0 && (delta = -2 * offset.left, offset.left = 0, $tip.offset(offset), actualWidth = $tip[0].offsetWidth, actualHeight = $tip[0].offsetHeight), this.replaceArrow(delta - width + actualWidth, actualWidth, "left")
      } else this.replaceArrow(actualHeight - height, actualHeight, "top");
      replace && $tip.offset(offset)
    }, Tooltip.prototype.replaceArrow = function(delta, dimension, position) {
      this.arrow().css(position, delta ? 50 * (1 - delta / dimension) + "%" : "")
    }, Tooltip.prototype.setContent = function() {
      var $tip = this.tip(),
        title = this.getTitle();
      $tip.find(".tooltip-inner")[this.options.html ? "html" : "text"](title), $tip.removeClass("fade in top bottom left right")
    }, Tooltip.prototype.hide = function() {
      function complete() {
        "in" != that.hoverState && $tip.detach(), that.$element.trigger("hidden.bs." + that.type)
      }
      var that = this,
        $tip = this.tip(),
        e = $.Event("hide.bs." + this.type);
      return this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : ($tip.removeClass("in"), $.support.transition && this.$tip.hasClass("fade") ? $tip.one($.support.transition.end, complete).emulateTransitionEnd(150) : complete(), this.hoverState = null, this)
    }, Tooltip.prototype.fixTitle = function() {
      var $e = this.$element;
      ($e.attr("title") || "string" != typeof $e.attr("data-original-title")) && $e.attr("data-original-title", $e.attr("title") || "").attr("title", "")
    }, Tooltip.prototype.hasContent = function() {
      return this.getTitle()
    }, Tooltip.prototype.getPosition = function() {
      var el = this.$element[0];
      return $.extend({}, "function" == typeof el.getBoundingClientRect ? el.getBoundingClientRect() : {
        width: el.offsetWidth,
        height: el.offsetHeight
      }, this.$element.offset())
    }, Tooltip.prototype.getCalculatedOffset = function(placement, pos, actualWidth, actualHeight) {
      return "bottom" == placement ? {
        top: pos.top + pos.height,
        left: pos.left + pos.width / 2 - actualWidth / 2
      } : "top" == placement ? {
        top: pos.top - actualHeight,
        left: pos.left + pos.width / 2 - actualWidth / 2
      } : "left" == placement ? {
        top: pos.top + pos.height / 2 - actualHeight / 2,
        left: pos.left - actualWidth
      } : {
        top: pos.top + pos.height / 2 - actualHeight / 2,
        left: pos.left + pos.width
      }
    }, Tooltip.prototype.getTitle = function() {
      var title, $e = this.$element,
        o = this.options;
      return title = $e.attr("data-original-title") || ("function" == typeof o.title ? o.title.call($e[0]) : o.title)
    }, Tooltip.prototype.tip = function() {
      return this.$tip = this.$tip || $(this.options.template)
    }, Tooltip.prototype.arrow = function() {
      return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, Tooltip.prototype.validate = function() {
      this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, Tooltip.prototype.enable = function() {
      this.enabled = !0
    }, Tooltip.prototype.disable = function() {
      this.enabled = !1
    }, Tooltip.prototype.toggleEnabled = function() {
      this.enabled = !this.enabled
    }, Tooltip.prototype.toggle = function(e) {
      var self = e ? $(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
      self.tip().hasClass("in") ? self.leave(self) : self.enter(self)
    }, Tooltip.prototype.destroy = function() {
      clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var old = $.fn.tooltip;
    $.fn.tooltip = function(option) {
      return this.each(function() {
        var $this = $(this),
          data = $this.data("bs.tooltip"),
          options = "object" == typeof option && option;
        (data || "destroy" != option) && (data || $this.data("bs.tooltip", data = new Tooltip(this, options)), "string" == typeof option && data[option]())
      })
    }, $.fn.tooltip.Constructor = Tooltip, $.fn.tooltip.noConflict = function() {
      return $.fn.tooltip = old, this
    }
  }(jQuery), + function($) {
    "use strict";
    var Popover = function(element, options) {
      this.init("popover", element, options)
    };
    if (!$.fn.tooltip) throw new Error("Popover requires tooltip.js");
    Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
      placement: "right",
      trigger: "click",
      content: "",
      template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype), Popover.prototype.constructor = Popover, Popover.prototype.getDefaults = function() {
      return Popover.DEFAULTS
    }, Popover.prototype.setContent = function() {
      var $tip = this.tip(),
        title = this.getTitle(),
        content = this.getContent();
      $tip.find(".popover-title")[this.options.html ? "html" : "text"](title), $tip.find(".popover-content")[this.options.html ? "string" == typeof content ? "html" : "append" : "text"](content), $tip.removeClass("fade top bottom left right in"), $tip.find(".popover-title").html() || $tip.find(".popover-title").hide()
    }, Popover.prototype.hasContent = function() {
      return this.getTitle() || this.getContent()
    }, Popover.prototype.getContent = function() {
      var $e = this.$element,
        o = this.options;
      return $e.attr("data-content") || ("function" == typeof o.content ? o.content.call($e[0]) : o.content)
    }, Popover.prototype.arrow = function() {
      return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, Popover.prototype.tip = function() {
      return this.$tip || (this.$tip = $(this.options.template)), this.$tip
    };
    var old = $.fn.popover;
    $.fn.popover = function(option) {
      return this.each(function() {
        var $this = $(this),
          data = $this.data("bs.popover"),
          options = "object" == typeof option && option;
        (data || "destroy" != option) && (data || $this.data("bs.popover", data = new Popover(this, options)), "string" == typeof option && data[option]())
      })
    }, $.fn.popover.Constructor = Popover, $.fn.popover.noConflict = function() {
      return $.fn.popover = old, this
    }
  }(jQuery), + function($) {
    "use strict";

    function ScrollSpy(element, options) {
      var href, process = $.proxy(this.process, this);
      this.$element = $($(element).is("body") ? window : element), this.$body = $("body"), this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", process), this.options = $.extend({}, ScrollSpy.DEFAULTS, options), this.selector = (this.options.target || (href = $(element).attr("href")) && href.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.offsets = $([]), this.targets = $([]), this.activeTarget = null, this.refresh(), this.process()
    }
    ScrollSpy.DEFAULTS = {
      offset: 10
    }, ScrollSpy.prototype.refresh = function() {
      var offsetMethod = this.$element[0] == window ? "offset" : "position";
      this.offsets = $([]), this.targets = $([]); {
        var self = this;
        this.$body.find(this.selector).map(function() {
          var $el = $(this),
            href = $el.data("target") || $el.attr("href"),
            $href = /^#./.test(href) && $(href);
          return $href && $href.length && $href.is(":visible") && [
            [$href[offsetMethod]().top + (!$.isWindow(self.$scrollElement.get(0)) && self.$scrollElement.scrollTop()), href]
          ] || null
        }).sort(function(a, b) {
          return a[0] - b[0]
        }).each(function() {
          self.offsets.push(this[0]), self.targets.push(this[1])
        })
      }
    }, ScrollSpy.prototype.process = function() {
      var i, scrollTop = this.$scrollElement.scrollTop() + this.options.offset,
        scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
        maxScroll = scrollHeight - this.$scrollElement.height(),
        offsets = this.offsets,
        targets = this.targets,
        activeTarget = this.activeTarget;
      if (scrollTop >= maxScroll) return activeTarget != (i = targets.last()[0]) && this.activate(i);
      if (activeTarget && scrollTop <= offsets[0]) return activeTarget != (i = targets[0]) && this.activate(i);
      for (i = offsets.length; i--;) activeTarget != targets[i] && scrollTop >= offsets[i] && (!offsets[i + 1] || scrollTop <= offsets[i + 1]) && this.activate(targets[i])
    }, ScrollSpy.prototype.activate = function(target) {
      this.activeTarget = target, $(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
      var selector = this.selector + '[data-target="' + target + '"],' + this.selector + '[href="' + target + '"]',
        active = $(selector).parents("li").addClass("active");
      active.parent(".dropdown-menu").length && (active = active.closest("li.dropdown").addClass("active")), active.trigger("activate.bs.scrollspy")
    };
    var old = $.fn.scrollspy;
    $.fn.scrollspy = function(option) {
      return this.each(function() {
        var $this = $(this),
          data = $this.data("bs.scrollspy"),
          options = "object" == typeof option && option;
        data || $this.data("bs.scrollspy", data = new ScrollSpy(this, options)), "string" == typeof option && data[option]()
      })
    }, $.fn.scrollspy.Constructor = ScrollSpy, $.fn.scrollspy.noConflict = function() {
      return $.fn.scrollspy = old, this
    }, $(window).on("load", function() {
      $('[data-spy="scroll"]').each(function() {
        var $spy = $(this);
        $spy.scrollspy($spy.data())
      })
    })
  }(jQuery), + function($) {
    "use strict";
    var Tab = function(element) {
      this.element = $(element)
    };
    Tab.prototype.show = function() {
      var $this = this.element,
        $ul = $this.closest("ul:not(.dropdown-menu)"),
        selector = $this.data("target");
      if (selector || (selector = $this.attr("href"), selector = selector && selector.replace(/.*(?=#[^\s]*$)/, "")), !$this.parent("li").hasClass("active")) {
        var previous = $ul.find(".active:last a")[0],
          e = $.Event("show.bs.tab", {
            relatedTarget: previous
          });
        if ($this.trigger(e), !e.isDefaultPrevented()) {
          var $target = $(selector);
          this.activate($this.parent("li"), $ul), this.activate($target, $target.parent(), function() {
            $this.trigger({
              type: "shown.bs.tab",
              relatedTarget: previous
            })
          })
        }
      }
    }, Tab.prototype.activate = function(element, container, callback) {
      function next() {
        $active.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), element.addClass("active"), transition ? (element[0].offsetWidth, element.addClass("in")) : element.removeClass("fade"), element.parent(".dropdown-menu") && element.closest("li.dropdown").addClass("active"), callback && callback()
      }
      var $active = container.find("> .active"),
        transition = callback && $.support.transition && $active.hasClass("fade");
      transition ? $active.one($.support.transition.end, next).emulateTransitionEnd(150) : next(), $active.removeClass("in")
    };
    var old = $.fn.tab;
    $.fn.tab = function(option) {
      return this.each(function() {
        var $this = $(this),
          data = $this.data("bs.tab");
        data || $this.data("bs.tab", data = new Tab(this)), "string" == typeof option && data[option]()
      })
    }, $.fn.tab.Constructor = Tab, $.fn.tab.noConflict = function() {
      return $.fn.tab = old, this
    }, $(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(e) {
      e.preventDefault(), $(this).tab("show")
    })
  }(jQuery),
  function(name, context, factory) {
    var matchMedia = window.matchMedia;
    "undefined" != typeof module && module.exports ? module.exports = factory(matchMedia) : "function" == typeof define && define.amd ? define(function() {
      return context[name] = factory(matchMedia)
    }) : context[name] = factory(matchMedia)
  }("enquire", this, function(matchMedia) {
    "use strict";

    function each(collection, fn) {
      var cont, i = 0,
        length = collection.length;
      for (i; length > i && (cont = fn(collection[i], i), cont !== !1); i++);
    }

    function isArray(target) {
      return "[object Array]" === Object.prototype.toString.apply(target)
    }

    function isFunction(target) {
      return "function" == typeof target
    }

    function QueryHandler(options) {
      this.options = options, !options.deferSetup && this.setup()
    }

    function MediaQuery(query, isUnconditional) {
      this.query = query, this.isUnconditional = isUnconditional, this.handlers = [], this.mql = matchMedia(query);
      var self = this;
      this.listener = function(mql) {
        self.mql = mql, self.assess()
      }, this.mql.addListener(this.listener)
    }

    function MediaQueryDispatch() {
      if (!matchMedia) throw new Error("matchMedia not present, legacy browsers require a polyfill");
      this.queries = {}, this.browserIsIncapable = !matchMedia("only all").matches
    }
    return QueryHandler.prototype = {
      setup: function() {
        this.options.setup && this.options.setup(), this.initialised = !0
      },
      on: function() {
        !this.initialised && this.setup(), this.options.match && this.options.match()
      },
      off: function() {
        this.options.unmatch && this.options.unmatch()
      },
      destroy: function() {
        this.options.destroy ? this.options.destroy() : this.off()
      },
      equals: function(target) {
        return this.options === target || this.options.match === target
      }
    }, MediaQuery.prototype = {
      addHandler: function(handler) {
        var qh = new QueryHandler(handler);
        this.handlers.push(qh), this.matches() && qh.on()
      },
      removeHandler: function(handler) {
        var handlers = this.handlers;
        each(handlers, function(h, i) {
          return h.equals(handler) ? (h.destroy(), !handlers.splice(i, 1)) : void 0
        })
      },
      matches: function() {
        return this.mql.matches || this.isUnconditional
      },
      clear: function() {
        each(this.handlers, function(handler) {
          handler.destroy()
        }), this.mql.removeListener(this.listener), this.handlers.length = 0
      },
      assess: function() {
        var action = this.matches() ? "on" : "off";
        each(this.handlers, function(handler) {
          handler[action]()
        })
      }
    }, MediaQueryDispatch.prototype = {
      register: function(q, options, shouldDegrade) {
        var queries = this.queries,
          isUnconditional = shouldDegrade && this.browserIsIncapable;
        return queries[q] || (queries[q] = new MediaQuery(q, isUnconditional)), isFunction(options) && (options = {
          match: options
        }), isArray(options) || (options = [options]), each(options, function(handler) {
          isFunction(handler) && (handler = {
            match: handler
          }), queries[q].addHandler(handler)
        }), this
      },
      unregister: function(q, handler) {
        var query = this.queries[q];
        return query && (handler ? query.removeHandler(handler) : (query.clear(), delete this.queries[q])), this
      }
    }, new MediaQueryDispatch
  }),
  function(factory) {
    "function" == typeof define && define.amd ? define(["jquery"], factory) : factory("object" == typeof exports ? require("jquery") : jQuery)
  }(function($) {
    function encode(s) {
      return config.raw ? s : encodeURIComponent(s)
    }

    function decode(s) {
      return config.raw ? s : decodeURIComponent(s)
    }

    function stringifyCookieValue(value) {
      return encode(config.json ? JSON.stringify(value) : String(value))
    }

    function parseCookieValue(s) {
      0 === s.indexOf('"') && (s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
      try {
        return s = decodeURIComponent(s.replace(pluses, " ")), config.json ? JSON.parse(s) : s
      } catch (e) {}
    }

    function read(s, converter) {
      var value = config.raw ? s : parseCookieValue(s);
      return $.isFunction(converter) ? converter(value) : value
    }
    var pluses = /\+/g,
      config = $.cookie = function(key, value, options) {
        if (void 0 !== value && !$.isFunction(value)) {
          if (options = $.extend({}, config.defaults, options), "number" == typeof options.expires) {
            var days = options.expires,
              t = options.expires = new Date;
            t.setTime(+t + 864e5 * days)
          }
          return document.cookie = [encode(key), "=", stringifyCookieValue(value), options.expires ? "; expires=" + options.expires.toUTCString() : "", options.path ? "; path=" + options.path : "", options.domain ? "; domain=" + options.domain : "", options.secure ? "; secure" : ""].join("")
        }
        for (var result = key ? void 0 : {}, cookies = document.cookie ? document.cookie.split("; ") : [], i = 0, l = cookies.length; l > i; i++) {
          var parts = cookies[i].split("="),
            name = decode(parts.shift()),
            cookie = parts.join("=");
          if (key && key === name) {
            result = read(cookie, value);
            break
          }
          key || void 0 === (cookie = read(cookie)) || (result[name] = cookie)
        }
        return result
      };
    config.defaults = {}, $.removeCookie = function(key, options) {
      return void 0 === $.cookie(key) ? !1 : ($.cookie(key, "", $.extend({}, options, {
        expires: -1
      })), !$.cookie(key))
    }
  }),
  function(window, undefined) {
    "$:nomunge";
    var jq_throttle, $ = window.jQuery || window.Cowboy || (window.Cowboy = {});
    $.throttle = jq_throttle = function(delay, no_trailing, callback, debounce_mode) {
      function wrapper() {
        function exec() {
          last_exec = +new Date, callback.apply(that, args)
        }

        function clear() {
          timeout_id = undefined
        }
        var that = this,
          elapsed = +new Date - last_exec,
          args = arguments;
        debounce_mode && !timeout_id && exec(), timeout_id && clearTimeout(timeout_id), debounce_mode === undefined && elapsed > delay ? exec() : no_trailing !== !0 && (timeout_id = setTimeout(debounce_mode ? clear : exec, debounce_mode === undefined ? delay - elapsed : delay))
      }
      var timeout_id, last_exec = 0;
      return "boolean" != typeof no_trailing && (debounce_mode = callback, callback = no_trailing, no_trailing = undefined), $.guid && (wrapper.guid = callback.guid = callback.guid || $.guid++), wrapper
    }, $.debounce = function(delay, at_begin, callback) {
      return callback === undefined ? jq_throttle(delay, at_begin, !1) : jq_throttle(delay, callback, at_begin !== !1)
    }
  }(this),
  function($) {
    $.fn.scrupulous = function(args) {
      var options = {
        beforeSubmit: null,
        valid: null,
        invalid: null,
        errorClassName: "error-message",
        parentClassName: "form-group",
        defaultErrorMessage: "This field has an error",
        setErrorMessage: null
      };
      $.extend(options, args);
      var $el, $form, $formGroup, errorMessage, $forms = this,
        $inputs = $forms.find("select, input, textarea"),
        emailPattern = "[^@]+@[^@]+.[a-zA-Z]{2,6}",
        browser = {};
      if ("function" != typeof document.createElement("input").checkValidity) return $forms.on("submit", function() {
        return null !== options.valid ? options.valid.call(this) : !0
      }), !1;
      if (this.hasClass("scrupulous")) return !1;
      $forms.addClass("scrupulous"), $forms.find('input[type="email"]').attr("pattern", emailPattern), $forms.attr("novalidate", !0);
      var equalTo = function(el) {
          var equalToParentId = $(el).attr("data-equal-to");
          return $("#" + equalToParentId).length >= 0 ? el.value != $("#" + equalToParentId).val() || "" === el.value ? !1 : !0 : (window.console && console.log("No data-equal-to element defined."), el.value == equalToParentId)
        },
        checkboxValidity = function(el) {
          var inputName = el.name,
            isChecked = !1;
          return $('input[name="' + inputName + '"]').each(function() {
            this.checked === !0 && (isChecked = !0)
          }), isChecked || el.required !== !0 ? !0 : !1
        },
        numberTypeValidity = function($el) {
          var min, max, step, val = Number($el.val());
          return $.isNumeric($el.val()) ? "undefined" != typeof $el.attr("max") && (max = Number($el.attr("max")), val > max) ? !1 : "undefined" != typeof $el.attr("min") && (min = Number($el.attr("min")), min > val) ? !1 : "undefined" != typeof $el.attr("step") && (step = Number($el.attr("step")), val % step !== 0) ? !1 : !0 : !1
        },
        isNumberField = function($el) {
          return $el.is("input") && "undefined" !== $el.attr("type") && "number" == $el.attr("type").toLowerCase()
        },
        setValid = function($el) {
          if (!$el.is(":hidden")) {
            if ($el.addClass("valid"), $el.removeClass("invalid"), $formGroup = $el.parents("." + options.parentClassName), 0 === $formGroup.length && ($formGroup = $el.parents(".input-group"), 0 === $formGroup.length)) return !1;
            $formGroup.addClass("has-success"), $formGroup.removeClass("has-error"), $formGroup.find("." + options.errorClassName).remove()
          }
        },
        setInvalid = function($el) {
          if (!$el.is(":hidden")) {
            if ($el.addClass("invalid"), $el.removeClass("valid"), $formGroup = $el.parents("." + options.parentClassName), 0 === $formGroup.length && ($formGroup = $el.parents(".input-group"), 0 === $formGroup.length)) return window.console && console.log("Warning: Scrupulous needs a .form-group, .input-group or parentClassName element to append errors. id: " + $el.attr("id")), !1;
            $formGroup.addClass("has-error"), $formGroup.removeClass("has-success");
            var originalValidationMessage = $el[0].validationMessage;
            null !== options.setErrorMessage && options.setErrorMessage.apply(this, $el), errorMessage = $el[0].validationMessage, ("undefined" == typeof errorMessage || 0 === errorMessage.length || errorMessage === originalValidationMessage) && (errorMessage = $el.attr("title")), void 0 === errorMessage && (errorMessage = options.defaultErrorMessage), $el[0].setCustomValidity(""), 0 === $formGroup.find("." + options.errorClassName).length && $formGroup.append('<label class="' + options.errorClassName + ' inactive" for="' + $el.attr("id") + '">' + errorMessage + "</label>"); {
              setTimeout(function() {
                $("." + options.errorClassName).removeClass("inactive")
              }, 10)
            }
          }
        },
        validityChecker = function(el) {
          elValidity = el.checkValidity(), $el = $(el), void 0 !== $(el).attr("data-equal-to") && (elValidity = equalTo(el)), void 0 !== $(el).attr("data-not-equal-to") && (elValidity = !equalTo(el)), ($el.is(":checkbox") || $el.is(":radio")) && (elValidity = checkboxValidity(el)), !browser.inputtype.number && isNumberField($(el)) && (elValidity = numberTypeValidity($el)), elValidity === !0 ? setValid($el) : setInvalid($el)
        },
        loadInputTypeSupport = function() {
          var types = "search,number,range,color,tel,url,email,date,month,week,time,datetime,datetime-local",
            typeArray = types.split(","),
            input = document.createElement("input");
          browser.inputtype = {};
          for (var a = 0; a < typeArray.length; a++) input.setAttribute("type", "text"), input.setAttribute("type", typeArray[a]), browser.inputtype[typeArray[a]] = "text" !== input.type ? !0 : !1
        };
      loadInputTypeSupport(), $inputs.on("change keyup mouseup", function() {
        return elValidity = this.checkValidity(), $el = $(this), $el.is(":disabled") === !0 ? !1 : ($el.hasClass("fn-equal-to") && (elValidity = equalTo(this)), $el.hasClass("fn-notequal-to") && (elValidity = !equalTo(this)), ($el.is(":checkbox") || $el.is(":radio")) && (elValidity = checkboxValidity(this)), void(elValidity === !0 && setValid($el)))
      }), $inputs.on("blur", function() {
        var $this = $(this);
        $this.val($.trim($this.val())), "number" === $this.attr("type") && isNaN($this.val()) && $this.val(""), "" !== $this.val() ? validityChecker(this) : $this.is(":required") && $this.removeClass("valid").parentsUntil("form-group").removeClass("has-success")
      }), $forms.on("submit", function(e) {
        if ($form = $(this), "function" == typeof options.beforeSubmit && options.beforeSubmit.call(this), $form.find("select, input, textarea").not(":disabled").each(function() {
            validityChecker(this)
          }), !($form.find(".has-error").length > 0)) return null !== options.valid ? options.valid.call(this) : !0;
        var errorScrollTop = $form.find(".has-error:first").offset().top - 100;
        return errorScrollTop < $(window).scrollTop() && $("html, body").animate({
          scrollTop: errorScrollTop
        }, 300), $form.find(".has-error .invalid:first").focus(), null !== options.invalid ? options.invalid.call(this) : (e.preventDefault(), !1)
      })
    }
  }(jQuery),
  function(root, factory) {
    "function" == typeof define && define.amd ? define([], factory) : "object" == typeof exports ? module.exports = factory() : root.Handlebars = root.Handlebars || factory()
  }(this, function() {
    var __module4__ = function() {
        "use strict";

        function SafeString(string) {
          this.string = string
        }
        var __exports__;
        return SafeString.prototype.toString = function() {
          return "" + this.string
        }, __exports__ = SafeString
      }(),
      __module3__ = function(__dependency1__) {
        "use strict";

        function escapeChar(chr) {
          return escape[chr]
        }

        function extend(obj) {
          for (var i = 1; i < arguments.length; i++)
            for (var key in arguments[i]) Object.prototype.hasOwnProperty.call(arguments[i], key) && (obj[key] = arguments[i][key]);
          return obj
        }

        function escapeExpression(string) {
          return string instanceof SafeString ? string.toString() : null == string ? "" : string ? (string = "" + string, possible.test(string) ? string.replace(badChars, escapeChar) : string) : string + ""
        }

        function isEmpty(value) {
          return value || 0 === value ? isArray(value) && 0 === value.length ? !0 : !1 : !0
        }

        function appendContextPath(contextPath, id) {
          return (contextPath ? contextPath + "." : "") + id
        }
        var __exports__ = {},
          SafeString = __dependency1__,
          escape = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
          },
          badChars = /[&<>"'`]/g,
          possible = /[&<>"'`]/;
        __exports__.extend = extend;
        var toString = Object.prototype.toString;
        __exports__.toString = toString;
        var isFunction = function(value) {
          return "function" == typeof value
        };
        isFunction(/x/) && (isFunction = function(value) {
          return "function" == typeof value && "[object Function]" === toString.call(value)
        });
        var isFunction;
        __exports__.isFunction = isFunction;
        var isArray = Array.isArray || function(value) {
          return value && "object" == typeof value ? "[object Array]" === toString.call(value) : !1
        };
        return __exports__.isArray = isArray, __exports__.escapeExpression = escapeExpression, __exports__.isEmpty = isEmpty, __exports__.appendContextPath = appendContextPath, __exports__
      }(__module4__),
      __module5__ = function() {
        "use strict";

        function Exception(message, node) {
          var line;
          node && node.firstLine && (line = node.firstLine, message += " - " + line + ":" + node.firstColumn);
          for (var tmp = Error.prototype.constructor.call(this, message), idx = 0; idx < errorProps.length; idx++) this[errorProps[idx]] = tmp[errorProps[idx]];
          line && (this.lineNumber = line, this.column = node.firstColumn)
        }
        var __exports__, errorProps = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
        return Exception.prototype = new Error, __exports__ = Exception
      }(),
      __module2__ = function(__dependency1__, __dependency2__) {
        "use strict";

        function HandlebarsEnvironment(helpers, partials) {
          this.helpers = helpers || {}, this.partials = partials || {}, registerDefaultHelpers(this)
        }

        function registerDefaultHelpers(instance) {
          instance.registerHelper("helperMissing", function() {
            if (1 === arguments.length) return void 0;
            throw new Exception("Missing helper: '" + arguments[arguments.length - 1].name + "'")
          }), instance.registerHelper("blockHelperMissing", function(context, options) {
            var inverse = options.inverse,
              fn = options.fn;
            if (context === !0) return fn(this);
            if (context === !1 || null == context) return inverse(this);
            if (isArray(context)) return context.length > 0 ? (options.ids && (options.ids = [options.name]), instance.helpers.each(context, options)) : inverse(this);
            if (options.data && options.ids) {
              var data = createFrame(options.data);
              data.contextPath = Utils.appendContextPath(options.data.contextPath, options.name), options = {
                data: data
              }
            }
            return fn(context, options)
          }), instance.registerHelper("each", function(context, options) {
            if (!options) throw new Exception("Must pass iterator to #each");
            var data, contextPath, fn = options.fn,
              inverse = options.inverse,
              i = 0,
              ret = "";
            if (options.data && options.ids && (contextPath = Utils.appendContextPath(options.data.contextPath, options.ids[0]) + "."), isFunction(context) && (context = context.call(this)), options.data && (data = createFrame(options.data)), context && "object" == typeof context)
              if (isArray(context))
                for (var j = context.length; j > i; i++) data && (data.index = i, data.first = 0 === i, data.last = i === context.length - 1, contextPath && (data.contextPath = contextPath + i)), ret += fn(context[i], {
                  data: data
                });
              else
                for (var key in context) context.hasOwnProperty(key) && (data && (data.key = key, data.index = i, data.first = 0 === i, contextPath && (data.contextPath = contextPath + key)), ret += fn(context[key], {
                  data: data
                }), i++);
            return 0 === i && (ret = inverse(this)), ret
          }), instance.registerHelper("if", function(conditional, options) {
            return isFunction(conditional) && (conditional = conditional.call(this)), !options.hash.includeZero && !conditional || Utils.isEmpty(conditional) ? options.inverse(this) : options.fn(this)
          }), instance.registerHelper("unless", function(conditional, options) {
            return instance.helpers["if"].call(this, conditional, {
              fn: options.inverse,
              inverse: options.fn,
              hash: options.hash
            })
          }), instance.registerHelper("with", function(context, options) {
            isFunction(context) && (context = context.call(this));
            var fn = options.fn;
            if (Utils.isEmpty(context)) return options.inverse(this);
            if (options.data && options.ids) {
              var data = createFrame(options.data);
              data.contextPath = Utils.appendContextPath(options.data.contextPath, options.ids[0]), options = {
                data: data
              }
            }
            return fn(context, options)
          }), instance.registerHelper("log", function(message, options) {
            var level = options.data && null != options.data.level ? parseInt(options.data.level, 10) : 1;
            instance.log(level, message)
          }), instance.registerHelper("lookup", function(obj, field) {
            return obj && obj[field]
          })
        }
        var __exports__ = {},
          Utils = __dependency1__,
          Exception = __dependency2__,
          VERSION = "2.0.0";
        __exports__.VERSION = VERSION;
        var COMPILER_REVISION = 6;
        __exports__.COMPILER_REVISION = COMPILER_REVISION;
        var REVISION_CHANGES = {
          1: "<= 1.0.rc.2",
          2: "== 1.0.0-rc.3",
          3: "== 1.0.0-rc.4",
          4: "== 1.x.x",
          5: "== 2.0.0-alpha.x",
          6: ">= 2.0.0-beta.1"
        };
        __exports__.REVISION_CHANGES = REVISION_CHANGES;
        var isArray = Utils.isArray,
          isFunction = Utils.isFunction,
          toString = Utils.toString,
          objectType = "[object Object]";
        __exports__.HandlebarsEnvironment = HandlebarsEnvironment, HandlebarsEnvironment.prototype = {
          constructor: HandlebarsEnvironment,
          logger: logger,
          log: log,
          registerHelper: function(name, fn) {
            if (toString.call(name) === objectType) {
              if (fn) throw new Exception("Arg not supported with multiple helpers");
              Utils.extend(this.helpers, name)
            } else this.helpers[name] = fn
          },
          unregisterHelper: function(name) {
            delete this.helpers[name]
          },
          registerPartial: function(name, partial) {
            toString.call(name) === objectType ? Utils.extend(this.partials, name) : this.partials[name] = partial
          },
          unregisterPartial: function(name) {
            delete this.partials[name]
          }
        };
        var logger = {
          methodMap: {
            0: "debug",
            1: "info",
            2: "warn",
            3: "error"
          },
          DEBUG: 0,
          INFO: 1,
          WARN: 2,
          ERROR: 3,
          level: 3,
          log: function(level, message) {
            if (logger.level <= level) {
              var method = logger.methodMap[level];
              "undefined" != typeof console && console[method] && console[method].call(console, message)
            }
          }
        };
        __exports__.logger = logger;
        var log = logger.log;
        __exports__.log = log;
        var createFrame = function(object) {
          var frame = Utils.extend({}, object);
          return frame._parent = object, frame
        };
        return __exports__.createFrame = createFrame, __exports__
      }(__module3__, __module5__),
      __module6__ = function(__dependency1__, __dependency2__, __dependency3__) {
        "use strict";

        function checkRevision(compilerInfo) {
          var compilerRevision = compilerInfo && compilerInfo[0] || 1,
            currentRevision = COMPILER_REVISION;
          if (compilerRevision !== currentRevision) {
            if (currentRevision > compilerRevision) {
              var runtimeVersions = REVISION_CHANGES[currentRevision],
                compilerVersions = REVISION_CHANGES[compilerRevision];
              throw new Exception("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + runtimeVersions + ") or downgrade your runtime to an older version (" + compilerVersions + ").")
            }
            throw new Exception("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + compilerInfo[1] + ").")
          }
        }

        function template(templateSpec, env) {
          if (!env) throw new Exception("No environment passed to template");
          if (!templateSpec || !templateSpec.main) throw new Exception("Unknown template object: " + typeof templateSpec);
          env.VM.checkRevision(templateSpec.compiler);
          var invokePartialWrapper = function(partial, indent, name, context, hash, helpers, partials, data, depths) {
              hash && (context = Utils.extend({}, context, hash));
              var result = env.VM.invokePartial.call(this, partial, name, context, helpers, partials, data, depths);
              if (null == result && env.compile) {
                var options = {
                  helpers: helpers,
                  partials: partials,
                  data: data,
                  depths: depths
                };
                partials[name] = env.compile(partial, {
                  data: void 0 !== data,
                  compat: templateSpec.compat
                }, env), result = partials[name](context, options)
              }
              if (null != result) {
                if (indent) {
                  for (var lines = result.split("\n"), i = 0, l = lines.length; l > i && (lines[i] || i + 1 !== l); i++) lines[i] = indent + lines[i];
                  result = lines.join("\n")
                }
                return result
              }
              throw new Exception("The partial " + name + " could not be compiled when running in runtime-only mode")
            },
            container = {
              lookup: function(depths, name) {
                for (var len = depths.length, i = 0; len > i; i++)
                  if (depths[i] && null != depths[i][name]) return depths[i][name]
              },
              lambda: function(current, context) {
                return "function" == typeof current ? current.call(context) : current
              },
              escapeExpression: Utils.escapeExpression,
              invokePartial: invokePartialWrapper,
              fn: function(i) {
                return templateSpec[i]
              },
              programs: [],
              program: function(i, data, depths) {
                var programWrapper = this.programs[i],
                  fn = this.fn(i);
                return data || depths ? programWrapper = program(this, i, fn, data, depths) : programWrapper || (programWrapper = this.programs[i] = program(this, i, fn)), programWrapper
              },
              data: function(data, depth) {
                for (; data && depth--;) data = data._parent;
                return data
              },
              merge: function(param, common) {
                var ret = param || common;
                return param && common && param !== common && (ret = Utils.extend({}, common, param)), ret
              },
              noop: env.VM.noop,
              compilerInfo: templateSpec.compiler
            },
            ret = function(context, options) {
              options = options || {};
              var data = options.data;
              ret._setup(options), !options.partial && templateSpec.useData && (data = initData(context, data));
              var depths;
              return templateSpec.useDepths && (depths = options.depths ? [context].concat(options.depths) : [context]), templateSpec.main.call(container, context, container.helpers, container.partials, data, depths)
            };
          return ret.isTop = !0, ret._setup = function(options) {
            options.partial ? (container.helpers = options.helpers, container.partials = options.partials) : (container.helpers = container.merge(options.helpers, env.helpers), templateSpec.usePartial && (container.partials = container.merge(options.partials, env.partials)))
          }, ret._child = function(i, data, depths) {
            if (templateSpec.useDepths && !depths) throw new Exception("must pass parent depths");
            return program(container, i, templateSpec[i], data, depths)
          }, ret
        }

        function program(container, i, fn, data, depths) {
          var prog = function(context, options) {
            return options = options || {}, fn.call(container, context, container.helpers, container.partials, options.data || data, depths && [context].concat(depths))
          };
          return prog.program = i, prog.depth = depths ? depths.length : 0, prog
        }

        function invokePartial(partial, name, context, helpers, partials, data, depths) {
          var options = {
            partial: !0,
            helpers: helpers,
            partials: partials,
            data: data,
            depths: depths
          };
          if (void 0 === partial) throw new Exception("The partial " + name + " could not be found");
          return partial instanceof Function ? partial(context, options) : void 0
        }

        function noop() {
          return ""
        }

        function initData(context, data) {
          return data && "root" in data || (data = data ? createFrame(data) : {}, data.root = context), data
        }
        var __exports__ = {},
          Utils = __dependency1__,
          Exception = __dependency2__,
          COMPILER_REVISION = __dependency3__.COMPILER_REVISION,
          REVISION_CHANGES = __dependency3__.REVISION_CHANGES,
          createFrame = __dependency3__.createFrame;
        return __exports__.checkRevision = checkRevision, __exports__.template = template, __exports__.program = program, __exports__.invokePartial = invokePartial, __exports__.noop = noop, __exports__
      }(__module3__, __module5__, __module2__),
      __module1__ = function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__) {
        "use strict";
        var __exports__, base = __dependency1__,
          SafeString = __dependency2__,
          Exception = __dependency3__,
          Utils = __dependency4__,
          runtime = __dependency5__,
          create = function() {
            var hb = new base.HandlebarsEnvironment;
            return Utils.extend(hb, base), hb.SafeString = SafeString, hb.Exception = Exception, hb.Utils = Utils, hb.escapeExpression = Utils.escapeExpression, hb.VM = runtime, hb.template = function(spec) {
              return runtime.template(spec, hb)
            }, hb
          },
          Handlebars = create();
        return Handlebars.create = create, Handlebars["default"] = Handlebars, __exports__ = Handlebars
      }(__module2__, __module4__, __module5__, __module3__, __module6__),
      __module7__ = function(__dependency1__) {
        "use strict";

        function LocationInfo(locInfo) {
          locInfo = locInfo || {}, this.firstLine = locInfo.first_line, this.firstColumn = locInfo.first_column, this.lastColumn = locInfo.last_column, this.lastLine = locInfo.last_line
        }
        var __exports__, Exception = __dependency1__,
          AST = {
            ProgramNode: function(statements, strip, locInfo) {
              LocationInfo.call(this, locInfo), this.type = "program", this.statements = statements, this.strip = strip
            },
            MustacheNode: function(rawParams, hash, open, strip, locInfo) {
              if (LocationInfo.call(this, locInfo), this.type = "mustache", this.strip = strip, null != open && open.charAt) {
                var escapeFlag = open.charAt(3) || open.charAt(2);
                this.escaped = "{" !== escapeFlag && "&" !== escapeFlag
              } else this.escaped = !!open;
              this.sexpr = rawParams instanceof AST.SexprNode ? rawParams : new AST.SexprNode(rawParams, hash), this.id = this.sexpr.id, this.params = this.sexpr.params, this.hash = this.sexpr.hash, this.eligibleHelper = this.sexpr.eligibleHelper, this.isHelper = this.sexpr.isHelper
            },
            SexprNode: function(rawParams, hash, locInfo) {
              LocationInfo.call(this, locInfo), this.type = "sexpr", this.hash = hash;
              var id = this.id = rawParams[0],
                params = this.params = rawParams.slice(1);
              this.isHelper = !(!params.length && !hash), this.eligibleHelper = this.isHelper || id.isSimple
            },
            PartialNode: function(partialName, context, hash, strip, locInfo) {
              LocationInfo.call(this, locInfo), this.type = "partial", this.partialName = partialName, this.context = context, this.hash = hash, this.strip = strip, this.strip.inlineStandalone = !0
            },
            BlockNode: function(mustache, program, inverse, strip, locInfo) {
              LocationInfo.call(this, locInfo), this.type = "block", this.mustache = mustache, this.program = program, this.inverse = inverse, this.strip = strip, inverse && !program && (this.isInverse = !0)
            },
            RawBlockNode: function(mustache, content, close, locInfo) {
              if (LocationInfo.call(this, locInfo), mustache.sexpr.id.original !== close) throw new Exception(mustache.sexpr.id.original + " doesn't match " + close, this);
              content = new AST.ContentNode(content, locInfo), this.type = "block", this.mustache = mustache, this.program = new AST.ProgramNode([content], {}, locInfo)
            },
            ContentNode: function(string, locInfo) {
              LocationInfo.call(this, locInfo), this.type = "content", this.original = this.string = string
            },
            HashNode: function(pairs, locInfo) {
              LocationInfo.call(this, locInfo), this.type = "hash", this.pairs = pairs
            },
            IdNode: function(parts, locInfo) {
              LocationInfo.call(this, locInfo), this.type = "ID";
              for (var original = "", dig = [], depth = 0, depthString = "", i = 0, l = parts.length; l > i; i++) {
                var part = parts[i].part;
                if (original += (parts[i].separator || "") + part, ".." === part || "." === part || "this" === part) {
                  if (dig.length > 0) throw new Exception("Invalid path: " + original, this);
                  ".." === part ? (depth++, depthString += "../") : this.isScoped = !0
                } else dig.push(part)
              }
              this.original = original, this.parts = dig, this.string = dig.join("."), this.depth = depth, this.idName = depthString + this.string, this.isSimple = 1 === parts.length && !this.isScoped && 0 === depth, this.stringModeValue = this.string
            },
            PartialNameNode: function(name, locInfo) {
              LocationInfo.call(this, locInfo), this.type = "PARTIAL_NAME", this.name = name.original
            },
            DataNode: function(id, locInfo) {
              LocationInfo.call(this, locInfo), this.type = "DATA", this.id = id, this.stringModeValue = id.stringModeValue, this.idName = "@" + id.stringModeValue
            },
            StringNode: function(string, locInfo) {
              LocationInfo.call(this, locInfo), this.type = "STRING", this.original = this.string = this.stringModeValue = string
            },
            NumberNode: function(number, locInfo) {
              LocationInfo.call(this, locInfo), this.type = "NUMBER", this.original = this.number = number, this.stringModeValue = Number(number)
            },
            BooleanNode: function(bool, locInfo) {
              LocationInfo.call(this, locInfo), this.type = "BOOLEAN", this.bool = bool, this.stringModeValue = "true" === bool
            },
            CommentNode: function(comment, locInfo) {
              LocationInfo.call(this, locInfo), this.type = "comment", this.comment = comment, this.strip = {
                inlineStandalone: !0
              }
            }
          };
        return __exports__ = AST
      }(__module5__),
      __module9__ = function() {
        "use strict";
        var __exports__, handlebars = function() {
          function Parser() {
            this.yy = {}
          }
          var parser = {
              trace: function() {},
              yy: {},
              symbols_: {
                error: 2,
                root: 3,
                program: 4,
                EOF: 5,
                program_repetition0: 6,
                statement: 7,
                mustache: 8,
                block: 9,
                rawBlock: 10,
                partial: 11,
                CONTENT: 12,
                COMMENT: 13,
                openRawBlock: 14,
                END_RAW_BLOCK: 15,
                OPEN_RAW_BLOCK: 16,
                sexpr: 17,
                CLOSE_RAW_BLOCK: 18,
                openBlock: 19,
                block_option0: 20,
                closeBlock: 21,
                openInverse: 22,
                block_option1: 23,
                OPEN_BLOCK: 24,
                CLOSE: 25,
                OPEN_INVERSE: 26,
                inverseAndProgram: 27,
                INVERSE: 28,
                OPEN_ENDBLOCK: 29,
                path: 30,
                OPEN: 31,
                OPEN_UNESCAPED: 32,
                CLOSE_UNESCAPED: 33,
                OPEN_PARTIAL: 34,
                partialName: 35,
                param: 36,
                partial_option0: 37,
                partial_option1: 38,
                sexpr_repetition0: 39,
                sexpr_option0: 40,
                dataName: 41,
                STRING: 42,
                NUMBER: 43,
                BOOLEAN: 44,
                OPEN_SEXPR: 45,
                CLOSE_SEXPR: 46,
                hash: 47,
                hash_repetition_plus0: 48,
                hashSegment: 49,
                ID: 50,
                EQUALS: 51,
                DATA: 52,
                pathSegments: 53,
                SEP: 54,
                $accept: 0,
                $end: 1
              },
              terminals_: {
                2: "error",
                5: "EOF",
                12: "CONTENT",
                13: "COMMENT",
                15: "END_RAW_BLOCK",
                16: "OPEN_RAW_BLOCK",
                18: "CLOSE_RAW_BLOCK",
                24: "OPEN_BLOCK",
                25: "CLOSE",
                26: "OPEN_INVERSE",
                28: "INVERSE",
                29: "OPEN_ENDBLOCK",
                31: "OPEN",
                32: "OPEN_UNESCAPED",
                33: "CLOSE_UNESCAPED",
                34: "OPEN_PARTIAL",
                42: "STRING",
                43: "NUMBER",
                44: "BOOLEAN",
                45: "OPEN_SEXPR",
                46: "CLOSE_SEXPR",
                50: "ID",
                51: "EQUALS",
                52: "DATA",
                54: "SEP"
              },
              productions_: [0, [3, 2],
                [4, 1],
                [7, 1],
                [7, 1],
                [7, 1],
                [7, 1],
                [7, 1],
                [7, 1],
                [10, 3],
                [14, 3],
                [9, 4],
                [9, 4],
                [19, 3],
                [22, 3],
                [27, 2],
                [21, 3],
                [8, 3],
                [8, 3],
                [11, 5],
                [11, 4],
                [17, 3],
                [17, 1],
                [36, 1],
                [36, 1],
                [36, 1],
                [36, 1],
                [36, 1],
                [36, 3],
                [47, 1],
                [49, 3],
                [35, 1],
                [35, 1],
                [35, 1],
                [41, 2],
                [30, 1],
                [53, 3],
                [53, 1],
                [6, 0],
                [6, 2],
                [20, 0],
                [20, 1],
                [23, 0],
                [23, 1],
                [37, 0],
                [37, 1],
                [38, 0],
                [38, 1],
                [39, 0],
                [39, 2],
                [40, 0],
                [40, 1],
                [48, 1],
                [48, 2]
              ],
              performAction: function(yytext, yyleng, yylineno, yy, yystate, $$) {
                var $0 = $$.length - 1;
                switch (yystate) {
                  case 1:
                    return yy.prepareProgram($$[$0 - 1].statements, !0), $$[$0 - 1];
                  case 2:
                    this.$ = new yy.ProgramNode(yy.prepareProgram($$[$0]), {}, this._$);
                    break;
                  case 3:
                    this.$ = $$[$0];
                    break;
                  case 4:
                    this.$ = $$[$0];
                    break;
                  case 5:
                    this.$ = $$[$0];
                    break;
                  case 6:
                    this.$ = $$[$0];
                    break;
                  case 7:
                    this.$ = new yy.ContentNode($$[$0], this._$);
                    break;
                  case 8:
                    this.$ = new yy.CommentNode($$[$0], this._$);
                    break;
                  case 9:
                    this.$ = new yy.RawBlockNode($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
                    break;
                  case 10:
                    this.$ = new yy.MustacheNode($$[$0 - 1], null, "", "", this._$);
                    break;
                  case 11:
                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], !1, this._$);
                    break;
                  case 12:
                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], !0, this._$);
                    break;
                  case 13:
                    this.$ = new yy.MustacheNode($$[$0 - 1], null, $$[$0 - 2], yy.stripFlags($$[$0 - 2], $$[$0]), this._$);
                    break;
                  case 14:
                    this.$ = new yy.MustacheNode($$[$0 - 1], null, $$[$0 - 2], yy.stripFlags($$[$0 - 2], $$[$0]), this._$);
                    break;
                  case 15:
                    this.$ = {
                      strip: yy.stripFlags($$[$0 - 1], $$[$0 - 1]),
                      program: $$[$0]
                    };
                    break;
                  case 16:
                    this.$ = {
                      path: $$[$0 - 1],
                      strip: yy.stripFlags($$[$0 - 2], $$[$0])
                    };
                    break;
                  case 17:
                    this.$ = new yy.MustacheNode($$[$0 - 1], null, $$[$0 - 2], yy.stripFlags($$[$0 - 2], $$[$0]), this._$);
                    break;
                  case 18:
                    this.$ = new yy.MustacheNode($$[$0 - 1], null, $$[$0 - 2], yy.stripFlags($$[$0 - 2], $$[$0]), this._$);
                    break;
                  case 19:
                    this.$ = new yy.PartialNode($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
                    break;
                  case 20:
                    this.$ = new yy.PartialNode($$[$0 - 2], void 0, $$[$0 - 1], yy.stripFlags($$[$0 - 3], $$[$0]), this._$);
                    break;
                  case 21:
                    this.$ = new yy.SexprNode([$$[$0 - 2]].concat($$[$0 - 1]), $$[$0], this._$);
                    break;
                  case 22:
                    this.$ = new yy.SexprNode([$$[$0]], null, this._$);
                    break;
                  case 23:
                    this.$ = $$[$0];
                    break;
                  case 24:
                    this.$ = new yy.StringNode($$[$0], this._$);
                    break;
                  case 25:
                    this.$ = new yy.NumberNode($$[$0], this._$);
                    break;
                  case 26:
                    this.$ = new yy.BooleanNode($$[$0], this._$);
                    break;
                  case 27:
                    this.$ = $$[$0];
                    break;
                  case 28:
                    $$[$0 - 1].isHelper = !0, this.$ = $$[$0 - 1];
                    break;
                  case 29:
                    this.$ = new yy.HashNode($$[$0], this._$);
                    break;
                  case 30:
                    this.$ = [$$[$0 - 2], $$[$0]];
                    break;
                  case 31:
                    this.$ = new yy.PartialNameNode($$[$0], this._$);
                    break;
                  case 32:
                    this.$ = new yy.PartialNameNode(new yy.StringNode($$[$0], this._$), this._$);
                    break;
                  case 33:
                    this.$ = new yy.PartialNameNode(new yy.NumberNode($$[$0], this._$));
                    break;
                  case 34:
                    this.$ = new yy.DataNode($$[$0], this._$);
                    break;
                  case 35:
                    this.$ = new yy.IdNode($$[$0], this._$);
                    break;
                  case 36:
                    $$[$0 - 2].push({
                      part: $$[$0],
                      separator: $$[$0 - 1]
                    }), this.$ = $$[$0 - 2];
                    break;
                  case 37:
                    this.$ = [{
                      part: $$[$0]
                    }];
                    break;
                  case 38:
                    this.$ = [];
                    break;
                  case 39:
                    $$[$0 - 1].push($$[$0]);
                    break;
                  case 48:
                    this.$ = [];
                    break;
                  case 49:
                    $$[$0 - 1].push($$[$0]);
                    break;
                  case 52:
                    this.$ = [$$[$0]];
                    break;
                  case 53:
                    $$[$0 - 1].push($$[$0])
                }
              },
              table: [{
                3: 1,
                4: 2,
                5: [2, 38],
                6: 3,
                12: [2, 38],
                13: [2, 38],
                16: [2, 38],
                24: [2, 38],
                26: [2, 38],
                31: [2, 38],
                32: [2, 38],
                34: [2, 38]
              }, {
                1: [3]
              }, {
                5: [1, 4]
              }, {
                5: [2, 2],
                7: 5,
                8: 6,
                9: 7,
                10: 8,
                11: 9,
                12: [1, 10],
                13: [1, 11],
                14: 16,
                16: [1, 20],
                19: 14,
                22: 15,
                24: [1, 18],
                26: [1, 19],
                28: [2, 2],
                29: [2, 2],
                31: [1, 12],
                32: [1, 13],
                34: [1, 17]
              }, {
                1: [2, 1]
              }, {
                5: [2, 39],
                12: [2, 39],
                13: [2, 39],
                16: [2, 39],
                24: [2, 39],
                26: [2, 39],
                28: [2, 39],
                29: [2, 39],
                31: [2, 39],
                32: [2, 39],
                34: [2, 39]
              }, {
                5: [2, 3],
                12: [2, 3],
                13: [2, 3],
                16: [2, 3],
                24: [2, 3],
                26: [2, 3],
                28: [2, 3],
                29: [2, 3],
                31: [2, 3],
                32: [2, 3],
                34: [2, 3]
              }, {
                5: [2, 4],
                12: [2, 4],
                13: [2, 4],
                16: [2, 4],
                24: [2, 4],
                26: [2, 4],
                28: [2, 4],
                29: [2, 4],
                31: [2, 4],
                32: [2, 4],
                34: [2, 4]
              }, {
                5: [2, 5],
                12: [2, 5],
                13: [2, 5],
                16: [2, 5],
                24: [2, 5],
                26: [2, 5],
                28: [2, 5],
                29: [2, 5],
                31: [2, 5],
                32: [2, 5],
                34: [2, 5]
              }, {
                5: [2, 6],
                12: [2, 6],
                13: [2, 6],
                16: [2, 6],
                24: [2, 6],
                26: [2, 6],
                28: [2, 6],
                29: [2, 6],
                31: [2, 6],
                32: [2, 6],
                34: [2, 6]
              }, {
                5: [2, 7],
                12: [2, 7],
                13: [2, 7],
                16: [2, 7],
                24: [2, 7],
                26: [2, 7],
                28: [2, 7],
                29: [2, 7],
                31: [2, 7],
                32: [2, 7],
                34: [2, 7]
              }, {
                5: [2, 8],
                12: [2, 8],
                13: [2, 8],
                16: [2, 8],
                24: [2, 8],
                26: [2, 8],
                28: [2, 8],
                29: [2, 8],
                31: [2, 8],
                32: [2, 8],
                34: [2, 8]
              }, {
                17: 21,
                30: 22,
                41: 23,
                50: [1, 26],
                52: [1, 25],
                53: 24
              }, {
                17: 27,
                30: 22,
                41: 23,
                50: [1, 26],
                52: [1, 25],
                53: 24
              }, {
                4: 28,
                6: 3,
                12: [2, 38],
                13: [2, 38],
                16: [2, 38],
                24: [2, 38],
                26: [2, 38],
                28: [2, 38],
                29: [2, 38],
                31: [2, 38],
                32: [2, 38],
                34: [2, 38]
              }, {
                4: 29,
                6: 3,
                12: [2, 38],
                13: [2, 38],
                16: [2, 38],
                24: [2, 38],
                26: [2, 38],
                28: [2, 38],
                29: [2, 38],
                31: [2, 38],
                32: [2, 38],
                34: [2, 38]
              }, {
                12: [1, 30]
              }, {
                30: 32,
                35: 31,
                42: [1, 33],
                43: [1, 34],
                50: [1, 26],
                53: 24
              }, {
                17: 35,
                30: 22,
                41: 23,
                50: [1, 26],
                52: [1, 25],
                53: 24
              }, {
                17: 36,
                30: 22,
                41: 23,
                50: [1, 26],
                52: [1, 25],
                53: 24
              }, {
                17: 37,
                30: 22,
                41: 23,
                50: [1, 26],
                52: [1, 25],
                53: 24
              }, {
                25: [1, 38]
              }, {
                18: [2, 48],
                25: [2, 48],
                33: [2, 48],
                39: 39,
                42: [2, 48],
                43: [2, 48],
                44: [2, 48],
                45: [2, 48],
                46: [2, 48],
                50: [2, 48],
                52: [2, 48]
              }, {
                18: [2, 22],
                25: [2, 22],
                33: [2, 22],
                46: [2, 22]
              }, {
                18: [2, 35],
                25: [2, 35],
                33: [2, 35],
                42: [2, 35],
                43: [2, 35],
                44: [2, 35],
                45: [2, 35],
                46: [2, 35],
                50: [2, 35],
                52: [2, 35],
                54: [1, 40]
              }, {
                30: 41,
                50: [1, 26],
                53: 24
              }, {
                18: [2, 37],
                25: [2, 37],
                33: [2, 37],
                42: [2, 37],
                43: [2, 37],
                44: [2, 37],
                45: [2, 37],
                46: [2, 37],
                50: [2, 37],
                52: [2, 37],
                54: [2, 37]
              }, {
                33: [1, 42]
              }, {
                20: 43,
                27: 44,
                28: [1, 45],
                29: [2, 40]
              }, {
                23: 46,
                27: 47,
                28: [1, 45],
                29: [2, 42]
              }, {
                15: [1, 48]
              }, {
                25: [2, 46],
                30: 51,
                36: 49,
                38: 50,
                41: 55,
                42: [1, 52],
                43: [1, 53],
                44: [1, 54],
                45: [1, 56],
                47: 57,
                48: 58,
                49: 60,
                50: [1, 59],
                52: [1, 25],
                53: 24
              }, {
                25: [2, 31],
                42: [2, 31],
                43: [2, 31],
                44: [2, 31],
                45: [2, 31],
                50: [2, 31],
                52: [2, 31]
              }, {
                25: [2, 32],
                42: [2, 32],
                43: [2, 32],
                44: [2, 32],
                45: [2, 32],
                50: [2, 32],
                52: [2, 32]
              }, {
                25: [2, 33],
                42: [2, 33],
                43: [2, 33],
                44: [2, 33],
                45: [2, 33],
                50: [2, 33],
                52: [2, 33]
              }, {
                25: [1, 61]
              }, {
                25: [1, 62]
              }, {
                18: [1, 63]
              }, {
                5: [2, 17],
                12: [2, 17],
                13: [2, 17],
                16: [2, 17],
                24: [2, 17],
                26: [2, 17],
                28: [2, 17],
                29: [2, 17],
                31: [2, 17],
                32: [2, 17],
                34: [2, 17]
              }, {
                18: [2, 50],
                25: [2, 50],
                30: 51,
                33: [2, 50],
                36: 65,
                40: 64,
                41: 55,
                42: [1, 52],
                43: [1, 53],
                44: [1, 54],
                45: [1, 56],
                46: [2, 50],
                47: 66,
                48: 58,
                49: 60,
                50: [1, 59],
                52: [1, 25],
                53: 24
              }, {
                50: [1, 67]
              }, {
                18: [2, 34],
                25: [2, 34],
                33: [2, 34],
                42: [2, 34],
                43: [2, 34],
                44: [2, 34],
                45: [2, 34],
                46: [2, 34],
                50: [2, 34],
                52: [2, 34]
              }, {
                5: [2, 18],
                12: [2, 18],
                13: [2, 18],
                16: [2, 18],
                24: [2, 18],
                26: [2, 18],
                28: [2, 18],
                29: [2, 18],
                31: [2, 18],
                32: [2, 18],
                34: [2, 18]
              }, {
                21: 68,
                29: [1, 69]
              }, {
                29: [2, 41]
              }, {
                4: 70,
                6: 3,
                12: [2, 38],
                13: [2, 38],
                16: [2, 38],
                24: [2, 38],
                26: [2, 38],
                29: [2, 38],
                31: [2, 38],
                32: [2, 38],
                34: [2, 38]
              }, {
                21: 71,
                29: [1, 69]
              }, {
                29: [2, 43]
              }, {
                5: [2, 9],
                12: [2, 9],
                13: [2, 9],
                16: [2, 9],
                24: [2, 9],
                26: [2, 9],
                28: [2, 9],
                29: [2, 9],
                31: [2, 9],
                32: [2, 9],
                34: [2, 9]
              }, {
                25: [2, 44],
                37: 72,
                47: 73,
                48: 58,
                49: 60,
                50: [1, 74]
              }, {
                25: [1, 75]
              }, {
                18: [2, 23],
                25: [2, 23],
                33: [2, 23],
                42: [2, 23],
                43: [2, 23],
                44: [2, 23],
                45: [2, 23],
                46: [2, 23],
                50: [2, 23],
                52: [2, 23]
              }, {
                18: [2, 24],
                25: [2, 24],
                33: [2, 24],
                42: [2, 24],
                43: [2, 24],
                44: [2, 24],
                45: [2, 24],
                46: [2, 24],
                50: [2, 24],
                52: [2, 24]
              }, {
                18: [2, 25],
                25: [2, 25],
                33: [2, 25],
                42: [2, 25],
                43: [2, 25],
                44: [2, 25],
                45: [2, 25],
                46: [2, 25],
                50: [2, 25],
                52: [2, 25]
              }, {
                18: [2, 26],
                25: [2, 26],
                33: [2, 26],
                42: [2, 26],
                43: [2, 26],
                44: [2, 26],
                45: [2, 26],
                46: [2, 26],
                50: [2, 26],
                52: [2, 26]
              }, {
                18: [2, 27],
                25: [2, 27],
                33: [2, 27],
                42: [2, 27],
                43: [2, 27],
                44: [2, 27],
                45: [2, 27],
                46: [2, 27],
                50: [2, 27],
                52: [2, 27]
              }, {
                17: 76,
                30: 22,
                41: 23,
                50: [1, 26],
                52: [1, 25],
                53: 24
              }, {
                25: [2, 47]
              }, {
                18: [2, 29],
                25: [2, 29],
                33: [2, 29],
                46: [2, 29],
                49: 77,
                50: [1, 74]
              }, {
                18: [2, 37],
                25: [2, 37],
                33: [2, 37],
                42: [2, 37],
                43: [2, 37],
                44: [2, 37],
                45: [2, 37],
                46: [2, 37],
                50: [2, 37],
                51: [1, 78],
                52: [2, 37],
                54: [2, 37]
              }, {
                18: [2, 52],
                25: [2, 52],
                33: [2, 52],
                46: [2, 52],
                50: [2, 52]
              }, {
                12: [2, 13],
                13: [2, 13],
                16: [2, 13],
                24: [2, 13],
                26: [2, 13],
                28: [2, 13],
                29: [2, 13],
                31: [2, 13],
                32: [2, 13],
                34: [2, 13]
              }, {
                12: [2, 14],
                13: [2, 14],
                16: [2, 14],
                24: [2, 14],
                26: [2, 14],
                28: [2, 14],
                29: [2, 14],
                31: [2, 14],
                32: [2, 14],
                34: [2, 14]
              }, {
                12: [2, 10]
              }, {
                18: [2, 21],
                25: [2, 21],
                33: [2, 21],
                46: [2, 21]
              }, {
                18: [2, 49],
                25: [2, 49],
                33: [2, 49],
                42: [2, 49],
                43: [2, 49],
                44: [2, 49],
                45: [2, 49],
                46: [2, 49],
                50: [2, 49],
                52: [2, 49]
              }, {
                18: [2, 51],
                25: [2, 51],
                33: [2, 51],
                46: [2, 51]
              }, {
                18: [2, 36],
                25: [2, 36],
                33: [2, 36],
                42: [2, 36],
                43: [2, 36],
                44: [2, 36],
                45: [2, 36],
                46: [2, 36],
                50: [2, 36],
                52: [2, 36],
                54: [2, 36]
              }, {
                5: [2, 11],
                12: [2, 11],
                13: [2, 11],
                16: [2, 11],
                24: [2, 11],
                26: [2, 11],
                28: [2, 11],
                29: [2, 11],
                31: [2, 11],
                32: [2, 11],
                34: [2, 11]
              }, {
                30: 79,
                50: [1, 26],
                53: 24
              }, {
                29: [2, 15]
              }, {
                5: [2, 12],
                12: [2, 12],
                13: [2, 12],
                16: [2, 12],
                24: [2, 12],
                26: [2, 12],
                28: [2, 12],
                29: [2, 12],
                31: [2, 12],
                32: [2, 12],
                34: [2, 12]
              }, {
                25: [1, 80]
              }, {
                25: [2, 45]
              }, {
                51: [1, 78]
              }, {
                5: [2, 20],
                12: [2, 20],
                13: [2, 20],
                16: [2, 20],
                24: [2, 20],
                26: [2, 20],
                28: [2, 20],
                29: [2, 20],
                31: [2, 20],
                32: [2, 20],
                34: [2, 20]
              }, {
                46: [1, 81]
              }, {
                18: [2, 53],
                25: [2, 53],
                33: [2, 53],
                46: [2, 53],
                50: [2, 53]
              }, {
                30: 51,
                36: 82,
                41: 55,
                42: [1, 52],
                43: [1, 53],
                44: [1, 54],
                45: [1, 56],
                50: [1, 26],
                52: [1, 25],
                53: 24
              }, {
                25: [1, 83]
              }, {
                5: [2, 19],
                12: [2, 19],
                13: [2, 19],
                16: [2, 19],
                24: [2, 19],
                26: [2, 19],
                28: [2, 19],
                29: [2, 19],
                31: [2, 19],
                32: [2, 19],
                34: [2, 19]
              }, {
                18: [2, 28],
                25: [2, 28],
                33: [2, 28],
                42: [2, 28],
                43: [2, 28],
                44: [2, 28],
                45: [2, 28],
                46: [2, 28],
                50: [2, 28],
                52: [2, 28]
              }, {
                18: [2, 30],
                25: [2, 30],
                33: [2, 30],
                46: [2, 30],
                50: [2, 30]
              }, {
                5: [2, 16],
                12: [2, 16],
                13: [2, 16],
                16: [2, 16],
                24: [2, 16],
                26: [2, 16],
                28: [2, 16],
                29: [2, 16],
                31: [2, 16],
                32: [2, 16],
                34: [2, 16]
              }],
              defaultActions: {
                4: [2, 1],
                44: [2, 41],
                47: [2, 43],
                57: [2, 47],
                63: [2, 10],
                70: [2, 15],
                73: [2, 45]
              },
              parseError: function(str) {
                throw new Error(str)
              },
              parse: function(input) {
                function lex() {
                  var token;
                  return token = self.lexer.lex() || 1, "number" != typeof token && (token = self.symbols_[token] || token), token
                }
                var self = this,
                  stack = [0],
                  vstack = [null],
                  lstack = [],
                  table = this.table,
                  yytext = "",
                  yylineno = 0,
                  yyleng = 0,
                  recovering = 0;
                this.lexer.setInput(input), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, "undefined" == typeof this.lexer.yylloc && (this.lexer.yylloc = {});
                var yyloc = this.lexer.yylloc;
                lstack.push(yyloc);
                var ranges = this.lexer.options && this.lexer.options.ranges;
                "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
                for (var symbol, preErrorSymbol, state, action, r, p, len, newState, expected, yyval = {};;) {
                  if (state = stack[stack.length - 1], this.defaultActions[state] ? action = this.defaultActions[state] : ((null === symbol || "undefined" == typeof symbol) && (symbol = lex()), action = table[state] && table[state][symbol]), "undefined" == typeof action || !action.length || !action[0]) {
                    var errStr = "";
                    if (!recovering) {
                      expected = [];
                      for (p in table[state]) this.terminals_[p] && p > 2 && expected.push("'" + this.terminals_[p] + "'");
                      errStr = this.lexer.showPosition ? "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'" : "Parse error on line " + (yylineno + 1) + ": Unexpected " + (1 == symbol ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'"), this.parseError(errStr, {
                        text: this.lexer.match,
                        token: this.terminals_[symbol] || symbol,
                        line: this.lexer.yylineno,
                        loc: yyloc,
                        expected: expected
                      })
                    }
                  }
                  if (action[0] instanceof Array && action.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
                  switch (action[0]) {
                    case 1:
                      stack.push(symbol), vstack.push(this.lexer.yytext), lstack.push(this.lexer.yylloc), stack.push(action[1]), symbol = null, preErrorSymbol ? (symbol = preErrorSymbol, preErrorSymbol = null) : (yyleng = this.lexer.yyleng, yytext = this.lexer.yytext, yylineno = this.lexer.yylineno, yyloc = this.lexer.yylloc, recovering > 0 && recovering--);
                      break;
                    case 2:
                      if (len = this.productions_[action[1]][1], yyval.$ = vstack[vstack.length - len], yyval._$ = {
                          first_line: lstack[lstack.length - (len || 1)].first_line,
                          last_line: lstack[lstack.length - 1].last_line,
                          first_column: lstack[lstack.length - (len || 1)].first_column,
                          last_column: lstack[lstack.length - 1].last_column
                        }, ranges && (yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]]), r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack), "undefined" != typeof r) return r;
                      len && (stack = stack.slice(0, -1 * len * 2), vstack = vstack.slice(0, -1 * len), lstack = lstack.slice(0, -1 * len)), stack.push(this.productions_[action[1]][0]), vstack.push(yyval.$), lstack.push(yyval._$), newState = table[stack[stack.length - 2]][stack[stack.length - 1]], stack.push(newState);
                      break;
                    case 3:
                      return !0
                  }
                }
                return !0
              }
            },
            lexer = function() {
              var lexer = {
                EOF: 1,
                parseError: function(str, hash) {
                  if (!this.yy.parser) throw new Error(str);
                  this.yy.parser.parseError(str, hash)
                },
                setInput: function(input) {
                  return this._input = input, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
                    first_line: 1,
                    first_column: 0,
                    last_line: 1,
                    last_column: 0
                  }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this
                },
                input: function() {
                  var ch = this._input[0];
                  this.yytext += ch, this.yyleng++, this.offset++, this.match += ch, this.matched += ch;
                  var lines = ch.match(/(?:\r\n?|\n).*/g);
                  return lines ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), ch
                },
                unput: function(ch) {
                  var len = ch.length,
                    lines = ch.split(/(?:\r\n?|\n)/g);
                  this._input = ch + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - len - 1), this.offset -= len;
                  var oldLines = this.match.split(/(?:\r\n?|\n)/g);
                  this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), lines.length - 1 && (this.yylineno -= lines.length - 1);
                  var r = this.yylloc.range;
                  return this.yylloc = {
                    first_line: this.yylloc.first_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.first_column,
                    last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
                  }, this.options.ranges && (this.yylloc.range = [r[0], r[0] + this.yyleng - len]), this
                },
                more: function() {
                  return this._more = !0, this
                },
                less: function(n) {
                  this.unput(this.match.slice(n))
                },
                pastInput: function() {
                  var past = this.matched.substr(0, this.matched.length - this.match.length);
                  return (past.length > 20 ? "..." : "") + past.substr(-20).replace(/\n/g, "")
                },
                upcomingInput: function() {
                  var next = this.match;
                  return next.length < 20 && (next += this._input.substr(0, 20 - next.length)), (next.substr(0, 20) + (next.length > 20 ? "..." : "")).replace(/\n/g, "")
                },
                showPosition: function() {
                  var pre = this.pastInput(),
                    c = new Array(pre.length + 1).join("-");
                  return pre + this.upcomingInput() + "\n" + c + "^"
                },
                next: function() {
                  if (this.done) return this.EOF;
                  this._input || (this.done = !0);
                  var token, match, tempMatch, index, lines;
                  this._more || (this.yytext = "", this.match = "");
                  for (var rules = this._currentRules(), i = 0; i < rules.length && (tempMatch = this._input.match(this.rules[rules[i]]), !tempMatch || match && !(tempMatch[0].length > match[0].length) || (match = tempMatch, index = i, this.options.flex)); i++);
                  return match ? (lines = match[0].match(/(?:\r\n?|\n).*/g), lines && (this.yylineno += lines.length), this.yylloc = {
                    first_line: this.yylloc.last_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.last_column,
                    last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
                  }, this.yytext += match[0], this.match += match[0], this.matches = match, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(match[0].length), this.matched += match[0], token = this.performAction.call(this, this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), token ? token : void 0) : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                    text: "",
                    token: null,
                    line: this.yylineno
                  })
                },
                lex: function() {
                  var r = this.next();
                  return "undefined" != typeof r ? r : this.lex()
                },
                begin: function(condition) {
                  this.conditionStack.push(condition)
                },
                popState: function() {
                  return this.conditionStack.pop()
                },
                _currentRules: function() {
                  return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
                },
                topState: function() {
                  return this.conditionStack[this.conditionStack.length - 2]
                },
                pushState: function(condition) {
                  this.begin(condition)
                }
              };
              return lexer.options = {}, lexer.performAction = function(yy, yy_, $avoiding_name_collisions, YY_START) {
                function strip(start, end) {
                  return yy_.yytext = yy_.yytext.substr(start, yy_.yyleng - end)
                }
                switch ($avoiding_name_collisions) {
                  case 0:
                    if ("\\\\" === yy_.yytext.slice(-2) ? (strip(0, 1), this.begin("mu")) : "\\" === yy_.yytext.slice(-1) ? (strip(0, 1), this.begin("emu")) : this.begin("mu"), yy_.yytext) return 12;
                    break;
                  case 1:
                    return 12;
                  case 2:
                    return this.popState(), 12;
                  case 3:
                    return yy_.yytext = yy_.yytext.substr(5, yy_.yyleng - 9), this.popState(), 15;
                  case 4:
                    return 12;
                  case 5:
                    return strip(0, 4), this.popState(), 13;
                  case 6:
                    return 45;
                  case 7:
                    return 46;
                  case 8:
                    return 16;
                  case 9:
                    return this.popState(), this.begin("raw"), 18;
                  case 10:
                    return 34;
                  case 11:
                    return 24;
                  case 12:
                    return 29;
                  case 13:
                    return this.popState(), 28;
                  case 14:
                    return this.popState(), 28;
                  case 15:
                    return 26;
                  case 16:
                    return 26;
                  case 17:
                    return 32;
                  case 18:
                    return 31;
                  case 19:
                    this.popState(), this.begin("com");
                    break;
                  case 20:
                    return strip(3, 5), this.popState(), 13;
                  case 21:
                    return 31;
                  case 22:
                    return 51;
                  case 23:
                    return 50;
                  case 24:
                    return 50;
                  case 25:
                    return 54;
                  case 26:
                    break;
                  case 27:
                    return this.popState(), 33;
                  case 28:
                    return this.popState(), 25;
                  case 29:
                    return yy_.yytext = strip(1, 2).replace(/\\"/g, '"'), 42;
                  case 30:
                    return yy_.yytext = strip(1, 2).replace(/\\'/g, "'"), 42;
                  case 31:
                    return 52;
                  case 32:
                    return 44;
                  case 33:
                    return 44;
                  case 34:
                    return 43;
                  case 35:
                    return 50;
                  case 36:
                    return yy_.yytext = strip(1, 2), 50;
                  case 37:
                    return "INVALID";
                  case 38:
                    return 5
                }
              }, lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]*?(?=(\{\{\{\{\/)))/, /^(?:[\s\S]*?--\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{!--)/, /^(?:\{\{![\s\S]*?\}\})/, /^(?:\{\{(~)?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:$)/], lexer.conditions = {
                mu: {
                  rules: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38],
                  inclusive: !1
                },
                emu: {
                  rules: [2],
                  inclusive: !1
                },
                com: {
                  rules: [5],
                  inclusive: !1
                },
                raw: {
                  rules: [3, 4],
                  inclusive: !1
                },
                INITIAL: {
                  rules: [0, 1, 38],
                  inclusive: !0
                }
              }, lexer
            }();
          return parser.lexer = lexer, Parser.prototype = parser, parser.Parser = Parser, new Parser
        }();
        return __exports__ = handlebars
      }(),
      __module10__ = function(__dependency1__) {
        "use strict";

        function stripFlags(open, close) {
          return {
            left: "~" === open.charAt(2),
            right: "~" === close.charAt(close.length - 3)
          }
        }

        function prepareBlock(mustache, program, inverseAndProgram, close, inverted, locInfo) {
          if (mustache.sexpr.id.original !== close.path.original) throw new Exception(mustache.sexpr.id.original + " doesn't match " + close.path.original, mustache);
          var inverse = inverseAndProgram && inverseAndProgram.program,
            strip = {
              left: mustache.strip.left,
              right: close.strip.right,
              openStandalone: isNextWhitespace(program.statements),
              closeStandalone: isPrevWhitespace((inverse || program).statements)
            };
          if (mustache.strip.right && omitRight(program.statements, null, !0), inverse) {
            var inverseStrip = inverseAndProgram.strip;
            inverseStrip.left && omitLeft(program.statements, null, !0), inverseStrip.right && omitRight(inverse.statements, null, !0), close.strip.left && omitLeft(inverse.statements, null, !0), isPrevWhitespace(program.statements) && isNextWhitespace(inverse.statements) && (omitLeft(program.statements), omitRight(inverse.statements))
          } else close.strip.left && omitLeft(program.statements, null, !0);
          return inverted ? new this.BlockNode(mustache, inverse, program, strip, locInfo) : new this.BlockNode(mustache, program, inverse, strip, locInfo)
        }

        function prepareProgram(statements, isRoot) {
          for (var i = 0, l = statements.length; l > i; i++) {
            var current = statements[i],
              strip = current.strip;
            if (strip) {
              var _isPrevWhitespace = isPrevWhitespace(statements, i, isRoot, "partial" === current.type),
                _isNextWhitespace = isNextWhitespace(statements, i, isRoot),
                openStandalone = strip.openStandalone && _isPrevWhitespace,
                closeStandalone = strip.closeStandalone && _isNextWhitespace,
                inlineStandalone = strip.inlineStandalone && _isPrevWhitespace && _isNextWhitespace;
              strip.right && omitRight(statements, i, !0), strip.left && omitLeft(statements, i, !0), inlineStandalone && (omitRight(statements, i), omitLeft(statements, i) && "partial" === current.type && (current.indent = /([ \t]+$)/.exec(statements[i - 1].original) ? RegExp.$1 : "")), openStandalone && (omitRight((current.program || current.inverse).statements), omitLeft(statements, i)), closeStandalone && (omitRight(statements, i), omitLeft((current.inverse || current.program).statements))
            }
          }
          return statements
        }

        function isPrevWhitespace(statements, i, isRoot) {
          void 0 === i && (i = statements.length);
          var prev = statements[i - 1],
            sibling = statements[i - 2];
          return prev ? "content" === prev.type ? (sibling || !isRoot ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(prev.original) : void 0 : isRoot
        }

        function isNextWhitespace(statements, i, isRoot) {
          void 0 === i && (i = -1);
          var next = statements[i + 1],
            sibling = statements[i + 2];
          return next ? "content" === next.type ? (sibling || !isRoot ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(next.original) : void 0 : isRoot
        }

        function omitRight(statements, i, multiple) {
          var current = statements[null == i ? 0 : i + 1];
          if (current && "content" === current.type && (multiple || !current.rightStripped)) {
            var original = current.string;
            current.string = current.string.replace(multiple ? /^\s+/ : /^[ \t]*\r?\n?/, ""), current.rightStripped = current.string !== original
          }
        }

        function omitLeft(statements, i, multiple) {
          var current = statements[null == i ? statements.length - 1 : i - 1];
          if (current && "content" === current.type && (multiple || !current.leftStripped)) {
            var original = current.string;
            return current.string = current.string.replace(multiple ? /\s+$/ : /[ \t]+$/, ""), current.leftStripped = current.string !== original, current.leftStripped
          }
        }
        var __exports__ = {},
          Exception = __dependency1__;
        return __exports__.stripFlags = stripFlags, __exports__.prepareBlock = prepareBlock, __exports__.prepareProgram = prepareProgram, __exports__
      }(__module5__),
      __module8__ = function(__dependency1__, __dependency2__, __dependency3__, __dependency4__) {
        "use strict";

        function parse(input) {
          return input.constructor === AST.ProgramNode ? input : (parser.yy = yy, parser.parse(input))
        }
        var __exports__ = {},
          parser = __dependency1__,
          AST = __dependency2__,
          Helpers = __dependency3__,
          extend = __dependency4__.extend;
        __exports__.parser = parser;
        var yy = {};
        return extend(yy, Helpers, AST), __exports__.parse = parse, __exports__
      }(__module9__, __module7__, __module10__, __module3__),
      __module11__ = function(__dependency1__, __dependency2__) {
        "use strict";

        function Compiler() {}

        function precompile(input, options, env) {
          if (null == input || "string" != typeof input && input.constructor !== env.AST.ProgramNode) throw new Exception("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + input);
          options = options || {}, "data" in options || (options.data = !0), options.compat && (options.useDepths = !0);
          var ast = env.parse(input),
            environment = (new env.Compiler).compile(ast, options);
          return (new env.JavaScriptCompiler).compile(environment, options)
        }

        function compile(input, options, env) {
          function compileInput() {
            var ast = env.parse(input),
              environment = (new env.Compiler).compile(ast, options),
              templateSpec = (new env.JavaScriptCompiler).compile(environment, options, void 0, !0);
            return env.template(templateSpec)
          }
          if (null == input || "string" != typeof input && input.constructor !== env.AST.ProgramNode) throw new Exception("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + input);
          options = options || {}, "data" in options || (options.data = !0), options.compat && (options.useDepths = !0);
          var compiled, ret = function(context, options) {
            return compiled || (compiled = compileInput()), compiled.call(this, context, options)
          };
          return ret._setup = function(options) {
            return compiled || (compiled = compileInput()), compiled._setup(options)
          }, ret._child = function(i, data, depths) {
            return compiled || (compiled = compileInput()), compiled._child(i, data, depths)
          }, ret
        }

        function argEquals(a, b) {
          if (a === b) return !0;
          if (isArray(a) && isArray(b) && a.length === b.length) {
            for (var i = 0; i < a.length; i++)
              if (!argEquals(a[i], b[i])) return !1;
            return !0
          }
        }
        var __exports__ = {},
          Exception = __dependency1__,
          isArray = __dependency2__.isArray,
          slice = [].slice;
        return __exports__.Compiler = Compiler, Compiler.prototype = {
          compiler: Compiler,
          equals: function(other) {
            var len = this.opcodes.length;
            if (other.opcodes.length !== len) return !1;
            for (var i = 0; len > i; i++) {
              var opcode = this.opcodes[i],
                otherOpcode = other.opcodes[i];
              if (opcode.opcode !== otherOpcode.opcode || !argEquals(opcode.args, otherOpcode.args)) return !1
            }
            for (len = this.children.length, i = 0; len > i; i++)
              if (!this.children[i].equals(other.children[i])) return !1;
            return !0
          },
          guid: 0,
          compile: function(program, options) {
            this.opcodes = [], this.children = [], this.depths = {
              list: []
            }, this.options = options, this.stringParams = options.stringParams, this.trackIds = options.trackIds;
            var knownHelpers = this.options.knownHelpers;
            if (this.options.knownHelpers = {
                helperMissing: !0,
                blockHelperMissing: !0,
                each: !0,
                "if": !0,
                unless: !0,
                "with": !0,
                log: !0,
                lookup: !0
              }, knownHelpers)
              for (var name in knownHelpers) this.options.knownHelpers[name] = knownHelpers[name];
            return this.accept(program)
          },
          accept: function(node) {
            return this[node.type](node)
          },
          program: function(program) {
            for (var statements = program.statements, i = 0, l = statements.length; l > i; i++) this.accept(statements[i]);
            return this.isSimple = 1 === l, this.depths.list = this.depths.list.sort(function(a, b) {
              return a - b
            }), this
          },
          compileProgram: function(program) {
            var depth, result = (new this.compiler).compile(program, this.options),
              guid = this.guid++;
            this.usePartial = this.usePartial || result.usePartial, this.children[guid] = result;
            for (var i = 0, l = result.depths.list.length; l > i; i++) depth = result.depths.list[i], 2 > depth || this.addDepth(depth - 1);
            return guid
          },
          block: function(block) {
            var mustache = block.mustache,
              program = block.program,
              inverse = block.inverse;
            program && (program = this.compileProgram(program)), inverse && (inverse = this.compileProgram(inverse));
            var sexpr = mustache.sexpr,
              type = this.classifySexpr(sexpr);
            "helper" === type ? this.helperSexpr(sexpr, program, inverse) : "simple" === type ? (this.simpleSexpr(sexpr), this.opcode("pushProgram", program), this.opcode("pushProgram", inverse), this.opcode("emptyHash"), this.opcode("blockValue", sexpr.id.original)) : (this.ambiguousSexpr(sexpr, program, inverse), this.opcode("pushProgram", program), this.opcode("pushProgram", inverse), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append")
          },
          hash: function(hash) {
            var i, l, pairs = hash.pairs;
            for (this.opcode("pushHash"), i = 0, l = pairs.length; l > i; i++) this.pushParam(pairs[i][1]);
            for (; i--;) this.opcode("assignToHash", pairs[i][0]);
            this.opcode("popHash")
          },
          partial: function(partial) {
            var partialName = partial.partialName;
            this.usePartial = !0, partial.hash ? this.accept(partial.hash) : this.opcode("push", "undefined"), partial.context ? this.accept(partial.context) : (this.opcode("getContext", 0), this.opcode("pushContext")), this.opcode("invokePartial", partialName.name, partial.indent || ""), this.opcode("append")
          },
          content: function(content) {
            content.string && this.opcode("appendContent", content.string)
          },
          mustache: function(mustache) {
            this.sexpr(mustache.sexpr), this.opcode(mustache.escaped && !this.options.noEscape ? "appendEscaped" : "append")
          },
          ambiguousSexpr: function(sexpr, program, inverse) {
            var id = sexpr.id,
              name = id.parts[0],
              isBlock = null != program || null != inverse;
            this.opcode("getContext", id.depth), this.opcode("pushProgram", program), this.opcode("pushProgram", inverse), this.ID(id), this.opcode("invokeAmbiguous", name, isBlock)
          },
          simpleSexpr: function(sexpr) {
            var id = sexpr.id;
            "DATA" === id.type ? this.DATA(id) : id.parts.length ? this.ID(id) : (this.addDepth(id.depth), this.opcode("getContext", id.depth), this.opcode("pushContext")), this.opcode("resolvePossibleLambda")
          },
          helperSexpr: function(sexpr, program, inverse) {
            var params = this.setupFullMustacheParams(sexpr, program, inverse),
              id = sexpr.id,
              name = id.parts[0];
            if (this.options.knownHelpers[name]) this.opcode("invokeKnownHelper", params.length, name);
            else {
              if (this.options.knownHelpersOnly) throw new Exception("You specified knownHelpersOnly, but used the unknown helper " + name, sexpr);
              id.falsy = !0, this.ID(id), this.opcode("invokeHelper", params.length, id.original, id.isSimple)
            }
          },
          sexpr: function(sexpr) {
            var type = this.classifySexpr(sexpr);
            "simple" === type ? this.simpleSexpr(sexpr) : "helper" === type ? this.helperSexpr(sexpr) : this.ambiguousSexpr(sexpr)
          },
          ID: function(id) {
            this.addDepth(id.depth), this.opcode("getContext", id.depth);
            var name = id.parts[0];
            name ? this.opcode("lookupOnContext", id.parts, id.falsy, id.isScoped) : this.opcode("pushContext")
          },
          DATA: function(data) {
            this.options.data = !0, this.opcode("lookupData", data.id.depth, data.id.parts)
          },
          STRING: function(string) {
            this.opcode("pushString", string.string)
          },
          NUMBER: function(number) {
            this.opcode("pushLiteral", number.number)
          },
          BOOLEAN: function(bool) {
            this.opcode("pushLiteral", bool.bool)
          },
          comment: function() {},
          opcode: function(name) {
            this.opcodes.push({
              opcode: name,
              args: slice.call(arguments, 1)
            })
          },
          addDepth: function(depth) {
            0 !== depth && (this.depths[depth] || (this.depths[depth] = !0, this.depths.list.push(depth)))
          },
          classifySexpr: function(sexpr) {
            var isHelper = sexpr.isHelper,
              isEligible = sexpr.eligibleHelper,
              options = this.options;
            if (isEligible && !isHelper) {
              var name = sexpr.id.parts[0];
              options.knownHelpers[name] ? isHelper = !0 : options.knownHelpersOnly && (isEligible = !1)
            }
            return isHelper ? "helper" : isEligible ? "ambiguous" : "simple"
          },
          pushParams: function(params) {
            for (var i = 0, l = params.length; l > i; i++) this.pushParam(params[i])
          },
          pushParam: function(val) {
            this.stringParams ? (val.depth && this.addDepth(val.depth), this.opcode("getContext", val.depth || 0), this.opcode("pushStringParam", val.stringModeValue, val.type), "sexpr" === val.type && this.sexpr(val)) : (this.trackIds && this.opcode("pushId", val.type, val.idName || val.stringModeValue), this.accept(val))
          },
          setupFullMustacheParams: function(sexpr, program, inverse) {
            var params = sexpr.params;
            return this.pushParams(params), this.opcode("pushProgram", program), this.opcode("pushProgram", inverse), sexpr.hash ? this.hash(sexpr.hash) : this.opcode("emptyHash"), params
          }
        }, __exports__.precompile = precompile, __exports__.compile = compile, __exports__
      }(__module5__, __module3__),
      __module12__ = function(__dependency1__, __dependency2__) {
        "use strict";

        function Literal(value) {
          this.value = value
        }

        function JavaScriptCompiler() {}
        var __exports__, COMPILER_REVISION = __dependency1__.COMPILER_REVISION,
          REVISION_CHANGES = __dependency1__.REVISION_CHANGES,
          Exception = __dependency2__;
        JavaScriptCompiler.prototype = {
          nameLookup: function(parent, name) {
            return JavaScriptCompiler.isValidJavaScriptVariableName(name) ? parent + "." + name : parent + "['" + name + "']"
          },
          depthedLookup: function(name) {
            return this.aliases.lookup = "this.lookup", 'lookup(depths, "' + name + '")'
          },
          compilerInfo: function() {
            var revision = COMPILER_REVISION,
              versions = REVISION_CHANGES[revision];
            return [revision, versions]
          },
          appendToBuffer: function(string) {
            return this.environment.isSimple ? "return " + string + ";" : {
              appendToBuffer: !0,
              content: string,
              toString: function() {
                return "buffer += " + string + ";"
              }
            }
          },
          initializeBuffer: function() {
            return this.quotedString("")
          },
          namespace: "Handlebars",
          compile: function(environment, options, context, asObject) {
            this.environment = environment, this.options = options, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !asObject, this.name = this.environment.name, this.isChild = !!context, this.context = context || {
              programs: [],
              environments: []
            }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = {
              list: []
            }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.compileChildren(environment, options), this.useDepths = this.useDepths || environment.depths.list.length || this.options.compat;
            var opcode, i, l, opcodes = environment.opcodes;
            for (i = 0, l = opcodes.length; l > i; i++) opcode = opcodes[i], this[opcode.opcode].apply(this, opcode.args);
            if (this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length) throw new Exception("Compile completed with content left on stack");
            var fn = this.createFunctionContext(asObject);
            if (this.isChild) return fn;
            var ret = {
                compiler: this.compilerInfo(),
                main: fn
              },
              programs = this.context.programs;
            for (i = 0, l = programs.length; l > i; i++) programs[i] && (ret[i] = programs[i]);
            return this.environment.usePartial && (ret.usePartial = !0), this.options.data && (ret.useData = !0), this.useDepths && (ret.useDepths = !0), this.options.compat && (ret.compat = !0), asObject || (ret.compiler = JSON.stringify(ret.compiler), ret = this.objectLiteral(ret)), ret
          },
          preamble: function() {
            this.lastContext = 0, this.source = []
          },
          createFunctionContext: function(asObject) {
            var varDeclarations = "",
              locals = this.stackVars.concat(this.registers.list);
            locals.length > 0 && (varDeclarations += ", " + locals.join(", "));
            for (var alias in this.aliases) this.aliases.hasOwnProperty(alias) && (varDeclarations += ", " + alias + "=" + this.aliases[alias]);
            var params = ["depth0", "helpers", "partials", "data"];
            this.useDepths && params.push("depths");
            var source = this.mergeSource(varDeclarations);
            return asObject ? (params.push(source), Function.apply(this, params)) : "function(" + params.join(",") + ") {\n  " + source + "}"
          },
          mergeSource: function(varDeclarations) {
            for (var buffer, appendFirst, source = "", appendOnly = !this.forceBuffer, i = 0, len = this.source.length; len > i; i++) {
              var line = this.source[i];
              line.appendToBuffer ? buffer = buffer ? buffer + "\n    + " + line.content : line.content : (buffer && (source ? source += "buffer += " + buffer + ";\n  " : (appendFirst = !0, source = buffer + ";\n  "), buffer = void 0), source += line + "\n  ", this.environment.isSimple || (appendOnly = !1))
            }
            return appendOnly ? (buffer || !source) && (source += "return " + (buffer || '""') + ";\n") : (varDeclarations += ", buffer = " + (appendFirst ? "" : this.initializeBuffer()), source += buffer ? "return buffer + " + buffer + ";\n" : "return buffer;\n"), varDeclarations && (source = "var " + varDeclarations.substring(2) + (appendFirst ? "" : ";\n  ") + source), source
          },
          blockValue: function(name) {
            this.aliases.blockHelperMissing = "helpers.blockHelperMissing";
            var params = [this.contextName(0)];
            this.setupParams(name, 0, params);
            var blockName = this.popStack();
            params.splice(1, 0, blockName), this.push("blockHelperMissing.call(" + params.join(", ") + ")")
          },
          ambiguousBlockValue: function() {
            this.aliases.blockHelperMissing = "helpers.blockHelperMissing";
            var params = [this.contextName(0)];
            this.setupParams("", 0, params, !0), this.flushInline();
            var current = this.topStack();
            params.splice(1, 0, current), this.pushSource("if (!" + this.lastHelper + ") { " + current + " = blockHelperMissing.call(" + params.join(", ") + "); }")
          },
          appendContent: function(content) {
            this.pendingContent && (content = this.pendingContent + content), this.pendingContent = content
          },
          append: function() {
            this.flushInline();
            var local = this.popStack();
            this.pushSource("if (" + local + " != null) { " + this.appendToBuffer(local) + " }"), this.environment.isSimple && this.pushSource("else { " + this.appendToBuffer("''") + " }")
          },
          appendEscaped: function() {
            this.aliases.escapeExpression = "this.escapeExpression", this.pushSource(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"))
          },
          getContext: function(depth) {
            this.lastContext = depth
          },
          pushContext: function() {
            this.pushStackLiteral(this.contextName(this.lastContext))
          },
          lookupOnContext: function(parts, falsy, scoped) {
            var i = 0,
              len = parts.length;
            for (scoped || !this.options.compat || this.lastContext ? this.pushContext() : this.push(this.depthedLookup(parts[i++])); len > i; i++) this.replaceStack(function(current) {
              var lookup = this.nameLookup(current, parts[i], "context");
              return falsy ? " && " + lookup : " != null ? " + lookup + " : " + current
            })
          },
          lookupData: function(depth, parts) {
            this.pushStackLiteral(depth ? "this.data(data, " + depth + ")" : "data");
            for (var len = parts.length, i = 0; len > i; i++) this.replaceStack(function(current) {
              return " && " + this.nameLookup(current, parts[i], "data")
            })
          },
          resolvePossibleLambda: function() {
            this.aliases.lambda = "this.lambda", this.push("lambda(" + this.popStack() + ", " + this.contextName(0) + ")")
          },
          pushStringParam: function(string, type) {
            this.pushContext(), this.pushString(type), "sexpr" !== type && ("string" == typeof string ? this.pushString(string) : this.pushStackLiteral(string))
          },
          emptyHash: function() {
            this.pushStackLiteral("{}"), this.trackIds && this.push("{}"), this.stringParams && (this.push("{}"), this.push("{}"))
          },
          pushHash: function() {
            this.hash && this.hashes.push(this.hash), this.hash = {
              values: [],
              types: [],
              contexts: [],
              ids: []
            }
          },
          popHash: function() {
            var hash = this.hash;
            this.hash = this.hashes.pop(), this.trackIds && this.push("{" + hash.ids.join(",") + "}"), this.stringParams && (this.push("{" + hash.contexts.join(",") + "}"), this.push("{" + hash.types.join(",") + "}")), this.push("{\n    " + hash.values.join(",\n    ") + "\n  }")
          },
          pushString: function(string) {
            this.pushStackLiteral(this.quotedString(string))
          },
          push: function(expr) {
            return this.inlineStack.push(expr), expr
          },
          pushLiteral: function(value) {
            this.pushStackLiteral(value)
          },
          pushProgram: function(guid) {
            this.pushStackLiteral(null != guid ? this.programExpression(guid) : null)
          },
          invokeHelper: function(paramSize, name, isSimple) {
            this.aliases.helperMissing = "helpers.helperMissing";
            var nonHelper = this.popStack(),
              helper = this.setupHelper(paramSize, name),
              lookup = (isSimple ? helper.name + " || " : "") + nonHelper + " || helperMissing";
            this.push("((" + lookup + ").call(" + helper.callParams + "))")
          },
          invokeKnownHelper: function(paramSize, name) {
            var helper = this.setupHelper(paramSize, name);
            this.push(helper.name + ".call(" + helper.callParams + ")")
          },
          invokeAmbiguous: function(name, helperCall) {
            this.aliases.functionType = '"function"', this.aliases.helperMissing = "helpers.helperMissing", this.useRegister("helper");
            var nonHelper = this.popStack();
            this.emptyHash();
            var helper = this.setupHelper(0, name, helperCall),
              helperName = this.lastHelper = this.nameLookup("helpers", name, "helper");
            this.push("((helper = (helper = " + helperName + " || " + nonHelper + ") != null ? helper : helperMissing" + (helper.paramsInit ? "),(" + helper.paramsInit : "") + "),(typeof helper === functionType ? helper.call(" + helper.callParams + ") : helper))")
          },
          invokePartial: function(name, indent) {
            var params = [this.nameLookup("partials", name, "partial"), "'" + indent + "'", "'" + name + "'", this.popStack(), this.popStack(), "helpers", "partials"];
            this.options.data ? params.push("data") : this.options.compat && params.push("undefined"), this.options.compat && params.push("depths"), this.push("this.invokePartial(" + params.join(", ") + ")")
          },
          assignToHash: function(key) {
            var context, type, id, value = this.popStack();
            this.trackIds && (id = this.popStack()), this.stringParams && (type = this.popStack(), context = this.popStack());
            var hash = this.hash;
            context && hash.contexts.push("'" + key + "': " + context), type && hash.types.push("'" + key + "': " + type), id && hash.ids.push("'" + key + "': " + id), hash.values.push("'" + key + "': (" + value + ")")
          },
          pushId: function(type, name) {
            "ID" === type || "DATA" === type ? this.pushString(name) : this.pushStackLiteral("sexpr" === type ? "true" : "null")
          },
          compiler: JavaScriptCompiler,
          compileChildren: function(environment, options) {
            for (var child, compiler, children = environment.children, i = 0, l = children.length; l > i; i++) {
              child = children[i], compiler = new this.compiler;
              var index = this.matchExistingProgram(child);
              null == index ? (this.context.programs.push(""), index = this.context.programs.length, child.index = index, child.name = "program" + index, this.context.programs[index] = compiler.compile(child, options, this.context, !this.precompile), this.context.environments[index] = child, this.useDepths = this.useDepths || compiler.useDepths) : (child.index = index, child.name = "program" + index)
            }
          },
          matchExistingProgram: function(child) {
            for (var i = 0, len = this.context.environments.length; len > i; i++) {
              var environment = this.context.environments[i];
              if (environment && environment.equals(child)) return i
            }
          },
          programExpression: function(guid) {
            var child = this.environment.children[guid],
              useDepths = (child.depths.list, this.useDepths),
              programParams = [child.index, "data"];
            return useDepths && programParams.push("depths"), "this.program(" + programParams.join(", ") + ")"
          },
          useRegister: function(name) {
            this.registers[name] || (this.registers[name] = !0, this.registers.list.push(name))
          },
          pushStackLiteral: function(item) {
            return this.push(new Literal(item))
          },
          pushSource: function(source) {
            this.pendingContent && (this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent))), this.pendingContent = void 0), source && this.source.push(source)
          },
          pushStack: function(item) {
            this.flushInline();
            var stack = this.incrStack();
            return this.pushSource(stack + " = " + item + ";"), this.compileStack.push(stack), stack
          },
          replaceStack: function(callback) {
            {
              var stack, createdStack, usedLiteral, prefix = "";
              this.isInline()
            }
            if (!this.isInline()) throw new Exception("replaceStack on non-inline");
            var top = this.popStack(!0);
            if (top instanceof Literal) prefix = stack = top.value, usedLiteral = !0;
            else {
              createdStack = !this.stackSlot;
              var name = createdStack ? this.incrStack() : this.topStackName();
              prefix = "(" + this.push(name) + " = " + top + ")", stack = this.topStack()
            }
            var item = callback.call(this, stack);
            usedLiteral || this.popStack(), createdStack && this.stackSlot--, this.push("(" + prefix + item + ")")
          },
          incrStack: function() {
            return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName()
          },
          topStackName: function() {
            return "stack" + this.stackSlot
          },
          flushInline: function() {
            var inlineStack = this.inlineStack;
            if (inlineStack.length) {
              this.inlineStack = [];
              for (var i = 0, len = inlineStack.length; len > i; i++) {
                var entry = inlineStack[i];
                entry instanceof Literal ? this.compileStack.push(entry) : this.pushStack(entry)
              }
            }
          },
          isInline: function() {
            return this.inlineStack.length
          },
          popStack: function(wrapped) {
            var inline = this.isInline(),
              item = (inline ? this.inlineStack : this.compileStack).pop();
            if (!wrapped && item instanceof Literal) return item.value;
            if (!inline) {
              if (!this.stackSlot) throw new Exception("Invalid stack pop");
              this.stackSlot--
            }
            return item
          },
          topStack: function() {
            var stack = this.isInline() ? this.inlineStack : this.compileStack,
              item = stack[stack.length - 1];
            return item instanceof Literal ? item.value : item
          },
          contextName: function(context) {
            return this.useDepths && context ? "depths[" + context + "]" : "depth" + context
          },
          quotedString: function(str) {
            return '"' + str.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"'
          },
          objectLiteral: function(obj) {
            var pairs = [];
            for (var key in obj) obj.hasOwnProperty(key) && pairs.push(this.quotedString(key) + ":" + obj[key]);
            return "{" + pairs.join(",") + "}"
          },
          setupHelper: function(paramSize, name, blockHelper) {
            var params = [],
              paramsInit = this.setupParams(name, paramSize, params, blockHelper),
              foundHelper = this.nameLookup("helpers", name, "helper");
            return {
              params: params,
              paramsInit: paramsInit,
              name: foundHelper,
              callParams: [this.contextName(0)].concat(params).join(", ")
            }
          },
          setupOptions: function(helper, paramSize, params) {
            var param, inverse, program, options = {},
              contexts = [],
              types = [],
              ids = [];
            options.name = this.quotedString(helper), options.hash = this.popStack(), this.trackIds && (options.hashIds = this.popStack()), this.stringParams && (options.hashTypes = this.popStack(), options.hashContexts = this.popStack()), inverse = this.popStack(), program = this.popStack(), (program || inverse) && (program || (program = "this.noop"), inverse || (inverse = "this.noop"), options.fn = program, options.inverse = inverse);
            for (var i = paramSize; i--;) param = this.popStack(), params[i] = param, this.trackIds && (ids[i] = this.popStack()), this.stringParams && (types[i] = this.popStack(), contexts[i] = this.popStack());
            return this.trackIds && (options.ids = "[" + ids.join(",") + "]"), this.stringParams && (options.types = "[" + types.join(",") + "]", options.contexts = "[" + contexts.join(",") + "]"), this.options.data && (options.data = "data"), options
          },
          setupParams: function(helperName, paramSize, params, useRegister) {
            var options = this.objectLiteral(this.setupOptions(helperName, paramSize, params));
            return useRegister ? (this.useRegister("options"), params.push("options"), "options=" + options) : (params.push(options), "")
          }
        };
        for (var reservedWords = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "), compilerWords = JavaScriptCompiler.RESERVED_WORDS = {}, i = 0, l = reservedWords.length; l > i; i++) compilerWords[reservedWords[i]] = !0;
        return JavaScriptCompiler.isValidJavaScriptVariableName = function(name) {
          return !JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name)
        }, __exports__ = JavaScriptCompiler
      }(__module2__, __module5__),
      __module0__ = function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__) {
        "use strict";
        var __exports__, Handlebars = __dependency1__,
          AST = __dependency2__,
          Parser = __dependency3__.parser,
          parse = __dependency3__.parse,
          Compiler = __dependency4__.Compiler,
          compile = __dependency4__.compile,
          precompile = __dependency4__.precompile,
          JavaScriptCompiler = __dependency5__,
          _create = Handlebars.create,
          create = function() {
            var hb = _create();
            return hb.compile = function(input, options) {
              return compile(input, options, hb)
            }, hb.precompile = function(input, options) {
              return precompile(input, options, hb)
            }, hb.AST = AST, hb.Compiler = Compiler, hb.JavaScriptCompiler = JavaScriptCompiler, hb.Parser = Parser, hb.parse = parse, hb
          };
        return Handlebars = create(), Handlebars.create = create, Handlebars["default"] = Handlebars, __exports__ = Handlebars
      }(__module1__, __module7__, __module8__, __module11__, __module12__);
    return __module0__
  }), ! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
  }(function(a) {
    function b(b) {
      b && (b.Loglevel && (console.log("From remote url, setting LogLevel = " + b.LogLevel), a.Log.LogLevel = b.LogLevel), b.remoteUrl && (console.log("From remote url, setting remoteUrl = " + b.remoteUrl), a.Log.remoteUrl = b.remoteUrl), b.prefix && (console.log("From remote url, setting prefix = " + b.prefix), a.Log.prefix = b.prefix), b.remoteLevel && (console.log("From remote url, remoteUrl = " + b.remoteLevel), a.Log.remoteLevel = b.remoteLevel))
    }

    function c(a, b) {
      return (1e15 + a + "").slice(-b)
    }

    function d(b, c) {
      var d = function(d) {
        if (i) {
          d.stopPropagation(), f(j) && (null !== j && a("#khstooltip").remove(), b.attr("title", k)), k = b.attr("title"), b.attr("title", "showing");
          var e = "";
          for (var g in a.Log.inspectors) e += a.Log.inspectors[g].call(null, b);
          var h = c + e;
          a("body").append('<div id="khstooltip"><div class="khstipHeader"><span class="closeButton">X</span></div><div class="khstipBody"><h>' + h + '</div><div class="khstipFooter"></div></div>'), a("#khstooltip").css("top", d.pageY).css("left", d.pageX).fadeIn("500").fadeTo("10", .8), a("#khstooltip .closeButton").css({
            "float": "right",
            "font-size": "14px",
            "background-color": "#FFFFFF",
            color: "#000000",
            padding: "4px",
            "margin-top": "8px",
            "font-weight": "700"
          }).hover(function() {
            a(this).css({
              "background-color": "#000000",
              color: "#ffffff",
              cursor: "pointer"
            })
          }, function() {
            a(this).css({
              "background-color": "#FFFFFF",
              color: "#000000"
            })
          }).on("click", this, function() {
            a(this).parents("#khstooltip").remove()
          })
        }
      };
      b.mouseenter(function() {
        j = b, i && (j.css("outline", "medium solid #FF0000"), j.attr("title", "showing"), j.dblclick(d))
      }).mousemove(function() {}).mouseleave(function() {
        null !== j && (j.attr("title", k), j.css("outline", ""), j = null), b.css("outline", "")
      })
    }

    function e(b) {
      var c = localStorage["local.logs"],
        d = null;
      d = null === c || void 0 === c || "" === c ? {
        entries: []
      } : JSON.parse(c), d.entries.push(b), d.entries.length > a.Log.logLength && d.entries.shift(), localStorage["local.logs"] = JSON.stringify(d)
    }

    function f(a) {
      var b = a.attr("title");
      return "showing" == b
    }

    function g() {
      var b = " #khstooltip {  position:absolute;  z-index:9999;  color:#fff;  font-size:10px;  width:580px; }",
        c = " #khstooltip .khstipHeader {  height:8px; } ",
        d = "/* IE hack */*html #khstooltip .khstipHeader {margin-bottom:-6px;}",
        e = "#khstooltip .khstipBody { background-color:#000;  padding:5px;  }",
        f = "#khstooltip .khstipFooter { height:8px;  } ",
        g = "<style>" + b + c + d + e + f + "</style>";
      a(g).appendTo("body")
    }

    function h() {
      window.onkeydown = function(b) {
        if (-1 != a.Log.keyCodes.indexOf(b.keyCode) && b.ctrlKey && (a.Log.showOutline(), a.Log.isInspecting() ? (a.Log.inspectOff(), a.Log.debug("inspecting off")) : (a.Log.inspectOn(), a.Log.debug("inspecting on"))), b.keyCode == a.Log.modelDumpKeyCode && b.ctrlKey) {
          for (var c = a("[data-json]").map(function() {
              return a(this).attr("data-json")
            }).get(), d = "", e = "", f = 0; f < c.length; f++) {
            var g = c[f].split("<~>");
            d = g[0], model = g[1], e = e + "<b>" + d + "</b></br><textarea rows='20' cols='80'>" + model + "</textarea></br>"
          }
          var h = window.open();
          h.document.write("<html><head><title>JSON MODELS</title></head><body><div class='khstipBody'>" + e + "</div><div class='khstipFooter'></div></body></html>")
        }
        b.keyCode == a.Log.pullSettingsKeyCode && b.ctrlKey && (null !== a.Log.pullSettingsUrl ? q(a.Log.pullSettingsUrl, a.Log.beforeSend) : console.log("Log settings pull url not set, set $.Log.pullSettingsUrl to a URL"))
      }, window.onkeyup = function(b) {
        -1 != a.Log.keyCodes.indexOf(b.keyCode) && a.Log.hideOutline()
      }, g()
    }
    var i = !1,
      j = null,
      k = null,
      l = !1;
    window.console || (window.console = {}), window.console.log || (window.console.log = function() {}), window.console.info || (window.console.info = function() {}), window.console.debug || (window.console.debug = function() {}), window.console.error || (window.console.error = function() {}), window.console.warn || (window.console.warn = function() {}), a.LogLevel = {
      log: 0,
      debug: 1,
      info: 2,
      warn: 3,
      error: 4
    }, a.Log = {
      keyCodes: [10, 13],
      logKeyCode: 17,
      level: a.LogLevel.info,
      modelDumpKeyCode: 77,
      pullSettingsKeyCode: 80,
      divs: {},
      inspectors: [],
      logLocal: !1,
      logLength: 100,
      remoteLevel: a.LogLevel.error,
      color: "#FF0000",
      remoteUrl: null,
      pullSettingsUrl: null,
      beforeSend: null,
      log: function(b) {
        if (this.level <= a.LogLevel.log) {
          var c = o("LOG", b);
          this.remoteLevel <= a.LogLevel.log && p(this.remoteUrl, c, this.beforeSend), this.logLocal && e(c), console.log(c)
        }
      },
      info: function(b) {
        if (this.level <= a.LogLevel.info) {
          var c = o("INFO", b);
          this.remoteLevel <= a.LogLevel.info && p(this.remoteUrl, c, this.beforeSend), this.logLocal && e(c), console.info(c)
        }
      },
      debug: function(b) {
        if (this.level <= a.LogLevel.debug) {
          var c = o("DEBUG", b);
          this.remoteLevel <= a.LogLevel.debug && p(this.remoteUrl, c, this.beforeSend), this.logLocal && e(c), console.debug(c)
        }
      },
      error: function(b) {
        if (this.level <= a.LogLevel.error) {
          var c = o("ERROR", b);
          this.remoteLevel <= a.LogLevel.error && p(this.remoteUrl, c, this.beforeSend), this.logLocal && e(c), console.error(c)
        }
      },
      warn: function(b) {
        if (this.level <= a.LogLevel.warn) {
          var c = o("WARN", b);
          this.remoteLevel <= a.LogLevel.warn && p(this.remoteUrl, c, this.beforeSend), this.logLocal && e(c), console.warn(c)
        }
      },
      inspect: function() {
        l = !0, h()
      },
      inspectOn: function() {
        i = !0
      },
      inspectOff: function() {
        i = !1
      },
      isInspecting: function() {
        return i
      },
      install: function(a) {
        this.inspectors.push(a)
      },
      mark: function(b, c, e) {
        if (l) {
          var f, g = "<b>Model:<b>&nbsp;</br>",
            h = "<div><b>Id:&nbsp;</b>" + b.attr("id") + "</br><b>View:&nbsp;</b>" + c + "</div>";
          null !== e & void 0 !== e && (f = n(e, ""), g += "<div style='max-height : 512px; overflow : auto;'><pre>" + f + "</pre></div>", h += g);
          var i = b.attr("id") + c;
          this.divs[i] = b, d(b, h), e && b.attr("data-json", c + "<~>" + f), a.Log.info("Marked " + c + " for inspection")
        }
      },
      showOutline: function() {
        for (var a in this.divs) this.divs[a].css("outline", "medium solid #FF0000")
      },
      hideOutline: function() {
        for (var a in this.divs) this.divs[a].css("outline", "")
      },
      localStorageLogInspector: function() {
        return function() {
          var b = "<b>Log Entries (" + a.Log.logLength + ")</b>";
          b += "<div style='height : 150px; overflow : auto;'><pre>";
          var c = JSON.parse(localStorage["local.logs"]);
          for (var d in c.entries) b += c.entries[d] + "</br>";
          return b += "</pre></div>"
        }
      },
      localLogEntries: function() {
        return JSON.parse(localStorage["local.logs"])
      },
      resetLocalLog: function() {
        localStorage["local.logs"] = ""
      }
    };
    var m = function(a) {
        return "object" == typeof a ? null === a ? "null" : a.constructor === [].constructor ? "array" : a.constructor === (new Date).constructor ? "date" : a.constructor === (new RegExp).constructor ? "regex" : "object" : typeof a
      },
      n = function(b, c) {
        var d, e;
        arguments.length < 2 && (c = "");
        var f = "    ",
          g = m(b);
        if ("array" === g) {
          if (0 === b.length) return "[]";
          d = "["
        } else {
          if (e = 0, a.each(b, function() {
              e++
            }), 0 === e) return "{}";
          d = "{"
        }
        return e = 0, a.each(b, function(a, b) {
          switch (e > 0 && (d += ","), d += "array" == g ? "\n" + c + f : "\n" + c + f + '"' + a + '": ', m(b)) {
            case "array":
            case "object":
              d += n(b, c + f);
              break;
            case "boolean":
            case "number":
              d += b.toString();
              break;
            case "null":
              d += "null";
              break;
            case "string":
              d += '"' + b + '"';
              break;
            default:
              d += "TYPEOF: " + typeof b
          }
          e++
        }), d += "array" == g ? "\n" + c + "]" : "\n" + c + "}"
      },
      o = function(b, d) {
        a.Log.prefix && (b = "function" == typeof a.Log.prefix ? b + ":" + a.Log.prefix() : b + ":" + a.Log.prefix);
        var e = new Date,
          f = e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate() + ":" + c(e.getHours(), 2) + ":" + c(e.getMinutes(), 2) + ":" + c(e.getSeconds(), 2) + ":" + c(e.getMilliseconds(), 3);
        return b + ":" + f + "->" + d
      },
      p = function(b, c, d) {
        if (null !== b) {
          var e = b;
          a.ajax({
            url: e,
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify({
              log: c
            }),
            beforeSend: d,
            success: function() {},
            error: function() {
              console.error("Error sending remote log message to - " + e)
            }
          })
        }
      },
      q = function(c, d) {
        if (null !== c) {
          var e = c;
          a.ajax({
            url: e,
            type: "GET",
            contentType: "application/json",
            beforeSend: d,
            success: function(a) {
              b(a), console.log("Logging settins pulled and applied from server")
            },
            error: function() {
              console.error("Error sending remote log message to - " + e)
            }
          })
        }
      };
    return a(function() {}), a.Log
  }),
  function($) {
    "use strict";
    var escape = /["\\\x00-\x1f\x7f-\x9f]/g,
      meta = {
        "\b": "\\b",
        "	": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
      },
      hasOwn = Object.prototype.hasOwnProperty;
    $.toJSON = "object" == typeof JSON && JSON.stringify ? JSON.stringify : function(o) {
      if (null === o) return "null";
      var pairs, k, name, val, type = $.type(o);
      if ("undefined" === type) return void 0;
      if ("number" === type || "boolean" === type) return String(o);
      if ("string" === type) return $.quoteString(o);
      if ("function" == typeof o.toJSON) return $.toJSON(o.toJSON());
      if ("date" === type) {
        var month = o.getUTCMonth() + 1,
          day = o.getUTCDate(),
          year = o.getUTCFullYear(),
          hours = o.getUTCHours(),
          minutes = o.getUTCMinutes(),
          seconds = o.getUTCSeconds(),
          milli = o.getUTCMilliseconds();
        return 10 > month && (month = "0" + month), 10 > day && (day = "0" + day), 10 > hours && (hours = "0" + hours), 10 > minutes && (minutes = "0" + minutes), 10 > seconds && (seconds = "0" + seconds), 100 > milli && (milli = "0" + milli), 10 > milli && (milli = "0" + milli), '"' + year + "-" + month + "-" + day + "T" + hours + ":" + minutes + ":" + seconds + "." + milli + 'Z"'
      }
      if (pairs = [], $.isArray(o)) {
        for (k = 0; k < o.length; k++) pairs.push($.toJSON(o[k]) || "null");
        return "[" + pairs.join(",") + "]"
      }
      if ("object" == typeof o) {
        for (k in o)
          if (hasOwn.call(o, k)) {
            if (type = typeof k, "number" === type) name = '"' + k + '"';
            else {
              if ("string" !== type) continue;
              name = $.quoteString(k)
            }
            type = typeof o[k], "function" !== type && "undefined" !== type && (val = $.toJSON(o[k]), pairs.push(name + ":" + val))
          }
        return "{" + pairs.join(",") + "}"
      }
    }, $.evalJSON = "object" == typeof JSON && JSON.parse ? JSON.parse : function(str) {
      return eval("(" + str + ")")
    }, $.secureEvalJSON = "object" == typeof JSON && JSON.parse ? JSON.parse : function(str) {
      var filtered = str.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "");
      if (/^[\],:{}\s]*$/.test(filtered)) return eval("(" + str + ")");
      throw new SyntaxError("Error parsing JSON, source is not valid.")
    }, $.quoteString = function(str) {
      return str.match(escape) ? '"' + str.replace(escape, function(a) {
        var c = meta[a];
        return "string" == typeof c ? c : (c = a.charCodeAt(), "\\u00" + Math.floor(c / 16).toString(16) + (c % 16).toString(16))
      }) + '"' : '"' + str + '"'
    }
  }(jQuery),
  function() {
    function C() {
      var a = "{}";
      if ("userDataBehavior" == h) {
        d.load("jStorage");
        try {
          a = d.getAttribute("jStorage")
        } catch (b) {}
        try {
          q = d.getAttribute("jStorage_update")
        } catch (c) {}
        l.jStorage = a
      }
      D(), w(), E()
    }

    function t() {
      var a;
      clearTimeout(F), F = setTimeout(function() {
        if ("localStorage" == h || "globalStorage" == h) a = l.jStorage_update;
        else if ("userDataBehavior" == h) {
          d.load("jStorage");
          try {
            a = d.getAttribute("jStorage_update")
          } catch (b) {}
        }
        if (a && a != q) {
          q = a;
          var k, m = n.parse(n.stringify(c.__jstorage_meta.CRC32));
          C(), k = n.parse(n.stringify(c.__jstorage_meta.CRC32));
          var e, y = [],
            g = [];
          for (e in m) m.hasOwnProperty(e) && (k[e] ? m[e] != k[e] && "2." == String(m[e]).substr(0, 2) && y.push(e) : g.push(e));
          for (e in k) k.hasOwnProperty(e) && (m[e] || y.push(e));
          r(y, "updated"), r(g, "deleted")
        }
      }, 25)
    }

    function r(a, b) {
      a = [].concat(a || []);
      var c, k, e, d;
      if ("flushed" == b) {
        a = [];
        for (c in f) f.hasOwnProperty(c) && a.push(c);
        b = "deleted"
      }
      for (c = 0, e = a.length; e > c; c++) {
        if (f[a[c]])
          for (k = 0, d = f[a[c]].length; d > k; k++) f[a[c]][k](a[c], b);
        if (f["*"])
          for (k = 0, d = f["*"].length; d > k; k++) f["*"][k](a[c], b)
      }
    }

    function u() {
      var a = (+new Date).toString();
      if ("localStorage" == h || "globalStorage" == h) try {
        l.jStorage_update = a
      } catch (b) {
        h = !1
      } else "userDataBehavior" == h && (d.setAttribute("jStorage_update", a), d.save("jStorage"));
      t()
    }

    function D() {
      if (l.jStorage) try {
        c = n.parse(String(l.jStorage))
      } catch (a) {
        l.jStorage = "{}"
      } else l.jStorage = "{}";
      z = l.jStorage ? String(l.jStorage).length : 0, c.__jstorage_meta || (c.__jstorage_meta = {}), c.__jstorage_meta.CRC32 || (c.__jstorage_meta.CRC32 = {})
    }

    function v() {
      if (c.__jstorage_meta.PubSub) {
        for (var a = +new Date - 2e3, b = 0, m = c.__jstorage_meta.PubSub.length; m > b; b++)
          if (c.__jstorage_meta.PubSub[b][0] <= a) {
            c.__jstorage_meta.PubSub.splice(b, c.__jstorage_meta.PubSub.length - b);
            break
          }
        c.__jstorage_meta.PubSub.length || delete c.__jstorage_meta.PubSub
      }
      try {
        l.jStorage = n.stringify(c), d && (d.setAttribute("jStorage", l.jStorage), d.save("jStorage")), z = l.jStorage ? String(l.jStorage).length : 0
      } catch (k) {}
    }

    function p(a) {
      if ("string" != typeof a && "number" != typeof a) throw new TypeError("Key name must be string or numeric");
      if ("__jstorage_meta" == a) throw new TypeError("Reserved key name");
      return !0
    }

    function w() {
      var a, b, m, k, e = 1 / 0,
        d = !1,
        g = [];
      if (clearTimeout(G), c.__jstorage_meta && "object" == typeof c.__jstorage_meta.TTL) {
        a = +new Date, m = c.__jstorage_meta.TTL, k = c.__jstorage_meta.CRC32;
        for (b in m) m.hasOwnProperty(b) && (m[b] <= a ? (delete m[b], delete k[b], delete c[b], d = !0, g.push(b)) : m[b] < e && (e = m[b]));
        1 / 0 != e && (G = setTimeout(w, Math.min(e - a, 2147483647))), d && (v(), u(), r(g, "deleted"))
      }
    }

    function E() {
      var a;
      if (c.__jstorage_meta.PubSub) {
        var b, m = A;
        for (a = c.__jstorage_meta.PubSub.length - 1; a >= 0; a--)
          if (b = c.__jstorage_meta.PubSub[a], b[0] > A) {
            var m = b[0],
              k = b[1];
            if (b = b[2], s[k])
              for (var e = 0, d = s[k].length; d > e; e++) try {
                s[k][e](k, n.parse(n.stringify(b)))
              } catch (g) {}
          }
        A = m
      }
    }
    var x = window.jQuery || window.$ || (window.$ = {}),
      n = {
        parse: window.JSON && (window.JSON.parse || window.JSON.decode) || String.prototype.evalJSON && function(a) {
          return String(a).evalJSON()
        } || x.parseJSON || x.evalJSON,
        stringify: Object.toJSON || window.JSON && (window.JSON.stringify || window.JSON.encode) || x.toJSON
      };
    if (!("parse" in n && "stringify" in n)) throw Error("No JSON support found, include //cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.js to page");
    var G, c = {
        __jstorage_meta: {
          CRC32: {}
        }
      },
      l = {
        jStorage: "{}"
      },
      d = null,
      z = 0,
      h = !1,
      f = {},
      F = !1,
      q = 0,
      s = {},
      A = +new Date,
      B = {
        isXML: function(a) {
          return (a = (a ? a.ownerDocument || a : 0).documentElement) ? "HTML" !== a.nodeName : !1
        },
        encode: function(a) {
          if (!this.isXML(a)) return !1;
          try {
            return (new XMLSerializer).serializeToString(a)
          } catch (b) {
            try {
              return a.xml
            } catch (c) {}
          }
          return !1
        },
        decode: function(a) {
          var b = "DOMParser" in window && (new DOMParser).parseFromString || window.ActiveXObject && function(a) {
            var b = new ActiveXObject("Microsoft.XMLDOM");
            return b.async = "false", b.loadXML(a), b
          };
          return b ? (a = b.call("DOMParser" in window && new DOMParser || window, a, "text/xml"), this.isXML(a) ? a : !1) : !1
        }
      };
    x.jStorage = {
        version: "0.4.10",
        set: function(a, b, d) {
          if (p(a), d = d || {}, "undefined" == typeof b) return this.deleteKey(a), b;
          if (B.isXML(b)) b = {
            _is_xml: !0,
            xml: B.encode(b)
          };
          else {
            if ("function" == typeof b) return;
            b && "object" == typeof b && (b = n.parse(n.stringify(b)))
          }
          c[a] = b;
          for (var f, k = c.__jstorage_meta.CRC32, e = n.stringify(b), l = e.length, g = 2538058380 ^ l, h = 0; l >= 4;) f = 255 & e.charCodeAt(h) | (255 & e.charCodeAt(++h)) << 8 | (255 & e.charCodeAt(++h)) << 16 | (255 & e.charCodeAt(++h)) << 24, f = 1540483477 * (65535 & f) + ((1540483477 * (f >>> 16) & 65535) << 16), f ^= f >>> 24, f = 1540483477 * (65535 & f) + ((1540483477 * (f >>> 16) & 65535) << 16), g = 1540483477 * (65535 & g) + ((1540483477 * (g >>> 16) & 65535) << 16) ^ f, l -= 4, ++h;
          switch (l) {
            case 3:
              g ^= (255 & e.charCodeAt(h + 2)) << 16;
            case 2:
              g ^= (255 & e.charCodeAt(h + 1)) << 8;
            case 1:
              g ^= 255 & e.charCodeAt(h), g = 1540483477 * (65535 & g) + ((1540483477 * (g >>> 16) & 65535) << 16)
          }
          return g ^= g >>> 13, g = 1540483477 * (65535 & g) + ((1540483477 * (g >>> 16) & 65535) << 16), k[a] = "2." + ((g ^ g >>> 15) >>> 0), this.setTTL(a, d.TTL || 0), r(a, "updated"), b
        },
        get: function(a, b) {
          return p(a), a in c ? c[a] && "object" == typeof c[a] && c[a]._is_xml ? B.decode(c[a].xml) : c[a] : "undefined" == typeof b ? null : b
        },
        deleteKey: function(a) {
          return p(a), a in c ? (delete c[a], "object" == typeof c.__jstorage_meta.TTL && a in c.__jstorage_meta.TTL && delete c.__jstorage_meta.TTL[a], delete c.__jstorage_meta.CRC32[a], v(), u(), r(a, "deleted"), !0) : !1
        },
        setTTL: function(a, b) {
          var d = +new Date;
          return p(a), b = Number(b) || 0, a in c ? (c.__jstorage_meta.TTL || (c.__jstorage_meta.TTL = {}), b > 0 ? c.__jstorage_meta.TTL[a] = d + b : delete c.__jstorage_meta.TTL[a], v(), w(), u(), !0) : !1
        },
        getTTL: function(a) {
          var b = +new Date;
          return p(a), a in c && c.__jstorage_meta.TTL && c.__jstorage_meta.TTL[a] ? (a = c.__jstorage_meta.TTL[a] - b) || 0 : 0
        },
        flush: function() {
          return c = {
            __jstorage_meta: {
              CRC32: {}
            }
          }, v(), u(), r(null, "flushed"), !0
        },
        storageObj: function() {
          function a() {}
          return a.prototype = c, new a
        },
        index: function() {
          var b, a = [];
          for (b in c) c.hasOwnProperty(b) && "__jstorage_meta" != b && a.push(b);
          return a
        },
        storageSize: function() {
          return z
        },
        currentBackend: function() {
          return h
        },
        storageAvailable: function() {
          return !!h
        },
        listenKeyChange: function(a, b) {
          p(a), f[a] || (f[a] = []), f[a].push(b)
        },
        stopListening: function(a, b) {
          if (p(a), f[a])
            if (b)
              for (var c = f[a].length - 1; c >= 0; c--) f[a][c] == b && f[a].splice(c, 1);
            else delete f[a]
        },
        subscribe: function(a, b) {
          if (a = (a || "").toString(), !a) throw new TypeError("Channel not defined");
          s[a] || (s[a] = []), s[a].push(b)
        },
        publish: function(a, b) {
          if (a = (a || "").toString(), !a) throw new TypeError("Channel not defined");
          c.__jstorage_meta || (c.__jstorage_meta = {}), c.__jstorage_meta.PubSub || (c.__jstorage_meta.PubSub = []), c.__jstorage_meta.PubSub.unshift([+new Date, a, b]), v(), u()
        },
        reInit: function() {
          C()
        },
        noConflict: function(a) {
          return delete window.$.jStorage, a && (window.jStorage = this), this
        }
      },
      function() {
        var a = !1;
        if ("localStorage" in window) try {
          window.localStorage.setItem("_tmptest", "tmpval"), a = !0, window.localStorage.removeItem("_tmptest")
        } catch (b) {}
        if (a) try {
            window.localStorage && (l = window.localStorage, h = "localStorage", q = l.jStorage_update)
          } catch (c) {} else if ("globalStorage" in window) try {
            window.globalStorage && (l = "localhost" == window.location.hostname ? window.globalStorage["localhost.localdomain"] : window.globalStorage[window.location.hostname], h = "globalStorage", q = l.jStorage_update)
          } catch (f) {} else {
            if (d = document.createElement("link"), !d.addBehavior) return void(d = null);
            d.style.behavior = "url(#default#userData)", document.getElementsByTagName("head")[0].appendChild(d);
            try {
              d.load("jStorage")
            } catch (e) {
              d.setAttribute("jStorage", "{}"), d.save("jStorage"), d.load("jStorage")
            }
            a = "{}";
            try {
              a = d.getAttribute("jStorage")
            } catch (n) {}
            try {
              q = d.getAttribute("jStorage_update")
            } catch (g) {}
            l.jStorage = a, h = "userDataBehavior"
          }
          D(), w(), "localStorage" == h || "globalStorage" == h ? "addEventListener" in window ? window.addEventListener("storage", t, !1) : document.attachEvent("onstorage", t) : "userDataBehavior" == h && setInterval(t, 1e3), E(), "addEventListener" in window && window.addEventListener("pageshow", function(a) {
          a.persisted && t()
        }, !1)
      }()
  }(),
  function($) {
    $.fn.stickable = function(args) {
      if (!window.matchMedia || "object" == typeof respond) return $.fn.stickable.reset = function() {}, $.fn.stickable.destroy = function() {}, !1;
      var options = {
        margin: 0,
        marginTop: null,
        marginBottom: null,
        bottomId: null,
        stickyBreakpoint: 768
      };
      $.extend(options, args), null === options.bottomId && alert("Please specify a bottomId"), null === options.marginTop && (options.marginTop = options.margin), null === options.marginBottom && (options.marginBottom = options.margin);
      var $el = this,
        $elParent = $el.parent(),
        $window = $(window),
        $bottom = $("#" + options.bottomId),
        windowTop = $window.scrollTop(),
        stickyActive = !1,
        fixedTop = !0,
        windowWidth = window.innerWidth,
        winHeight = $window.height(),
        elOffset = ($window.width(), $elParent.offset().top),
        elHeight = $el.outerHeight(),
        dynamicTopPosition = 0,
        bottomOffset = $bottom.offset().top,
        downStart = elOffset + dynamicTopPosition + elHeight + options.marginBottom - winHeight,
        downEnd = bottomOffset - winHeight,
        upStart = dynamicTopPosition + elOffset + options.marginTop,
        upEnd = elOffset,
        shortBottomPosition = bottomOffset - elOffset - elHeight - options.marginBottom,
        scrollDirection = "down",
        isTouch = "ontouchstart" in window || navigator.msMaxTouchPoints,
        destroySticky = function() {
          stickyActive = !1, $el.removeAttr("style").removeClass("stickable-absolute").removeClass("stickable-fixed-top").removeClass("stickable-fixed"), $elParent.removeClass("stickable-parent"), $el.css("top", "auto"), $window.off("scroll", scrollSticky)
        };
      if ($.fn.stickable.reset = function() {
          $window.off("scroll", scrollSticky), windowTop = $window.scrollTop(), elHeight = $el.outerHeight(), elOffset = $el.parent().offset().top, bottomOffset = $bottom.offset().top, dynamicTopPosition = $el.offset().top - elOffset, upStart = dynamicTopPosition + elOffset + options.marginTop, shortBottomPosition = bottomOffset - elOffset - elHeight - options.marginBottom, upEnd = elOffset, downStart = elOffset + elHeight + dynamicTopPosition + options.marginBottom - winHeight, downEnd = bottomOffset - winHeight, initSticky(), $window.trigger("scroll")
        }, $.fn.stickable.destroy = function() {
          destroySticky()
        }, this.length > 0) {
        var scrollSticky = function() {
            if (windowWidth < options.stickyBreakpoint) return !1; {
              var elTopPosition = parseInt(bottomOffset - elHeight - elOffset - options.marginBottom);
              bottomOffset - (elHeight + options.marginBottom)
            }
            scrollDirection = $window.scrollTop() > windowTop ? "down" : "up", windowTop = $window.scrollTop(), fixedTop === !0 ? elOffset < windowTop + options.marginTop ? windowTop + elHeight + options.marginBottom + options.marginTop > bottomOffset ? $el.addClass("stickable-absolute").removeClass("stickable-fixed-top").removeClass("stickable-fixed-bottom").css({
              top: shortBottomPosition + "px",
              bottom: "auto"
            }) : $el.addClass("stickable-fixed-top").removeClass("stickable-absolute").removeClass("stickable-fixed-bottom").css({
              top: options.marginTop + "px",
              bottom: "auto"
            }) : $el.removeClass("stickable-fixed-top").removeClass("stickable-absolute").removeClass("stickable-fixed-bottom").css({
              top: "auto",
              bottom: "auto"
            }) : "down" === scrollDirection ? (dynamicTopPosition = $el.offset().top - elOffset, upStart = dynamicTopPosition + elOffset + options.marginTop, downStart > windowTop ? $el.addClass("stickable-absolute").removeClass("stickable-fixed-top").removeClass("stickable-fixed-bottom").css({
              top: dynamicTopPosition + "px",
              bottom: "auto"
            }) : windowTop > downStart && downEnd > windowTop ? $el.addClass("stickable-fixed-bottom").removeClass("stickable-fixed-top").removeClass("stickable-absolute").css({
              top: "auto",
              bottom: options.marginBottom + "px"
            }) : windowTop > downEnd && $el.addClass("stickable-absolute").removeClass("stickable-fixed-top").removeClass("stickable-fixed-bottom").css({
              top: elTopPosition + "px",
              bottom: "auto"
            })) : (dynamicTopPosition = $el.offset().top - elOffset, downStart = elOffset + elHeight + dynamicTopPosition + options.marginBottom - winHeight, windowTop < upEnd - options.marginTop ? $el.addClass("stickable-absolute").removeClass("stickable-fixed-top").removeClass("stickable-fixed-bottom").css({
              top: "0px",
              bottom: "auto"
            }) : windowTop > upEnd && windowTop < upStart - 2 * options.marginTop ? $el.addClass("stickable-fixed-top").removeClass("stickable-absolute").removeClass("stickable-fixed-bottom").css({
              top: options.marginTop + "px",
              bottom: "auto"
            }) : windowTop > upStart && $el.addClass("stickable-absolute").removeClass("stickable-fixed-top").removeClass("stickable-fixed-bottom").css({
              top: dynamicTopPosition + "px",
              bottom: "auto"
            }))
          },
          initSticky = function() {
            elHeight + options.marginTop + options.marginBottom + 2 < bottomOffset - elOffset ? (stickyActive = !0, $elParent.addClass("stickable-parent"), $el.outerWidth($elParent.outerWidth()), fixedTop = elHeight + (options.marginTop + options.marginBottom) < winHeight ? !0 : !1, $window.on("scroll", scrollSticky), windowTop > 0 && $window.scrollTop(windowTop + 1)) : destroySticky()
          },
          stickyResize = function() {
            windowWidth = window.innerWidth, windowWidth >= options.stickyBreakpoint ? ($(this).stickable.reset(), stickyActive === !1 ? initSticky() : $el.outerWidth($elParent.width())) : windowWidth < options.stickyBreakpoint && stickyActive === !0 && destroySticky()
          };
        windowWidth >= options.stickyBreakpoint && initSticky(), windowTop > 0 && scrollSticky();
        var resizeEvent = "resize";
        isTouch && (resizeEvent = "resize orientationchange");
        var resizeTimeout;
        $window.on(resizeEvent, function() {
          clearTimeout(resizeTimeout), resizeTimeout = setTimeout(stickyResize, 200)
        })
      }
    }
  }(jQuery),
  function(factory) {
    "function" == typeof define && define.amd ? define(["jquery"], factory) : "object" == typeof exports ? module.exports = factory : factory(jQuery)
  }(function($) {
    function handler(event) {
      var orgEvent = event || window.event,
        args = slice.call(arguments, 1),
        delta = 0,
        deltaX = 0,
        deltaY = 0,
        absDelta = 0;
      if (event = $.event.fix(orgEvent), event.type = "mousewheel", "detail" in orgEvent && (deltaY = -1 * orgEvent.detail), "wheelDelta" in orgEvent && (deltaY = orgEvent.wheelDelta), "wheelDeltaY" in orgEvent && (deltaY = orgEvent.wheelDeltaY), "wheelDeltaX" in orgEvent && (deltaX = -1 * orgEvent.wheelDeltaX), "axis" in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS && (deltaX = -1 * deltaY, deltaY = 0), delta = 0 === deltaY ? deltaX : deltaY, "deltaY" in orgEvent && (deltaY = -1 * orgEvent.deltaY, delta = deltaY), "deltaX" in orgEvent && (deltaX = orgEvent.deltaX, 0 === deltaY && (delta = -1 * deltaX)), 0 !== deltaY || 0 !== deltaX) {
        if (1 === orgEvent.deltaMode) {
          var lineHeight = $.data(this, "mousewheel-line-height");
          delta *= lineHeight, deltaY *= lineHeight, deltaX *= lineHeight
        } else if (2 === orgEvent.deltaMode) {
          var pageHeight = $.data(this, "mousewheel-page-height");
          delta *= pageHeight, deltaY *= pageHeight, deltaX *= pageHeight
        }
        return absDelta = Math.max(Math.abs(deltaY), Math.abs(deltaX)), (!lowestDelta || lowestDelta > absDelta) && (lowestDelta = absDelta, shouldAdjustOldDeltas(orgEvent, absDelta) && (lowestDelta /= 40)), shouldAdjustOldDeltas(orgEvent, absDelta) && (delta /= 40, deltaX /= 40, deltaY /= 40), delta = Math[delta >= 1 ? "floor" : "ceil"](delta / lowestDelta), deltaX = Math[deltaX >= 1 ? "floor" : "ceil"](deltaX / lowestDelta), deltaY = Math[deltaY >= 1 ? "floor" : "ceil"](deltaY / lowestDelta), event.deltaX = deltaX, event.deltaY = deltaY, event.deltaFactor = lowestDelta, event.deltaMode = 0, args.unshift(event, delta, deltaX, deltaY), nullLowestDeltaTimeout && clearTimeout(nullLowestDeltaTimeout), nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200), ($.event.dispatch || $.event.handle).apply(this, args)
      }
    }

    function nullLowestDelta() {
      lowestDelta = null
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
      return special.settings.adjustOldDeltas && "mousewheel" === orgEvent.type && absDelta % 120 === 0
    }
    var nullLowestDeltaTimeout, lowestDelta, toFix = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
      toBind = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
      slice = Array.prototype.slice;
    if ($.event.fixHooks)
      for (var i = toFix.length; i;) $.event.fixHooks[toFix[--i]] = $.event.mouseHooks;
    var special = $.event.special.mousewheel = {
      version: "3.1.9",
      setup: function() {
        if (this.addEventListener)
          for (var i = toBind.length; i;) this.addEventListener(toBind[--i], handler, !1);
        else this.onmousewheel = handler;
        $.data(this, "mousewheel-line-height", special.getLineHeight(this)), $.data(this, "mousewheel-page-height", special.getPageHeight(this))
      },
      teardown: function() {
        if (this.removeEventListener)
          for (var i = toBind.length; i;) this.removeEventListener(toBind[--i], handler, !1);
        else this.onmousewheel = null
      },
      getLineHeight: function(elem) {
        return parseInt($(elem)["offsetParent" in $.fn ? "offsetParent" : "parent"]().css("fontSize"), 10)
      },
      getPageHeight: function(elem) {
        return $(elem).height()
      },
      settings: {
        adjustOldDeltas: !0
      }
    };
    $.fn.extend({
      mousewheel: function(fn) {
        return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel")
      },
      unmousewheel: function(fn) {
        return this.unbind("mousewheel", fn)
      }
    })
  }),
  function(plugin, window) {
    var factory = function($) {
      return plugin($, window)
    };
    "function" == typeof define && define.amd ? define(["jquery"], factory) : "object" == typeof exports ? module.exports = factory : factory(jQuery)
  }(function($, window, undefined) {
    $.fn.jScrollPane = function(settings) {
      function JScrollPane(elem, s) {
        function initialise(s) {
          var isMaintainingPositon, lastContentX, lastContentY, hasContainingSpaceChanged, originalScrollTop, originalScrollLeft, maintainAtBottom = !1,
            maintainAtRight = !1;
          if (settings = s, pane === undefined) originalScrollTop = elem.scrollTop(), originalScrollLeft = elem.scrollLeft(), elem.css({
            overflow: "hidden",
            padding: 0
          }), paneWidth = elem.innerWidth() + originalPaddingTotalWidth, paneHeight = elem.innerHeight(), elem.width(paneWidth), pane = $('<div class="jspPane" />').css("padding", originalPadding).append(elem.children()), container = $('<div class="jspContainer" />').css({
            width: paneWidth + "px",
            height: paneHeight + "px"
          }).append(pane).appendTo(elem);
          else {
            if (elem.css("width", ""), maintainAtBottom = settings.stickToBottom && isCloseToBottom(), maintainAtRight = settings.stickToRight && isCloseToRight(), hasContainingSpaceChanged = elem.innerWidth() + originalPaddingTotalWidth != paneWidth || elem.outerHeight() != paneHeight, hasContainingSpaceChanged && (paneWidth = elem.innerWidth() + originalPaddingTotalWidth, paneHeight = elem.innerHeight(), container.css({
                width: paneWidth + "px",
                height: paneHeight + "px"
              })), !hasContainingSpaceChanged && previousContentWidth == contentWidth && pane.outerHeight() == contentHeight) return void elem.width(paneWidth);
            previousContentWidth = contentWidth, pane.css("width", ""), elem.width(paneWidth), container.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()
          }
          pane.css("overflow", "auto"), contentWidth = s.contentWidth ? s.contentWidth : pane[0].scrollWidth, contentHeight = pane[0].scrollHeight, pane.css("overflow", ""), percentInViewH = contentWidth / paneWidth, percentInViewV = contentHeight / paneHeight, isScrollableV = percentInViewV > 1, isScrollableH = percentInViewH > 1, isScrollableH || isScrollableV ? (elem.addClass("jspScrollable"), isMaintainingPositon = settings.maintainPosition && (verticalDragPosition || horizontalDragPosition), isMaintainingPositon && (lastContentX = contentPositionX(), lastContentY = contentPositionY()), initialiseVerticalScroll(), initialiseHorizontalScroll(), resizeScrollbars(), isMaintainingPositon && (scrollToX(maintainAtRight ? contentWidth - paneWidth : lastContentX, !1), scrollToY(maintainAtBottom ? contentHeight - paneHeight : lastContentY, !1)), initFocusHandler(), initMousewheel(), initTouch(), settings.enableKeyboardNavigation && initKeyboardNav(), settings.clickOnTrack && initClickOnTrack(), observeHash(), settings.hijackInternalLinks && hijackInternalLinks()) : (elem.removeClass("jspScrollable"), pane.css({
            top: 0,
            left: 0,
            width: container.width() - originalPaddingTotalWidth
          }), removeMousewheel(), removeFocusHandler(), removeKeyboardNav(), removeClickOnTrack()), settings.autoReinitialise && !reinitialiseInterval ? reinitialiseInterval = setInterval(function() {
            initialise(settings)
          }, settings.autoReinitialiseDelay) : !settings.autoReinitialise && reinitialiseInterval && clearInterval(reinitialiseInterval), originalScrollTop && elem.scrollTop(0) && scrollToY(originalScrollTop, !1), originalScrollLeft && elem.scrollLeft(0) && scrollToX(originalScrollLeft, !1), elem.trigger("jsp-initialised", [isScrollableH || isScrollableV])
        }

        function initialiseVerticalScroll() {
          isScrollableV && (container.append($('<div class="jspVerticalBar" />').append($('<div class="jspCap jspCapTop" />'), $('<div class="jspTrack" />').append($('<div class="jspDrag" />').append($('<div class="jspDragTop" />'), $('<div class="jspDragBottom" />'))), $('<div class="jspCap jspCapBottom" />'))), verticalBar = container.find(">.jspVerticalBar"), verticalTrack = verticalBar.find(">.jspTrack"), verticalDrag = verticalTrack.find(">.jspDrag"), settings.showArrows && (arrowUp = $('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp", getArrowScroll(0, -1)).bind("click.jsp", nil), arrowDown = $('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp", getArrowScroll(0, 1)).bind("click.jsp", nil), settings.arrowScrollOnHover && (arrowUp.bind("mouseover.jsp", getArrowScroll(0, -1, arrowUp)), arrowDown.bind("mouseover.jsp", getArrowScroll(0, 1, arrowDown))), appendArrows(verticalTrack, settings.verticalArrowPositions, arrowUp, arrowDown)), verticalTrackHeight = paneHeight, container.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function() {
            verticalTrackHeight -= $(this).outerHeight()
          }), verticalDrag.hover(function() {
            verticalDrag.addClass("jspHover")
          }, function() {
            verticalDrag.removeClass("jspHover")
          }).bind("mousedown.jsp", function(e) {
            $("html").bind("dragstart.jsp selectstart.jsp", nil), verticalDrag.addClass("jspActive");
            var startY = e.pageY - verticalDrag.position().top;
            return $("html").bind("mousemove.jsp", function(e) {
              positionDragY(e.pageY - startY, !1)
            }).bind("mouseup.jsp mouseleave.jsp", cancelDrag), !1
          }), sizeVerticalScrollbar())
        }

        function sizeVerticalScrollbar() {
          verticalTrack.height(verticalTrackHeight + "px"), verticalDragPosition = 0, scrollbarWidth = settings.verticalGutter + verticalTrack.outerWidth(), pane.width(paneWidth - scrollbarWidth - originalPaddingTotalWidth);
          try {
            0 === verticalBar.position().left && pane.css("margin-left", scrollbarWidth + "px")
          } catch (err) {}
        }

        function initialiseHorizontalScroll() {
          isScrollableH && (container.append($('<div class="jspHorizontalBar" />').append($('<div class="jspCap jspCapLeft" />'), $('<div class="jspTrack" />').append($('<div class="jspDrag" />').append($('<div class="jspDragLeft" />'), $('<div class="jspDragRight" />'))), $('<div class="jspCap jspCapRight" />'))), horizontalBar = container.find(">.jspHorizontalBar"), horizontalTrack = horizontalBar.find(">.jspTrack"), horizontalDrag = horizontalTrack.find(">.jspDrag"), settings.showArrows && (arrowLeft = $('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp", getArrowScroll(-1, 0)).bind("click.jsp", nil), arrowRight = $('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp", getArrowScroll(1, 0)).bind("click.jsp", nil), settings.arrowScrollOnHover && (arrowLeft.bind("mouseover.jsp", getArrowScroll(-1, 0, arrowLeft)), arrowRight.bind("mouseover.jsp", getArrowScroll(1, 0, arrowRight))), appendArrows(horizontalTrack, settings.horizontalArrowPositions, arrowLeft, arrowRight)), horizontalDrag.hover(function() {
            horizontalDrag.addClass("jspHover")
          }, function() {
            horizontalDrag.removeClass("jspHover")
          }).bind("mousedown.jsp", function(e) {
            $("html").bind("dragstart.jsp selectstart.jsp", nil), horizontalDrag.addClass("jspActive");
            var startX = e.pageX - horizontalDrag.position().left;
            return $("html").bind("mousemove.jsp", function(e) {
              positionDragX(e.pageX - startX, !1)
            }).bind("mouseup.jsp mouseleave.jsp", cancelDrag), !1
          }), horizontalTrackWidth = container.innerWidth(), sizeHorizontalScrollbar())
        }

        function sizeHorizontalScrollbar() {
          container.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function() {
            horizontalTrackWidth -= $(this).outerWidth()
          }), horizontalTrack.width(horizontalTrackWidth + "px"), horizontalDragPosition = 0
        }

        function resizeScrollbars() {
          if (isScrollableH && isScrollableV) {
            var horizontalTrackHeight = horizontalTrack.outerHeight(),
              verticalTrackWidth = verticalTrack.outerWidth();
            verticalTrackHeight -= horizontalTrackHeight, $(horizontalBar).find(">.jspCap:visible,>.jspArrow").each(function() {
              horizontalTrackWidth += $(this).outerWidth()
            }), horizontalTrackWidth -= verticalTrackWidth, paneHeight -= verticalTrackWidth, paneWidth -= horizontalTrackHeight, horizontalTrack.parent().append($('<div class="jspCorner" />').css("width", horizontalTrackHeight + "px")), sizeVerticalScrollbar(), sizeHorizontalScrollbar()
          }
          isScrollableH && pane.width(container.outerWidth() - originalPaddingTotalWidth + "px"), contentHeight = pane.outerHeight(), percentInViewV = contentHeight / paneHeight, isScrollableH && (horizontalDragWidth = Math.ceil(1 / percentInViewH * horizontalTrackWidth), horizontalDragWidth > settings.horizontalDragMaxWidth ? horizontalDragWidth = settings.horizontalDragMaxWidth : horizontalDragWidth < settings.horizontalDragMinWidth && (horizontalDragWidth = settings.horizontalDragMinWidth), horizontalDrag.width(horizontalDragWidth + "px"), dragMaxX = horizontalTrackWidth - horizontalDragWidth, _positionDragX(horizontalDragPosition)), isScrollableV && (verticalDragHeight = Math.ceil(1 / percentInViewV * verticalTrackHeight), verticalDragHeight > settings.verticalDragMaxHeight ? verticalDragHeight = settings.verticalDragMaxHeight : verticalDragHeight < settings.verticalDragMinHeight && (verticalDragHeight = settings.verticalDragMinHeight), verticalDrag.height(verticalDragHeight + "px"), dragMaxY = verticalTrackHeight - verticalDragHeight, _positionDragY(verticalDragPosition))
        }

        function appendArrows(ele, p, a1, a2) {
          var aTemp, p1 = "before",
            p2 = "after";
          "os" == p && (p = /Mac/.test(navigator.platform) ? "after" : "split"), p == p1 ? p2 = p : p == p2 && (p1 = p, aTemp = a1, a1 = a2, a2 = aTemp), ele[p1](a1)[p2](a2)
        }

        function getArrowScroll(dirX, dirY, ele) {
          return function() {
            return arrowScroll(dirX, dirY, this, ele), this.blur(), !1
          }
        }

        function arrowScroll(dirX, dirY, arrow, ele) {
          arrow = $(arrow).addClass("jspActive");
          var eve, scrollTimeout, isFirst = !0,
            doScroll = function() {
              0 !== dirX && jsp.scrollByX(dirX * settings.arrowButtonSpeed), 0 !== dirY && jsp.scrollByY(dirY * settings.arrowButtonSpeed), scrollTimeout = setTimeout(doScroll, isFirst ? settings.initialDelay : settings.arrowRepeatFreq), isFirst = !1
            };
          doScroll(), eve = ele ? "mouseout.jsp" : "mouseup.jsp", ele = ele || $("html"), ele.bind(eve, function() {
            arrow.removeClass("jspActive"), scrollTimeout && clearTimeout(scrollTimeout), scrollTimeout = null, ele.unbind(eve)
          })
        }

        function initClickOnTrack() {
          removeClickOnTrack(), isScrollableV && verticalTrack.bind("mousedown.jsp", function(e) {
            if (e.originalTarget === undefined || e.originalTarget == e.currentTarget) {
              var scrollTimeout, clickedTrack = $(this),
                offset = clickedTrack.offset(),
                direction = e.pageY - offset.top - verticalDragPosition,
                isFirst = !0,
                doScroll = function() {
                  var offset = clickedTrack.offset(),
                    pos = e.pageY - offset.top - verticalDragHeight / 2,
                    contentDragY = paneHeight * settings.scrollPagePercent,
                    dragY = dragMaxY * contentDragY / (contentHeight - paneHeight);
                  if (0 > direction) verticalDragPosition - dragY > pos ? jsp.scrollByY(-contentDragY) : positionDragY(pos);
                  else {
                    if (!(direction > 0)) return void cancelClick();
                    pos > verticalDragPosition + dragY ? jsp.scrollByY(contentDragY) : positionDragY(pos)
                  }
                  scrollTimeout = setTimeout(doScroll, isFirst ? settings.initialDelay : settings.trackClickRepeatFreq), isFirst = !1
                },
                cancelClick = function() {
                  scrollTimeout && clearTimeout(scrollTimeout), scrollTimeout = null, $(document).unbind("mouseup.jsp", cancelClick)
                };
              return doScroll(), $(document).bind("mouseup.jsp", cancelClick), !1
            }
          }), isScrollableH && horizontalTrack.bind("mousedown.jsp", function(e) {
            if (e.originalTarget === undefined || e.originalTarget == e.currentTarget) {
              var scrollTimeout, clickedTrack = $(this),
                offset = clickedTrack.offset(),
                direction = e.pageX - offset.left - horizontalDragPosition,
                isFirst = !0,
                doScroll = function() {
                  var offset = clickedTrack.offset(),
                    pos = e.pageX - offset.left - horizontalDragWidth / 2,
                    contentDragX = paneWidth * settings.scrollPagePercent,
                    dragX = dragMaxX * contentDragX / (contentWidth - paneWidth);
                  if (0 > direction) horizontalDragPosition - dragX > pos ? jsp.scrollByX(-contentDragX) : positionDragX(pos);
                  else {
                    if (!(direction > 0)) return void cancelClick();
                    pos > horizontalDragPosition + dragX ? jsp.scrollByX(contentDragX) : positionDragX(pos)
                  }
                  scrollTimeout = setTimeout(doScroll, isFirst ? settings.initialDelay : settings.trackClickRepeatFreq), isFirst = !1
                },
                cancelClick = function() {
                  scrollTimeout && clearTimeout(scrollTimeout), scrollTimeout = null, $(document).unbind("mouseup.jsp", cancelClick)
                };
              return doScroll(), $(document).bind("mouseup.jsp", cancelClick), !1
            }
          })
        }

        function removeClickOnTrack() {
          horizontalTrack && horizontalTrack.unbind("mousedown.jsp"), verticalTrack && verticalTrack.unbind("mousedown.jsp")
        }

        function cancelDrag() {
          $("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"), verticalDrag && verticalDrag.removeClass("jspActive"), horizontalDrag && horizontalDrag.removeClass("jspActive")
        }

        function positionDragY(destY, animate) {
          isScrollableV && (0 > destY ? destY = 0 : destY > dragMaxY && (destY = dragMaxY), animate === undefined && (animate = settings.animateScroll), animate ? jsp.animate(verticalDrag, "top", destY, _positionDragY) : (verticalDrag.css("top", destY), _positionDragY(destY)))
        }

        function _positionDragY(destY) {
          destY === undefined && (destY = verticalDrag.position().top), container.scrollTop(0), verticalDragPosition = destY || 0;
          var isAtTop = 0 === verticalDragPosition,
            isAtBottom = verticalDragPosition == dragMaxY,
            percentScrolled = destY / dragMaxY,
            destTop = -percentScrolled * (contentHeight - paneHeight);
          (wasAtTop != isAtTop || wasAtBottom != isAtBottom) && (wasAtTop = isAtTop, wasAtBottom = isAtBottom, elem.trigger("jsp-arrow-change", [wasAtTop, wasAtBottom, wasAtLeft, wasAtRight])), updateVerticalArrows(isAtTop, isAtBottom), pane.css("top", destTop), elem.trigger("jsp-scroll-y", [-destTop, isAtTop, isAtBottom]).trigger("scroll")
        }

        function positionDragX(destX, animate) {
          isScrollableH && (0 > destX ? destX = 0 : destX > dragMaxX && (destX = dragMaxX), animate === undefined && (animate = settings.animateScroll), animate ? jsp.animate(horizontalDrag, "left", destX, _positionDragX) : (horizontalDrag.css("left", destX), _positionDragX(destX)))
        }

        function _positionDragX(destX) {
          destX === undefined && (destX = horizontalDrag.position().left), container.scrollTop(0), horizontalDragPosition = destX || 0;
          var isAtLeft = 0 === horizontalDragPosition,
            isAtRight = horizontalDragPosition == dragMaxX,
            percentScrolled = destX / dragMaxX,
            destLeft = -percentScrolled * (contentWidth - paneWidth);
          (wasAtLeft != isAtLeft || wasAtRight != isAtRight) && (wasAtLeft = isAtLeft, wasAtRight = isAtRight, elem.trigger("jsp-arrow-change", [wasAtTop, wasAtBottom, wasAtLeft, wasAtRight])), updateHorizontalArrows(isAtLeft, isAtRight), pane.css("left", destLeft), elem.trigger("jsp-scroll-x", [-destLeft, isAtLeft, isAtRight]).trigger("scroll")
        }

        function updateVerticalArrows(isAtTop, isAtBottom) {
          settings.showArrows && (arrowUp[isAtTop ? "addClass" : "removeClass"]("jspDisabled"), arrowDown[isAtBottom ? "addClass" : "removeClass"]("jspDisabled"))
        }

        function updateHorizontalArrows(isAtLeft, isAtRight) {
          settings.showArrows && (arrowLeft[isAtLeft ? "addClass" : "removeClass"]("jspDisabled"), arrowRight[isAtRight ? "addClass" : "removeClass"]("jspDisabled"))
        }

        function scrollToY(destY, animate) {
          var percentScrolled = destY / (contentHeight - paneHeight);
          positionDragY(percentScrolled * dragMaxY, animate)
        }

        function scrollToX(destX, animate) {
          var percentScrolled = destX / (contentWidth - paneWidth);
          positionDragX(percentScrolled * dragMaxX, animate)
        }

        function scrollToElement(ele, stickToTop, animate) {
          var e, eleHeight, eleWidth, viewportTop, viewportLeft, maxVisibleEleTop, maxVisibleEleLeft, destY, destX, eleTop = 0,
            eleLeft = 0;
          try {
            e = $(ele)
          } catch (err) {
            return
          }
          for (eleHeight = e.outerHeight(), eleWidth = e.outerWidth(), container.scrollTop(0), container.scrollLeft(0); !e.is(".jspPane");)
            if (eleTop += e.position().top, eleLeft += e.position().left, e = e.offsetParent(), /^body|html$/i.test(e[0].nodeName)) return;
          viewportTop = contentPositionY(), maxVisibleEleTop = viewportTop + paneHeight, viewportTop > eleTop || stickToTop ? destY = eleTop - settings.horizontalGutter : eleTop + eleHeight > maxVisibleEleTop && (destY = eleTop - paneHeight + eleHeight + settings.horizontalGutter), isNaN(destY) || scrollToY(destY, animate), viewportLeft = contentPositionX(), maxVisibleEleLeft = viewportLeft + paneWidth, viewportLeft > eleLeft || stickToTop ? destX = eleLeft - settings.horizontalGutter : eleLeft + eleWidth > maxVisibleEleLeft && (destX = eleLeft - paneWidth + eleWidth + settings.horizontalGutter), isNaN(destX) || scrollToX(destX, animate)
        }

        function contentPositionX() {
          return -pane.position().left
        }

        function contentPositionY() {
          return -pane.position().top
        }

        function isCloseToBottom() {
          var scrollableHeight = contentHeight - paneHeight;
          return scrollableHeight > 20 && scrollableHeight - contentPositionY() < 10
        }

        function isCloseToRight() {
          var scrollableWidth = contentWidth - paneWidth;
          return scrollableWidth > 20 && scrollableWidth - contentPositionX() < 10
        }

        function initMousewheel() {
          container.unbind(mwEvent).bind(mwEvent, function(event, delta, deltaX, deltaY) {
            horizontalDragPosition || (horizontalDragPosition = 0), verticalDragPosition || (verticalDragPosition = 0);
            var dX = horizontalDragPosition,
              dY = verticalDragPosition,
              factor = event.deltaFactor || settings.mouseWheelSpeed;
            return jsp.scrollBy(deltaX * factor, -deltaY * factor, !1), dX == horizontalDragPosition && dY == verticalDragPosition
          })
        }

        function removeMousewheel() {
          container.unbind(mwEvent)
        }

        function nil() {
          return !1
        }

        function initFocusHandler() {
          pane.find(":input,a").unbind("focus.jsp").bind("focus.jsp", function(e) {
            scrollToElement(e.target, !1)
          })
        }

        function removeFocusHandler() {
          pane.find(":input,a").unbind("focus.jsp")
        }

        function initKeyboardNav() {
          function keyDownHandler() {
            var dX = horizontalDragPosition,
              dY = verticalDragPosition;
            switch (keyDown) {
              case 40:
                jsp.scrollByY(settings.keyboardSpeed, !1);
                break;
              case 38:
                jsp.scrollByY(-settings.keyboardSpeed, !1);
                break;
              case 34:
              case 32:
                jsp.scrollByY(paneHeight * settings.scrollPagePercent, !1);
                break;
              case 33:
                jsp.scrollByY(-paneHeight * settings.scrollPagePercent, !1);
                break;
              case 39:
                jsp.scrollByX(settings.keyboardSpeed, !1);
                break;
              case 37:
                jsp.scrollByX(-settings.keyboardSpeed, !1)
            }
            return elementHasScrolled = dX != horizontalDragPosition || dY != verticalDragPosition
          }
          var keyDown, elementHasScrolled, validParents = [];
          isScrollableH && validParents.push(horizontalBar[0]), isScrollableV && validParents.push(verticalBar[0]), pane.focus(function() {
            elem.focus()
          }), elem.attr("tabindex", 0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp", function(e) {
            if (e.target === this || validParents.length && $(e.target).closest(validParents).length) {
              var dX = horizontalDragPosition,
                dY = verticalDragPosition;
              switch (e.keyCode) {
                case 40:
                case 38:
                case 34:
                case 32:
                case 33:
                case 39:
                case 37:
                  keyDown = e.keyCode, keyDownHandler();
                  break;
                case 35:
                  scrollToY(contentHeight - paneHeight), keyDown = null;
                  break;
                case 36:
                  scrollToY(0), keyDown = null
              }
              return elementHasScrolled = e.keyCode == keyDown && dX != horizontalDragPosition || dY != verticalDragPosition, !elementHasScrolled
            }
          }).bind("keypress.jsp", function(e) {
            return e.keyCode == keyDown && keyDownHandler(), !elementHasScrolled
          }), settings.hideFocus ? (elem.css("outline", "none"), "hideFocus" in container[0] && elem.attr("hideFocus", !0)) : (elem.css("outline", ""), "hideFocus" in container[0] && elem.attr("hideFocus", !1))
        }

        function removeKeyboardNav() {
          elem.attr("tabindex", "-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp")
        }

        function observeHash() {
          if (location.hash && location.hash.length > 1) {
            var e, retryInt, hash = escape(location.hash.substr(1));
            try {
              e = $("#" + hash + ', a[name="' + hash + '"]')
            } catch (err) {
              return
            }
            e.length && pane.find(hash) && (0 === container.scrollTop() ? retryInt = setInterval(function() {
              container.scrollTop() > 0 && (scrollToElement(e, !0), $(document).scrollTop(container.position().top), clearInterval(retryInt))
            }, 50) : (scrollToElement(e, !0), $(document).scrollTop(container.position().top)))
          }
        }

        function hijackInternalLinks() {
          $(document.body).data("jspHijack") || ($(document.body).data("jspHijack", !0), $(document.body).delegate("a[href*=#]", "click", function(event) {
            var hash, element, container, jsp, scrollTop, elementTop, href = this.href.substr(0, this.href.indexOf("#")),
              locationHref = location.href;
            if (-1 !== location.href.indexOf("#") && (locationHref = location.href.substr(0, location.href.indexOf("#"))), href === locationHref) {
              hash = escape(this.href.substr(this.href.indexOf("#") + 1));
              try {
                element = $("#" + hash + ', a[name="' + hash + '"]')
              } catch (e) {
                return
              }
              element.length && (container = element.closest(".jspScrollable"), jsp = container.data("jsp"), jsp.scrollToElement(element, !0), container[0].scrollIntoView && (scrollTop = $(window).scrollTop(), elementTop = element.offset().top, (scrollTop > elementTop || elementTop > scrollTop + $(window).height()) && container[0].scrollIntoView()), event.preventDefault())
            }
          }))
        }

        function initTouch() {
          var startX, startY, touchStartX, touchStartY, moved, moving = !1;
          container.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp", function(e) {
            var touch = e.originalEvent.touches[0];
            startX = contentPositionX(), startY = contentPositionY(), touchStartX = touch.pageX, touchStartY = touch.pageY, moved = !1, moving = !0
          }).bind("touchmove.jsp", function(ev) {
            if (moving) {
              var touchPos = ev.originalEvent.touches[0],
                dX = horizontalDragPosition,
                dY = verticalDragPosition;
              return jsp.scrollTo(startX + touchStartX - touchPos.pageX, startY + touchStartY - touchPos.pageY), moved = moved || Math.abs(touchStartX - touchPos.pageX) > 5 || Math.abs(touchStartY - touchPos.pageY) > 5, dX == horizontalDragPosition && dY == verticalDragPosition
            }
          }).bind("touchend.jsp", function() {
            moving = !1
          }).bind("click.jsp-touchclick", function() {
            return moved ? (moved = !1, !1) : void 0
          })
        }

        function destroy() {
          var currentY = contentPositionY(),
            currentX = contentPositionX();
          elem.removeClass("jspScrollable").unbind(".jsp"), elem.replaceWith(originalElement.append(pane.children())), originalElement.scrollTop(currentY), originalElement.scrollLeft(currentX), reinitialiseInterval && clearInterval(reinitialiseInterval)
        }
        var settings, pane, paneWidth, paneHeight, container, contentWidth, contentHeight, percentInViewH, percentInViewV, isScrollableV, isScrollableH, verticalDrag, dragMaxY, verticalDragPosition, horizontalDrag, dragMaxX, horizontalDragPosition, verticalBar, verticalTrack, scrollbarWidth, verticalTrackHeight, verticalDragHeight, arrowUp, arrowDown, horizontalBar, horizontalTrack, horizontalTrackWidth, horizontalDragWidth, arrowLeft, arrowRight, reinitialiseInterval, originalPadding, originalPaddingTotalWidth, previousContentWidth, jsp = this,
          wasAtTop = !0,
          wasAtLeft = !0,
          wasAtBottom = !1,
          wasAtRight = !1,
          originalElement = elem.clone(!1, !1).empty(),
          mwEvent = $.fn.mwheelIntent ? "mwheelIntent.jsp" : "mousewheel.jsp";
        "border-box" === elem.css("box-sizing") ? (originalPadding = 0, originalPaddingTotalWidth = 0) : (originalPadding = elem.css("paddingTop") + " " + elem.css("paddingRight") + " " + elem.css("paddingBottom") + " " + elem.css("paddingLeft"), originalPaddingTotalWidth = (parseInt(elem.css("paddingLeft"), 10) || 0) + (parseInt(elem.css("paddingRight"), 10) || 0)), $.extend(jsp, {
          reinitialise: function(s) {
            s = $.extend({}, settings, s), initialise(s)
          },
          scrollToElement: function(ele, stickToTop, animate) {
            scrollToElement(ele, stickToTop, animate)
          },
          scrollTo: function(destX, destY, animate) {
            scrollToX(destX, animate), scrollToY(destY, animate)
          },
          scrollToX: function(destX, animate) {
            scrollToX(destX, animate)
          },
          scrollToY: function(destY, animate) {
            scrollToY(destY, animate)
          },
          scrollToPercentX: function(destPercentX, animate) {
            scrollToX(destPercentX * (contentWidth - paneWidth), animate)
          },
          scrollToPercentY: function(destPercentY, animate) {
            scrollToY(destPercentY * (contentHeight - paneHeight), animate)
          },
          scrollBy: function(deltaX, deltaY, animate) {
            jsp.scrollByX(deltaX, animate), jsp.scrollByY(deltaY, animate)
          },
          scrollByX: function(deltaX, animate) {
            var destX = contentPositionX() + Math[0 > deltaX ? "floor" : "ceil"](deltaX),
              percentScrolled = destX / (contentWidth - paneWidth);
            positionDragX(percentScrolled * dragMaxX, animate)
          },
          scrollByY: function(deltaY, animate) {
            var destY = contentPositionY() + Math[0 > deltaY ? "floor" : "ceil"](deltaY),
              percentScrolled = destY / (contentHeight - paneHeight);
            positionDragY(percentScrolled * dragMaxY, animate)
          },
          positionDragX: function(x, animate) {
            positionDragX(x, animate)
          },
          positionDragY: function(y, animate) {
            positionDragY(y, animate)
          },
          animate: function(ele, prop, value, stepCallback) {
            var params = {};
            params[prop] = value, ele.animate(params, {
              duration: settings.animateDuration,
              easing: settings.animateEase,
              queue: !1,
              step: stepCallback
            })
          },
          getContentPositionX: function() {
            return contentPositionX()
          },
          getContentPositionY: function() {
            return contentPositionY()
          },
          getContentWidth: function() {
            return contentWidth
          },
          getContentHeight: function() {
            return contentHeight
          },
          getPercentScrolledX: function() {
            return contentPositionX() / (contentWidth - paneWidth)
          },
          getPercentScrolledY: function() {
            return contentPositionY() / (contentHeight - paneHeight)
          },
          getIsScrollableH: function() {
            return isScrollableH
          },
          getIsScrollableV: function() {
            return isScrollableV
          },
          getContentPane: function() {
            return pane
          },
          scrollToBottom: function(animate) {
            positionDragY(dragMaxY, animate)
          },
          hijackInternalLinks: $.noop,
          destroy: function() {
            destroy()
          }
        }), initialise(s)
      }
      return settings = $.extend({}, $.fn.jScrollPane.defaults, settings), $.each(["arrowButtonSpeed", "trackClickSpeed", "keyboardSpeed"], function() {
        settings[this] = settings[this] || settings.speed
      }), this.each(function() {
        var elem = $(this),
          jspApi = elem.data("jsp");
        jspApi ? jspApi.reinitialise(settings) : ($("script", elem).filter('[type="text/javascript"],:not([type])').remove(), jspApi = new JScrollPane(elem, settings), elem.data("jsp", jspApi))
      })
    }, $.fn.jScrollPane.defaults = {
      showArrows: !1,
      maintainPosition: !0,
      stickToBottom: !1,
      stickToRight: !1,
      clickOnTrack: !0,
      autoReinitialise: !1,
      autoReinitialiseDelay: 500,
      verticalDragMinHeight: 0,
      verticalDragMaxHeight: 99999,
      horizontalDragMinWidth: 0,
      horizontalDragMaxWidth: 99999,
      contentWidth: undefined,
      animateScroll: !1,
      animateDuration: 300,
      animateEase: "linear",
      hijackInternalLinks: !1,
      verticalGutter: 4,
      horizontalGutter: 4,
      mouseWheelSpeed: 3,
      arrowButtonSpeed: 0,
      arrowRepeatFreq: 50,
      arrowScrollOnHover: !1,
      trackClickSpeed: 0,
      trackClickRepeatFreq: 70,
      verticalArrowPositions: "split",
      horizontalArrowPositions: "split",
      enableKeyboardNavigation: !0,
      hideFocus: !1,
      keyboardSpeed: 0,
      initialDelay: 300,
      speed: 30,
      scrollPagePercent: .8
    }
  }, this), arrangeSubnavChildrens(".nix-nav-list .nix-nav-submenu .nix-nav-submenu-content-back .nix-nav-submenu-content"), jQuery("#scroll_up, a.nix-totop, .nix-search-reveal").click(function(e) {
    e.preventDefault(), jQuery("html, body").animate({
      scrollTop: 0
    }, 600)
  }), jQuery("#scroll_up_side").click(function(e) {
    e.preventDefault(), jQuery(".nix-mobile-side-menu").animate({
      scrollTop: jQuery(".nix-mobile-side-menu").offset().top
    }, 600)
  }), jQuery(".navbar-toggle").on("click", function() {
    (isTablet() || isMobile()) && jQuery(".navbar-toggle").toggleClass("active")
  });
var switchClassTimer, timeoutExitHovered, timeoutEnter, timeoutExit, touchNavigationModal = function() {
  $("#navbar-tablet-bg").on("touchstart", function() {
    deactivateAll(".nav-primary-item.active"), $(this).removeClass("active")
  })
};
jQuery(".nav-primary-item.has-subnav").on({
  mouseenter: function() {
    if (window.innerWidth >= 768) {
      var element = this;
      if (clearTimeout(timeoutExit), clearTimeout(timeoutEnter), clearTimeout(switchClassTimer), clearTimeout(timeoutExitHovered), !Modernizr.touch && jQuery(element).hasClass("active")) return;
      Modernizr.touch && $("#navbar-tablet-bg").addClass("active"), jQuery(element).addClass("set"), timeoutEnter = setTimeout(function() {
        if (jQuery(element).hasClass("set")) {
          deactivateOthers(), switchClassTimer = setTimeout(function() {
            jQuery(element).removeClass("set"), jQuery(element).addClass("active")
          }, 150);
          var height = 400,
            subelement = jQuery(element).find(".nix-nav-submenu");
          jQuery(".navbar.nix-navbar").addClass("nix-navbar-hovered"), jQuery(".navbar-overlay").css({
            height: height
          }), subelement.stop().css({
            height: "auto"
          }), height = subelement.height() + 40 < 480 ? 480 : subelement.height() + 80, subelement.css({
            height: height
          }), jQuery(".navbar-overlay").css({
            height: height
          })
        }
      }, 100)
    }
  },
  mouseleave: function() {
    window.innerWidth >= 768 && (element = this, deactivateAll(element))
  }
}), Modernizr.touch && $(".nix-nav-submenu-link").on("click", function(e) {
  var $navPrimaryItem = $(this).parent(".nav-primary-item");
  return $navPrimaryItem.hasClass("active") || !$navPrimaryItem.hasClass("has-subnav") ? !0 : (e.preventDefault(), !0)
});
var searchEvent = mobileChecker() ? "touchstart" : "click";
jQuery(".nix-mobile-search-header").on(searchEvent, function() {
  jQuery(".nix-mobile-navigation").toggleClass("nix-mobile-search-show"), jQuery(".nix-mobile-navigation").hasClass("nix-mobile-search-show") ? jQuery(".nix-mobile-search-container").slideDown(200) : jQuery(".nix-mobile-search-container").slideUp(200)
}), jQuery("#nix-mobile-search-header-input").focus(function() {
  "Search Nixon" == jQuery(this).val() && jQuery(this).val("")
}).blur(function() {
  ("" == jQuery(this).val() || "Search Nixon" == jQuery(this).val()) && jQuery(this).val("Search Nixon")
}), jQuery("#cart_nix_close_btn").click(function() {
  jQuery(".nix-overlay-pusher").fadeOut("slow").removeClass("nix-overlay-all").removeAttr("style"), __effect = jQuery(button).attr("data-effect"), container.removeClass(__effect), container.removeClass("nix-cart-menu-open"), jQuery(".nix-navbar").css("z-index", "1051"), jQuery(".nix-overlay").removeClass("nix-overlay-all").fadeOut("slow").removeAttr("style"), jQuery(".nix-cart-active").hide(), jQuery(".nix-cart-toggler").parent("div").show()
}), jQuery.event.special.tap = {
  distanceThreshold: 10,
  timeThreshold: 500,
  setup: function() {
    var self = this,
      $self = jQuery(self);
    $self.on("touchstart", function(startEvent) {
      function removeTapHandler() {
        clearTimeout(timeout), $self.off("touchmove", moveHandler).off("touchend", tapHandler)
      }

      function tapHandler(endEvent) {
        removeTapHandler(), target == endEvent.target && jQuery.event.simulate("tap", self, endEvent)
      }

      function moveHandler(moveEvent) {
        var touchMove = moveEvent.originalEvent.touches[0],
          moveX = touchMove.pageX,
          moveY = touchMove.pageY;
        (Math.abs(moveX - startX) > threshold || Math.abs(moveY - startY) > threshold) && removeTapHandler()
      }
      var timeout, target = startEvent.target,
        touchStart = startEvent.originalEvent.touches[0],
        startX = touchStart.pageX,
        startY = touchStart.pageY,
        threshold = jQuery.event.special.tap.distanceThreshold;
      timeout = setTimeout(removeTapHandler, jQuery.event.special.tap.timeThreshold), $self.on("touchmove", moveHandler).on("touchend", tapHandler)
    })
  }
};
var clickEvent = mobileChecker() ? "touchstart" : "click";
"touchstart" == clickEvent && jQuery(".product-container-multi .product-hotspot").addClass("hidden");
var lastScrollTop = 0,
  scollDirection = "down",
  initialTopOfFilter = jQuery(".filters-column").length > 0 ? jQuery(".filters-column").offset().top : 0,
  isFixedToBottom = !1,
  isFixedToTop = !1;
Handlebars.registerHelper("setWrapperIndex", function() {
  window.zrWrapperIndex = "undefined" != typeof window.zrWrapperIndex ? window.zrWrapperIndex + 1 : 1
}), Handlebars.registerHelper("getWrapperIndex", function() {
  return window.zrWrapperIndex
}), Handlebars.registerHelper("truncate", function(str, len) {
  if (str.length > len && str.length > 0) {
    var new_str = str + " ";
    return new_str = str.substr(0, len), new_str = str.substr(0, new_str.lastIndexOf(" ")), new_str = new_str.length > 0 ? new_str : str.substr(0, len), new Handlebars.SafeString(new_str + "...")
  }
  return str
}), Handlebars.registerHelper("roundToTwo", function(number) {
  if ("undefined" != typeof number) {
    var rounded = Math.round(100 * number) / 100;
    return new Handlebars.SafeString(rounded)
  }
  return !1
}), Handlebars.registerHelper("zTextHbs", function(path, options) {
  return "undefined" != typeof path ? (key = eval(path), new Handlebars.SafeString(key)) : !1
}), Handlebars.registerHelper("encode", function(string) {
  return encodeURI(string)
}), Handlebars.registerHelper("plussify", function(string) {
  var words = "",
    arrays = [];
  for (arrays = string.split(" "), i = 0; i < arrays.length; ++i) words = words.trim() + "+" + arrays[i].trim();
  return words
}), Handlebars.registerHelper("encode", function(string) {
  return encodeURI(string)
}), Handlebars.registerHelper("dateFormat", function(context, block) {
  if (window.moment) {
    if (null !== context) {
      var f = block.hash.format || "MMM Do, YYYY";
      return moment(new Date(context)).format(f)
    }
    return "empty"
  }
  return context
});
var Base64 = {
  _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  encode: function(input) {
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4, output = "",
      i = 0;
    for (input = Base64._utf8_encode(input); i < input.length;) chr1 = input.charCodeAt(i++), chr2 = input.charCodeAt(i++), chr3 = input.charCodeAt(i++), enc1 = chr1 >> 2, enc2 = (3 & chr1) << 4 | chr2 >> 4, enc3 = (15 & chr2) << 2 | chr3 >> 6, enc4 = 63 & chr3, isNaN(chr2) ? enc3 = enc4 = 64 : isNaN(chr3) && (enc4 = 64), output = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
    return output
  },
  decode: function(input) {
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4, output = "",
      i = 0;
    for (input = input.replace(/[^A-Za-z0-9\+\/\=]/g, ""); i < input.length;) enc1 = this._keyStr.indexOf(input.charAt(i++)), enc2 = this._keyStr.indexOf(input.charAt(i++)), enc3 = this._keyStr.indexOf(input.charAt(i++)), enc4 = this._keyStr.indexOf(input.charAt(i++)), chr1 = enc1 << 2 | enc2 >> 4, chr2 = (15 & enc2) << 4 | enc3 >> 2, chr3 = (3 & enc3) << 6 | enc4, output += String.fromCharCode(chr1), 64 != enc3 && (output += String.fromCharCode(chr2)), 64 != enc4 && (output += String.fromCharCode(chr3));
    return output = Base64._utf8_decode(output)
  },
  _utf8_encode: function(string) {
    string = string.replace(/\r\n/g, "\n");
    for (var utftext = "", n = 0; n < string.length; n++) {
      var c = string.charCodeAt(n);
      128 > c ? utftext += String.fromCharCode(c) : c > 127 && 2048 > c ? (utftext += String.fromCharCode(c >> 6 | 192), utftext += String.fromCharCode(63 & c | 128)) : (utftext += String.fromCharCode(c >> 12 | 224), utftext += String.fromCharCode(c >> 6 & 63 | 128), utftext += String.fromCharCode(63 & c | 128))
    }
    return utftext
  },
  _utf8_decode: function(utftext) {
    for (var string = "", i = 0, c = c1 = c2 = 0; i < utftext.length;) c = utftext.charCodeAt(i), 128 > c ? (string += String.fromCharCode(c), i++) : c > 191 && 224 > c ? (c2 = utftext.charCodeAt(i + 1), string += String.fromCharCode((31 & c) << 6 | 63 & c2), i += 2) : (c2 = utftext.charCodeAt(i + 1), c3 = utftext.charCodeAt(i + 2), string += String.fromCharCode((15 & c) << 12 | (63 & c2) << 6 | 63 & c3), i += 3);
    return string
  }
};
$.extend({
    getUrlVars: function() {
      for (var hash, vars = [], hashes = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&"), i = 0; i < hashes.length; i++) hash = hashes[i].split("="), vars.push(hash[0]), vars[hash[0]] = hash[1];
      return vars
    },
    getUrlVar: function(name) {
      return $.getUrlVars()[name]
    }
  }), Number.prototype.formatMoney = function(places, symbol, thousand, decimal) {
    places = isNaN(places = Math.abs(places)) ? 2 : places, symbol = void 0 !== symbol ? symbol : "$", thousand = thousand || ",", decimal = decimal || ".";
    var number = this,
      negative = 0 > number ? "-" : "",
      i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
      j = (j = i.length) > 3 ? j % 3 : 0;
    return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "")
  },
  function($, window, document) {
    "use strict";
    var universalGA, classicGA, standardEventHandler, defaults = {
        minHeight: 0,
        elements: [],
        percentage: !0,
        userTiming: !0,
        pixelDepth: !0,
        nonInteraction: !0
      },
      $window = $(window),
      cache = [],
      lastPixelDepth = 0;
    $.scrollDepth = function(options) {
      function sendBaseline(action) {
        standardEventHandler ? standardEventHandler({
          event: "ScrollDistance",
          eventCategory: "Scroll Depth",
          eventAction: action,
          eventLabel: "Baseline",
          eventValue: 1,
          eventNonInteraction: !0
        }) : (universalGA && ga("send", "event", "Scroll Depth", action, "Baseline", 1, {
          nonInteraction: !0
        }), classicGA && _gaq.push(["_trackEvent", "Scroll Depth", action, "Baseline", 1, !0]))
      }

      function sendEvent(action, label, scrollDistance, timing) {
        standardEventHandler ? (standardEventHandler({
          event: "ScrollDistance",
          eventCategory: "Scroll Depth",
          eventAction: action,
          eventLabel: label,
          eventValue: 1,
          eventNonInteraction: options.nonInteraction
        }), options.pixelDepth && arguments.length > 2 && scrollDistance > lastPixelDepth && (lastPixelDepth = scrollDistance, standardEventHandler({
          event: "ScrollDistance",
          eventCategory: "Scroll Depth",
          eventAction: "Pixel Depth",
          eventLabel: rounded(scrollDistance),
          eventValue: 1,
          eventNonInteraction: options.nonInteraction
        })), options.userTiming && arguments.length > 3 && standardEventHandler({
          event: "ScrollTiming",
          eventCategory: "Scroll Depth",
          eventAction: action,
          eventLabel: label,
          eventTiming: timing
        })) : (universalGA && (ga("send", "event", "Scroll Depth", action, label, 1, {
          nonInteraction: options.nonInteraction
        }), options.pixelDepth && arguments.length > 2 && scrollDistance > lastPixelDepth && (lastPixelDepth = scrollDistance, ga("send", "event", "Scroll Depth", "Pixel Depth", rounded(scrollDistance), 1, {
          nonInteraction: options.nonInteraction
        })), options.userTiming && arguments.length > 3 && ga("send", "timing", "Scroll Depth", action, timing, label)), classicGA && (_gaq.push(["_trackEvent", "Scroll Depth", action, label, 1, options.nonInteraction]), options.pixelDepth && arguments.length > 2 && scrollDistance > lastPixelDepth && (lastPixelDepth = scrollDistance, _gaq.push(["_trackEvent", "Scroll Depth", "Pixel Depth", rounded(scrollDistance), 1, options.nonInteraction])), options.userTiming && arguments.length > 3 && _gaq.push(["_trackTiming", "Scroll Depth", action, timing, label, 100])))
      }

      function calculateMarks(docHeight) {
        return {
          "25%": parseInt(.25 * docHeight, 10),
          "50%": parseInt(.5 * docHeight, 10),
          "75%": parseInt(.75 * docHeight, 10),
          "100%": docHeight - 5
        }
      }

      function checkMarks(marks, scrollDistance, timing) {
        $.each(marks, function(key, val) {
          -1 === $.inArray(key, cache) && scrollDistance >= val && (sendEvent("Percentage", key, scrollDistance, timing), cache.push(key))
        })
      }

      function checkElements(elements, scrollDistance, timing) {
        $.each(elements, function(index, elem) {
          -1 === $.inArray(elem, cache) && $(elem).length && scrollDistance >= $(elem).offset().top && (sendEvent("Elements", elem, scrollDistance, timing), cache.push(elem))
        })
      }

      function rounded(scrollDistance) {
        return (250 * Math.floor(scrollDistance / 250)).toString()
      }

      function throttle(func, wait) {
        var context, args, result, timeout = null,
          previous = 0,
          later = function() {
            previous = new Date, timeout = null, result = func.apply(context, args)
          };
        return function() {
          var now = new Date;
          previous || (previous = now);
          var remaining = wait - (now - previous);
          return context = this, args = arguments, 0 >= remaining ? (clearTimeout(timeout), timeout = null, previous = now, result = func.apply(context, args)) : timeout || (timeout = setTimeout(later, remaining)), result
        }
      }
      var startTime = +new Date;
      options = $.extend({}, defaults, options), $(document).height() < options.minHeight || ("function" == typeof ga && (universalGA = !0), "undefined" != typeof _gaq && "function" == typeof _gaq.push && (classicGA = !0), "function" == typeof options.eventHandler && (standardEventHandler = options.eventHandler), options.percentage ? sendBaseline("Percentage") : options.elements && sendBaseline("Elements"), $window.on("scroll.scrollDepth", throttle(function() {
        var docHeight = $(document).height(),
          winHeight = window.innerHeight ? window.innerHeight : $window.height(),
          scrollDistance = $window.scrollTop() + winHeight,
          marks = calculateMarks(docHeight),
          timing = +new Date - startTime;
        return cache.length >= 4 + options.elements.length ? void $window.off("scroll.scrollDepth") : (options.elements && checkElements(options.elements, scrollDistance, timing), void(options.percentage && checkMarks(marks, scrollDistance, timing)))
      }, 500)))
    }
  }(jQuery, window, document);
var ZC = window.ZC || {};
ZC.Base = {
  onLoadQueue: [],
  init: function() {
    for (var a = 0; a < ZC.Base.onLoadQueue.length; a++) "function" == typeof ZC.Base.onLoadQueue[a] && ZC.Base.onLoadQueue[a]()
  },
  addInit: function(method) {
    ZC.Base.onLoadQueue.push(method)
  },
  checkElement: function(obj) {
    if ("undefined" == typeof obj || null == obj) return !1;
    for (var args = Array.prototype.slice.call(arguments), obj = args.shift(), i = 0; i < args.length; i++) {
      if (!obj.hasOwnProperty(args[i])) return !1;
      obj = obj[args[i]]
    }
    return !0
  },
  clientFunctionExists: function(obj) {
    if ("undefined" == typeof obj || null == obj) return !1;
    for (var args = Array.prototype.slice.call(arguments), obj = args.shift(), i = 0; i < args.length; i++) {
      if (!obj.hasOwnProperty(args[i])) return !1;
      obj = obj[args[i]]
    }
    return "function" == typeof obj
  },
  validateFunction: function(obj) {
    return ZC.Base.checkElement(obj) && "function" == typeof obj
  },
  getTemplate: function(name) {
    return "function" == typeof ZC.Base.templateCache[name] ? $.Deferred().resolve(ZC.Base.templateCache[name]) : $.get(CLIENT.Settings.getBaseHost() + "/js/template/" + name + ".hbs").then(function(src) {
      var fn = Handlebars.compile(src);
      return ZC.Base.templateCache[name] = fn, fn
    })
  },
  getAndParseTemplate: function(name, data) {
    return "function" == typeof ZC.Base.templateCache[name] ? $.Deferred().resolve(ZC.Base.templateCache[name](data)) : $.get(CLIENT.Settings.getBaseHost() + "/js/template/" + name + ".hbs").then(function(src) {
      var fn = Handlebars.compile(src);
      return ZC.Base.templateCache[name] = fn, fn(data)
    })
  },
  templateCache: {},
  checkForSuccessResponse: function(response, textStatus, jqXhr) {
    if ("object" == typeof response && response.success) return jqXhr;
    var isObject = "object" == typeof response;
    if ($.Log.error(zrKhs("ZC.Base.checkForSuccessResponse() Rejecting response: object? " + isObject + " status: " + textStatus)), "object" == typeof jqXhr.responseJSON) try {
      $.Log.error(JSON.stringify(jqXhr.responseJSON))
    } catch (err) {}
    return jQuery.Deferred().reject(response)
  },
  diffTwoNumbers: function(num1, num2) {
    return "undefined" == typeof num1 || "undefined" == typeof num2 || isNaN(num1) || isNaN(num2) ? null : Number(num1).toFixed(2) - Number(num2).toFixed(2)
  }
}, String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1)
}, Array.isArray || (Array.isArray = function(vArg) {
  return "[object Array]" === Object.prototype.toString.call(vArg)
});
for (var defaultDiacriticsRemovalap = [{
    base: "A",
    letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"
  }, {
    base: "AA",
    letters: "Ꜳ"
  }, {
    base: "AE",
    letters: "ÆǼǢ"
  }, {
    base: "AO",
    letters: "Ꜵ"
  }, {
    base: "AU",
    letters: "Ꜷ"
  }, {
    base: "AV",
    letters: "ꜸꜺ"
  }, {
    base: "AY",
    letters: "Ꜽ"
  }, {
    base: "B",
    letters: "BⒷＢḂḄḆɃƂƁ"
  }, {
    base: "C",
    letters: "CⒸＣĆĈĊČÇḈƇȻꜾ"
  }, {
    base: "D",
    letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"
  }, {
    base: "DZ",
    letters: "ǱǄ"
  }, {
    base: "Dz",
    letters: "ǲǅ"
  }, {
    base: "E",
    letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"
  }, {
    base: "F",
    letters: "FⒻＦḞƑꝻ"
  }, {
    base: "G",
    letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"
  }, {
    base: "H",
    letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"
  }, {
    base: "I",
    letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"
  }, {
    base: "J",
    letters: "JⒿＪĴɈ"
  }, {
    base: "K",
    letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"
  }, {
    base: "L",
    letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"
  }, {
    base: "LJ",
    letters: "Ǉ"
  }, {
    base: "Lj",
    letters: "ǈ"
  }, {
    base: "M",
    letters: "MⓂＭḾṀṂⱮƜ"
  }, {
    base: "N",
    letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"
  }, {
    base: "NJ",
    letters: "Ǌ"
  }, {
    base: "Nj",
    letters: "ǋ"
  }, {
    base: "O",
    letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"
  }, {
    base: "OI",
    letters: "Ƣ"
  }, {
    base: "OO",
    letters: "Ꝏ"
  }, {
    base: "OU",
    letters: "Ȣ"
  }, {
    base: "P",
    letters: "PⓅＰṔṖƤⱣꝐꝒꝔ"
  }, {
    base: "Q",
    letters: "QⓆＱꝖꝘɊ"
  }, {
    base: "R",
    letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"
  }, {
    base: "S",
    letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"
  }, {
    base: "T",
    letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"
  }, {
    base: "TZ",
    letters: "Ꜩ"
  }, {
    base: "U",
    letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"
  }, {
    base: "V",
    letters: "VⓋＶṼṾƲꝞɅ"
  }, {
    base: "VY",
    letters: "Ꝡ"
  }, {
    base: "W",
    letters: "WⓌＷẀẂŴẆẄẈⱲ"
  }, {
    base: "X",
    letters: "XⓍＸẊẌ"
  }, {
    base: "Y",
    letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"
  }, {
    base: "Z",
    letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"
  }, {
    base: "a",
    letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"
  }, {
    base: "aa",
    letters: "ꜳ"
  }, {
    base: "ae",
    letters: "æǽǣ"
  }, {
    base: "ao",
    letters: "ꜵ"
  }, {
    base: "au",
    letters: "ꜷ"
  }, {
    base: "av",
    letters: "ꜹꜻ"
  }, {
    base: "ay",
    letters: "ꜽ"
  }, {
    base: "b",
    letters: "bⓑｂḃḅḇƀƃɓ"
  }, {
    base: "c",
    letters: "cⓒｃćĉċčçḉƈȼꜿↄ"
  }, {
    base: "d",
    letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ"
  }, {
    base: "dz",
    letters: "ǳǆ"
  }, {
    base: "e",
    letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"
  }, {
    base: "f",
    letters: "fⓕｆḟƒꝼ"
  }, {
    base: "g",
    letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"
  }, {
    base: "h",
    letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"
  }, {
    base: "hv",
    letters: "ƕ"
  }, {
    base: "i",
    letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"
  }, {
    base: "j",
    letters: "jⓙｊĵǰɉ"
  }, {
    base: "k",
    letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"
  }, {
    base: "l",
    letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"
  }, {
    base: "lj",
    letters: "ǉ"
  }, {
    base: "m",
    letters: "mⓜｍḿṁṃɱɯ"
  }, {
    base: "n",
    letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"
  }, {
    base: "nj",
    letters: "ǌ"
  }, {
    base: "o",
    letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"
  }, {
    base: "oi",
    letters: "ƣ"
  }, {
    base: "ou",
    letters: "ȣ"
  }, {
    base: "oo",
    letters: "ꝏ"
  }, {
    base: "p",
    letters: "pⓟｐṕṗƥᵽꝑꝓꝕ"
  }, {
    base: "q",
    letters: "qⓠｑɋꝗꝙ"
  }, {
    base: "r",
    letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"
  }, {
    base: "s",
    letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"
  }, {
    base: "t",
    letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"
  }, {
    base: "tz",
    letters: "ꜩ"
  }, {
    base: "u",
    letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"
  }, {
    base: "v",
    letters: "vⓥｖṽṿʋꝟʌ"
  }, {
    base: "vy",
    letters: "ꝡ"
  }, {
    base: "w",
    letters: "wⓦｗẁẃŵẇẅẘẉⱳ"
  }, {
    base: "x",
    letters: "xⓧｘẋẍ"
  }, {
    base: "y",
    letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"
  }, {
    base: "z",
    letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ"
  }], diacriticsMap = {}, i = 0; i < defaultDiacriticsRemovalap.length; i++)
  for (var letters = defaultDiacriticsRemovalap[i].letters.split(""), j = 0; j < letters.length; j++) diacriticsMap[letters[j]] = defaultDiacriticsRemovalap[i].base;
var CLIENT = window.CLIENT || {};
CLIENT.RichPromo = {
  init: function() {
    CLIENT.RichPromo.loadHomePageMoments(), CLIENT.RichPromo.loadHero()
  },
  loadRichPromo: function(rrData) {
    $.Log.debug("CLIENT.RichPromo.loadRichPromo");
    var richRecsData = rrData.callout,
      rpObj = {},
      richPromo = {},
      langs = CLIENT.Settings.locale.language.toUpperCase();
    return "undefined" != typeof richRecsData[CLIENT.Settings.locale.code] ? ($.Log.debug("loadRichPromo locale matches en_US, en_UK, or en_CA"), rpObj = richRecsData[CLIENT.Settings.locale.code]) : "undefined" != typeof richRecsData[langs] && ($.Log.debug("loadRichPromo language matches de, es, fr, it, or pt"), rpObj = richRecsData[langs]), ($.isEmptyObject(rpObj) || "" == rpObj.image_url || void 0 == rpObj.image_url) && ($.Log.debug("loadRichPromo no matches"), "EU" == CLIENT.Settings.region ? ($.Log.debug("loadRichPromo no matches, but in EU"), rpObj = richRecsData.en_UK) : ($.Log.debug("loadRichPromo no matches, and not in the EU"), rpObj = richRecsData.en_US)), ($.isEmptyObject(rpObj) || "" == rpObj.image_url || void 0 == rpObj.image_url) && ($.Log.debug("loadRichPromo last check, still empty, set to en_US"), rpObj = richRecsData.en_US), richPromo.rpImageSrc = rpObj.image_url, richPromo.rpLink = rpObj.click_thru_url, richPromo.rpTitle = rpObj.title, richPromo.rpSubtitle = rpObj["sub-title"], richPromo
  },
  loadHomePageMoments: function() {
    $.Log.debug("CLIENT.RichPromo.loadHomePageMoments");
    var promoSpots = $("a[data-rpromo]");
    promoSpots.each(function() {
      for (var $this = $(this), name = $this.attr("data-rpromo"), placement = null, a = 0; a < RR.data.JSON.placements.length; a++) "undefined" != typeof RR.data.JSON.placements[a][name] && (placement = RR.data.JSON.placements[a]);
      if (null !== placement) {
        $.Log.debug("I Have something for " + name);
        var richPromo = CLIENT.RichPromo.loadRichPromo(placement);
        $this.attr("href", richPromo.rpLink), $this.find(".moment-img").attr("src", richPromo.rpImageSrc), richPromo.rpTitle.length > 0 && $this.find(".moments-title").html(richPromo.rpTitle), richPromo.rpSubtitle.length > 0 && $this.find(".moments-text").html(richPromo.rpSubtitle), $this.css("visibility", "visible")
      } else $.Log.debug("Don't have Anything for " + name + ".. show it as is "), $this.css("visibility", "visible")
    })
  },
  loadHero: function() {
    console.log("loadHero");
    var heroSpot = $("a[data-rphero]"),
      name = heroSpot.attr("data-rphero"),
      placement = null;
    "undefined" != typeof RR.data.JSON.placements[0][name] && (placement = RR.data.JSON.placements[0]), null !== placement && ($.Log.debug("I have a hero for " + name), console.dir(placement))
  }
};
var CLIENT = window.CLIENT || {};
CLIENT.Cache = {
  countryStates: {},
  zipCodeRates: {},
  taxRates: {},
  orderValues: {},
  zipCodeLookup: {},
  lastZipCode: null
};
var CLIENT = window.CLIENT || {},
  zrKhs = function(message) {
    return document.location.href + "|" + message
  };
CLIENT.Base = {
  ie: /Trident/.test(navigator.userAgent) || /MSIE (\d+\.\d+);/.test(navigator.userAgent),
  showLogging: !1,
  logType: "DEBUG",
  numberPattern: /^\d|\.|-$/,
  currencyPattern: /^\d|\.|\,|-$/,
  digitPattern: /^\d|\.$/,
  phonePattern: /^1?[-. ]?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
  emailPattern: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
  validPassword: /^(((?=.*[a-z])(?=.*[A-Z])(?=.*[\d]))|((?=.*[a-z])(?=.*[A-Z])(?=.*[\W]))|((?=.*[a-z])(?=.*[\d])(?=.*[\W]))|((?=.*[A-Z])(?=.*[\d])(?=.*[\W]))).{8,}$/,
  warmPassword: /^(((?=.*[a-z])(?=.*[\d]))|((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[\W]))|((?=.*[A-Z])(?=.*[\d]))|((?=.*[A-Z])(?=.*[\W]))|((?=.*[\d])(?=.*[\W]))).{6,}$/,
  coldPassword: /^(((?=.*[a-z])(?=.*[\d]))|((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[\W]))|((?=.*[A-Z])(?=.*[\d]))|((?=.*[A-Z])(?=.*[\W]))|((?=.*[\d])(?=.*[\W]))).{4,}$/,
  initKhsLogger: function() {
    $.Log.debug("CLIENT.Base.initKhsLogger"), $.Log.level = $.LogLevel.error, $.Log.remoteUrl = "/za/ws/khs/log", $.Log.remoteLevel = $.LogLevel.error, "undefined" != typeof CLIENT.Settings.url.evcode ? "zrdeskdev" == CLIENT.Settings.url.evcode ? ($.Log.level = $.LogLevel.debug, $.Log.remoteLevel = $.LogLevel.error) : (-1 != CLIENT.Settings.url.evcode.indexOf("test") || -1 != CLIENT.Settings.url.evcode.indexOf("stage")) && ($.Log.level = $.LogLevel.debug, $.Log.remoteLevel = $.LogLevel.error) : "undefined" != typeof CLIENT.Settings.getHost() && (-1 != CLIENT.Settings.getHost().indexOf("zrdeskdev") ? ($.Log.level = $.LogLevel.debug, $.Log.remoteLevel = $.LogLevel.error) : (-1 != CLIENT.Settings.getHost().indexOf("test") || -1 != CLIENT.Settings.getHost().indexOf("stage")) && ($.Log.level = $.LogLevel.debug, $.Log.remoteLevel = $.LogLevel.error)), $.Log.beforeSend = function() {
      var sendLog = !0;
      try {
        var ua = navigator.userAgent;
        "undefined" != typeof ua && -1 != ua.indexOf("MSIE 7") && (sendLog = !1, $.Log.debug("found MSIE 7"))
      } catch (ee) {}
      return sendLog ? void 0 : !1
    };
    var logAllBrowserErrors = !1;
    try {
      -1 == CLIENT.Settings.url.evcode.indexOf("production") && (logAllBrowserErrors = !0)
    } catch (ea) {}
    logAllBrowserErrors && (window.onerror = function(message, url, linenumber, colno, error) {
      try {
        if (message.indexOf("Script error.") > -1) return;
        var ua = navigator.userAgent;
        if ("undefined" != typeof ua && -1 != ua.indexOf("MSIE 7")) return
      } catch (ee) {}
      var er = "";
      "undefined" != typeof error && (er = error.stack), $.Log.error(zrKhs(message + "|" + url + "|" + er))
    })
  },
  isNumeric: function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
  },
  isiPhone: function() {
    var deviceAgent = navigator.userAgent.toLowerCase(),
      agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
    return null != agentID
  },
  isValidPassword: function(str) {
    return CLIENT.Base.validPassword.test(str)
  },
  isWarmPassword: function(str) {
    return CLIENT.Base.warmPassword.test(str)
  },
  isColdPassword: function(str) {
    return CLIENT.Base.coldPassword.test(str)
  },
  isValidEmail: function(str) {
    return CLIENT.Base.emailPattern.test(str)
  },
  checkUSPhoneNumber: function(num) {
    return CLIENT.Base.phonePattern.test(num) ? num.replace(CLIENT.Base.phonePattern, "($1) $2-$3") : !1
  },
  log: function() {
    $.Log.debug("Please use $.Log.debug(message) instead")
  },
  currencyValue: function(str) {
    str += "";
    var out = "",
      i = 0;
    for (i = 0; i < str.length; i++) CLIENT.Base.currencyPattern.test(str.charAt(i)) && ("." == str.charAt(i) && -1 != out.indexOf(".") || "-" == str.charAt(i) && 0 != out.length || (out += str.charAt(i)));
    return out - 0
  },
  setIEClass: function() {
    1 == CLIENT.Base.ie && $("body").addClass("ie")
  },
  countrySetStates: function(input) {
    $.Log.debug("Base.countrySetStates");
    var CountrySelect = $(input),
      StateSelect = $("select[data-parentselect='" + CountrySelect.attr("name") + "']");
    if (!CountrySelect.length || !StateSelect.length) return !1;
    var countryCode = CountrySelect.val();
    return StateSelect.html($("<option/>").text("Loading..").attr({
      value: ""
    })).attr("disabled", "disabled"), "undefined" != typeof CLIENT.Cache.countryStates[countryCode] ? void CLIENT.Base.replaceStateOptions(StateSelect, CLIENT.Cache.countryStates[countryCode]) : void $.ajax({
      url: CLIENT.Settings.url.localeUrl + "/getcountries/",
      type: "GET",
      dataType: "json",
      data: {
        country_code: countryCode
      },
      success: function(data) {
        "object" == typeof data ? (CLIENT.Cache.countryStates[countryCode] = data.country.states, CLIENT.Base.replaceStateOptions(StateSelect, data.country.states)) : $.Log.debug("$.ajax.success() : response is not an object", null, "ERROR")
      },
      error: function(response) {
        $.Log.debug("$.ajax.error() : " + response.statusText, null, "ERROR")
      }
    })
  },
  replaceStateOptions: function(input, states) {
    if ($.Log.debug("Base.replaceStateOptions"), !states.length) return void input.html($("<option/>").text("Not Required").attr({
      value: ""
    })).attr("disabled", "disabled");
    input.html("").removeAttr("disabled"), input.append($("<option/>").text(CLIENT.Settings.alerts.base.stateDefaultOption).attr({
      value: ""
    }));
    var i = 0;
    for (i = 0; i < states.length; i++) {
      var state = states[i];
      input.append($("<option/>").text(state.name).attr({
        value: state.code
      }))
    }
  },
  copyFieldVal: function(el1, el2, always) {
    var from = $("#" + el1),
      to = $("#" + el2);
    0 != from.length && 0 != to.length ? (always || 0 == $.trim(to.val()).length) && to.val(from.val()).trigger("keyup") : $.Log.debug("Base.copyFieldVal()" + el1 + " or " + el2 + " not found on page.")
  },
  randomBetweenTwoNumbers: function(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from)
  },
  digitOnly: function(str) {
    str += "";
    var out = "",
      i = 0;
    for (i = 0; i < str.length; i++) CLIENT.Base.digitPattern.test(str.charAt(i)) && ("." == str.charAt(i) && -1 != out.indexOf(".") || "-" == str.charAt(i) && 0 != out.length || (out += str.charAt(i)));
    return out
  },
  isEmpty: function(o) {
    if ("object" == typeof o) {
      var p = null;
      for (p in o)
        if (o[p] != o.constructor.prototype[p]) return !1;
      return !0
    }
    return CLIENT.Base.nullOrEmpty(o)
  },
  nullOrEmpty: function(str) {
    return "undefined" == typeof str || null == str || !$.trim(str).length
  },
  getSelectedText: function() {
    return "function" == typeof window.getSelection ? window.getSelection() : "function" == typeof document.getSelection ? document.getSelection() : "undefined" != typeof document.selection ? document.selection.createRange().text : ""
  },
  scrollDepthInterval: null,
  scrollDepthChecks: 0,
  trackScrollDepth: function() {
    "function" == typeof ga && ga.loaded ? ($.Log.debug("CLIENT.Base.trackScrollDepth: GA Loaded, Setting up scrolldepth tracking"), clearInterval(CLIENT.Base.scrollDepthInterval), $.scrollDepth()) : null === CLIENT.Base.scrollDepthInterval ? ($.Log.debug("CLIENT.Base.trackScrollDepth: GA not loaded, setting up check interval."), CLIENT.Base.scrollDepthInterval = setInterval(CLIENT.Base.trackScrollDepth, 100)) : ($.Log.debug("CLIENT.Base.trackScrollDepth: interval " + CLIENT.Base.scrollDepthChecks + ", GA not loaded."), CLIENT.Base.scrollDepthChecks >= 10 && ($.Log.debug("CLIENT.Base.trackScrollDepth:  Tried 10 times, giving up."), clearInterval(CLIENT.Base.scrollDepthInterval))), CLIENT.Base.scrollDepthChecks++
  }
}, ZC.Base.addInit(CLIENT.Base.initKhsLogger), ZC.Base.addInit(CLIENT.Base.trackScrollDepth), ZC.Base.addInit(CLIENT.Base.setIEClass);
var CLIENT = window.CLIENT || {};
CLIENT.Modal = {
  init: function() {
    $.Log.info("Loading CLIENT.Modal.init"), CLIENT.Modal.bindCloseModal(), CLIENT.Modal.bindLaunchVideoModal(), CLIENT.Modal.bindAjaxLoadPageLink(), CLIENT.Modal.bindModalLoadImage()
  },
  ajaxLoadArticle: function(articleRefid, modalClass) {
    $.Log.debug("CLIENT.Modal.ajaxLoadArticle");
    var data = {
      OPTION: "JSON_GET_ARTICLE",
      refid: articleRefid
    };
    CLIENT.Modal.prepModal(), $.ajax({
      url: CLIENT.Settings.getServlet(),
      crossDomain: !0,
      type: "GET",
      dataType: "jsonp",
      data: data,
      xhrFields: {
        withCredentials: !0
      }
    }).done(function(response) {
      var show = !1,
        modalContent = $(".nix-modal-content");
      $(".nix-modal-wrapper").addClass("modal-article"), void 0 !== modalClass && $(".nix-modal-wrapper").addClass(modalClass), ZC.Base.checkElement(response, "article", "attributesForLocale", "TITLE") && "" != response.article.attributesForLocale.TITLE && modalContent.html('<h2 class="nix-modal-title">' + response.article.attributesForLocale.TITLE + "</h2>"), ZC.Base.checkElement(response, "article", "copyForLocale", "CONTENT") && (show = !0, modalContent.append('<div class="nix-modal-body-copy">' + response.article.copyForLocale.CONTENT + "</div>")), show ? CLIENT.Modal.showModal() : ($.Log.error("Failed to load modal article " + response.message), CLIENT.Modal.closeModal())
    })
  },
  bindLaunchVideoModal: function() {
    $(".nix-hero-vid-button").off().on("click", function(e) {
      return e.preventDefault(), CLIENT.Modal.ajaxLoadVideo($(this)), !1
    })
  },
  enableVideoButton: function(button) {
    CLIENT.util.enableButton(button)
  },
  disableVideoButton: function(button) {
    CLIENT.util.hideButton(button)
  },
  ajaxLoadVideo: function(buttonObj) {
    var vidRefid = buttonObj.attr("data-refid"),
      buttonID = buttonObj.attr("id");
    CLIENT.Modal.disableVideoButton(buttonID), CLIENT.util.isMobile || CLIENT.Modal.prepModal(), $(".video-" + vidRefid).length <= 0 ? $.ajax({
      url: "/za/NXN" + CLIENT.Settings.url.localeUrl + "/includes/ajax-modal-video.jsp",
      dataType: "html",
      data: {
        OPTION: "LOAD_ARTICLES",
        refid: vidRefid
      },
      success: function(data) {
        $("#nix-overlay-body").append(data), CLIENT.Modal.enableVideoButton(buttonID)
      },
      complete: function() {
        if (CLIENT.util.isMobile) {
          var oldHtml, newHtml, container;
          container = $(".nix-hero.active"), oldHtml = container.html(), newHtml = $("#vid-iframe-" + vidRefid).parent().html(), container.html('<div class="nix-video-wrapper">' + newHtml + "</div>"), container.css("padding", "0")
        } else $(".nix-overlay-body").addClass("nix-overlay-all show-video").fadeIn("medium")
      },
      error: function() {
        CLIENT.Modal.enableVideoButton(buttonID), alert("Error")
      }
    }) : CLIENT.util.isMobile || (CLIENT.Modal.showModal(), CLIENT.Modal.enableVideoButton(buttonID))
  },
  loadSimpleVideo: function(buttonObj) {
    var videoHREF = buttonObj.attr("href"),
      data = {
        videoURL: videoHREF,
        title: buttonObj.attr("title")
      };
    videoHREF.indexOf("?") < 1 ? videoHREF += "?autoplay=1" : videoHREF.indexOf("autoplay") < 1 && (videoHREF += "&autoplay=1");
    var videoHTML = '<div class="simple-video">';
    videoHTML = videoHTML + '<iframe width="100%" src="' + videoHREF + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen id="vid-iframe-${param.refid}"></iframe>', videoHTML += "</div>", "" !== data.title && void 0 != data.title && (videoHTML = videoHTML + "<h2>" + data.title + "</h2>"), $(".nix-modal-wrapper").addClass("modal-video"), $(".nix-modal-content").append(videoHTML), CLIENT.Modal.prepModal(), CLIENT.Modal.showModal()
  },
  bindAjaxLoadPageLink: function() {
    $(".modal-link").on("click", function() {
      var fileName = $(this).attr("data-modal-contents"),
        modalClassName = $(this).attr("data-modal-class"),
        parms = $(this).attr("data-modal-parms"),
        secure = $(this).attr("data-modal-secure");
      return CLIENT.Modal.ajaxLoadPage(parms, fileName, modalClassName, secure), !1
    })
  },
  ajaxLoadPage: function(parms, fileName, modalClassName, secure, cache) {
    $.Log.debug("CLIENT.modal.ajaxLoadPage");
    var servlet = CLIENT.Settings.url.servlet;
    "true" == secure && (servlet = CLIENT.Settings.url.secureServlet), "undefined" == typeof cache && (cache = !1), CLIENT.Modal.prepModal(), $.ajax({
      url: servlet + CLIENT.Settings.url.localeUrl + fileName,
      type: "POST",
      data: parms,
      cache: cache,
      success: function(data) {
        CLIENT.Modal.populateAndShowModalWindow(data, modalClassName)
      },
      error: function() {
        CLIENT.Modal.hideModal(), $.Log.error("CLIENT.modal.ajaxLoadPage failure")
      }
    })
  },
  bindModalLoadImage: function() {
    $(".modal-image-link").on("click", function(e) {
      e.preventDefault();
      var imgSrc = $(this).attr("data-modal-contents"),
        modalClassName = $(this).attr("data-modal-class");
      return data = "<img src=' " + imgSrc + "' />", CLIENT.Modal.prepModal(), CLIENT.Modal.populateAndShowModalWindow(data, modalClassName), !1
    })
  },
  populateAndShowModalWindow: function(data, modalClassName) {
    var modalWrapper = $(".nix-modal-wrapper");
    $(".nix-modal-content").html(data), modalWrapper.addClass(modalClassName);
    $(".nix-overlay-body");
    "undefined" != typeof CLIENT.product && "undefined" != typeof CLIENT.product.modalBackgroundImages && $.isFunction(CLIENT.product.modalBackgroundImages) && CLIENT.product.modalBackgroundImages(), CLIENT.Modal.showModal()
  },
  forceClosedModal: function() {
    return $.Log.debug("CLIENT.Modal.forceClosedModal"), $(".nix-overlay-body .nix-close").trigger("click"), !1
  },
  prepModal: function() {
    $(".nix-overlay-body").fadeIn().addClass("modal-loading")
  },
  showModal: function() {
    $(".nix-overlay-body").is(":visible") || CLIENT.Modal.prepModal(), $(".nix-overlay-body").removeClass("modal-loading");
    var topPosition = $("body").scrollTop();
    $("body").addClass("body-modal"), $("#page").scrollTop(topPosition)
  },
  closeModal: function() {
    var topPosition = $("#page").scrollTop();
    $("body").removeClass("body-modal"), $("body").scrollTop(topPosition), $(".nix-overlay-body").fadeOut("medium", function() {
      var isCountries = $(".show-countries").length;
      $(this).removeClass("nix-overlay-all").removeClass("show-countries").removeClass("show-login").removeClass("show-modal").removeClass("show-video").removeAttr("style"), isCountries > 0 && ($(".nix-region").show(), $(".nix-country").hide()), $(".nix-modal-wrapper").attr("class", "nix-modal-wrapper"), $(".nix-modal-content").empty()
    }).removeClass("modal-loading")
  },
  bindCloseModal: function() {
    $(".nix-overlay-body .nix-close, .nix-overlay-body, .nix-lang-select").off().on("click", function(e) {
      e.stopPropagation(), CLIENT.Modal.closeModal()
    }), $(".nix-modal-wrapper").on("click", function(e) {
      e.stopPropagation()
    }), $(window).keyup(function(e) {
      27 === e.keyCode && CLIENT.Modal.closeModal()
    })
  }
}, ZC.Base.addInit(CLIENT.Modal.init);
var CLIENT = window.CLIENT || {};
CLIENT.Decorator = {
  userData: {},
  init: function() {
    $.Log.info("Loading CLIENT.Decorator.init");
    var topMenu = $("#nix-fixed-header");
    topMenu.length && (CLIENT.Decorator.bindPromoBar(), CLIENT.Decorator.bindStickyHeaderOnScroll(), CLIENT.Decorator.loadDynamicHeader(), CLIENT.Decorator.loadCountryMenuHtml().done(CLIENT.Decorator.mergeEuropeanCountryMenu).done(CLIENT.Decorator.initMobileContinentCollapse).done(CLIENT.Decorator.bindMobileContinentToggle).done(CLIENT.Decorator.bindCountrySwitcher), CLIENT.Decorator.bindSeeWhyUsernameChange(), CLIENT.Decorator.bindLoginForm(), CLIENT.Decorator.bindForgotPasswordLink(), CLIENT.Decorator.bindMyFavorites(), CLIENT.Decorator.bindPasswordRecoveryForm(), CLIENT.Decorator.bindSearchBarEvents(), CLIENT.Decorator.bindGALinkTracking(), CLIENT.Decorator.minicart.init(), enquire.register("screen and (max-width: 768px)", {
      setup: function() {
        $("#mobile-nav-container").delay(200).addClass("init")
      },
      match: function() {
        CLIENT.Decorator.bindMobileMenu()
      },
      unmatch: function() {
        CLIENT.Decorator.unBindMobileMenu()
      }
    }), enquire.register("screen and (max-width:" + CLIENT.util.mobileSize + "px)", {
      match: function() {
        CLIENT.Decorator.bindFooter()
      },
      unmatch: function() {
        CLIENT.Decorator.unBindFooter()
      }
    }))
  },
  bindSearchBarEvents: function() {
    $.Log.debug("CLIENT.Decorator.bindSearchBarEvents");
    var wrapper = jQuery(".nix-search-wrapper");
    jQuery(".nix-search-reveal, .nix-show-close-icon").on("click touchstart", function() {
      return wrapper.toggleClass("nix-search-wrapper-show").promise().done(function() {
        wrapper.hasClass("nix-search-wrapper-show") ? $(".nix-search-wrapper .nix-suggestions-search").focus() : $(".nix-search-wrapper .nix-suggestions-search").blur()
      }), !1
    }), $(".nix-suggestions-search").on("keyup", $.debounce(100, CLIENT.Decorator.getSuggestedSearchResults)), $(document).keyup(function(e) {
      27 == e.keyCode && (wrapper.removeClass("nix-search-wrapper-show"), $(".nix-search-wrapper .nix-suggestions-search").blur())
    }), $(document).mouseup(function(e) {
      var container = $(".nix-search-wrapper.nix-search-wrapper-show");
      container.is(e.target) || 0 !== container.has(e.target).length || wrapper.removeClass("nix-search-wrapper-show")
    })
  },
  bindGALinkTracking: function() {
    $("*[data-ga-track='true']").each(function() {
      $(this).on("click", function() {
        var link = $(this),
          event = $.trim(link.attr("data-ga-event")),
          value = $.trim(link.attr("data-ga-val")),
          type = $.trim(link.attr("data-ga-group"));
        0 !== event.length && 0 !== value.length && 0 !== type.length && ga("send", "event", type, event, value)
      })
    })
  },
  openSearchBar: function(term) {
    if ($.Log.debug("*$&%*&$%*&$%&*$&%*&$*W%&*$&%" + term), "undefined" != typeof term && null != term && term.length > 0) {
      var $wrapper = $(".nix-search-wrapper");
      $wrapper.hasClass("nix-search-wrapper-show") || ($wrapper.addClass("nix-search-wrapper-show"), $(".nix-search-wrapper .nix-suggestions-search").val(term).focus())
    }
  },
  getSuggestedSearchResults: function() {},
  bindPromoBar: function() {
    $.Log.debug("CLIENT.Decorator.bindPromoBar");
    var promoBar = $("#promobar,#mobilepromo"),
      body = $("body"),
      promoModal = $(".promobar .ajax-modal");
    if (promoBar.length > 0) {
      var sessionURL = CLIENT.Settings.getServlet() + "includes/set-session-value.jsp",
        promoClose = $(".promoclose"),
        promoBarRestore = $("#promobarrestore");
      promoClose.on("click", function(e) {
        e.preventDefault(), promoBar.removeClass("active"), promoBarRestore.addClass("active"), body.removeClass("promo"), $.ajax({
          type: "POST",
          url: sessionURL,
          data: {
            name: "headerPromo",
            value: "hide"
          },
          success: function() {}
        })
      }), promoBarRestore.on("click", function() {
        promoBarRestore.removeClass("active"), promoBar.addClass("active"), body.addClass("promo"), $.ajax({
          type: "POST",
          url: sessionURL,
          data: {
            name: "headerPromo",
            value: "show"
          },
          success: function() {}
        })
      }), promoModal.on("click", function(e) {
        $.Log.debug("CLIENT.decorator.bindPromoBar --> promo modal"), e.stopImmediatePropagation();
        var modalClass = "";
        return void 0 !== promoBar.attr("data-class") && (modalClass = promoBar.attr("data-class")), CLIENT.Modal.ajaxLoadArticle($(this).attr("data-refid"), modalClass), !1
      })
    }
  },
  bindMyFavorites: function() {
    $(".nix-favorites").on("click", function(e) {
      "a" != e.target.tagName.toLowerCase() && (document.location.href = $(this).find("a").attr("href"))
    })
  },
  bindStickyHeaderOnScroll: function() {
    $(window).on("scroll", $.throttle(25, CLIENT.Decorator.weScrolledStickTheHeader)), $(window).ready(function() {
      CLIENT.Decorator.weScrolledStickTheHeader()
    })
  },
  weScrolledStickTheHeader: function() {
    $(window).scrollTop() > 120 ? (CLIENT.Decorator.stickTheHeaderAndFreeRideFooter(), CLIENT.Decorator.stickTheMiniCart()) : (CLIENT.Decorator.unstickTheHeaderAndFreeRideFooter(), CLIENT.Decorator.unstickTheMiniCart())
  },
  stickTheHeaderAndFreeRideFooter: function() {
    var header = $(".nix-fixed-header");
    if (!header.hasClass("fixed")) {
      $.Log.debug("stickTheHeader"), header.addClass("fixed"); {
        setTimeout(function() {
          header.addClass("fixed-transition")
        }, 50)
      }
    }
  },
  unstickTheHeaderAndFreeRideFooter: function() {
    $.Log.debug("unstickTheHeaderAndFreeRideFooter"), $(".nix-fixed-header").removeClass("fixed-transition fixed").removeAttr("style")
  },
  stickTheMiniCart: function() {
    var $minicart = $("#drop-down-minicart");
    $minicart.hasClass("fixed") || ($.Log.debug("stickTheMiniCart"), $minicart.addClass("fixed-transition fixed"), $minicart.animate({
      top: "40px"
    }, 300, "linear"))
  },
  unstickTheMiniCart: function() {
    var $minicart = $("#drop-down-minicart");
    $minicart.hasClass("fixed") && ($.Log.debug("unstickTheMiniCart"), $minicart.removeClass("fixed-transition fixed"), $minicart.css("top", ""))
  },
  loadCountryMenuHtml: function() {
    $.Log.debug("CLIENT.Decorator.loadCountryMenuHtml");
    var dfd = $.Deferred();
    return CLIENT.Settings.url.pro ? dfd.reject() : $.ajax({
      type: "GET",
      url: CLIENT.Settings.getHost() + "/decorator-countries/",
      data: {
        srcurl: CLIENT.Settings.url.scriptUrl,
        loadByAjax: !0
      }
    }).done(function(data, textStatus, jqXHR) {
      var response = jqXHR.responseText.trim();
      $(response).length && $("#countryLanguageMenu").html($(response).html()), dfd.resolve()
    }).fail(function(response) {
      $.Log.debug(response), dfd.reject()
    }), dfd.promise()
  },
  mergeEuropeanCountryMenu: function() {
    $.Log.debug("CLIENT.Decorator.mergeEuropeanCountryMenu");
    var ac = $("#countries-accordion");
    if (ac.length) {
      var eu1 = ac.find("div[data-menucode='COL2']"),
        eu2 = ac.find("div[data-menucode='COL3']");
      eu1.length && eu2.length && (eu2.find("li").appendTo(eu1.find("ul")), eu2.remove())
    }
  },
  initMobileContinentCollapse: function() {
    var $mobileMenuCollapsed = $("#countryLanguageMenu").find(".collapse");
    "undefined" != typeof $mobileMenuCollapsed && $mobileMenuCollapsed.length > 0 && $.each($mobileMenuCollapsed, function() {
      $(this).collapse()
    })
  },
  bindMobileContinentToggle: function() {
    $("#countryLanguageMenu [data-toggle='collapse']").on("click", function(e) {
      e.preventDefault(), e.stopPropagation();
      var parentPanel = $(this).parents(".panel"),
        siblingPanels = parentPanel.siblings(".panel");
      parentPanel.children(".panel-collapse").collapse("toggle"), siblingPanels.children(".panel-collapse").collapse("hide")
    })
  },
  bindCountrySwitcher: function() {
    $.Log.debug("CLIENT.Decorator.bindCountrySwitcher"), jQuery(".nix-flags").off().on("click", function(e) {
      e.preventDefault(), $("body").addClass("body-modal"), $(".nix-modal-wrapper").addClass("modal-countries"), jQuery(".nix-overlay-body").hide().addClass("nix-overlay-all show-countries").fadeIn("medium")
    }), $(".country").off().on("click", function(e) {
      var languages = $(this).attr("data-languages");
      if ("undefined" != typeof languages && -1 != languages.indexOf("|")) {
        e.preventDefault();
        var languageLayer = $(".nix-country"),
          ul = $(".nix-choose-language", languageLayer).find("ul"),
          languageAr = languages.split("|"),
          country = $(this).attr("data-country"),
          countryCode = $(this).attr("data-countrycode");
        languageLayer.find(".nix-country-name").text(country), ul.html("");
        for (var x = 0; x < languageAr.length; x++) {
          var li = $("<li/>"),
            a = $("<a/>");
          a.addClass("nix-lang-select").attr({
            "data-lang": languageAr[x],
            href: CLIENT.Settings.getBaseHost() + "/" + countryCode + "/" + languageAr[x] + CLIENT.currentUrl
          }).html(CLIENT.languages[languageAr[x]]), li.append(a), ul.append(li)
        }
        $(".nix-region").delay(200).slideUp("fast", function() {
          $(".nix-country").fadeIn("medium", function() {
            $("#nix-overlay-body").scrollTop(50)
          })
        })
      }
    })
  },
  loadDynamicHeader: function() {
    $.Log.debug("CLIENT.Decorator.loadDynamicHeader");
    var siteMenuCountry = $.getUrlVar("siteMenuCountry"),
      siteMenuLanguage = $.getUrlVar("siteMenuLanguage"),
      parms = {};
    "undefined" != typeof siteMenuCountry && (parms.siteMenuCountry = siteMenuCountry), "undefined" != typeof siteMenuLanguage && (parms.siteMenuLanguage = siteMenuLanguage), $.ajax({
      type: "GET",
      crossDomain: !0,
      url: CLIENT.Settings.url.secureHost + "/ajax/header/",
      data: parms,
      xhrFields: {
        withCredentials: !0
      },
      dataType: "jsonp",
      timeout: 1e4,
      cache: !1
    }).done(CLIENT.Decorator.handleDynamicHeaderResponse).done(CLIENT.Decorator.handleUrlLanguageChoice).fail(function() {})
  },
  handleDynamicHeaderResponse: function(data) {
    if ($.Log.debug("CLIENT.Decorator.handleDynamicHeaderResponse"), data.success) {
      if (CLIENT.Decorator.userData = data, !CLIENT.Settings.url.pro) {
        var promoBar = $("#promobar,#mobilepromo");
        promoBar.length && ("undefined" == typeof data.promoStatus || null == data.promoStatus || -1 != data.promoStatus.indexOf("show")) && (promoBar.addClass("active"), $("body").addClass("promo"))
      }
      if ("undefined" != typeof data.cartCount && $("#cart_products_number").html(data.cartCount), "undefined" != typeof data.favoriteCount && $("#favorite-count").html(data.favoriteCount), "undefined" != typeof data.user && "undefined" != typeof data.user.loggedIn && data.user.loggedIn) {
        var d = new Date,
          future = new Date(d.getTime() + 7776e6);
        $.cookie("_nxn", data.nid, {
          expires: future,
          domain: "." + window.location.host,
          path: "/"
        });
        var login = $(".nix-login"),
          wrapper = $("#nix-fixed-header"),
          logout = wrapper.find("a.nix-logout");
        logout.length || (logout = $("<a/>").addClass("pull-right nix-logout").attr("href", CLIENT.Settings.url.secureHost + "/logout/").attr("data-login", login.html()).html(login.attr("data-logout")), login.after(logout).hide());
        var account = wrapper.find("a.nix-account");
        if (!account.length) {
          account = $("<a/>").addClass("pull-right nix-account").attr("href", CLIENT.Settings.url.secureHost + "/account/view-account/").html(login.attr("data-account"));
          var $logout = $(".nix-logout");
          $logout.after(account).hide()
        }
      }
    } else $.Log.error("Dynamic Header Request Failed.");
    if (0 != CLIENT.Decorator.afterHeaderLoad.length)
      for (var a = 0; a < CLIENT.Decorator.afterHeaderLoad.length; a++) CLIENT.Decorator.afterHeaderLoad[a].call(null, data)
  },
  afterHeaderLoad: [],
  addAfterHeaderLoad: function(f) {
    "function" == typeof f && CLIENT.Decorator.afterHeaderLoad.push(f)
  },
  handleUrlLanguageChoice: function(data) {
    $.Log.debug("CLIENT.Decorator.handleUrlLanguageChoice");
    var displayLocaleUrlChoice = data.displayLocaleUrlChoice;
    if ("undefined" != typeof displayLocaleUrlChoice && null != displayLocaleUrlChoice)
      if (-1 != displayLocaleUrlChoice.indexOf("1")) {
        var lusc = data.localeUrlFromCountrySelectCookie;
        $.Log.debug("Response says user really should be on : " + lusc), "undefined" != typeof lusc && null != lusc && $.Log.debug("Show menu")
      } else if (-1 != displayLocaleUrlChoice.indexOf("2")) {
      var flc = data.forcedLanguageChooserUrl;
      $.Log.debug("Response says to use this url for the language choose : " + flc), "undefined" != typeof flc && null != flc && $.Log.debug("Show menu")
    }
  },
  reloadAfterLogout: !1,
  setLogoutReload: function(bool) {
    CLIENT.Decorator.reloadAfterLogout = bool
  },
  userLogOut: function(e) {
    $.Log.debug("CLIENT.Decorator.userLogOut()"), e.preventDefault(), $.ajax({
      type: "GET",
      crossDomain: !0,
      url: CLIENT.Settings.url.secureServlet,
      data: {
        OPTION: "AJAX_LOGOUT"
      },
      dataType: "jsonp",
      xhrFields: {
        withCredentials: !0
      }
    }).done(function(response) {
      CLIENT.Decorator.reloadAfterLogout ? document.location.reload() : (CLIENT.Decorator.handleDynamicHeaderResponse(response), CLIENT.Decorator.setupLoginAfterLogout(response))
    }).fail(function(data) {
      $.Log.error(data), document.location.href = CLIENT.Settings.url.secureHost + "/logout/"
    })
  },
  setupLoginAfterLogout: function() {
    $.Log.debug("CLIENT.Decorator.setupLoginAfterLogout"), $(".nix-fixed-header").find(".nix-logout,.nix-account").remove();
    $(".nix-login").show()
  },
  userView: {
    loggedIn: !1
  },
  bindSeeWhyUsernameChange: function() {
    $.Log.debug("CLIENT.Decorator.bindSeeWhyUsernameChange"), "undefined" != typeof CLIENT.SeeWhy && $("#nix-loginform").find("#username").on("change", function() {
      var val = $.trim($(this).val());
      0 != val.length && CLIENT.Base.isValidEmail(val) && (CLIENT.SeeWhy.userEmail = val, CLIENT.SeeWhy.cyEvent(0))
    })
  },
  bindForgotPasswordLink: function() {
    $(".cancel,.forgot").click(function() {
      $("#nix-forgotpassword-container").css("min-height", 0).animate({
        height: "toggle"
      }, 300, function() {})
    })
  },
  bindLoginForm: function() {
    $.Log.debug("CLIENT.Decorator.bindLoginForm"), $("a.nix-login").off().on("click", function(e) {
      e.preventDefault(), $("body").addClass("body-modal"), $(".nix-modal-wrapper").addClass("modal-login"), $(".nix-overlay-body").hide().addClass("nix-overlay-all").fadeIn("medium"), $("#username").focus()
    }), $("#nix-loginform").scrupulous({
      valid: function() {
        return CLIENT.Decorator.ajaxLoginSubmit($(this)), !1
      },
      invalid: function() {
        return $.Log.error("nix-loginform inputs are invalid, not submitting form"), !1
      }
    })
  },
  addLoginCallback: function(callback) {
    $("#nix-loginform").removeData("validator").unbind("submit"), CLIENT.Decorator.validateSignin(callback)
  },
  reloadAfterLogin: !1,
  ajaxLoginSubmit: function(form) {
    $.Log.debug("CLIENT.Decorator.ajaxLoginSubmit");
    var returnTo = $("#loginReturnTo").val(),
      timeout = $("#loginTimeout").val(),
      user = $.trim($("#username").val()),
      pswd = $.trim($("#password").val()),
      data = {
        OPTION: $("#loginOption").val()
      };
    0 != returnTo.length && (data.returnTo = returnTo), 0 != timeout.length && (data.timeout = timeout), 0 != user.length && (data.username = user), 0 != pswd.length && (data.password = pswd), CLIENT.util.hideButton("login-submit"), $.ajax({
      type: "GET",
      crossDomain: !0,
      url: CLIENT.Settings.url.secureServlet,
      data: data,
      xhrFields: {
        withCredentials: !0
      },
      dataType: "jsonp"
    }).done(function(response) {
      if ("undefined" != typeof response.user && response.user.loggedIn) 0 != returnTo.length && 0 != $.trim(returnTo.val()).length ? document.location.href = returnTo.val() : CLIENT.Decorator.reloadAfterLogin ? (document.location.reload(), $(".show-login").find(".nix-close").trigger("click")) : ($(".nix-modal-wrapper").find(".nix-close").trigger("click"), CLIENT.Decorator.handleDynamicHeaderResponse(response));
      else {
        var error = $("<label/>").attr({
          "for": "username"
        }).addClass("error-message").html(CLIENT.Settings.alerts.signin.invalidinfo);
        form.find(".form-group:first").append(error)
      }
    }).fail(function() {
      var error = $("<label/>").attr({
        "for": "username"
      }).addClass("error-message").html(CLIENT.Settings.alerts.signin.error);
      form.find(".nix-loginform-line:first").append(error)
    }).always(function() {
      $("#password").val(""), CLIENT.util.enableButton("login-submit")
    })
  },
  showCustomUsernameMessage: function(form, msg) {
    $.Log.debug("CLIENT.Decorator.showCustomUsernameMessage");
    var error = form.find(".nix-loginform-line:first").find("label.error-message");
    0 != error.length ? error.html(msg) : (error = $("<label/>").attr({
      "for": "pwResetEmail"
    }).addClass("error-message").html(msg), form.find(".nix-loginform-line:first").append(error))
  },
  updateLoginAfterPasswordSend: function(email) {
    $.Log.debug("CLIENT.Decorator.clearLoginAfterPasswordReset");
    var signinForm = $("#nix-loginform"),
      emailField = signinForm.find("#username");
    emailField.val(email), CLIENT.Decorator.showCustomUsernameMessage(signinForm, CLIENT.Settings.alerts.signin.email_sent), jQuery("#nix-forgotpassword-container").css("min-height", 0).animate({
      height: "toggle"
    }, 300, function() {})
  },
  bindPasswordRecoveryForm: function() {
    $.Log.debug("CLIENT.Decorator.bindPasswordRecoveryForm"), $("#nix-forgotpassword").scrupulous({
      valid: function() {
        return CLIENT.Decorator.ajaxForgotPasswordSubmit($(this)), !1
      },
      invalid: function() {
        return $.Log.error("nix-forgotpassword inputs are invalid, not submitting form"), !1
      }
    })
  },
  ajaxForgotPasswordSubmit: function(form) {
    $.Log.debug("CLIENT.Decorator.ajaxForgotPasswordSubmit");
    var data = {
      OPTION: $("#forgotoption").val(),
      email: $.trim($("#pwResetEmail").val())
    };
    CLIENT.util.hideButton("send-submit"), $.ajax({
      type: "GET",
      crossDomain: !0,
      url: CLIENT.Settings.url.secureServlet,
      data: data,
      xhrFields: {
        withCredentials: !0
      },
      dataType: "jsonp"
    }).done(function(response) {
      "email_sent" != response.status ? CLIENT.Decorator.showPasswordError(form, CLIENT.Settings.alerts.signin.email_not_found) : (CLIENT.Decorator.updateLoginAfterPasswordSend(data.email), $("#pwResetEmail").val(""))
    }).fail(function() {
      CLIENT.Decorator.showPasswordError(form, CLIENT.Settings.alerts.signin.error)
    }).always(CLIENT.Decorator.enablePasswordFormButton)
  },
  showPasswordError: function(form, msg) {
    $.Log.debug("CLIENT.Decorator.showPasswordError");
    var error = form.find(".nix-loginform-line:first").find("label.error-message");
    0 != error.length ? error.html(msg) : (error = $("<label/>").attr({
      "for": "pwResetEmail"
    }).addClass("error-message").html(msg), form.find(".nix-loginform-line:first").append(error))
  },
  enablePasswordFormButton: function() {
    CLIENT.util.enableButton("send-submit")
  },
  validateSignin: function(callback) {
    $.Log.debug("CLIENT.Decorator.validateSignin"), $("#nix-loginform").scrupulous({
      parentClassName: "nix-loginform-line",
      valid: function() {
        return CLIENT.Decorator.ajaxLoginSubmit($(this), callback), !1
      },
      invalid: function() {
        return $.Log.error("nix-loginform inputs are invalid, not submitting form"), !1
      }
    })
  },
  bindMobileMenu: function() {
    var t, $html = $("html"),
      $page = $("#page"),
      $button = $("#mobile-nav-button"),
      $mobileNavContainer = $("#mobile-nav-container");
    $button.on("click", function(e) {
      e.preventDefault(), $html.hasClass("nav-active") || ($html.addClass("nav-active"), $button.addClass("active"), $mobileNavContainer.addClass("active"), $page.on("touchstart.menu", function(e) {
        e.stopPropagation(), e.preventDefault(), $html.removeClass("nav-active"), $button.removeClass("active"), t = setTimeout(function() {
          $mobileNavContainer.removeClass("active"), $page.off("touchstart.menu")
        }, 500)
      }))
    })
  },
  unBindMobileMenu: function() {
    $("#mobile-nav-button").off()
  },
  bindFooter: function() {
    var accTrigger = $(".accordion-header");
    accTrigger.on("click", function(e) {
      return $(this).hasClass("triggered") ? ($(this).removeClass("triggered"), $(this).siblings(".accordion-content").slideToggle("fast"), !0) : ($(".accordion-header.triggered").siblings(".accordion-content").slideToggle("fast"), $(".accordion-header.triggered").removeClass("triggered"), $(this).addClass("triggered"), $(this).siblings(".accordion-content").slideToggle("fast"), e.preventDefault(), void 0)
    })
  },
  unBindFooter: function() {
    var accTrigger = $(".accordion-header");
    accTrigger.off().removeClass("triggered"), $(".accordion-content").removeAttr("style")
  },
  minicart: {
    minicartParentEl: $("#drop-down-minicart"),
    minicartInnerEl: $("#minicart-inner"),
    init: function() {
      $.Log.debug("CLIENT.Decorator.minicart.init()"), CLIENT.Decorator.minicart.bindMiniCartContinueShopButton()
    },
    updateMiniCartContents: function(contents) {
      $.Log.debug("CLIENT.Decorator.minicart.updateMiniCartContents()"), CLIENT.Decorator.minicart.minicartInnerEl.html(contents)
    },
    showMiniCart: function() {
      $.Log.debug("CLIENT.Decorator.minicart.showMiniCart()"), CLIENT.Decorator.minicart.minicartParentEl.removeClass("hide"), CLIENT.Decorator.minicart.minicartInnerEl.animate({
        height: 400
      }, 350, function() {
        CLIENT.Decorator.minicart.setHideMiniCartTimer(0)
      })
    },
    setHideMiniCartTimer: function(timerCount) {
      setTimeout(function() {
        CLIENT.Decorator.minicart.minicartParentEl.is(":visible") && !CLIENT.Decorator.minicart.minicartParentEl.is(":hover") ? CLIENT.Decorator.minicart.hideMiniCart() : 2e4 > timerCount && CLIENT.Decorator.minicart.setHideMiniCartTimer(timerCount + 5e3)
      }, 5e3)
    },
    hideMiniCart: function() {
      $.Log.debug("CLIENT.Decorator.minicart.hideMiniCart()"), CLIENT.Decorator.minicart.minicartInnerEl.animate({
        height: 0
      }, 350, function() {
        CLIENT.Decorator.minicart.minicartParentEl.addClass("hide")
      })
    },
    bindMiniCartContinueShopButton: function() {
      $(".nix-cart-pusher").on("click touchstart", "#minicart-continue", function() {
        $.Log.debug("calling hideMiniCart()"), CLIENT.Decorator.minicart.hideMiniCart()
      })
    }
  },
  localizeLinks: function(container, el) {
    void 0 === el && (el = "a"), "a" == el ? $(container).find("a").each(function() {
      var $this = $(this),
        currHref = $this.attr("href");
      0 == currHref.indexOf("/") && (currHref.match(/\/[a-z]{2}\/[a-z]{2}\/.*/gi) || $this.attr("href", CLIENT.Settings.getHost() + currHref))
    }) : $(container).find("option").each(function() {
      var $this = $(this),
        currHref = $this.val();
      0 == currHref.indexOf("/") && (currHref.match(/\/[a-z]{2}\/[a-z]{2}\/.*/gi) || $this.val(CLIENT.Settings.getHost() + currHref))
    })
  }
}, ZC.Base.addInit(CLIENT.Decorator.init);
var CLIENT = window.CLIENT || {};
CLIENT.Forms = {
  init: function() {
    $(".fn-validate-form").scrupulous(), CLIENT.Forms.bindFormGroup()
  },
  bindFormGroup: function() {
    var elements = $(".form-group input, .form-group textarea");
    elements.each(function() {
      var inputVal = this.value;
      inputVal.length > 0 && $(this).prev("label").hide()
    }), elements.on("keydown", function(e) {
      var inputVal = this.value;
      0 == inputVal.length && e.keyCode > 54 && $(this).prev("label").hide()
    }).on("keyup input", function() {
      var inputVal = this.value;
      inputVal.length > 0 ? $(this).prev("label").hide() : $(this).prev("label").fadeIn("200")
    }).on("blur", function() {
      var inputVal = this.value;
      0 == inputVal.length ? $(this).prev("label").show() : $(this).prev("label").hide()
    })
  }
}, ZC.Base.addInit(CLIENT.Forms.init);
var DateFormatting = {
    init: function() {
      var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      $("span.convertTimestamp").each(function() {
        var utcDate = new Date($(this).html()),
          hours = new String(utcDate.getHours());
        1 == hours.length && (hours = "0" + utcDate.getHours());
        var minutes = new String(utcDate.getMinutes());
        1 == minutes.length && (minutes = "0" + utcDate.getMinutes());
        var seconds = new String(utcDate.getSeconds());
        1 == seconds.length && (seconds = "0" + utcDate.getSeconds()), $(this).html(utcDate.getDate() + " " + months[utcDate.getMonth()] + " " + utcDate.getFullYear() + " " + hours + ":" + minutes + ":" + seconds)
      })
    }
  },
  CLIENT = window.CLIENT || {};
CLIENT.SeeWhy = {
  cartId: null,
  cartUrl: null,
  cartTotal: -1,
  language: "",
  country: "",
  currency: "",
  conversionRates: {},
  userName: "",
  userEmail: "",
  productDescr: "",
  productColor: "",
  emailPhone: "",
  isEmpty: function(input) {
    return null === input || void 0 === input ? !0 : (input = $.trim(input), "" === input || 0 === input.length ? !0 : !1)
  },
  notEmpty: function(input) {
    return !CLIENT.SeeWhy.isEmpty(input)
  },
  extractFormattedNumber: function(input) {
    if ("undefined" == typeof input || 0 == input.length) return "";
    if (isNaN(input)) {
      for (var justDigits = "", char = 0; char < input.length; char++) isNaN(input[char]) ? ("." === input[char] || "," === input[char]) && (justDigits += input[char]) : justDigits += input[char];
      if ("" !== justDigits) {
        for (var countComma = 0, countDecimalPoint = 0, countOther = 0, otherSymbols = new Array, char = 0; char < justDigits.length; char++) "." === justDigits[char] ? countDecimalPoint += 1 : "," === justDigits[char] ? countComma += 1 : isNaN(justDigits[char]) && (countOther += 1, otherSymbols.push(justDigits[char]));
        if (1 == countComma && countDecimalPoint > 0) {
          for (var c = 0; countDecimalPoint > c; c++) justDigits = justDigits.replace(".", "");
          justDigits = justDigits.replace(",", ".")
        } else 0 === countDecimalPoint && (justDigits += ".00");
        for (var c = 0; countComma > c; c++) justDigits = justDigits.replace(",", "");
        if (countOther > 0)
          for (var c = 0; countOther > c; c++)
            for (var s = 0; s < otherSymbols.length; s++) justDigits = justDigits.replace(otherSymbols[s], "")
      }
      return isNaN(justDigits) ? ($.Log.debug("isNaN(" + justDigits + ") = true", justDigits, "DEBUG"), $.trim(justDigits)) : parseFloat(justDigits).toFixed(2)
    }
    return input.toFixed(2)
  },
  convertToUSD: function(numberToConvert, currencyCode) {
    if ("USD" === currencyCode) return numberToConvert;
    if (CLIENT.SeeWhy.conversionRates !== {}) {
      var conversionRate = CLIENT.SeeWhy.conversionRates[currencyCode];
      if (null !== conversionRate) return $.Log.debug("convertToUSD(" + numberToConvert + ", " + currencyCode + ") = Converting to USD with rate of " + conversionRate, null, "DEBUG"), parseFloat(numberToConvert / conversionRate).toFixed(2)
    }
    return numberToConvert
  },
  cyEvent: function(funnelLevel) {
    if ((void 0 === funnelLevel || null === funnelLevel) && (funnelLevel = 3), cy.control.cookieinfo.domain = "zohannah.com", cy.basketappend = "0", cy.FunnelLevel = funnelLevel, cy.Custom1 = CLIENT.Settings.user.loggedin || CLIENT.SeeWhy.notEmpty(CLIENT.SeeWhy.userName) ? CLIENT.SeeWhy.userName : "Guest", cy.Custom2 = CLIENT.SeeWhy.language, cy.Custom3 = CLIENT.SeeWhy.country, cy.Custom4 = "GBP", cy.Custom5 = CLIENT.SeeWhy.productDescr.length > 1024 ? CLIENT.SeeWhy.productDescr.substring(0, 1021) + "..." : CLIENT.SeeWhy.productDescr, cy.Custom7 = CLIENT.SeeWhy.emailPhone, cy.UserId = CLIENT.Settings.user.loggedin || CLIENT.SeeWhy.notEmpty(CLIENT.SeeWhy.userEmail) ? CLIENT.SeeWhy.userEmail : "", $.Log.debug("CLIENT.SeeWhy.cyEvent(" + funnelLevel + ")", CLIENT.SeeWhy, "DEBUG"), CLIENT.SeeWhy.notEmpty(CLIENT.SeeWhy.cartId) && (cy.Value = 0 != CLIENT.SeeWhy.cartTotal ? CLIENT.SeeWhy.convertToUSD(CLIENT.SeeWhy.cartTotal, CLIENT.SeeWhy.currency) : 0, 7 !== funnelLevel && (cy.ReturnToLink = CLIENT.SeeWhy.cartUrl)), 3 === funnelLevel) {
      var tempValue = "";
      if (CLIENT.SeeWhy.notEmpty(CLIENT.SeeWhy.productColor) && (cy.Custom6 = CLIENT.SeeWhy.productColor), cyNewBasketLine(), tempValue = $("#product-name").text(), cyAddBasketLineDetail("ItemName", tempValue), tempValue = $('.minithumb.active > img[itemprop="image"]').attr("src"), "/" === tempValue.charAt(0) && (tempValue = "http:" + tempValue), tempValue = tempValue.replace("/selection/", "/mini-retina/"), cyAddBasketLineDetail("ItemImageURL", tempValue), cyAddBasketLineDetail("ItemPageURL", document.location.href), tempValue = CLIENT.SeeWhy.extractFormattedNumber($.trim($(".prodprice").first().text())), tempValue = CLIENT.SeeWhy.convertToUSD(tempValue, CLIENT.SeeWhy.currency), cyAddBasketLineDetail("ItemPrice", tempValue), tempValue = $("#breadcrumbs").text(), CLIENT.SeeWhy.notEmpty(tempValue)) {
        tempValue = tempValue.split("/");
        for (var category = "", i = 1; i < tempValue.length - 1; i++) "" !== category && (category += " / "), category += $.trim(tempValue[i]);
        tempValue = category
      }
      cyAddBasketLineDetail("ItemCategory", tempValue)
    } else 7 === funnelLevel && (cy.OrderNumber = CLIENT.SeeWhy.cartId);
    cy_getImageSrc()
  },
  queryStr: function(queryName) {
    if ("undefined" != typeof window.location.search)
      for (queryString = window.location.search.substring(1), queryStringSplit = queryString.split("&"), i = 0; i < queryStringSplit.length; i++)
        if (queryResult = queryStringSplit[i].split("="), queryResult[0] == queryName) return $.Log.debug("CLIENT.SeeWhy.queryStr(" + queryName + ")", null, "DEBUG"), queryResult[1]
  },
  getQueryEmail: function() {
    var q = window.location.search;
    if (q.length > 0)
      for (q = q.substring(1), qs = q.split("&"), i = 0; i < qs.length; i++)
        if (t = qs[i].split("="), t[1].indexOf(".") > 0 && t[1].indexOf("@") > 0) return $.Log.debug("CLIENT.SeeWhy.getQueryEmail()", t[1], "DEBUG"), t[1];
    return ""
  }
};
var CLIENT = window.CLIENT || {};
CLIENT.util = {
    isMobile: !1,
    initMobile: null,
    initDesktop: null,
    mobileSize: 767,
    resizeFunction: null,
    init: function() {
      CLIENT.util.screenWidthCheck(), CLIENT.util.placeholder();
      var initialTriggers = $("*[data-triggeronload=true]");
      initialTriggers.length > 0 && $(initialTriggers[0]).removeAttr("data-triggeronload").trigger("click"), $("#mailinput").blur(function() {
        "" != this.value && $("#mailform").submit()
      }), $("a.anchor").click(function() {
        return CLIENT.util.scrollAnchor(this), !1
      }), $(window).resize($.debounce(200, function() {
        CLIENT.util.screenWidthCheck()
      })), CLIENT.util.isMobile || Modernizr.touch || $(window).scroll(function() {
        $(window).scrollTop() >= 400 ? $("#backToTop").fadeIn(300) : $("#backToTop").fadeOut(300)
      })
    },
    strReplaceAccents: function(s) {
      var rExps = [{
          re: /[\xC0-\xC6]/g,
          ch: "A"
        }, {
          re: /[\xE0-\xE6]/g,
          ch: "a"
        }, {
          re: /[\xC8-\xCB]/g,
          ch: "E"
        }, {
          re: /[\xE8-\xEB]/g,
          ch: "e"
        }, {
          re: /[\xCC-\xCF]/g,
          ch: "I"
        }, {
          re: /[\xEC-\xEF]/g,
          ch: "i"
        }, {
          re: /[\xD2-\xD6]/g,
          ch: "O"
        }, {
          re: /[\xF2-\xF6]/g,
          ch: "o"
        }, {
          re: /[\xD9-\xDC]/g,
          ch: "U"
        }, {
          re: /[\xF9-\xFC]/g,
          ch: "u"
        }, {
          re: /[\xC7-\xE7]/g,
          ch: "c"
        }, {
          re: /[\xD1]/g,
          ch: "N"
        }, {
          re: /[\xF1]/g,
          ch: "n"
        }],
        replacement = s;
      return $.each(rExps, function() {
        replacement = replacement.replace(this.re, this.ch)
      }), replacement
    },
    addDesktopResizeFunction: function(fn) {
      CLIENT.util.desktopResizeFunctions.push(fn)
    },
    runDesktopResizeFunctions: function() {
      for (var ar = CLIENT.util.desktopResizeFunctions, i = 0; i < ar.length; i++) {
        var fn = ar[i];
        "function" == typeof fn && fn.apply(this)
      }
    },
    desktopResizeFunctions: [],
    addMobileResizeFunction: function(fn) {
      CLIENT.util.mobileResizeFunctions.push(fn)
    },
    runMobileResizeFunctions: function() {
      for (var ar = CLIENT.util.mobileResizeFunctions, i = 0; i < ar.length; i++) {
        var fn = ar[i];
        "function" == typeof fn && fn.apply(this)
      }
    },
    mobileResizeFunctions: [],
    screenWidthCheck: function() {
      $.Log.debug("CLIENT.util.Screenwidthcheck"), CLIENT.util.winWidth = $(window).width();
      var divPage = $("#page"),
        winWidth = CLIENT.util.winWidth;
      divPage.length > 0 && (winWidth = divPage.width()), null !== winWidth && (winWidth < CLIENT.util.mobileSize && 0 == CLIENT.util.isMobile ? (CLIENT.util.isMobile = !0, $("html").addClass("mobile").removeClass("desktop"), CLIENT.util.initMobile && CLIENT.util.initMobile(), CLIENT.util.resizeFunction && CLIENT.util.resizeFunction(), CLIENT.util.runMobileResizeFunctions()) : winWidth > CLIENT.util.mobileSize && 1 == CLIENT.util.isMobile ? (CLIENT.util.isMobile = !1, $("html").addClass("desktop").removeClass("mobile"), CLIENT.util.initDesktop && CLIENT.util.initDesktop(), CLIENT.util.resizeFunction && CLIENT.util.resizeFunction(), CLIENT.util.runDesktopResizeFunctions()) : CLIENT.util.isMobile = winWidth < CLIENT.util.mobileSize ? !0 : !1)
    },
    setWebKitClass: function() {
      var userAgent = navigator.userAgent;
      userAgent.indexOf("WebKit") > 0 && $("body").addClass("webkit")
    },
    placeholder: function() {
      $(".placeholder input, .placeholder textarea").each(function() {
        var inputVal = this.value;
        inputVal.length > 0 && $(this).prev("label").hide()
      }), $(".placeholder input, .placeholder textarea").bind("keydown", function(event) {
        var inputVal = this.value;
        0 == inputVal.length && event.keyCode > 54 && $(this).prev("label").hide()
      }), $(".placeholder input, .placeholder textarea").bind("keyup", function() {
        var inputVal = this.value;
        inputVal.length > 0 ? $(this).prev("label").hide() : $(this).prev("label").fadeIn("200")
      }), $(".placeholder input, .placeholder textarea").bind("blur", function() {
        var inputVal = this.value;
        0 == inputVal.length ? $(this).prev("label").show() : $(this).prev("label").hide()
      })
    },
    ajaxPlaceholder: function() {
      var o = $(this);
      o.find(".placeholder input, .placeholder textarea").each(function() {
        var inputVal = this.value;
        inputVal.length > 0 && $(this).prev("label").hide()
      }), o.find(".placeholder input, .placeholder textarea").bind("keydown", function(event) {
        var inputVal = this.value;
        0 == inputVal.length && event.keyCode > 54 && $(this).prev("label").hide()
      }), o.find(".placeholder input, .placeholder textarea").bind("keyup", function() {
        var inputVal = this.value;
        inputVal.length > 0 ? $(this).prev("label").hide() : $(this).prev("label").fadeIn("200")
      }), o.find(".placeholder input, .placeholder textarea").bind("blur", function() {
        var inputVal = this.value;
        0 == inputVal.length ? $(this).prev("label").show() : $(this).prev("label").hide()
      })
    },
    scrollToPos: function(pos, speed) {
      null == speed && (speed = 1e3), $("html, body").stop().animate({
        scrollTop: pos
      }, speed, "easeInOutCubic")
    },
    scrollToId: function(idName, offset) {
      var offsetPx = 0;
      offsetPx = null != offset ? CLIENT.util.isMobile ? 0 : offset : 50;
      var eOffset = $("#" + idName).offset().top - offsetPx,
        scrollPos = eOffset;
      $("html, body").stop().animate({
        scrollTop: scrollPos
      }, 1e3, "easeInOutCubic")
    },
    scrollToObject: function(o, offset) {
      if (0 != o.length) {
        var eOffset = null;
        eOffset = null != offset ? o.offset().top - offset : o.offset().top - 10;
        var scrollPos = eOffset;
        $("html, body").stop().animate({
          scrollTop: scrollPos
        }, 1e3, "easeInOutCubic")
      }
    },
    focusAndScrollTo: function(field) {
      if ($.Log.debug("CLIENT.util.focusAndScrollTo"), "undefined" != typeof field) {
        var o = $(field);
        0 != o.length && ("undefined" != typeof o.attr("id") && CLIENT.util.scrollToId(o.attr("id")), o.focus())
      }
    },
    hideButton: function(id) {
      var el = $("#" + id);
      if (0 != el.length) {
        var btnWidth = (el.attr("class"), el.width()),
          btnHeight = el.height();
        el.attr("disabled", !0);
        var btnHTML = el.html();
        el.data("btnVal", btnHTML), el.html('<span class="loading" style="height: ' + btnHeight + "px; width: " + btnWidth + 'px;" title="loading"/>')
      }
    },
    disableButton: function(id) {
      $("#" + id).attr("disabled", !0)
    },
    enableButton: function(id) {
      var btn = $("#" + id);
      btn.removeAttr("disabled");
      var val = btn.data("btnVal");
      "undefined" != typeof val && btn.html(val)
    },
    limitText: function(el, n) {
      var areaContents = el.val(),
        idName = el.attr("id"),
        contLength = areaContents.length,
        contRemaining = n - contLength,
        label = $("#" + idName + "counter");
      0 > contRemaining && (contRemaining = 0), label.html(contRemaining + " " + CLIENT.Settings.alerts.base.limitTextLabel);
      var remainAlertInt = n - 10;
      if (contLength > remainAlertInt ? label.addClass("error") : label.removeClass("error"), contLength > n) {
        var contTrunc = areaContents.slice(0, n);
        el.val(contTrunc)
      }
    }
  }, CLIENT.mobile = {
    OS: null,
    init: function() {
      if (navigator.userAgent.match(/iPhone/i)) {
        CLIENT.mobile.OS = "iOS";
        var viewportmeta = document.querySelector('meta[name="viewport"]');
        viewportmeta && (viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0", document.body.addEventListener("gesturestart", function() {
          viewportmeta.content = "width=device-width, minimum-scale=1, maximum-scale=2"
        }, !1))
      } else navigator.userAgent.match(/Android/i) && (CLIENT.mobile.OS = "Android")
    },
    menus: function() {
      var contentDiv = $("#page"),
        mobileNav = $("#mobilenav"),
        winHeight = $(window).height(),
        subnavHeight = null,
        getSubnavHeight = function() {
          subnavHeight = winHeight, $("#mobtopnav").height() > subnavHeight && (subnavHeight = $("#mobtopnav").height()), $(".mobsubnav").each(function(i, el) {
            var thisHeight = $(el).height();
            thisHeight > subnavHeight && (subnavHeight = thisHeight)
          }), subnavHeight > winHeight && (subnavHeight += $("#mobsearch").outerHeight())
        },
        resetSubmenu = function() {
          $("#mobtopnav").removeClass("subnavon"), setTimeout(function() {
            $("#mobtopnav li").removeClass("active")
          }, 400)
        },
        toggleMenu = function() {
          contentDiv.toggleClass("mobilemenu"), contentDiv.hasClass("mobilemenu") ? (mobileNav.addClass("active"), null == subnavHeight && getSubnavHeight(), contentDiv.height(subnavHeight)) : ($("#page").removeAttr("style"), resetSubmenu(), setTimeout(function() {
            mobileNav.removeClass("active")
          }, 400))
        };
      $(".mobtopnavitem .mobtoplink").on("click", function() {
        var parentLi = $(this).parents("li");
        return parentLi.hasClass("active") ? (parentLi.removeClass("active"), $("#mobtopnav").removeClass("subnavon"), resetSubmenu()) : (parentLi.addClass("active"), $("#mobtopnav").addClass("subnavon"), $("body").animate({
          scrollTop: 0
        })), !1
      }), $("#navtoggle").on("click", function() {
        return toggleMenu(), !1
      }), $("#page").on("click", function(event) {
        return contentDiv.hasClass("mobilemenu") ? (event.preventDefault(), toggleMenu(), !1) : void 0
      }), $(".backlink").on("click", function() {
        return resetSubmenu(), !1
      })
    }
  },
  function($) {
    $.fn.usphone = function() {
      this.keydown(function(e) {
        var key = e.which || e.keyCode,
          curval = $(this).val(),
          cleanval = digitOnly(curval);
        return cleanval.length >= 10 && !e.ctrlKey && 8 != key && 9 != key && 13 != key && 46 != key ? !1 : e.ctrlKey || key >= 48 && 57 >= key || key >= 96 && 105 >= key || 8 == key || 9 == key || 13 == key || 35 == key || 36 == key || 37 == key || 39 == key || 46 == key || 45 == key ? !0 : !1
      }), this.keyup(function(e) {
        var key = e.which || e.keyCode;
        if ("undefined" == typeof key || key >= 48 && 57 >= key || key >= 96 && 105 >= key) {
          var re = (this.value.length, /^([0-9]{0,3})([0-9]{0,3})([0-9]{0,4})$/),
            curval = $(this).val(),
            cleanval = digitOnly(curval),
            restring = "";
          if (0 == cleanval.length) return;
          cleanval.length > 10 && (cleanval = cleanval.substr(0, 10)), restring = cleanval.length < 3 ? cleanval.replace(re, "($1") : cleanval.length < 6 ? cleanval.replace(re, "($1) $2") : cleanval.replace(re, "($1) $2-$3"), $(this).val(restring)
        }
      });
      var digitPattern = /^\d|\.$/,
        digitOnly = function(str) {
          str += "";
          for (var out = "", i = 0; i < str.length; i++) digitPattern.test(str.charAt(i)) && ("." == str.charAt(i) && -1 != out.indexOf(".") || "-" == str.charAt(i) && 0 != out.length || (out += str.charAt(i)));
          return out
        }
    }
  }(jQuery),
  function($) {
    $.fn.auphone = function() {
      this.keydown(function(e) {
        var key = e.which || e.keyCode,
          curval = $(this).val(),
          cleanval = digitOnly(curval);
        return cleanval.length >= 10 && !e.ctrlKey && 8 != key && 9 != key && 13 != key && 46 != key ? !1 : e.ctrlKey || key >= 48 && 57 >= key || key >= 96 && 105 >= key || 8 == key || 9 == key || 13 == key || 35 == key || 36 == key || 37 == key || 39 == key || 46 == key || 45 == key ? !0 : !1
      }), this.keyup(function(e) {
        var key = e.which || e.keyCode;
        if ("undefined" == typeof key || key >= 48 && 57 >= key || key >= 96 && 105 >= key) {
          var re = (this.value.length, /^([0-9]{0,2})([0-9]{0,4})([0-9]{0,4})$/),
            curval = $(this).val(),
            cleanval = digitOnly(curval),
            restring = "";
          if (0 == cleanval.length) return;
          cleanval.length > 10 && (cleanval = cleanval.substr(0, 10)), restring = cleanval.length < 3 ? cleanval.replace(re, "$1") : cleanval.length < 6 ? cleanval.replace(re, "$1 $2") : cleanval.replace(re, "$1 $2 $3"), $(this).val(restring)
        }
      });
      var digitPattern = /^\d|\.$/,
        digitOnly = function(str) {
          str += "";
          for (var out = "", i = 0; i < str.length; i++) digitPattern.test(str.charAt(i)) && ("." == str.charAt(i) && -1 != out.indexOf(".") || "-" == str.charAt(i) && 0 != out.length || (out += str.charAt(i)));
          return out
        }
    }
  }(jQuery);
var CLIENT = window.CLIENT || {};
CLIENT.User = {
  userView: {
    loggedin: !1
  },
  loginValidator: null,
  pwRecoveryValidator: null,
  accountValidator: null,
  iframelogin: !1,
  SessionCheck: function() {
    return !0
  },
  Authentication: {
    login: function(u, p) {
      return $.ajax({
        url: CLIENT.Settings.url.localeUrl + "/login/",
        async: !1,
        type: "POST",
        dataType: "json",
        data: {
          username: u,
          password: p
        },
        complete: function(o) {
          CLIENT.User.userView = 200 == o.status || "success" == o.statusText ? $.parseJSON(o.responseText) : {
            loggedin: !1,
            error: o.statusText
          }
        }
      }), CLIENT.User.userView
    }
  },
  EditAccount: {
    init: function() {
      $("#billingCountrySelect,#shippingCountrySelect").each(function() {
        var selectedValue = $(this).val();
        $(this).html($("option", $(this)).sort(function(a, b) {
          var repA = CLIENT.util.strReplaceAccents(a.text),
            repB = CLIENT.util.strReplaceAccents(b.text);
          return repA == repB ? 0 : repB > repA ? -1 : 1
        })), $(this).val(selectedValue)
      }), $(":input[id$=PostalCode]").bind("keyup", CLIENT.User.zipCodeLookup), $("#turnOffShipping").bind("click", CLIENT.User.toggleShippingLayer), $("#billingCountrySelect").bind("change", CLIENT.User.updateBillingCountry), $("#shippingCountrySelect").bind("change", CLIENT.User.updateShippingCountry), "en_US" == CLIENT.Settings.locale.code ? ($("#billingPhone").usphone(), $("#billingPhone").trigger("keyup")) : "en_AU" == CLIENT.Settings.locale.code && ($("#billingPhone").auphone(), $("#billingPhone").trigger("keyup")), $(':input[type="checkbox"]', "#newsletterpreferences").bind("click", CLIENT.User.updateNewsletterPreferences), $("#radio_nosignup", "#newsletterpreferences").bind("click", CLIENT.User.updateNewsletterPreferences);
      var scrollto = $.getUrlVar("focus");
      if ("undefined" != typeof scrollto) {
        var selector = "";
        switch (scrollto) {
          case "shipping":
            selector = "#turnOffShipping", $("#turnOffShipping").is(":checked") && $("#turnOnShipping").trigger("click");
            break;
          case "billing":
            selector = "#billingFirstName";
            break;
          case "account":
            selector = "#useremail";
            break;
          case "preferences":
            selector = "#radio_signup"
        }
        selector.length && CLIENT.util.focusAndScrollTo(selector)
      } else {
        var firstError = $("label.error:visible:first").prev("input");
        0 != firstError.length && CLIENT.util.scrollToObject(firstError)
      }
    }
  },
  CreateAccount: {
    init: function() {
      $("#useremail").addClass("required"), $("#userPassword").addClass("required"), $("#confirmUserPassword").addClass("required"), $(":input[id$=PostalCode]").bind("keyup", CLIENT.User.zipCodeLookup), $("#turnOffShipping").bind("click", CLIENT.User.toggleShippingLayer), $("#billingCountrySelect").bind("change", CLIENT.User.updateBillingCountry), $("#shippingCountrySelect").bind("change", CLIENT.User.updateShippingCountry), "en_US" == CLIENT.Settings.locale.code ? ($("#billingPhone").usphone(), $("#billingPhone").trigger("keyup")) : "en_AU" == CLIENT.Settings.locale.code && ($("#billingPhone").auphone(), $("#billingPhone").trigger("keyup")), $(':input[type="checkbox"]', "#newsletterpreferences").bind("click", CLIENT.User.updateNewsletterPreferences), $("#radio_nosignup", "#newsletterpreferences").bind("click", CLIENT.User.updateNewsletterPreferences)
    }
  },
  updateNewsletterPreferences: function() {
    $(this).is("#radio_nosignup") ? ($(':input[type="checkbox"]', "#newsletterpreferences").removeAttr("checked"), $(':input[type="hidden"][data-parent^="checkbox"]', "#newsletterpreferences").val("FALSE"), $("#radio_nosignup", "#newsletterpreferences").attr("checked", "checked")) : $(':input[type="checkbox"]', "#newsletterpreferences").is(":checked") && $("#radio_signup", "#newsletterpreferences").attr("checked", "checked"), "checkbox" == $(this).attr("type") && $(':input[type="hidden"][data-parent="' + $(this).attr("id") + '"]', "#newsletterpreferences").val($(this).is(":checked") ? "TRUE" : "FALSE")
  },
  zipCodeLookup: function() {
    if ($.Log.debug("CLIENT.User.zipCodeLookup"), "en_US" == CLIENT.Settings.locale.code) {
      var o = $(this),
        val = o.val(),
        results = null;
      if ("undefined" != typeof val && 5 == val.length) {
        var cacheValue = CLIENT.Cache.zipCodeLookup[val];
        "undefined" != typeof cacheValue && (results = cacheValue), null == results ? CLIENT.Cache.lastZipCode == val ? $.Log.debug("zipcode Looks the same to me, no action required") : (CLIENT.Cache.lastZipCode = val, $.Log.debug("Looking Up Results for: " + val, null, "DEBUG"), CLIENT.User.zipCodeAjaxCall(val, o)) : ($.Log.debug(val + " found in cache."), CLIENT.User.zipCodeUiUpdate(results, o))
      }
    }
  },
  zipCodeAjaxCall: function(zip, o) {
    if ($.Log.debug("CLIENT.User.zipCodeAjaxCall"), -1 != document.location.href.indexOf("https")) var ajaxURL = CLIENT.Settings.url.secureHost + "/postalcode-search/";
    else var ajaxURL = window.location.protocol + "//" + window.location.host + CLIENT.Settings.url.localeUrl + "/postalcode-search/";
    $.ajax({
      url: ajaxURL,
      type: "POST",
      dataType: "json",
      data: {
        postalCode: zip
      },
      complete: function(response) {
        if (200 == response.status || "success" == response.statusText) {
          var data = $.parseJSON(response.responseText);
          CLIENT.Cache.zipCodeLookup[zip] = data, CLIENT.User.zipCodeUiUpdate(data, o)
        } else $.Log.debug("An Error Occurred on the call: " + response.statusText, null, "DEBUG")
      }
    })
  },
  zipCodeUiUpdate: function(data, o) {
    if ($.Log.debug("CLIENT.User.zipCodeUiUpdate"), "object" != typeof data) return void $.Log.debug("data sent in is not an object");
    var inputName = o.attr("name"),
      city = data.city,
      state = data.state,
      country = data.country,
      errors = {};
    if (errors[inputName] = CLIENT.Settings.alerts.checkout.zipCodeNotValid, "undefined" == typeof city || "undefined" == typeof state || "undefined" == typeof country) return $.Log.debug("missing city, state or country from data object"), o.addClass("invalidPostalCode"), void CLIENT.User.throwValidatorError(errors);
    var canUpdate = !1,
      selectName = o.attr("id").replace("PostalCode", "CountrySelect"),
      hiddenName = o.attr("id").replace("PostalCode", "Country"),
      countrySelect = $("#" + selectName),
      hiddenCountry = $("#" + hiddenName);
    if (0 == countrySelect.length) $.Log.debug("No CountrySelect found.. comparing to hidden _country_code input value"), hiddenCountry.val() == country ? canUpdate = !0 : $.Log.debug("Countries do not match: current: " + hiddenCountry.val() + " requested: " + country, null, "DEBUG");
    else {
      $.Log.debug("CountrySelect found.. checking to see if this country is an option in the select");
      var option = countrySelect.find("option[value='" + country + "']");
      0 != option.length && (canUpdate = !0)
    }
    if (canUpdate) {
      $.Log.debug("Country codes matched...Updating UI"), o.removeClass("invalidPostalCode");
      var cityName = o.attr("id").replace("PostalCode", "City"),
        stateName = o.attr("id").replace("PostalCode", "State");
      $("#" + cityName).val(city).trigger("keyup"), $("#" + stateName).val(state).trigger("keyup"), hiddenCountry.val(country), 0 != countrySelect.length && countrySelect.val(country);
      var type = o.attr("id").replace("PostalCode", ""),
        cityInputLayer = $("#" + type + "CityInputDiv"),
        cityNoticeLayer = $("#" + type + "CityNoticeDiv"),
        stateCountryLayer = $("#" + type + "StateCountry");
      o.removeClass("invalidPostalCode").removeClass("error"), cityInputLayer.show(), cityNoticeLayer.hide(), stateCountryLayer.show()
    } else o.addClass("invalidPostalCode"), CLIENT.User.throwValidatorError(errors)
  },
  throwValidatorError: function(errors) {
    if ($.Log.debug("CLIENT.User.throwValidatorError"), null != errors && "object" == typeof errors) {
      var validator = CLIENT.User.accountValidator || CLIENT.User.validateUserAccount();
      validator.showErrors(errors)
    }
  },
  updateBillingCountry: function() {
    CLIENT.Base.countrySetStates($(this)), $("#billingCountry").val($(this).val())
  },
  updateShippingCountry: function() {
    CLIENT.Base.countrySetStates($(this)), $("#shippingCountry").val($(this).val())
  },
  toggleShippingLayer: function() {
    var o = $(this),
      val = o.is(":checked"),
      layer = $("#shippingAddress");
    0 == val ? (CLIENT.User.resetShippingCityDisplay(), layer.show(), layer.find(".form-control").prop("disabled", !1)) : (layer.hide(), layer.find(".form-control").prop("disabled", !0), CLIENT.User.resetShippingErrors())
  },
  resetShippingCityDisplay: function() {
    return "en_US" != CLIENT.Settings.locale.code ? !1 : ($("#shippingCityInputDiv").hide(), $("#shippingCityNoticeDiv").show(), void $("#shippingStateCountry").hide())
  },
  resetShippingErrors: function() {
    var wrapper = $("#shippingAddress"),
      fields = wrapper.find(":input[type!='hidden']").filter(function() {
        return "undefined" == typeof $(this).attr("readonly")
      });
    fields.each(function() {
      $(this).removeClass("error").removeClass("invalidPostalCode")
    }), wrapper.find(".error-message").remove(), wrapper.find(".form-control.invalid").removeClass("invalid"), wrapper.find(".form-group.has-error").removeClass("has-error")
  },
  clearShippingFields: function() {
    var wrapper = $("#shippingAddress"),
      fields = wrapper.find(":input[type!='hidden']").filter(function() {
        return "undefined" == typeof $(this).attr("readonly")
      });
    fields.each(function() {
      var o = $(this),
        type = o[0].nodeName.toLowerCase();
      "select" === type ? o[0].selectedIndex = 0 : "input" === type && o.val(""), o.trigger("keyup")
    })
  },
  favorites: {
    init: function(device) {
      $(".wish-image img").each(function() {
        $(this).attr("src", $(this).data(device))
      })
    }
  }
};
var CLIENT = window.CLIENT || {};
CLIENT.Newsletter = {
    Signup: {
      FooterSubmit: function() {
        var container = $(".nix-newsletter-container"),
          form = $(".nix-newsletter", container),
          emailAddress = ($("button", form), $("#emailInput", form)),
          dataToSubmit = $(":input", form).serialize();
        return CLIENT.Base.isValidEmail(emailAddress.val()) ? void $.post(form.attr("action"), dataToSubmit, function() {
          var form2 = $("#emailsubmitform");
          $("#theEmail", form2).val(emailAddress.val()), form2.submit()
        }) : (alert("Invalid email address, please correct"), emailAddress.focus(), !1)
      },
      popDownSubmit: function() {
        var container = $(".glpemailsignupform"),
          form = $("form", container),
          button = $("button", form),
          emailAddress = $("#glpemailinput", form),
          dataToSubmit = $(":input", form).serialize();
        return CLIENT.Base.isValidEmail(emailAddress.val()) ? ($.ajax({
          url: form.attr("action"),
          type: "POST",
          dataType: "json",
          data: dataToSubmit,
          complete: function(response) {
            if (200 == response.status || "success" == response.statusText) {
              var data = $.parseJSON(response.responseText);
              data.success ? (CLIENT.Newsletter.Signup.storeCookie("email"), $("#glpemail").fadeOut(500), setTimeout(function() {
                $(".glpemailsignupcontent").find("p").html(button.attr("data-done")), container.html(""), $("#inputemail").val(emailAddress.val()), $("#glpemail").fadeIn(500)
              }, 500)) : $.Log.debug("An Error Occurred on the call: " + response.statusText, null, "DEBUG")
            } else $.Log.debug("An Error Occurred on the call: " + response.statusText, null, "DEBUG")
          }
        }), !1) : (alert("Invalid email address, please correct"), emailAddress.focus(), !1)
      },
      storeCookie: function(val) {
        var emailBar = $("#glpemail");
        if (0 != emailBar.length) {
          {
            var cname = $.trim(emailBar.attr("data-cname")),
              cpath = $.trim(emailBar.attr("data-cpath")),
              setPath = "/";
            $.cookie(cname)
          }
          0 != cpath.length && (setPath = cpath), $.cookie(cname, val, {
            expires: 180,
            domain: "." + window.location.host,
            path: setPath
          })
        }
      },
      popDownContinue: function() {
        return $("#signupcontinueform").submit(), !1
      },
      Landing1Submit: function() {
        var form = $("form", "#page1"),
          emailAddress = $("#emailsignininput", form),
          dataToSubmit = $(":input", form).serialize(),
          button = $("#emailsigninbutton1");
        form = $(form), dataToSubmit = $(":input", form).serialize(), button.addClass("loading"), $.post($("#emailsignup1").attr("action"), dataToSubmit, function() {
          return $("#page1").hide(), $("#page2").show(), $("input[name='zin_value_EMAIL2-1']").val(emailAddress.val()), !1
        }).fail(function() {
          $("#page1").show(), $("#page2").hide(), button.removeClass("loading")
        })
      },
      Landing2Submit: function() {
        var form = $("#emailsignup2"),
          button = $("#emailsigninbutton2"),
          dataToSubmit = $(":input", form).serialize();
        button.addClass("loading"), $.post(form.attr("action"), dataToSubmit, function() {
          $("#page2").hide(), $("#page3").show()
        }).fail(function() {
          $("#page2").hide(), $("#page3").show(), button.removeClass("loading")
        })
      },
      CheckoutSubmit: function(form) {
        var zinEmail = $(':input[name="zin_value_EMAIL-1"]', form),
          zinFullname = $(':input[name="zin_value_FULLNAME-1"]', form),
          zinZipcode = $(':input[name="zin_value_ZIPCODE-1"]', form),
          signupCheck = $(':input[name="email_signup_confirm"]', form),
          srcEmail = $(':input[name="email"]', form).val(),
          srcFirstname = $(':input[name="first_name"]', form).val(),
          srcLarstname = $(':input[name="last_name"]', form).val(),
          srcZipcode = $(':input[name="zo_bill_postal_code"]', form).val();
        signupCheck.is(":checked") ? ("" !== srcEmail && zinEmail.val(srcEmail), ("" !== srcFirstname || "" !== srcLarstname) && zinFullname.val(srcFirstname + " " + srcLarstname), "" !== srcZipcode && zinZipcode.val(srcZipcode)) : $(':input[name^="zin_"]', form).remove()
      },
      EditAccountSubmit: function() {
        var form = $('form[id$="accountform"]'),
          zinEmail = $(':input[name="zin_value_EMAIL-1"]', form),
          zinFullname = $(':input[name="zin_value_FULLNAME-1"]', form),
          zinZipcode = $(':input[name="zin_value_ZIPCODE-1"]', form),
          zinGender = $(':input[name="zin_value_GENDER-1"]', form),
          zinSubscribed = $(':input[name="zin_value_SUBSCRIBED-1"]', form),
          srcEmail = $(':input[name="NIXON_USER.USERID"]', form).val(),
          srcFirstname = $(':input[name="NIXON_USER_ADDRESS_BILLING.FIRST_NAME"]', form).val(),
          srcLastname = $(':input[name="NIXON_USER_ADDRESS_BILLING.LAST_NAME"]', form).val(),
          srcZipcode = $(':input[name="NIXON_USER_ADDRESS_BILLING.POSTAL_CODE"]', form).val(),
          srcMaleGender = $("#checkboxMale", form),
          srcFemaleGender = $("#checkboxFemale", form);
        "" !== srcEmail && zinEmail.val(srcEmail), ("" !== srcFirstname || "" !== srcLastname) && zinFullname.val(srcFirstname + " " + srcLastname), "" !== srcZipcode && zinZipcode.val(srcZipcode), srcMaleGender.is(":checked") && srcFemaleGender.is(":checked") ? zinGender.val("BOTH") : (zinGender.val(""), srcMaleGender.is(":checked") && zinGender.val("MALE"), srcFemaleGender.is(":checked") && zinGender.val("FEMALE")), $("#checkboxSurf", form).is(":checked") && $(':input[name="zin_value_SURF-1"]', form).val("TRUE"), $("#checkboxSkate", form).is(":checked") && $(':input[name="zin_value_SKATE-1"]', form).val("TRUE"), $("#checkboxSnow", form).is(":checked") && $(':input[name="zin_value_SNOW-1"]', form).val("TRUE"), $("#checkboxArts", form).is(":checked") && $(':input[name="zin_value_ARTS-1"]', form).val("TRUE"), zinSubscribed.val($("#radio_signup", form).is(":checked") ? "TRUE" : "FALSE")
      },
      CreateAccountSubmit: function() {
        var form = $("#editaccountform"),
          zinEmail = $(':input[name="zin_value_EMAIL-1"]', form),
          zinFullname = $(':input[name="zin_value_FULLNAME-1"]', form),
          zinZipcode = $(':input[name="zin_value_ZIPCODE-1"]', form),
          zinGender = $(':input[name="zin_value_GENDER-1"]', form),
          srcEmail = $(':input[name="NIXON_USER.USERID"]', form).val(),
          srcFirstname = $(':input[name="NIXON_USER.FIRST_NAME"]', form).val(),
          srcLastname = $(':input[name="NIXON_USER.LAST_NAME"]', form).val(),
          srcZipcode = $(':input[name="NIXON_USER_ADDRESS_BILLING.POSTAL_CODE"]', form).val(),
          srcMaleGender = $("#checkboxMale", form),
          srcFemaleGender = $("#checkboxFemale", form);
        "" !== srcEmail && zinEmail.val(srcEmail), ("" !== srcFirstname || "" !== srcLastname) && zinFullname.val(srcFirstname + " " + srcLastname), "" !== srcZipcode && zinZipcode.val(srcZipcode), srcMaleGender.is(":checked") && srcFemaleGender.is(":checked") ? zinGender.val("BOTH") : (zinGender.val(""), srcMaleGender.is(":checked") && zinGender.val("MALE"), srcFemaleGender.is(":checked") && zinGender.val("FEMALE")), $("#checkboxSurf", form).is(":checked") && $(':input[name="zin_value_SURF-1"]', form).val("TRUE"), $("#checkboxSkate", form).is(":checked") && $(':input[name="zin_value_SKATE-1"]', form).val("TRUE"), $("#checkboxSnow", form).is(":checked") && $(':input[name="zin_value_SNOW-1"]', form).val("TRUE"), $("#checkboxArts", form).is(":checked") && $(':input[name="zin_value_ARTS-1"]', form).val("TRUE");
        var zinSubscribed = $(':input[name="zin_value_SUBSCRIBED-1"]', form);
        zinSubscribed.val($("#joinnewsletter", form).is(":checked") ? "TRUE" : "FALSE")
      },
      captureZipCodeKeyPress: function(e) {
        if ("en_US" == CLIENT.Settings.locale.code) {
          var key = e.which || e.keyCode;
          if ("undefined" == typeof key || key >= 48 && 57 >= key || key >= 96 && 105 >= key) {
            var val = CLIENT.Base.digitOnly($(this).val());
            $(this).val(val), 5 == $(this).val().length
          }
        } else "en_CA" == CLIENT.Settings.locale.code && $("#cartzip").val().length >= 6
      },
      limitZipCodeKeyPress: function(e) {
        if ("en_US" == CLIENT.Settings.locale.code) {
          var key = e.which || e.keyCode,
            curval = $(this).val(),
            selectedText = CLIENT.Base.getSelectedText();
          return 0 != selectedText.length && -1 != curval.indexOf(selectedText) && (curval = curval.replace(selectedText, ""), $(this).val(curval)), curval.length >= 5 && !e.ctrlKey && 8 != key && 9 != key && 13 != key && 46 != key ? !1 : e.ctrlKey || key >= 48 && 57 >= key || key >= 96 && 105 >= key || 8 == key || 9 == key || 13 == key || 35 == key || 36 == key || 37 == key || 39 == key || 46 == key || 45 == key ? !0 : !1
        }
      }
    }
  }, CLIENT.Social = {
    init: function() {},
    proto: "https:" == document.location.protocol ? "https:" : "http:",
    tools: {
      convertLinks: function(input) {
        if (void 0 === input || input.length < 1) return input;
        var answer = "",
          inputAsArray = input.split(" "),
          i = 0;
        for (i = 0; i < inputAsArray.length; i++) answer = -1 !== inputAsArray[i].indexOf("http") ? answer + ' <a href="' + inputAsArray[i] + '" target="_blank">' + inputAsArray[i] + "</a>" : answer + " " + inputAsArray[i];
        return answer
      },
      convertHashes: function(input) {
        if (void 0 === input || input.length < 1) return input;
        var answer = "",
          inputAsArray = input.split(" "),
          i = 0;
        for (i = 0; i < inputAsArray.length; i++) answer = -1 !== inputAsArray[i].indexOf("#") ? answer + ' <a href="http://www.twitter.com/search?q=' + inputAsArray[i].replace("#", "%23") + '&src=hash" target="_blank">' + inputAsArray[i] + "</a>" : answer + " " + inputAsArray[i];
        return answer
      },
      convertAts: function(input) {
        if (void 0 === input || input.length < 1) return input;
        var answer = "",
          inputAsArray = input.split(" "),
          i = 0,
          userName = null;
        for (i = 0; i < inputAsArray.length; i++) - 1 !== inputAsArray[i].indexOf("@") ? (userName = inputAsArray[i].replace("@", ""), userName = userName.replace(":", ""), answer = answer + ' <a href="http://www.twitter.com/' + userName + '" target="_blank">' + inputAsArray[i] + "</a>") : answer = answer + " " + inputAsArray[i];
        return answer
      },
      simplifyDatetime: function(input) {
        if (void 0 === input || input.length < 1) return input;
        var answer = "",
          today = new Date,
          dateObj = new Date(input),
          hours = "",
          minutes = "";
        if (isNaN(dateObj.getDay())) {
          var year = today.getUTCFullYear(),
            output = "";
          input.indexOf(year) == input.length - 4 && (output = input.substring(0, 10), output = output + " " + year, output = output + " " + input.substring(11, 25), dateObj = new Date(output))
        }
        switch (dateObj.getDay()) {
          case 0:
            answer = "Sunday at";
            break;
          case 1:
            answer = "Monday at";
            break;
          case 2:
            answer = "Tuesday at";
            break;
          case 3:
            answer = "Wednesday at";
            break;
          case 4:
            answer = "Thursday at";
            break;
          case 5:
            answer = "Friday at";
            break;
          case 6:
            answer = "Saturday at"
        }
        "" !== answer && (answer += " "), hours = dateObj.getHours(), minutes = dateObj.getMinutes();
        var amPm = "am";
        return hours > 12 && (hours -= 12, amPm = "pm"), 10 > minutes && (minutes = "0" + minutes), answer = answer + hours + ":" + minutes + " " + amPm
      }
    },
    loadSocialWidget: function(d, s, id, source) {
      $(window).load(function() {
        if (!CLIENT.util.isMobile) {
          var js, fjs = d.getElementsByTagName(s)[0];
          d.getElementById(id) || (js = d.createElement(s), js.id = id, js.src = source, fjs.parentNode.insertBefore(js, fjs))
        }
      })
    },
    refreshPinterestButton: function(url, media, description) {
      var href;
      url = escape(url), media = escape(media), description = escape(description), href = "http://pinterest.com/pin/create/button/?url=" + url + "&media=" + media + "&description=" + description, $("#pinterest").attr("href", href)
    },
    refreshFacebookButton: function(url) {
      var href;
      url = escape(url), href = "//www.facebook.com/sharer/sharer.php?u=" + url, $("#facebook").attr("href", href)
    },
    refreshTwitterButton: function(url, media, description) {
      var href;
      url = escape(url), description = escape(description), href = "//twitter.com/share?url=" + url + "&text=" + description, $("#twitter").attr("href", href)
    },
    desktop: {
      bindAll: function() {
        $("#nix-social-pdp .nix-social-icon-link").on("click", function() {
          return window.open($(this).attr("href"), $(this).attr("id") + "-signin", "height=300,width=665"), !1
        })
      },
      unbindAll: function() {
        $(".nix-social-icon-link").off("click")
      }
    },
    Twitter: {
      response: {},
      populateWidget: function(element) {
        var user = $(element).attr("data-screen-name"),
          count = $(element).attr("data-count"),
          i = ($(element).attr("data-follow"), 0),
          html = "";
        CLIENT.Social.Twitter.fetchTweets(user, count, function() {
          var htmlText = "",
            datetime = "",
            followCount = 0,
            lastItem = "",
            rawdate = "";
          for (i = 0; i < CLIENT.Social.Twitter.response.count; i++) htmlText = CLIENT.Social.Twitter.response[i].text, datetime = CLIENT.Social.tools.simplifyDatetime(CLIENT.Social.Twitter.response[i].datetime), rawdate = CLIENT.Social.Twitter.response[i].datetime, followCount = CLIENT.Social.Twitter.response[i].followerCount, lastItem = CLIENT.Social.Twitter.response.count == i + 1 ? " last" : "", html = '<li class="tweet ' + lastItem + '" style="background: url(\'' + CLIENT.Social.Twitter.response[i].userImg + "') no-repeat 0 0;\">", html = html + '<span class="content">' + htmlText + "</span>", html = html + '<span class="timestamp convertTimestamp">' + datetime + "</span>", html += "</li>", $(element).append(html)
        })
      },
      fetchTweets: function(screenName, count, whenReadyAction, downLoadCt) {
        (void 0 === downLoadCt || null === downLoadCt) && (downLoadCt = 35), void 0 === count && (count = 5), (void 0 === screenName || null === screenName) && (screenName = "Nixon_Now");
        var url = CLIENT.Settings.url.localeUrl + "/twitter/",
          data = {
            OPTION: "CALL_TWITTER",
            method: "Timelines|User",
            parametersToRead: "include_rts,count,exclude_replies,screen_name",
            include_rts: "1",
            count: downLoadCt,
            exclude_replies: "0",
            screen_name: screenName
          };
        $.getJSON(url, data, function(data, i) {
          CLIENT.Social.Twitter.response.count = 0;
          var showCt = count;
          data.length < count && (showCt = data.length);
          var isReply = !1,
            tweetText = null;
          for (i = 0; showCt > i; i++) isReply = null != data[i].in_reply_to_screen_name ? !0 : !1, void 0 != data[i].retweeted_status ? isReply = !0 : tweetText = data[i].text, null != tweetText && (tweetText = CLIENT.Social.tools.convertLinks(tweetText), tweetText = CLIENT.Social.tools.convertHashes(tweetText), tweetText = CLIENT.Social.tools.convertAts(tweetText)), 0 == isReply ? (CLIENT.Social.Twitter.response[CLIENT.Social.Twitter.response.count] = {
            followerCount: data[i].user.followers_count,
            datetime: data[i].created_at,
            text: tweetText,
            userImg: "https:" === CLIENT.Social.proto ? data[i].user.profile_image_url_https : data[i].user.profile_image_url
          }, CLIENT.Social.Twitter.response.count++) : downLoadCt > showCt && showCt++;
          jQuery.isFunction(whenReadyAction) && whenReadyAction()
        })
      }
    }
  },
  function($) {
    var scrollbarNumber = 0,
      xScrollDistance = 0,
      yScrollDistance = 0,
      scrollIntervalTime = 10,
      scrollbarDistance = 0,
      isTouch = "ontouchstart" in window || navigator.msMaxTouchPoints > 0,
      supportsOrientationChange = "onorientationchange" in window,
      isWebkit = !1,
      has3DTransform = !1,
      isIe7 = !1,
      isIe8 = !1,
      isIe9 = !1,
      isIe = !1,
      isGecko = !1,
      grabOutCursor = "pointer",
      grabInCursor = "pointer",
      onChangeEventLastFired = new Array,
      autoSlideTimeouts = new Array,
      iosSliders = new Array,
      iosSliderSettings = new Array,
      isEventCleared = new Array,
      slideTimeouts = new Array,
      activeChildOffsets = new Array,
      activeChildInfOffsets = new Array,
      infiniteSliderOffset = new Array,
      sliderMin = new Array,
      sliderMax = new Array,
      sliderAbsMax = new Array,
      touchLocks = new Array,
      helpers = {
        showScrollbar: function(settings, scrollbarClass) {
          settings.scrollbarHide && $("." + scrollbarClass).css({
            opacity: settings.scrollbarOpacity,
            filter: "alpha(opacity:" + 100 * settings.scrollbarOpacity + ")"
          })
        },
        hideScrollbar: function(settings, scrollTimeouts, j, distanceOffsetArray, scrollbarClass, scrollbarWidth, stageWidth, scrollMargin, scrollBorder, sliderNumber) {
          if (settings.scrollbar && settings.scrollbarHide)
            for (var i = j; j + 25 > i; i++) scrollTimeouts[scrollTimeouts.length] = helpers.hideScrollbarIntervalTimer(scrollIntervalTime * i, distanceOffsetArray[j], (j + 24 - i) / 24, scrollbarClass, scrollbarWidth, stageWidth, scrollMargin, scrollBorder, sliderNumber, settings)
        },
        hideScrollbarInterval: function(newOffset, opacity, scrollbarClass, scrollbarWidth, stageWidth, scrollMargin, scrollBorder, sliderNumber, settings) {
          scrollbarDistance = -1 * newOffset / sliderMax[sliderNumber] * (stageWidth - scrollMargin - scrollBorder - scrollbarWidth), helpers.setSliderOffset("." + scrollbarClass, scrollbarDistance), $("." + scrollbarClass).css({
            opacity: settings.scrollbarOpacity * opacity,
            filter: "alpha(opacity:" + settings.scrollbarOpacity * opacity * 100 + ")"
          })
        },
        slowScrollHorizontalInterval: function(node, slideNodes, newOffset, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, activeChildOffset, originalOffsets, childrenOffsets, infiniteSliderWidth, numberOfSlides, slideNodeOuterWidths, sliderNumber, centeredSlideOffset, endOffset, settings) {
          if (settings.infiniteSlider) {
            if (newOffset <= -1 * sliderMax[sliderNumber] || newOffset <= -1 * sliderAbsMax[sliderNumber]) {
              var scrollerWidth = $(node).width();
              if (newOffset <= -1 * sliderAbsMax[sliderNumber]) {
                var sum = -1 * originalOffsets[0];
                $(slideNodes).each(function(i) {
                  helpers.setSliderOffset($(slideNodes)[i], sum + centeredSlideOffset), i < childrenOffsets.length && (childrenOffsets[i] = -1 * sum), sum += slideNodeOuterWidths[i]
                }), newOffset += -1 * childrenOffsets[0], sliderMin[sliderNumber] = -1 * childrenOffsets[0] + centeredSlideOffset, sliderMax[sliderNumber] = sliderMin[sliderNumber] + scrollerWidth - stageWidth, infiniteSliderOffset[sliderNumber] = 0
              }
              for (; newOffset <= -1 * sliderMax[sliderNumber];) {
                var lowSlideNumber = 0,
                  lowSlideOffset = helpers.getSliderOffset($(slideNodes[0]), "x");
                $(slideNodes).each(function(i) {
                  helpers.getSliderOffset(this, "x") < lowSlideOffset && (lowSlideOffset = helpers.getSliderOffset(this, "x"), lowSlideNumber = i)
                });
                var tempOffset = sliderMin[sliderNumber] + scrollerWidth;
                helpers.setSliderOffset($(slideNodes)[lowSlideNumber], tempOffset), sliderMin[sliderNumber] = -1 * childrenOffsets[1] + centeredSlideOffset, sliderMax[sliderNumber] = sliderMin[sliderNumber] + scrollerWidth - stageWidth, childrenOffsets.splice(0, 1), childrenOffsets.splice(childrenOffsets.length, 0, -1 * tempOffset + centeredSlideOffset), infiniteSliderOffset[sliderNumber]++
              }
            }
            if (newOffset >= -1 * sliderMin[sliderNumber] || newOffset >= 0) {
              var scrollerWidth = $(node).width();
              if (newOffset > 0) {
                var sum = -1 * originalOffsets[0];
                for ($(slideNodes).each(function(i) {
                    helpers.setSliderOffset($(slideNodes)[i], sum + centeredSlideOffset), i < childrenOffsets.length && (childrenOffsets[i] = -1 * sum), sum += slideNodeOuterWidths[i]
                  }), newOffset -= -1 * childrenOffsets[0], sliderMin[sliderNumber] = -1 * childrenOffsets[0] + centeredSlideOffset, sliderMax[sliderNumber] = sliderMin[sliderNumber] + scrollerWidth - stageWidth, infiniteSliderOffset[sliderNumber] = numberOfSlides; - 1 * childrenOffsets[0] - scrollerWidth + centeredSlideOffset > 0;) {
                  var highSlideNumber = 0,
                    highSlideOffset = helpers.getSliderOffset($(slideNodes[0]), "x");
                  $(slideNodes).each(function(i) {
                    helpers.getSliderOffset(this, "x") > highSlideOffset && (highSlideOffset = helpers.getSliderOffset(this, "x"), highSlideNumber = i)
                  });
                  var tempOffset = sliderMin[sliderNumber] - slideNodeOuterWidths[highSlideNumber];
                  helpers.setSliderOffset($(slideNodes)[highSlideNumber], tempOffset), childrenOffsets.splice(0, 0, -1 * tempOffset + centeredSlideOffset), childrenOffsets.splice(childrenOffsets.length - 1, 1), sliderMin[sliderNumber] = -1 * childrenOffsets[0] + centeredSlideOffset, sliderMax[sliderNumber] = sliderMin[sliderNumber] + scrollerWidth - stageWidth, infiniteSliderOffset[sliderNumber]--, activeChildOffsets[sliderNumber]++
                }
              }
              for (; newOffset > -1 * sliderMin[sliderNumber];) {
                var highSlideNumber = 0,
                  highSlideOffset = helpers.getSliderOffset($(slideNodes[0]), "x");
                $(slideNodes).each(function(i) {
                  helpers.getSliderOffset(this, "x") > highSlideOffset && (highSlideOffset = helpers.getSliderOffset(this, "x"), highSlideNumber = i)
                });
                var tempOffset = sliderMin[sliderNumber] - slideNodeOuterWidths[highSlideNumber];
                helpers.setSliderOffset($(slideNodes)[highSlideNumber], tempOffset), childrenOffsets.splice(0, 0, -1 * tempOffset + centeredSlideOffset), childrenOffsets.splice(childrenOffsets.length - 1, 1), sliderMin[sliderNumber] = -1 * childrenOffsets[0] + centeredSlideOffset, sliderMax[sliderNumber] = sliderMin[sliderNumber] + scrollerWidth - stageWidth, infiniteSliderOffset[sliderNumber]--
              }
            }
          }
          var slideChanged = !1,
            newChildOffset = helpers.calcActiveOffset(settings, newOffset, childrenOffsets, stageWidth, infiniteSliderOffset[sliderNumber], numberOfSlides, activeChildOffset, sliderNumber),
            tempOffset = (newChildOffset + infiniteSliderOffset[sliderNumber] + numberOfSlides) % numberOfSlides;
          if (settings.infiniteSlider ? tempOffset != activeChildInfOffsets[sliderNumber] && (slideChanged = !0) : newChildOffset != activeChildOffsets[sliderNumber] && (slideChanged = !0), slideChanged) {
            var args = new helpers.args("change", settings, node, $(node).children(":eq(" + tempOffset + ")"), tempOffset, endOffset);
            $(node).parent().data("args", args), "" != settings.onSlideChange && settings.onSlideChange(args)
          }
          if (activeChildOffsets[sliderNumber] = newChildOffset, activeChildInfOffsets[sliderNumber] = tempOffset, newOffset = Math.floor(newOffset), sliderNumber != $(node).parent().data("args").data.sliderNumber) return !0;
          if (helpers.setSliderOffset(node, newOffset), settings.scrollbar) {
            scrollbarDistance = Math.floor((-1 * newOffset - sliderMin[sliderNumber] + centeredSlideOffset) / (sliderMax[sliderNumber] - sliderMin[sliderNumber] + centeredSlideOffset) * (scrollbarStageWidth - scrollMargin - scrollbarWidth));
            var width = scrollbarWidth - scrollBorder;
            newOffset >= -1 * sliderMin[sliderNumber] + centeredSlideOffset ? (width = scrollbarWidth - scrollBorder - -1 * scrollbarDistance, helpers.setSliderOffset($("." + scrollbarClass), 0), $("." + scrollbarClass).css({
              width: width + "px"
            })) : newOffset <= -1 * sliderMax[sliderNumber] + 1 ? (width = scrollbarStageWidth - scrollMargin - scrollBorder - scrollbarDistance, helpers.setSliderOffset($("." + scrollbarClass), scrollbarDistance), $("." + scrollbarClass).css({
              width: width + "px"
            })) : (helpers.setSliderOffset($("." + scrollbarClass), scrollbarDistance), $("." + scrollbarClass).css({
              width: width + "px"
            }))
          }
        },
        slowScrollHorizontal: function(node, slideNodes, scrollTimeouts, scrollbarClass, xScrollDistance, yScrollDistance, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, currentEventNode, snapOverride, centeredSlideOffset, settings) {
          var nodeOffset = helpers.getSliderOffset(node, "x"),
            distanceOffsetArray = new Array,
            xScrollDistanceArray = new Array,
            snapDirection = 0,
            maxSlideVelocity = 25 / 1024 * stageWidth;
          frictionCoefficient = settings.frictionCoefficient, elasticFrictionCoefficient = settings.elasticFrictionCoefficient, snapFrictionCoefficient = settings.snapFrictionCoefficient, xScrollDistance > settings.snapVelocityThreshold && settings.snapToChildren && !snapOverride ? snapDirection = 1 : xScrollDistance < -1 * settings.snapVelocityThreshold && settings.snapToChildren && !snapOverride && (snapDirection = -1), -1 * maxSlideVelocity > xScrollDistance ? xScrollDistance = -1 * maxSlideVelocity : xScrollDistance > maxSlideVelocity && (xScrollDistance = maxSlideVelocity), $(node)[0] !== $(currentEventNode)[0] && (snapDirection = -1 * snapDirection, xScrollDistance = -2 * xScrollDistance);
          var tempInfiniteSliderOffset = infiniteSliderOffset[sliderNumber];
          if (settings.infiniteSlider) var tempSliderMin = sliderMin[sliderNumber],
            tempSliderMax = sliderMax[sliderNumber];
          for (var tempChildrenOffsets = new Array, tempSlideNodeOffsets = new Array, i = 0; i < childrenOffsets.length; i++) tempChildrenOffsets[i] = childrenOffsets[i], i < slideNodes.length && (tempSlideNodeOffsets[i] = helpers.getSliderOffset($(slideNodes[i]), "x"));
          for (; xScrollDistance > 1 || -1 > xScrollDistance;) {
            if (xScrollDistance *= frictionCoefficient, nodeOffset += xScrollDistance, (nodeOffset > -1 * sliderMin[sliderNumber] || nodeOffset < -1 * sliderMax[sliderNumber]) && !settings.infiniteSlider && (xScrollDistance *= elasticFrictionCoefficient, nodeOffset += xScrollDistance), settings.infiniteSlider) {
              if (-1 * tempSliderMax >= nodeOffset) {
                for (var scrollerWidth = $(node).width(), lowSlideNumber = 0, lowSlideOffset = tempSlideNodeOffsets[0], i = 0; i < tempSlideNodeOffsets.length; i++) tempSlideNodeOffsets[i] < lowSlideOffset && (lowSlideOffset = tempSlideNodeOffsets[i], lowSlideNumber = i);
                var newOffset = tempSliderMin + scrollerWidth;
                tempSlideNodeOffsets[lowSlideNumber] = newOffset, tempSliderMin = -1 * tempChildrenOffsets[1] + centeredSlideOffset, tempSliderMax = tempSliderMin + scrollerWidth - stageWidth, tempChildrenOffsets.splice(0, 1), tempChildrenOffsets.splice(tempChildrenOffsets.length, 0, -1 * newOffset + centeredSlideOffset), tempInfiniteSliderOffset++
              }
              if (nodeOffset >= -1 * tempSliderMin) {
                for (var scrollerWidth = $(node).width(), highSlideNumber = 0, highSlideOffset = tempSlideNodeOffsets[0], i = 0; i < tempSlideNodeOffsets.length; i++) tempSlideNodeOffsets[i] > highSlideOffset && (highSlideOffset = tempSlideNodeOffsets[i], highSlideNumber = i);
                var newOffset = tempSliderMin - slideNodeOuterWidths[highSlideNumber];
                tempSlideNodeOffsets[highSlideNumber] = newOffset, tempChildrenOffsets.splice(0, 0, -1 * newOffset + centeredSlideOffset), tempChildrenOffsets.splice(tempChildrenOffsets.length - 1, 1), tempSliderMin = -1 * tempChildrenOffsets[0] + centeredSlideOffset, tempSliderMax = tempSliderMin + scrollerWidth - stageWidth, tempInfiniteSliderOffset--
              }
            }
            distanceOffsetArray[distanceOffsetArray.length] = nodeOffset, xScrollDistanceArray[xScrollDistanceArray.length] = xScrollDistance
          }
          var slideChanged = !1,
            newChildOffset = helpers.calcActiveOffset(settings, nodeOffset, tempChildrenOffsets, stageWidth, tempInfiniteSliderOffset, numberOfSlides, activeChildOffsets[sliderNumber], sliderNumber),
            tempOffset = (newChildOffset + tempInfiniteSliderOffset + numberOfSlides) % numberOfSlides;
          if (settings.snapToChildren && (settings.infiniteSlider ? tempOffset != activeChildInfOffsets[sliderNumber] && (slideChanged = !0) : newChildOffset != activeChildOffsets[sliderNumber] && (slideChanged = !0), 0 > snapDirection && !slideChanged ? (newChildOffset++, newChildOffset >= childrenOffsets.length && !settings.infiniteSlider && (newChildOffset = childrenOffsets.length - 1)) : snapDirection > 0 && !slideChanged && (newChildOffset--, 0 > newChildOffset && !settings.infiniteSlider && (newChildOffset = 0))), settings.snapToChildren || (nodeOffset > -1 * sliderMin[sliderNumber] || nodeOffset < -1 * sliderMax[sliderNumber]) && !settings.infiniteSlider) {
            for ((nodeOffset > -1 * sliderMin[sliderNumber] || nodeOffset < -1 * sliderMax[sliderNumber]) && !settings.infiniteSlider ? distanceOffsetArray.splice(0, distanceOffsetArray.length) : (distanceOffsetArray.splice(.1 * distanceOffsetArray.length, distanceOffsetArray.length), nodeOffset = distanceOffsetArray.length > 0 ? distanceOffsetArray[distanceOffsetArray.length - 1] : nodeOffset); nodeOffset < tempChildrenOffsets[newChildOffset] - .5 || nodeOffset > tempChildrenOffsets[newChildOffset] + .5;) nodeOffset = (nodeOffset - tempChildrenOffsets[newChildOffset]) * snapFrictionCoefficient + tempChildrenOffsets[newChildOffset], distanceOffsetArray[distanceOffsetArray.length] = nodeOffset;
            distanceOffsetArray[distanceOffsetArray.length] = tempChildrenOffsets[newChildOffset]
          }
          var jStart = 1;
          distanceOffsetArray.length % 2 != 0 && (jStart = 0);
          for (var j = 0; j < scrollTimeouts.length; j++) clearTimeout(scrollTimeouts[j]);
          for (var endOffset = (newChildOffset + tempInfiniteSliderOffset + numberOfSlides) % numberOfSlides, lastCheckOffset = 0, j = jStart; j < distanceOffsetArray.length; j += 2)(j == jStart || Math.abs(distanceOffsetArray[j] - lastCheckOffset) > 1 || j >= distanceOffsetArray.length - 2) && (lastCheckOffset = distanceOffsetArray[j], scrollTimeouts[scrollTimeouts.length] = helpers.slowScrollHorizontalIntervalTimer(scrollIntervalTime * j, node, slideNodes, distanceOffsetArray[j], scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, newChildOffset, originalOffsets, childrenOffsets, infiniteSliderWidth, numberOfSlides, slideNodeOuterWidths, sliderNumber, centeredSlideOffset, endOffset, settings));
          var slideChanged = !1,
            tempOffset = (newChildOffset + infiniteSliderOffset[sliderNumber] + numberOfSlides) % numberOfSlides;
          settings.infiniteSlider ? tempOffset != activeChildInfOffsets[sliderNumber] && (slideChanged = !0) : newChildOffset != activeChildOffsets[sliderNumber] && (slideChanged = !0), "" != settings.onSlideComplete && distanceOffsetArray.length > 1 && (scrollTimeouts[scrollTimeouts.length] = helpers.onSlideCompleteTimer(scrollIntervalTime * (j + 1), settings, node, $(node).children(":eq(" + tempOffset + ")"), endOffset, sliderNumber)), scrollTimeouts[scrollTimeouts.length] = helpers.updateBackfaceVisibilityTimer(scrollIntervalTime * (j + 1), slideNodes, sliderNumber, numberOfSlides, settings), slideTimeouts[sliderNumber] = scrollTimeouts, helpers.hideScrollbar(settings, scrollTimeouts, j, distanceOffsetArray, scrollbarClass, scrollbarWidth, stageWidth, scrollMargin, scrollBorder, sliderNumber)
        },
        onSlideComplete: function(settings, node, slideNode, newChildOffset, sliderNumber) {
          var args = (onChangeEventLastFired[sliderNumber] != newChildOffset ? !0 : !1, new helpers.args("complete", settings, $(node), slideNode, newChildOffset, newChildOffset));
          $(node).parent().data("args", args), "" != settings.onSlideComplete && settings.onSlideComplete(args), onChangeEventLastFired[sliderNumber] = newChildOffset
        },
        getSliderOffset: function(node, xy) {
          var sliderOffset = 0;
          if (xy = "x" == xy ? 4 : 5, !has3DTransform || isIe7 || isIe8) sliderOffset = parseInt($(node).css("left"), 10);
          else {
            for (var transformArray, transforms = new Array("-webkit-transform", "-moz-transform", "transform"), i = 0; i < transforms.length; i++)
              if (void 0 != $(node).css(transforms[i]) && $(node).css(transforms[i]).length > 0) {
                transformArray = $(node).css(transforms[i]).split(",");
                break
              }
            sliderOffset = void 0 == transformArray[xy] ? 0 : parseInt(transformArray[xy], 10)
          }
          return sliderOffset
        },
        setSliderOffset: function(node, sliderOffset) {
          sliderOffset = parseInt(sliderOffset, 10), $(node).css(!has3DTransform || isIe7 || isIe8 ? {
            left: sliderOffset + "px"
          } : {
            msTransform: "matrix(1,0,0,1," + sliderOffset + ",0)",
            webkitTransform: "matrix(1,0,0,1," + sliderOffset + ",0)",
            MozTransform: "matrix(1,0,0,1," + sliderOffset + ",0)",
            transform: "matrix(1,0,0,1," + sliderOffset + ",0)"
          })
        },
        setBrowserInfo: function() {
          null != navigator.userAgent.match("WebKit") ? (isWebkit = !0, grabOutCursor = "-webkit-grab", grabInCursor = "-webkit-grabbing") : null != navigator.userAgent.match("Gecko") ? (isGecko = !0, grabOutCursor = "move", grabInCursor = "-moz-grabbing") : null != navigator.userAgent.match("MSIE 7") ? (isIe7 = !0, isIe = !0) : null != navigator.userAgent.match("MSIE 8") ? (isIe8 = !0, isIe = !0) : null != navigator.userAgent.match("MSIE 9") && (isIe9 = !0, isIe = !0)
        },
        has3DTransform: function() {
          var has3D = !1,
            testElement = $("<div />").css({
              msTransform: "matrix(1,1,1,1,1,1)",
              webkitTransform: "matrix(1,1,1,1,1,1)",
              MozTransform: "matrix(1,1,1,1,1,1)",
              transform: "matrix(1,1,1,1,1,1)"
            });
          return "" == testElement.attr("style") ? has3D = !1 : isGecko && parseInt(navigator.userAgent.split("/")[3], 10) >= 21 ? has3D = !1 : void 0 != testElement.attr("style") && (has3D = !0), has3D
        },
        getSlideNumber: function(slide, sliderNumber, numberOfSlides) {
          return (slide - infiniteSliderOffset[sliderNumber] + numberOfSlides) % numberOfSlides
        },
        calcActiveOffset: function(settings, offset, childrenOffsets, stageWidth, infiniteSliderOffset, numberOfSlides) {
          var newChildOffset, isFirst = !1,
            arrayOfOffsets = new Array;
          offset > childrenOffsets[0] && (newChildOffset = 0), offset < childrenOffsets[childrenOffsets.length - 1] && (newChildOffset = numberOfSlides - 1);
          for (var i = 0; i < childrenOffsets.length; i++) childrenOffsets[i] <= offset && childrenOffsets[i] > offset - stageWidth && (isFirst || childrenOffsets[i] == offset || (arrayOfOffsets[arrayOfOffsets.length] = childrenOffsets[i - 1]), arrayOfOffsets[arrayOfOffsets.length] = childrenOffsets[i], isFirst = !0);
          0 == arrayOfOffsets.length && (arrayOfOffsets[0] = childrenOffsets[childrenOffsets.length - 1]);
          for (var distance = stageWidth, closestChildOffset = 0, i = 0; i < arrayOfOffsets.length; i++) {
            var newDistance = Math.abs(offset - arrayOfOffsets[i]);
            distance > newDistance && (closestChildOffset = arrayOfOffsets[i], distance = newDistance)
          }
          for (var i = 0; i < childrenOffsets.length; i++) closestChildOffset == childrenOffsets[i] && (newChildOffset = i);
          return newChildOffset
        },
        changeSlide: function(slide, node, slideNodes, scrollTimeouts, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, centeredSlideOffset, settings) {
          helpers.autoSlidePause(sliderNumber);
          for (var j = 0; j < scrollTimeouts.length; j++) clearTimeout(scrollTimeouts[j]);
          var steps = Math.ceil(settings.autoSlideTransTimer / 10) + 1,
            startOffset = helpers.getSliderOffset(node, "x"),
            endOffset = childrenOffsets[slide],
            offsetDiff = endOffset - startOffset,
            direction = slide - (activeChildOffsets[sliderNumber] + infiniteSliderOffset[sliderNumber] + numberOfSlides) % numberOfSlides;
          if (settings.infiniteSlider) {
            slide = (slide - infiniteSliderOffset[sliderNumber] + 2 * numberOfSlides) % numberOfSlides;
            var appendArray = !1;
            0 == slide && 2 == numberOfSlides && (slide = numberOfSlides, childrenOffsets[slide] = childrenOffsets[slide - 1] - $(slideNodes).eq(0).outerWidth(!0), appendArray = !0), endOffset = childrenOffsets[slide], offsetDiff = endOffset - startOffset;
            var offsets = new Array(childrenOffsets[slide] - $(node).width(), childrenOffsets[slide] + $(node).width());
            appendArray && childrenOffsets.splice(childrenOffsets.length - 1, 1);
            for (var i = 0; i < offsets.length; i++) Math.abs(offsets[i] - startOffset) < Math.abs(offsetDiff) && (offsetDiff = offsets[i] - startOffset)
          }
          0 > offsetDiff && -1 == direction ? offsetDiff += $(node).width() : offsetDiff > 0 && 1 == direction && (offsetDiff -= $(node).width());
          var t, nextStep, stepArray = new Array;
          helpers.showScrollbar(settings, scrollbarClass);
          for (var i = 0; steps >= i; i++) t = i, t /= steps, t--, nextStep = startOffset + offsetDiff * (Math.pow(t, 5) + 1), stepArray[stepArray.length] = nextStep;
          for (var tempOffset = (slide + infiniteSliderOffset[sliderNumber] + numberOfSlides) % numberOfSlides, lastCheckOffset = 0, i = 0; i < stepArray.length; i++)
            if ((0 == i || Math.abs(stepArray[i] - lastCheckOffset) > 1 || i >= stepArray.length - 2) && (lastCheckOffset = stepArray[i], scrollTimeouts[i] = helpers.slowScrollHorizontalIntervalTimer(scrollIntervalTime * (i + 1), node, slideNodes, stepArray[i], scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, slide, originalOffsets, childrenOffsets, infiniteSliderWidth, numberOfSlides, slideNodeOuterWidths, sliderNumber, centeredSlideOffset, tempOffset, settings)), 0 == i && "" != settings.onSlideStart) {
              var tempOffset2 = (activeChildOffsets[sliderNumber] + infiniteSliderOffset[sliderNumber] + numberOfSlides) % numberOfSlides;
              settings.onSlideStart(new helpers.args("start", settings, node, $(node).children(":eq(" + tempOffset2 + ")"), tempOffset2, slide))
            }
          var slideChanged = !1;
          settings.infiniteSlider ? tempOffset != activeChildInfOffsets[sliderNumber] && (slideChanged = !0) : slide != activeChildOffsets[sliderNumber] && (slideChanged = !0), slideChanged && "" != settings.onSlideComplete && (scrollTimeouts[scrollTimeouts.length] = helpers.onSlideCompleteTimer(scrollIntervalTime * (i + 1), settings, node, $(node).children(":eq(" + tempOffset + ")"), tempOffset, sliderNumber)), slideTimeouts[sliderNumber] = scrollTimeouts, helpers.hideScrollbar(settings, scrollTimeouts, i, stepArray, scrollbarClass, scrollbarWidth, stageWidth, scrollMargin, scrollBorder, sliderNumber), helpers.autoSlide(node, slideNodes, scrollTimeouts, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, centeredSlideOffset, settings)
        },
        changeOffset: function(endOffset, node, slideNodes, scrollTimeouts, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, centeredSlideOffset, settings) {
          helpers.autoSlidePause(sliderNumber);
          for (var j = 0; j < scrollTimeouts.length; j++) clearTimeout(scrollTimeouts[j]);
          settings.infiniteSlider || (endOffset = endOffset > -1 * sliderMin[sliderNumber] + centeredSlideOffset ? -1 * sliderMin[sliderNumber] + centeredSlideOffset : endOffset, endOffset = endOffset < -1 * sliderMax[sliderNumber] ? -1 * sliderMax[sliderNumber] : endOffset);
          var steps = Math.ceil(settings.autoSlideTransTimer / 10) + 1,
            startOffset = helpers.getSliderOffset(node, "x"),
            slide = (helpers.calcActiveOffset(settings, endOffset, childrenOffsets, stageWidth, infiniteSliderOffset, numberOfSlides, activeChildOffsets[sliderNumber], sliderNumber) + infiniteSliderOffset[sliderNumber] + numberOfSlides) % numberOfSlides,
            testOffsets = childrenOffsets.slice();
          if (settings.snapToChildren && !settings.infiniteSlider) endOffset = childrenOffsets[slide];
          else if (settings.infiniteSlider && settings.snapToChildren) {
            for (; endOffset >= testOffsets[0];) testOffsets.splice(0, 0, testOffsets[numberOfSlides - 1] + $(node).width()), testOffsets.splice(numberOfSlides, 1);
            for (; endOffset <= testOffsets[numberOfSlides - 1];) testOffsets.splice(numberOfSlides, 0, testOffsets[0] - $(node).width()), testOffsets.splice(0, 1);
            slide = helpers.calcActiveOffset(settings, endOffset, testOffsets, stageWidth, infiniteSliderOffset, numberOfSlides, activeChildOffsets[sliderNumber], sliderNumber), endOffset = testOffsets[slide]
          }
          var t, nextStep, offsetDiff = endOffset - startOffset,
            stepArray = new Array;
          helpers.showScrollbar(settings, scrollbarClass);
          for (var i = 0; steps >= i; i++) t = i, t /= steps, t--, nextStep = startOffset + offsetDiff * (Math.pow(t, 5) + 1), stepArray[stepArray.length] = nextStep;
          for (var tempOffset = (slide + infiniteSliderOffset[sliderNumber] + numberOfSlides) % numberOfSlides, lastCheckOffset = 0, i = 0; i < stepArray.length; i++)
            if ((0 == i || Math.abs(stepArray[i] - lastCheckOffset) > 1 || i >= stepArray.length - 2) && (lastCheckOffset = stepArray[i], scrollTimeouts[i] = helpers.slowScrollHorizontalIntervalTimer(scrollIntervalTime * (i + 1), node, slideNodes, stepArray[i], scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, slide, originalOffsets, childrenOffsets, infiniteSliderWidth, numberOfSlides, slideNodeOuterWidths, sliderNumber, centeredSlideOffset, tempOffset, settings)), 0 == i && "" != settings.onSlideStart) {
              var tempOffset = (activeChildOffsets[sliderNumber] + infiniteSliderOffset[sliderNumber] + numberOfSlides) % numberOfSlides;
              settings.onSlideStart(new helpers.args("start", settings, node, $(node).children(":eq(" + tempOffset + ")"), tempOffset, slide))
            }
          var slideChanged = !1;
          settings.infiniteSlider ? tempOffset != activeChildInfOffsets[sliderNumber] && (slideChanged = !0) : slide != activeChildOffsets[sliderNumber] && (slideChanged = !0), slideChanged && "" != settings.onSlideComplete && (scrollTimeouts[scrollTimeouts.length] = helpers.onSlideCompleteTimer(scrollIntervalTime * (i + 1), settings, node, $(node).children(":eq(" + tempOffset + ")"), tempOffset, sliderNumber)), slideTimeouts[sliderNumber] = scrollTimeouts, helpers.hideScrollbar(settings, scrollTimeouts, i, stepArray, scrollbarClass, scrollbarWidth, stageWidth, scrollMargin, scrollBorder, sliderNumber), helpers.autoSlide(node, slideNodes, scrollTimeouts, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, centeredSlideOffset, settings)
        },
        autoSlide: function(scrollerNode, slideNodes, scrollTimeouts, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, centeredSlideOffset, settings) {
          return iosSliderSettings[sliderNumber].autoSlide ? (helpers.autoSlidePause(sliderNumber), void(autoSlideTimeouts[sliderNumber] = setTimeout(function() {
            !settings.infiniteSlider && activeChildOffsets[sliderNumber] > childrenOffsets.length - 1 && (activeChildOffsets[sliderNumber] = activeChildOffsets[sliderNumber] - numberOfSlides);
            var nextSlide = activeChildOffsets[sliderNumber] + infiniteSliderOffset[sliderNumber] + 1;
            helpers.changeSlide(nextSlide, scrollerNode, slideNodes, scrollTimeouts, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, centeredSlideOffset, settings), helpers.autoSlide(scrollerNode, slideNodes, scrollTimeouts, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, centeredSlideOffset, settings)
          }, settings.autoSlideTimer + settings.autoSlideTransTimer))) : !1
        },
        autoSlidePause: function(sliderNumber) {
          clearTimeout(autoSlideTimeouts[sliderNumber])
        },
        isUnselectable: function(node, settings) {
          return "" != settings.unselectableSelector && 1 == $(node).closest(settings.unselectableSelector).length ? !0 : !1
        },
        slowScrollHorizontalIntervalTimer: function(scrollIntervalTime, node, slideNodes, step, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, slide, originalOffsets, childrenOffsets, infiniteSliderWidth, numberOfSlides, slideNodeOuterWidths, sliderNumber, centeredSlideOffset, endOffset, settings) {
          var scrollTimeout = setTimeout(function() {
            helpers.slowScrollHorizontalInterval(node, slideNodes, step, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, slide, originalOffsets, childrenOffsets, infiniteSliderWidth, numberOfSlides, slideNodeOuterWidths, sliderNumber, centeredSlideOffset, endOffset, settings)
          }, scrollIntervalTime);
          return scrollTimeout
        },
        onSlideCompleteTimer: function(scrollIntervalTime, settings, node, slideNode, slide, scrollbarNumber) {
          var scrollTimeout = setTimeout(function() {
            helpers.onSlideComplete(settings, node, slideNode, slide, scrollbarNumber)
          }, scrollIntervalTime);
          return scrollTimeout
        },
        hideScrollbarIntervalTimer: function(scrollIntervalTime, newOffset, opacity, scrollbarClass, scrollbarWidth, stageWidth, scrollMargin, scrollBorder, sliderNumber, settings) {
          var scrollTimeout = setTimeout(function() {
            helpers.hideScrollbarInterval(newOffset, opacity, scrollbarClass, scrollbarWidth, stageWidth, scrollMargin, scrollBorder, sliderNumber, settings)
          }, scrollIntervalTime);
          return scrollTimeout
        },
        updateBackfaceVisibilityTimer: function(scrollIntervalTime, slideNodes, sliderNumber, numberOfSlides, settings) {
          var scrollTimeout = setTimeout(function() {
            helpers.updateBackfaceVisibility(slideNodes, sliderNumber, numberOfSlides, settings)
          }, scrollIntervalTime);
          return scrollTimeout
        },
        updateBackfaceVisibility: function(slideNodes, sliderNumber, numberOfSlides, settings) {
          for (var slide = (activeChildOffsets[sliderNumber] + infiniteSliderOffset[sliderNumber] + numberOfSlides) % numberOfSlides, usedSlideArray = Array(), i = 0; i < 2 * settings.hardwareAccelBuffer; i++) {
            var slide_eq = helpers.mod(slide + i - settings.hardwareAccelBuffer, numberOfSlides);
            if ("visible" == $(slideNodes).eq(slide_eq).css("-webkit-backface-visibility")) {
              usedSlideArray[usedSlideArray.length] = slide_eq;
              var eq_h = helpers.mod(slide_eq + 2 * settings.hardwareAccelBuffer, numberOfSlides),
                eq_l = helpers.mod(slide_eq - 2 * settings.hardwareAccelBuffer, numberOfSlides);
              $(slideNodes).eq(slide_eq).css("-webkit-backface-visibility", "hidden"), -1 == usedSlideArray.indexOf(eq_l) && $(slideNodes).eq(eq_l).css("-webkit-backface-visibility", ""), -1 == usedSlideArray.indexOf(eq_h) && $(slideNodes).eq(eq_h).css("-webkit-backface-visibility", "")
            }
          }
        },
        mod: function(x, mod) {
          var rem = x % mod;
          return 0 > rem ? rem + mod : rem
        },
        args: function(func, settings, node, activeSlideNode, newChildOffset, targetSlideOffset) {
          this.prevSlideNumber = void 0 == $(node).parent().data("args") ? void 0 : $(node).parent().data("args").prevSlideNumber, this.prevSlideObject = void 0 == $(node).parent().data("args") ? void 0 : $(node).parent().data("args").prevSlideObject, this.targetSlideNumber = targetSlideOffset + 1, this.targetSlideObject = $(node).children(":eq(" + targetSlideOffset + ")"), this.slideChanged = !1, "load" == func ? (this.targetSlideNumber = void 0, this.targetSlideObject = void 0) : "start" == func ? (this.targetSlideNumber = void 0, this.targetSlideObject = void 0) : "change" == func ? (this.slideChanged = !0, this.prevSlideNumber = void 0 == $(node).parent().data("args") ? settings.startAtSlide : $(node).parent().data("args").currentSlideNumber, this.prevSlideObject = $(node).children(":eq(" + this.prevSlideNumber + ")")) : "complete" == func && (this.slideChanged = $(node).parent().data("args").slideChanged), this.settings = settings, this.data = $(node).parent().data("iosslider"), this.sliderObject = node, this.sliderContainerObject = $(node).parent(), this.currentSlideObject = activeSlideNode, this.currentSlideNumber = newChildOffset + 1, this.currentSliderOffset = -1 * helpers.getSliderOffset(node, "x")
        },
        preventDrag: function(event) {
          event.preventDefault()
        },
        preventClick: function(event) {
          return event.stopImmediatePropagation(), !1
        },
        enableClick: function() {
          return !0
        }
      };
    helpers.setBrowserInfo();
    var methods = {
      init: function(options, node) {
        has3DTransform = helpers.has3DTransform();
        var settings = $.extend(!0, {
          elasticPullResistance: .6,
          frictionCoefficient: .92,
          elasticFrictionCoefficient: .6,
          snapFrictionCoefficient: .92,
          snapToChildren: !1,
          snapSlideCenter: !1,
          startAtSlide: 1,
          scrollbar: !1,
          scrollbarDrag: !1,
          scrollbarHide: !0,
          scrollbarPaging: !1,
          scrollbarLocation: "top",
          scrollbarContainer: "",
          scrollbarOpacity: .4,
          scrollbarHeight: "4px",
          scrollbarBorder: "0",
          scrollbarMargin: "5px",
          scrollbarBackground: "#000",
          scrollbarBorderRadius: "100px",
          scrollbarShadow: "0 0 0 #000",
          scrollbarElasticPullResistance: .9,
          desktopClickDrag: !1,
          keyboardControls: !1,
          tabToAdvance: !1,
          responsiveSlideContainer: !0,
          responsiveSlides: !0,
          navSlideSelector: "",
          navPrevSelector: "",
          navNextSelector: "",
          autoSlideToggleSelector: "",
          autoSlide: !1,
          autoSlideTimer: 5e3,
          autoSlideTransTimer: 750,
          autoSlideHoverPause: !0,
          infiniteSlider: !1,
          snapVelocityThreshold: 5,
          slideStartVelocityThreshold: 0,
          horizontalSlideLockThreshold: 5,
          verticalSlideLockThreshold: 3,
          hardwareAccelBuffer: 5,
          stageCSS: {
            position: "relative",
            top: "0",
            left: "0",
            overflow: "hidden",
            zIndex: 1
          },
          unselectableSelector: "",
          onSliderLoaded: "",
          onSliderUpdate: "",
          onSliderResize: "",
          onSlideStart: "",
          onSlideChange: "",
          onSlideComplete: ""
        }, options);
        return void 0 == node && (node = this), $(node).each(function() {
          function init() {
            helpers.autoSlidePause(sliderNumber), anchorEvents = $(scrollerNode).find("a"), onclickEvents = $(scrollerNode).find("[onclick]"), allScrollerNodeChildren = $(scrollerNode).find("*"), $(stageNode).css("width", ""), $(stageNode).css("height", ""), $(scrollerNode).css("width", ""), slideNodes = $(scrollerNode).children().not("script").get(), slideNodeWidths = new Array, slideNodeOuterWidths = new Array, settings.responsiveSlides && $(slideNodes).css("width", ""), sliderMax[sliderNumber] = 0, childrenOffsets = new Array, containerWidth = $(stageNode).parent().width(), stageWidth = $(stageNode).outerWidth(!0), settings.responsiveSlideContainer && (stageWidth = $(stageNode).outerWidth(!0) > containerWidth ? containerWidth : $(stageNode).width()), $(stageNode).css({
              position: settings.stageCSS.position,
              top: settings.stageCSS.top,
              left: settings.stageCSS.left,
              overflow: settings.stageCSS.overflow,
              zIndex: settings.stageCSS.zIndex,
              webkitPerspective: 1e3,
              webkitBackfaceVisibility: "hidden",
              msTouchAction: "pan-y",
              width: stageWidth
            }), $(settings.unselectableSelector).css({
              cursor: "default"
            });
            for (var j = 0; j < slideNodes.length; j++) {
              slideNodeWidths[j] = $(slideNodes[j]).width(), slideNodeOuterWidths[j] = $(slideNodes[j]).outerWidth(!0);
              var newWidth = slideNodeOuterWidths[j];
              settings.responsiveSlides && (slideNodeOuterWidths[j] > stageWidth ? (newWidth = stageWidth + -1 * (slideNodeOuterWidths[j] - slideNodeWidths[j]), slideNodeWidths[j] = newWidth, slideNodeOuterWidths[j] = stageWidth) : newWidth = slideNodeWidths[j], $(slideNodes[j]).css({
                width: newWidth
              })), $(slideNodes[j]).css({
                overflow: "hidden",
                position: "absolute"
              }), childrenOffsets[j] = -1 * sliderMax[sliderNumber], sliderMax[sliderNumber] = sliderMax[sliderNumber] + newWidth + (slideNodeOuterWidths[j] - slideNodeWidths[j])
            }
            settings.snapSlideCenter && (centeredSlideOffset = .5 * (stageWidth - slideNodeOuterWidths[0]), settings.responsiveSlides && slideNodeOuterWidths[0] > stageWidth && (centeredSlideOffset = 0)), sliderAbsMax[sliderNumber] = 2 * sliderMax[sliderNumber];
            for (var j = 0; j < slideNodes.length; j++) helpers.setSliderOffset($(slideNodes[j]), -1 * childrenOffsets[j] + sliderMax[sliderNumber] + centeredSlideOffset), childrenOffsets[j] = childrenOffsets[j] - sliderMax[sliderNumber];
            if (!settings.infiniteSlider && !settings.snapSlideCenter) {
              for (var i = 0; i < childrenOffsets.length && !(childrenOffsets[i] <= -1 * (2 * sliderMax[sliderNumber] - stageWidth)); i++) lastChildOffset = i;
              childrenOffsets.splice(lastChildOffset + 1, childrenOffsets.length), childrenOffsets[childrenOffsets.length] = -1 * (2 * sliderMax[sliderNumber] - stageWidth)
            }
            for (var i = 0; i < childrenOffsets.length; i++) originalOffsets[i] = childrenOffsets[i];
            if (isFirstInit && (iosSliderSettings[sliderNumber].startAtSlide = iosSliderSettings[sliderNumber].startAtSlide > childrenOffsets.length ? childrenOffsets.length : iosSliderSettings[sliderNumber].startAtSlide, settings.infiniteSlider ? (iosSliderSettings[sliderNumber].startAtSlide = (iosSliderSettings[sliderNumber].startAtSlide - 1 + numberOfSlides) % numberOfSlides, activeChildOffsets[sliderNumber] = iosSliderSettings[sliderNumber].startAtSlide) : (iosSliderSettings[sliderNumber].startAtSlide = iosSliderSettings[sliderNumber].startAtSlide - 1 < 0 ? childrenOffsets.length - 1 : iosSliderSettings[sliderNumber].startAtSlide, activeChildOffsets[sliderNumber] = iosSliderSettings[sliderNumber].startAtSlide - 1), activeChildInfOffsets[sliderNumber] = activeChildOffsets[sliderNumber]), sliderMin[sliderNumber] = sliderMax[sliderNumber] + centeredSlideOffset, $(scrollerNode).css({
                position: "relative",
                cursor: grabOutCursor,
                webkitPerspective: "0",
                webkitBackfaceVisibility: "hidden",
                width: sliderMax[sliderNumber] + "px"
              }), scrollerWidth = sliderMax[sliderNumber], sliderMax[sliderNumber] = 2 * sliderMax[sliderNumber] - stageWidth + 2 * centeredSlideOffset, shortContent = stageWidth > scrollerWidth + centeredSlideOffset || 0 == stageWidth ? !0 : !1, shortContent && $(scrollerNode).css({
                cursor: "default"
              }), containerHeight = $(stageNode).parent().outerHeight(!0), stageHeight = $(stageNode).height(), settings.responsiveSlideContainer && (stageHeight = stageHeight > containerHeight ? containerHeight : stageHeight), $(stageNode).css({
                height: stageHeight
              }), helpers.setSliderOffset(scrollerNode, childrenOffsets[activeChildOffsets[sliderNumber]]), settings.infiniteSlider && !shortContent) {
              for (var currentScrollOffset = helpers.getSliderOffset($(scrollerNode), "x"), count = (infiniteSliderOffset[sliderNumber] + numberOfSlides) % numberOfSlides * -1; 0 > count;) {
                var lowSlideNumber = 0,
                  lowSlideOffset = helpers.getSliderOffset($(slideNodes[0]), "x");
                $(slideNodes).each(function(i) {
                  helpers.getSliderOffset(this, "x") < lowSlideOffset && (lowSlideOffset = helpers.getSliderOffset(this, "x"), lowSlideNumber = i)
                });
                var newOffset = sliderMin[sliderNumber] + scrollerWidth;
                helpers.setSliderOffset($(slideNodes)[lowSlideNumber], newOffset), sliderMin[sliderNumber] = -1 * childrenOffsets[1] + centeredSlideOffset, sliderMax[sliderNumber] = sliderMin[sliderNumber] + scrollerWidth - stageWidth, childrenOffsets.splice(0, 1), childrenOffsets.splice(childrenOffsets.length, 0, -1 * newOffset + centeredSlideOffset), count++
              }
              for (; - 1 * childrenOffsets[0] - scrollerWidth + centeredSlideOffset > 0 && settings.snapSlideCenter && isFirstInit;) {
                var highSlideNumber = 0,
                  highSlideOffset = helpers.getSliderOffset($(slideNodes[0]), "x");
                $(slideNodes).each(function(i) {
                  helpers.getSliderOffset(this, "x") > highSlideOffset && (highSlideOffset = helpers.getSliderOffset(this, "x"), highSlideNumber = i)
                });
                var newOffset = sliderMin[sliderNumber] - slideNodeOuterWidths[highSlideNumber];
                helpers.setSliderOffset($(slideNodes)[highSlideNumber], newOffset), childrenOffsets.splice(0, 0, -1 * newOffset + centeredSlideOffset), childrenOffsets.splice(childrenOffsets.length - 1, 1), sliderMin[sliderNumber] = -1 * childrenOffsets[0] + centeredSlideOffset, sliderMax[sliderNumber] = sliderMin[sliderNumber] + scrollerWidth - stageWidth, infiniteSliderOffset[sliderNumber]--, activeChildOffsets[sliderNumber]++
              }
              for (; currentScrollOffset <= -1 * sliderMax[sliderNumber];) {
                var lowSlideNumber = 0,
                  lowSlideOffset = helpers.getSliderOffset($(slideNodes[0]), "x");
                $(slideNodes).each(function(i) {
                  helpers.getSliderOffset(this, "x") < lowSlideOffset && (lowSlideOffset = helpers.getSliderOffset(this, "x"), lowSlideNumber = i)
                });
                var newOffset = sliderMin[sliderNumber] + scrollerWidth;
                helpers.setSliderOffset($(slideNodes)[lowSlideNumber], newOffset), sliderMin[sliderNumber] = -1 * childrenOffsets[1] + centeredSlideOffset, sliderMax[sliderNumber] = sliderMin[sliderNumber] + scrollerWidth - stageWidth, childrenOffsets.splice(0, 1), childrenOffsets.splice(childrenOffsets.length, 0, -1 * newOffset + centeredSlideOffset), infiniteSliderOffset[sliderNumber]++, activeChildOffsets[sliderNumber]--
              }
            }
            return helpers.setSliderOffset(scrollerNode, childrenOffsets[activeChildOffsets[sliderNumber]]), helpers.updateBackfaceVisibility(slideNodes, sliderNumber, numberOfSlides, settings), settings.desktopClickDrag || $(scrollerNode).css({
              cursor: "default"
            }), settings.scrollbar && ($("." + scrollbarBlockClass).css({
              margin: settings.scrollbarMargin,
              overflow: "hidden",
              display: "none"
            }), $("." + scrollbarBlockClass + " ." + scrollbarClass).css({
              border: settings.scrollbarBorder
            }), scrollMargin = parseInt($("." + scrollbarBlockClass).css("marginLeft")) + parseInt($("." + scrollbarBlockClass).css("marginRight")), scrollBorder = parseInt($("." + scrollbarBlockClass + " ." + scrollbarClass).css("borderLeftWidth"), 10) + parseInt($("." + scrollbarBlockClass + " ." + scrollbarClass).css("borderRightWidth"), 10), scrollbarStageWidth = "" != settings.scrollbarContainer ? $(settings.scrollbarContainer).width() : stageWidth, scrollbarWidth = stageWidth / scrollerWidth * (scrollbarStageWidth - scrollMargin), settings.scrollbarHide || (scrollbarStartOpacity = settings.scrollbarOpacity), $("." + scrollbarBlockClass).css({
              position: "absolute",
              left: 0,
              width: scrollbarStageWidth - scrollMargin + "px",
              margin: settings.scrollbarMargin
            }), "top" == settings.scrollbarLocation ? $("." + scrollbarBlockClass).css("top", "0") : $("." + scrollbarBlockClass).css("bottom", "0"), $("." + scrollbarBlockClass + " ." + scrollbarClass).css({
              borderRadius: settings.scrollbarBorderRadius,
              background: settings.scrollbarBackground,
              height: settings.scrollbarHeight,
              width: scrollbarWidth - scrollBorder + "px",
              minWidth: settings.scrollbarHeight,
              border: settings.scrollbarBorder,
              webkitPerspective: 1e3,
              webkitBackfaceVisibility: "hidden",
              position: "relative",
              opacity: scrollbarStartOpacity,
              filter: "alpha(opacity:" + 100 * scrollbarStartOpacity + ")",
              boxShadow: settings.scrollbarShadow
            }), helpers.setSliderOffset($("." + scrollbarBlockClass + " ." + scrollbarClass), Math.floor((-1 * childrenOffsets[activeChildOffsets[sliderNumber]] - sliderMin[sliderNumber] + centeredSlideOffset) / (sliderMax[sliderNumber] - sliderMin[sliderNumber] + centeredSlideOffset) * (scrollbarStageWidth - scrollMargin - scrollbarWidth))), $("." + scrollbarBlockClass).css({
              display: "block"
            }), scrollbarNode = $("." + scrollbarBlockClass + " ." + scrollbarClass), scrollbarBlockNode = $("." + scrollbarBlockClass)), settings.scrollbarDrag && !shortContent && $("." + scrollbarBlockClass + " ." + scrollbarClass).css({
              cursor: grabOutCursor
            }), settings.infiniteSlider && (infiniteSliderWidth = (sliderMax[sliderNumber] + stageWidth) / 3), "" != settings.navSlideSelector && $(settings.navSlideSelector).each(function(j) {
              $(this).css({
                cursor: "pointer"
              }), $(this).unbind(clickEvent).bind(clickEvent, function(e) {
                $(this).unbind("touchstart" == e.type ? "click.iosSliderEvent" : "touchstart.iosSliderEvent"), clickEvent = e.type + ".iosSliderEvent", helpers.changeSlide(j, scrollerNode, slideNodes, scrollTimeouts, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, centeredSlideOffset, settings)
              })
            }), "" != settings.navPrevSelector && ($($this.parent()).find(settings.navPrevSelector).css({
              cursor: "pointer"
            }), $($this.parent()).find(settings.navPrevSelector).unbind(clickEvent).bind(clickEvent, function(e) {
              $(this).unbind("touchstart" == e.type ? "click.iosSliderEvent" : "touchstart.iosSliderEvent"), clickEvent = e.type + ".iosSliderEvent";
              var slide = (activeChildOffsets[sliderNumber] + infiniteSliderOffset[sliderNumber] + numberOfSlides) % numberOfSlides;
              (slide > 0 || settings.infiniteSlider) && helpers.changeSlide(slide - 1, scrollerNode, slideNodes, scrollTimeouts, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, centeredSlideOffset, settings)
            })), "" != settings.navNextSelector && ($($this.parent()).find(settings.navNextSelector).css({
              cursor: "pointer"
            }), $($this.parent()).find(settings.navNextSelector).unbind(clickEvent).bind(clickEvent, function(e) {
              $(this).unbind("touchstart" == e.type ? "click.iosSliderEvent" : "touchstart.iosSliderEvent"), clickEvent = e.type + ".iosSliderEvent";
              var slide = (activeChildOffsets[sliderNumber] + infiniteSliderOffset[sliderNumber] + numberOfSlides) % numberOfSlides;
              (slide < childrenOffsets.length - 1 || settings.infiniteSlider) && helpers.changeSlide(slide + 1, scrollerNode, slideNodes, scrollTimeouts, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, centeredSlideOffset, settings)
            })), settings.autoSlide && !shortContent && "" != settings.autoSlideToggleSelector && ($(settings.autoSlideToggleSelector).css({
              cursor: "pointer"
            }), $(settings.autoSlideToggleSelector).unbind(clickEvent).bind(clickEvent, function(e) {
              $(this).unbind("touchstart" == e.type ? "click.iosSliderEvent" : "touchstart.iosSliderEvent"), clickEvent = e.type + ".iosSliderEvent", isAutoSlideToggleOn ? (helpers.autoSlide(scrollerNode, slideNodes, scrollTimeouts, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, centeredSlideOffset, settings), isAutoSlideToggleOn = !1, $(settings.autoSlideToggleSelector).removeClass("on")) : (helpers.autoSlidePause(sliderNumber), isAutoSlideToggleOn = !0, $(settings.autoSlideToggleSelector).addClass("on"))
            })), helpers.autoSlide(scrollerNode, slideNodes, scrollTimeouts, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, centeredSlideOffset, settings), $(stageNode).bind("mouseleave.iosSliderEvent", function() {
              return isAutoSlideToggleOn ? !0 : void helpers.autoSlide(scrollerNode, slideNodes, scrollTimeouts, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, centeredSlideOffset, settings)
            }), $(stageNode).bind("touchend.iosSliderEvent", function() {
              return isAutoSlideToggleOn ? !0 : void helpers.autoSlide(scrollerNode, slideNodes, scrollTimeouts, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, centeredSlideOffset, settings)
            }), settings.autoSlideHoverPause && $(stageNode).bind("mouseenter.iosSliderEvent", function() {
              helpers.autoSlidePause(sliderNumber)
            }), $(stageNode).data("iosslider", {
              obj: $this,
              settings: settings,
              scrollerNode: scrollerNode,
              slideNodes: slideNodes,
              numberOfSlides: numberOfSlides,
              centeredSlideOffset: centeredSlideOffset,
              sliderNumber: sliderNumber,
              originalOffsets: originalOffsets,
              childrenOffsets: childrenOffsets,
              sliderMax: sliderMax[sliderNumber],
              scrollbarClass: scrollbarClass,
              scrollbarWidth: scrollbarWidth,
              scrollbarStageWidth: scrollbarStageWidth,
              stageWidth: stageWidth,
              scrollMargin: scrollMargin,
              scrollBorder: scrollBorder,
              infiniteSliderOffset: infiniteSliderOffset[sliderNumber],
              infiniteSliderWidth: infiniteSliderWidth,
              slideNodeOuterWidths: slideNodeOuterWidths,
              shortContent: shortContent
            }), isFirstInit = !1, !0
          }
          scrollbarNumber++;
          var sliderNumber = scrollbarNumber,
            scrollTimeouts = new Array;
          iosSliderSettings[sliderNumber] = $.extend({}, settings), sliderMin[sliderNumber] = 0, sliderMax[sliderNumber] = 0;
          var scrollbarNode, scrollbarBlockNode, scrollbarStageWidth, scrollbarWidth, containerWidth, containerHeight, stageWidth, stageHeight, scrollMargin, scrollBorder, lastTouch, childrenOffsets, slideNodes, slideNodeWidths, slideNodeOuterWidths, infiniteSliderWidth, xCurrentScrollRate = new Array(0, 0),
            yCurrentScrollRate = new Array(0, 0),
            scrollbarBlockClass = "scrollbarBlock" + scrollbarNumber,
            scrollbarClass = "scrollbar" + scrollbarNumber,
            centeredSlideOffset = 0,
            stageNode = $(this),
            isFirstInit = !0,
            newChildOffset = -1,
            originalOffsets = (new Array, new Array),
            scrollbarStartOpacity = 0,
            xScrollStartPosition = 0,
            yScrollStartPosition = 0,
            currentTouches = 0,
            scrollerNode = $(this).children(":first-child"),
            numberOfSlides = $(scrollerNode).children().not("script").length,
            xScrollStarted = !1,
            lastChildOffset = 0,
            isMouseDown = !1,
            currentSlider = void 0;
          infiniteSliderOffset[sliderNumber] = 0;
          var shortContent = !1;
          onChangeEventLastFired[sliderNumber] = -1;
          var isAutoSlideToggleOn = !1;
          iosSliders[sliderNumber] = stageNode, isEventCleared[sliderNumber] = !1;
          var currentEventNode, scrollerWidth, anchorEvents, onclickEvents, allScrollerNodeChildren, preventXScroll = !1,
            snapOverride = !1,
            clickEvent = "touchstart.iosSliderEvent click.iosSliderEvent";
          touchLocks[sliderNumber] = !1, slideTimeouts[sliderNumber] = new Array, settings.scrollbarDrag && (settings.scrollbar = !0, settings.scrollbarHide = !1);
          var $this = $(this),
            data = $this.data("iosslider");
          if (void 0 != data) return !0;
          if (parseInt($().jquery.split(".").join(""), 10) >= 14.2 ? $(this).delegate("img", "dragstart.iosSliderEvent", function(event) {
              event.preventDefault()
            }) : $(this).find("img").bind("dragstart.iosSliderEvent", function(event) {
              event.preventDefault()
            }), settings.infiniteSlider && (settings.scrollbar = !1), settings.infiniteSlider && 1 == numberOfSlides && (settings.infiniteSlider = !1), settings.scrollbar && ("" != settings.scrollbarContainer ? $(settings.scrollbarContainer).append("<div class = '" + scrollbarBlockClass + "'><div class = '" + scrollbarClass + "'></div></div>") : $(scrollerNode).parent().append("<div class = '" + scrollbarBlockClass + "'><div class = '" + scrollbarClass + "'></div></div>")), !init()) return !0;
          $(this).find("a").bind("mousedown", helpers.preventDrag), $(this).find("[onclick]").bind("click", helpers.preventDrag).each(function() {
            $(this).data("onclick", this.onclick)
          });
          var newChildOffset = helpers.calcActiveOffset(settings, helpers.getSliderOffset($(scrollerNode), "x"), childrenOffsets, stageWidth, infiniteSliderOffset[sliderNumber], numberOfSlides, void 0, sliderNumber),
            tempOffset = (newChildOffset + infiniteSliderOffset[sliderNumber] + numberOfSlides) % numberOfSlides,
            args = new helpers.args("load", settings, scrollerNode, $(scrollerNode).children(":eq(" + tempOffset + ")"), tempOffset, tempOffset);
          if ($(stageNode).data("args", args), "" != settings.onSliderLoaded && settings.onSliderLoaded(args), onChangeEventLastFired[sliderNumber] = tempOffset, settings.scrollbarPaging && settings.scrollbar && !shortContent && ($(scrollbarBlockNode).css("cursor", "pointer"), $(scrollbarBlockNode).bind("click.iosSliderEvent", function(e) {
              this == e.target && (e.pageX > $(scrollbarNode).offset().left ? methods.nextPage(stageNode) : methods.prevPage(stageNode))
            })), iosSliderSettings[sliderNumber].responsiveSlides || iosSliderSettings[sliderNumber].responsiveSlideContainer) {
            var orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";
            $(window).bind(orientationEvent + ".iosSliderEvent-" + sliderNumber, function() {
              if (!init()) return !0;
              var args = $(stageNode).data("args");
              "" != settings.onSliderResize && settings.onSliderResize(args)
            })
          }
          if (!settings.keyboardControls && !settings.tabToAdvance || shortContent || $(document).bind("keydown.iosSliderEvent", function(e) {
              if (!isIe7 && !isIe8) var e = e.originalEvent;
              if ("INPUT" == e.target.nodeName) return !0;
              if (touchLocks[sliderNumber]) return !0;
              if (37 == e.keyCode && settings.keyboardControls) {
                e.preventDefault();
                var slide = (activeChildOffsets[sliderNumber] + infiniteSliderOffset[sliderNumber] + numberOfSlides) % numberOfSlides;
                (slide > 0 || settings.infiniteSlider) && helpers.changeSlide(slide - 1, scrollerNode, slideNodes, scrollTimeouts, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, centeredSlideOffset, settings)
              } else if (39 == e.keyCode && settings.keyboardControls || 9 == e.keyCode && settings.tabToAdvance) {
                e.preventDefault();
                var slide = (activeChildOffsets[sliderNumber] + infiniteSliderOffset[sliderNumber] + numberOfSlides) % numberOfSlides;
                (slide < childrenOffsets.length - 1 || settings.infiniteSlider) && helpers.changeSlide(slide + 1, scrollerNode, slideNodes, scrollTimeouts, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, centeredSlideOffset, settings)
              }
            }), isTouch || settings.desktopClickDrag) {
            var touchStartFlag = !1,
              touchEndFlag = !1,
              touchSelection = $(scrollerNode),
              touchSelectionMove = $(scrollerNode),
              isUnselectable = !1;
            settings.scrollbarDrag && (touchSelection = touchSelection.add(scrollbarNode), touchSelectionMove = touchSelectionMove.add(scrollbarBlockNode)), $(touchSelection).bind("mousedown.iosSliderEvent touchstart.iosSliderEvent", function(e) {
              if ($(window).one("scroll.iosSliderEvent", function() {
                  touchStartFlag = !1
                }), touchStartFlag) return !0;
              if (touchStartFlag = !0, touchEndFlag = !1, $(touchSelectionMove).unbind("touchstart" == e.type ? "mousedown.iosSliderEvent" : "touchstart.iosSliderEvent"), touchLocks[sliderNumber] || shortContent) return touchStartFlag = !1, xScrollStarted = !1, !0;
              if (isUnselectable = helpers.isUnselectable(e.target, settings)) return touchStartFlag = !1, xScrollStarted = !1, !0;
              if (currentEventNode = $(this)[0] === $(scrollbarNode)[0] ? scrollbarNode : scrollerNode, !isIe7 && !isIe8) var e = e.originalEvent;
              if (helpers.autoSlidePause(sliderNumber), allScrollerNodeChildren.unbind(".disableClick"), "touchstart" == e.type) eventX = e.touches[0].pageX, eventY = e.touches[0].pageY;
              else {
                if (window.getSelection) window.getSelection().empty ? window.getSelection().empty() : window.getSelection().removeAllRanges && window.getSelection().removeAllRanges();
                else if (document.selection)
                  if (isIe8) try {
                    document.selection.empty()
                  } catch (e) {} else document.selection.empty();
                eventX = e.pageX, eventY = e.pageY, isMouseDown = !0, currentSlider = scrollerNode, $(this).css({
                  cursor: grabInCursor
                })
              }
              xCurrentScrollRate = new Array(0, 0), yCurrentScrollRate = new Array(0, 0), xScrollDistance = 0, xScrollStarted = !1;
              for (var j = 0; j < scrollTimeouts.length; j++) clearTimeout(scrollTimeouts[j]);
              var scrollPosition = helpers.getSliderOffset(scrollerNode, "x");
              scrollPosition > -1 * sliderMin[sliderNumber] + centeredSlideOffset + scrollerWidth ? (scrollPosition = -1 * sliderMin[sliderNumber] + centeredSlideOffset + scrollerWidth, helpers.setSliderOffset($("." + scrollbarClass), scrollPosition), $("." + scrollbarClass).css({
                width: scrollbarWidth - scrollBorder + "px"
              })) : scrollPosition < -1 * sliderMax[sliderNumber] && (scrollPosition = -1 * sliderMax[sliderNumber], helpers.setSliderOffset($("." + scrollbarClass), scrollbarStageWidth - scrollMargin - scrollbarWidth), $("." + scrollbarClass).css({
                width: scrollbarWidth - scrollBorder + "px"
              }));
              var scrollbarSubtractor = $(this)[0] === $(scrollbarNode)[0] ? sliderMin[sliderNumber] : 0;
              xScrollStartPosition = -1 * (helpers.getSliderOffset(this, "x") - eventX - scrollbarSubtractor), yScrollStartPosition = -1 * (helpers.getSliderOffset(this, "y") - eventY), xCurrentScrollRate[1] = eventX, yCurrentScrollRate[1] = eventY, snapOverride = !1
            }), $(document).bind("touchmove.iosSliderEvent mousemove.iosSliderEvent", function(e) {
              if (!isIe7 && !isIe8) var e = e.originalEvent;
              if (touchLocks[sliderNumber] || shortContent || isUnselectable || !touchStartFlag) return !0;
              var edgeDegradation = 0;
              if ("touchmove" == e.type) eventX = e.touches[0].pageX, eventY = e.touches[0].pageY;
              else {
                if (window.getSelection) window.getSelection().empty || window.getSelection().removeAllRanges && window.getSelection().removeAllRanges();
                else if (document.selection)
                  if (isIe8) try {
                    document.selection.empty()
                  } catch (e) {} else document.selection.empty();
                if (eventX = e.pageX, eventY = e.pageY, !isMouseDown) return !0;
                if (!isIe && ("undefined" != typeof e.webkitMovementX || "undefined" != typeof e.webkitMovementY) && 0 === e.webkitMovementY && 0 === e.webkitMovementX) return !0
              }
              if (xCurrentScrollRate[0] = xCurrentScrollRate[1], xCurrentScrollRate[1] = eventX, xScrollDistance = (xCurrentScrollRate[1] - xCurrentScrollRate[0]) / 2, yCurrentScrollRate[0] = yCurrentScrollRate[1], yCurrentScrollRate[1] = eventY, yScrollDistance = (yCurrentScrollRate[1] - yCurrentScrollRate[0]) / 2, !xScrollStarted) {
                var slide = (activeChildOffsets[sliderNumber] + infiniteSliderOffset[sliderNumber] + numberOfSlides) % numberOfSlides,
                  args = new helpers.args("start", settings, scrollerNode, $(scrollerNode).children(":eq(" + slide + ")"), slide, void 0);
                $(stageNode).data("args", args), "" != settings.onSlideStart && settings.onSlideStart(args)
              }
              if ((yScrollDistance > settings.verticalSlideLockThreshold || yScrollDistance < -1 * settings.verticalSlideLockThreshold) && "touchmove" == e.type && !xScrollStarted && (preventXScroll = !0), (xScrollDistance > settings.horizontalSlideLockThreshold || xScrollDistance < -1 * settings.horizontalSlideLockThreshold) && "touchmove" == e.type && e.preventDefault(), (xScrollDistance > settings.slideStartVelocityThreshold || xScrollDistance < -1 * settings.slideStartVelocityThreshold) && (xScrollStarted = !0), xScrollStarted && !preventXScroll) {
                var scrollPosition = helpers.getSliderOffset(scrollerNode, "x"),
                  scrollbarSubtractor = $(currentEventNode)[0] === $(scrollbarNode)[0] ? sliderMin[sliderNumber] : centeredSlideOffset,
                  scrollbarMultiplier = $(currentEventNode)[0] === $(scrollbarNode)[0] ? (sliderMin[sliderNumber] - sliderMax[sliderNumber] - centeredSlideOffset) / (scrollbarStageWidth - scrollMargin - scrollbarWidth) : 1,
                  elasticPullResistance = $(currentEventNode)[0] === $(scrollbarNode)[0] ? settings.scrollbarElasticPullResistance : settings.elasticPullResistance,
                  snapCenteredSlideOffset = settings.snapSlideCenter && $(currentEventNode)[0] === $(scrollbarNode)[0] ? 0 : centeredSlideOffset,
                  snapCenteredSlideOffsetScrollbar = settings.snapSlideCenter && $(currentEventNode)[0] === $(scrollbarNode)[0] ? centeredSlideOffset : 0;
                if ("touchmove" == e.type && (currentTouches != e.touches.length && (xScrollStartPosition = -1 * scrollPosition + eventX), currentTouches = e.touches.length), settings.infiniteSlider) {
                  if (scrollPosition <= -1 * sliderMax[sliderNumber]) {
                    var scrollerWidth = $(scrollerNode).width();
                    if (scrollPosition <= -1 * sliderAbsMax[sliderNumber]) {
                      var sum = -1 * originalOffsets[0];
                      $(slideNodes).each(function(i) {
                        helpers.setSliderOffset($(slideNodes)[i], sum + centeredSlideOffset), i < childrenOffsets.length && (childrenOffsets[i] = -1 * sum), sum += slideNodeOuterWidths[i]
                      }), xScrollStartPosition -= -1 * childrenOffsets[0], sliderMin[sliderNumber] = -1 * childrenOffsets[0] + centeredSlideOffset, sliderMax[sliderNumber] = sliderMin[sliderNumber] + scrollerWidth - stageWidth, infiniteSliderOffset[sliderNumber] = 0
                    } else {
                      var lowSlideNumber = 0,
                        lowSlideOffset = helpers.getSliderOffset($(slideNodes[0]), "x");
                      $(slideNodes).each(function(i) {
                        helpers.getSliderOffset(this, "x") < lowSlideOffset && (lowSlideOffset = helpers.getSliderOffset(this, "x"), lowSlideNumber = i)
                      });
                      var newOffset = sliderMin[sliderNumber] + scrollerWidth;
                      helpers.setSliderOffset($(slideNodes)[lowSlideNumber], newOffset), sliderMin[sliderNumber] = -1 * childrenOffsets[1] + centeredSlideOffset, sliderMax[sliderNumber] = sliderMin[sliderNumber] + scrollerWidth - stageWidth, childrenOffsets.splice(0, 1), childrenOffsets.splice(childrenOffsets.length, 0, -1 * newOffset + centeredSlideOffset), infiniteSliderOffset[sliderNumber]++
                    }
                  }
                  if (scrollPosition >= -1 * sliderMin[sliderNumber] || scrollPosition >= 0) {
                    var scrollerWidth = $(scrollerNode).width();
                    if (scrollPosition >= 0) {
                      var sum = -1 * originalOffsets[0];
                      for ($(slideNodes).each(function(i) {
                          helpers.setSliderOffset($(slideNodes)[i], sum + centeredSlideOffset), i < childrenOffsets.length && (childrenOffsets[i] = -1 * sum), sum += slideNodeOuterWidths[i]
                        }), xScrollStartPosition += -1 * childrenOffsets[0], sliderMin[sliderNumber] = -1 * childrenOffsets[0] + centeredSlideOffset, sliderMax[sliderNumber] = sliderMin[sliderNumber] + scrollerWidth - stageWidth, infiniteSliderOffset[sliderNumber] = numberOfSlides; - 1 * childrenOffsets[0] - scrollerWidth + centeredSlideOffset > 0;) {
                        var highSlideNumber = 0,
                          highSlideOffset = helpers.getSliderOffset($(slideNodes[0]), "x");
                        $(slideNodes).each(function(i) {
                          helpers.getSliderOffset(this, "x") > highSlideOffset && (highSlideOffset = helpers.getSliderOffset(this, "x"), highSlideNumber = i)
                        });
                        var newOffset = sliderMin[sliderNumber] - slideNodeOuterWidths[highSlideNumber];
                        helpers.setSliderOffset($(slideNodes)[highSlideNumber], newOffset), childrenOffsets.splice(0, 0, -1 * newOffset + centeredSlideOffset), childrenOffsets.splice(childrenOffsets.length - 1, 1), sliderMin[sliderNumber] = -1 * childrenOffsets[0] + centeredSlideOffset, sliderMax[sliderNumber] = sliderMin[sliderNumber] + scrollerWidth - stageWidth, infiniteSliderOffset[sliderNumber]--, activeChildOffsets[sliderNumber]++
                      }
                    } else {
                      var highSlideNumber = 0,
                        highSlideOffset = helpers.getSliderOffset($(slideNodes[0]), "x");
                      $(slideNodes).each(function(i) {
                        helpers.getSliderOffset(this, "x") > highSlideOffset && (highSlideOffset = helpers.getSliderOffset(this, "x"), highSlideNumber = i)
                      });
                      var newOffset = sliderMin[sliderNumber] - slideNodeOuterWidths[highSlideNumber];
                      helpers.setSliderOffset($(slideNodes)[highSlideNumber], newOffset), childrenOffsets.splice(0, 0, -1 * newOffset + centeredSlideOffset), childrenOffsets.splice(childrenOffsets.length - 1, 1), sliderMin[sliderNumber] = -1 * childrenOffsets[0] + centeredSlideOffset, sliderMax[sliderNumber] = sliderMin[sliderNumber] + scrollerWidth - stageWidth, infiniteSliderOffset[sliderNumber]--
                    }
                  }
                } else {
                  var scrollerWidth = $(scrollerNode).width();
                  scrollPosition > -1 * sliderMin[sliderNumber] + centeredSlideOffset && (edgeDegradation = (sliderMin[sliderNumber] + -1 * (xScrollStartPosition - scrollbarSubtractor - eventX + snapCenteredSlideOffset) * scrollbarMultiplier - scrollbarSubtractor) * elasticPullResistance * -1 / scrollbarMultiplier), scrollPosition < -1 * sliderMax[sliderNumber] && (edgeDegradation = (sliderMax[sliderNumber] + snapCenteredSlideOffsetScrollbar + -1 * (xScrollStartPosition - scrollbarSubtractor - eventX) * scrollbarMultiplier - scrollbarSubtractor) * elasticPullResistance * -1 / scrollbarMultiplier)
                }
                if (helpers.setSliderOffset(scrollerNode, -1 * (xScrollStartPosition - scrollbarSubtractor - eventX - edgeDegradation) * scrollbarMultiplier - scrollbarSubtractor + snapCenteredSlideOffsetScrollbar), settings.scrollbar) {
                  helpers.showScrollbar(settings, scrollbarClass), scrollbarDistance = Math.floor((xScrollStartPosition - eventX - edgeDegradation - sliderMin[sliderNumber] + snapCenteredSlideOffset) / (sliderMax[sliderNumber] - sliderMin[sliderNumber] + centeredSlideOffset) * (scrollbarStageWidth - scrollMargin - scrollbarWidth) * scrollbarMultiplier);
                  var width = scrollbarWidth;
                  0 >= scrollbarDistance ? (width = scrollbarWidth - scrollBorder - -1 * scrollbarDistance, helpers.setSliderOffset($("." + scrollbarClass), 0), $("." + scrollbarClass).css({
                    width: width + "px"
                  })) : scrollbarDistance >= scrollbarStageWidth - scrollMargin - scrollBorder - scrollbarWidth ? (width = scrollbarStageWidth - scrollMargin - scrollBorder - scrollbarDistance, helpers.setSliderOffset($("." + scrollbarClass), scrollbarDistance), $("." + scrollbarClass).css({
                    width: width + "px"
                  })) : helpers.setSliderOffset($("." + scrollbarClass), scrollbarDistance)
                }
                "touchmove" == e.type && (lastTouch = e.touches[0].pageX);
                var slideChanged = !1,
                  newChildOffset = helpers.calcActiveOffset(settings, -1 * (xScrollStartPosition - eventX - edgeDegradation), childrenOffsets, stageWidth, infiniteSliderOffset[sliderNumber], numberOfSlides, void 0, sliderNumber),
                  tempOffset = (newChildOffset + infiniteSliderOffset[sliderNumber] + numberOfSlides) % numberOfSlides;
                if (settings.infiniteSlider ? tempOffset != activeChildInfOffsets[sliderNumber] && (slideChanged = !0) : newChildOffset != activeChildOffsets[sliderNumber] && (slideChanged = !0), slideChanged) {
                  activeChildOffsets[sliderNumber] = newChildOffset, activeChildInfOffsets[sliderNumber] = tempOffset, snapOverride = !0;
                  var args = new helpers.args("change", settings, scrollerNode, $(scrollerNode).children(":eq(" + tempOffset + ")"), tempOffset, tempOffset);
                  $(stageNode).data("args", args), "" != settings.onSlideChange && settings.onSlideChange(args), helpers.updateBackfaceVisibility(slideNodes, sliderNumber, numberOfSlides, settings)
                }
              }
            });
            var eventObject = $(window);
            if (isIe8 || isIe7) var eventObject = $(document);
            $(touchSelection).bind("touchcancel.iosSliderEvent touchend.iosSliderEvent", function(e) {
              var e = e.originalEvent;
              if (touchEndFlag) return !1;
              if (touchEndFlag = !0, touchLocks[sliderNumber] || shortContent) return !0;
              if (isUnselectable) return !0;
              if (0 != e.touches.length)
                for (var j = 0; j < e.touches.length; j++) e.touches[j].pageX == lastTouch && helpers.slowScrollHorizontal(scrollerNode, slideNodes, scrollTimeouts, scrollbarClass, xScrollDistance, yScrollDistance, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, currentEventNode, snapOverride, centeredSlideOffset, settings);
              else helpers.slowScrollHorizontal(scrollerNode, slideNodes, scrollTimeouts, scrollbarClass, xScrollDistance, yScrollDistance, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, currentEventNode, snapOverride, centeredSlideOffset, settings);
              return preventXScroll = !1, touchStartFlag = !1, !0
            }), $(eventObject).bind("mouseup.iosSliderEvent-" + sliderNumber, function() {
              if (xScrollStarted ? anchorEvents.unbind("click.disableClick").bind("click.disableClick", helpers.preventClick) : anchorEvents.unbind("click.disableClick").bind("click.disableClick", helpers.enableClick), onclickEvents.each(function() {
                  this.onclick = function(event) {
                    return xScrollStarted ? !1 : void($(this).data("onclick") && $(this).data("onclick").call(this, event || window.event))
                  }, this.onclick = $(this).data("onclick")
                }), parseFloat($().jquery) >= 1.8 ? allScrollerNodeChildren.each(function() {
                  var clickObject = $._data(this, "events");
                  if (void 0 != clickObject && void 0 != clickObject.click && "iosSliderEvent" != clickObject.click[0].namespace) {
                    if (!xScrollStarted) return !1;
                    $(this).one("click.disableClick", helpers.preventClick);
                    var handlers = $._data(this, "events").click,
                      handler = handlers.pop();
                    handlers.splice(0, 0, handler)
                  }
                }) : parseFloat($().jquery) >= 1.6 && allScrollerNodeChildren.each(function() {
                  var clickObject = $(this).data("events");
                  if (void 0 != clickObject && void 0 != clickObject.click && "iosSliderEvent" != clickObject.click[0].namespace) {
                    if (!xScrollStarted) return !1;
                    $(this).one("click.disableClick", helpers.preventClick);
                    var handlers = $(this).data("events").click,
                      handler = handlers.pop();
                    handlers.splice(0, 0, handler)
                  }
                }), !isEventCleared[sliderNumber]) {
                if (shortContent) return !0;
                if (settings.desktopClickDrag && $(scrollerNode).css({
                    cursor: grabOutCursor
                  }), settings.scrollbarDrag && $(scrollbarNode).css({
                    cursor: grabOutCursor
                  }), isMouseDown = !1, void 0 == currentSlider) return !0;
                helpers.slowScrollHorizontal(currentSlider, slideNodes, scrollTimeouts, scrollbarClass, xScrollDistance, yScrollDistance, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, currentEventNode, snapOverride, centeredSlideOffset, settings), currentSlider = void 0
              }
              preventXScroll = !1, touchStartFlag = !1
            })
          }
        })
      },
      destroy: function(clearStyle, node) {
        return void 0 == node && (node = this), $(node).each(function() {
          var $this = $(this),
            data = $this.data("iosslider");
          if (void 0 == data) return !1;
          void 0 == clearStyle && (clearStyle = !0), helpers.autoSlidePause(data.sliderNumber), isEventCleared[data.sliderNumber] = !0, $(window).unbind(".iosSliderEvent-" + data.sliderNumber), $(document).unbind(".iosSliderEvent-" + data.sliderNumber), $(document).unbind("keydown.iosSliderEvent"), $(this).unbind(".iosSliderEvent"), $(this).children(":first-child").unbind(".iosSliderEvent"), $(this).children(":first-child").children().unbind(".iosSliderEvent"), $(data.settings.scrollbarBlockNode).unbind(".iosSliderEvent"), clearStyle && ($(this).attr("style", ""), $(this).children(":first-child").attr("style", ""), $(this).children(":first-child").children().attr("style", ""), $(data.settings.navSlideSelector).attr("style", ""), $(data.settings.navPrevSelector).attr("style", ""), $(data.settings.navNextSelector).attr("style", ""), $(data.settings.autoSlideToggleSelector).attr("style", ""), $(data.settings.unselectableSelector).attr("style", "")), data.settings.scrollbar && $(".scrollbarBlock" + data.sliderNumber).remove();
          for (var scrollTimeouts = slideTimeouts[data.sliderNumber], i = 0; i < scrollTimeouts.length; i++) clearTimeout(scrollTimeouts[i]);
          $this.removeData("iosslider"), $this.removeData("args")
        })
      },
      update: function(node) {
        return void 0 == node && (node = this), $(node).each(function() {
          var $this = $(this),
            data = $this.data("iosslider");
          if (void 0 == data) return !1;
          data.settings.startAtSlide = $this.data("args").currentSlideNumber, methods.destroy(!1, this), 1 != data.numberOfSlides && data.settings.infiniteSlider && (data.settings.startAtSlide = (activeChildOffsets[data.sliderNumber] + 1 + infiniteSliderOffset[data.sliderNumber] + data.numberOfSlides) % data.numberOfSlides), methods.init(data.settings, this);
          var args = new helpers.args("update", data.settings, data.scrollerNode, $(data.scrollerNode).children(":eq(" + (data.settings.startAtSlide - 1) + ")"), data.settings.startAtSlide - 1, data.settings.startAtSlide - 1);
          $(data.stageNode).data("args", args), "" != data.settings.onSliderUpdate && data.settings.onSliderUpdate(args)
        })
      },
      addSlide: function(slideNode, slidePosition) {
        return this.each(function() {
          var $this = $(this),
            data = $this.data("iosslider");
          return void 0 == data ? !1 : (0 == $(data.scrollerNode).children().length ? ($(data.scrollerNode).append(slideNode), $this.data("args").currentSlideNumber = 1) : data.settings.infiniteSlider ? (1 == slidePosition ? $(data.scrollerNode).children(":eq(0)").before(slideNode) : $(data.scrollerNode).children(":eq(" + (slidePosition - 2) + ")").after(slideNode), infiniteSliderOffset[data.sliderNumber] < -1 && activeChildOffsets[data.sliderNumber]--, $this.data("args").currentSlideNumber >= slidePosition && activeChildOffsets[data.sliderNumber]++) : (slidePosition <= data.numberOfSlides ? $(data.scrollerNode).children(":eq(" + (slidePosition - 1) + ")").before(slideNode) : $(data.scrollerNode).children(":eq(" + (slidePosition - 2) + ")").after(slideNode), $this.data("args").currentSlideNumber >= slidePosition && $this.data("args").currentSlideNumber++), $this.data("iosslider").numberOfSlides++, void methods.update(this))
        })
      },
      removeSlide: function(slideNumber) {
        return this.each(function() {
          var $this = $(this),
            data = $this.data("iosslider");
          return void 0 == data ? !1 : ($(data.scrollerNode).children(":eq(" + (slideNumber - 1) + ")").remove(), activeChildOffsets[data.sliderNumber] > slideNumber - 1 && activeChildOffsets[data.sliderNumber]--, $this.data("iosslider").numberOfSlides--, void methods.update(this))
        })
      },
      goToSlide: function(slide, duration, node) {
        return void 0 == node && (node = this), $(node).each(function() {
          var $this = $(this),
            data = $this.data("iosslider");
          return void 0 == data || data.shortContent ? !1 : (slide = slide > data.childrenOffsets.length ? data.childrenOffsets.length - 1 : slide - 1, void 0 != duration && (data.settings.autoSlideTransTimer = duration), void helpers.changeSlide(slide, $(data.scrollerNode), $(data.slideNodes), slideTimeouts[data.sliderNumber], data.scrollbarClass, data.scrollbarWidth, data.stageWidth, data.scrollbarStageWidth, data.scrollMargin, data.scrollBorder, data.originalOffsets, data.childrenOffsets, data.slideNodeOuterWidths, data.sliderNumber, data.infiniteSliderWidth, data.numberOfSlides, data.centeredSlideOffset, data.settings))
        })
      },
      prevSlide: function(duration) {
        return this.each(function() {
          var $this = $(this),
            data = $this.data("iosslider");
          if (void 0 == data || data.shortContent) return !1;
          var slide = (activeChildOffsets[data.sliderNumber] + infiniteSliderOffset[data.sliderNumber] + data.numberOfSlides) % data.numberOfSlides;
          void 0 != duration && (data.settings.autoSlideTransTimer = duration), (slide > 0 || data.settings.infiniteSlider) && helpers.changeSlide(slide - 1, $(data.scrollerNode), $(data.slideNodes), slideTimeouts[data.sliderNumber], data.scrollbarClass, data.scrollbarWidth, data.stageWidth, data.scrollbarStageWidth, data.scrollMargin, data.scrollBorder, data.originalOffsets, data.childrenOffsets, data.slideNodeOuterWidths, data.sliderNumber, data.infiniteSliderWidth, data.numberOfSlides, data.centeredSlideOffset, data.settings), activeChildOffsets[data.sliderNumber] = slide
        })
      },
      nextSlide: function(duration) {
        return this.each(function() {
          var $this = $(this),
            data = $this.data("iosslider");
          if (void 0 == data || data.shortContent) return !1;
          var slide = (activeChildOffsets[data.sliderNumber] + infiniteSliderOffset[data.sliderNumber] + data.numberOfSlides) % data.numberOfSlides;
          void 0 != duration && (data.settings.autoSlideTransTimer = duration), (slide < data.childrenOffsets.length - 1 || data.settings.infiniteSlider) && helpers.changeSlide(slide + 1, $(data.scrollerNode), $(data.slideNodes), slideTimeouts[data.sliderNumber], data.scrollbarClass, data.scrollbarWidth, data.stageWidth, data.scrollbarStageWidth, data.scrollMargin, data.scrollBorder, data.originalOffsets, data.childrenOffsets, data.slideNodeOuterWidths, data.sliderNumber, data.infiniteSliderWidth, data.numberOfSlides, data.centeredSlideOffset, data.settings), activeChildOffsets[data.sliderNumber] = slide
        })
      },
      prevPage: function(duration, node) {
        return void 0 == node && (node = this), $(node).each(function() {
          var $this = $(this),
            data = $this.data("iosslider");
          if (void 0 == data) return !1;
          var newOffset = helpers.getSliderOffset(data.scrollerNode, "x") + data.stageWidth;
          void 0 != duration && (data.settings.autoSlideTransTimer = duration), helpers.changeOffset(newOffset, $(data.scrollerNode), $(data.slideNodes), slideTimeouts[data.sliderNumber], data.scrollbarClass, data.scrollbarWidth, data.stageWidth, data.scrollbarStageWidth, data.scrollMargin, data.scrollBorder, data.originalOffsets, data.childrenOffsets, data.slideNodeOuterWidths, data.sliderNumber, data.infiniteSliderWidth, data.numberOfSlides, data.centeredSlideOffset, data.settings)
        })
      },
      nextPage: function(duration, node) {
        return void 0 == node && (node = this), $(node).each(function() {
          var $this = $(this),
            data = $this.data("iosslider");
          if (void 0 == data) return !1;
          var newOffset = helpers.getSliderOffset(data.scrollerNode, "x") - data.stageWidth;
          void 0 != duration && (data.settings.autoSlideTransTimer = duration), helpers.changeOffset(newOffset, $(data.scrollerNode), $(data.slideNodes), slideTimeouts[data.sliderNumber], data.scrollbarClass, data.scrollbarWidth, data.stageWidth, data.scrollbarStageWidth, data.scrollMargin, data.scrollBorder, data.originalOffsets, data.childrenOffsets, data.slideNodeOuterWidths, data.sliderNumber, data.infiniteSliderWidth, data.numberOfSlides, data.centeredSlideOffset, data.settings)
        })
      },
      lock: function() {
        return this.each(function() {
          var $this = $(this),
            data = $this.data("iosslider");
          return void 0 == data || data.shortContent ? !1 : ($(data.scrollerNode).css({
            cursor: "default"
          }), void(touchLocks[data.sliderNumber] = !0))
        })
      },
      unlock: function() {
        return this.each(function() {
          var $this = $(this),
            data = $this.data("iosslider");
          return void 0 == data || data.shortContent ? !1 : ($(data.scrollerNode).css({
            cursor: grabOutCursor
          }), void(touchLocks[data.sliderNumber] = !1))
        })
      },
      getData: function() {
        return this.each(function() {
          var $this = $(this),
            data = $this.data("iosslider");
          return void 0 == data || data.shortContent ? !1 : data
        })
      },
      autoSlidePause: function() {
        return this.each(function() {
          var $this = $(this),
            data = $this.data("iosslider");
          return void 0 == data || data.shortContent ? !1 : (iosSliderSettings[data.sliderNumber].autoSlide = !1, helpers.autoSlidePause(data.sliderNumber), data)
        })
      },
      autoSlidePlay: function() {
        return this.each(function() {
          var $this = $(this),
            data = $this.data("iosslider");
          return void 0 == data || data.shortContent ? !1 : (iosSliderSettings[data.sliderNumber].autoSlide = !0, helpers.autoSlide($(data.scrollerNode), $(data.slideNodes), slideTimeouts[data.sliderNumber], data.scrollbarClass, data.scrollbarWidth, data.stageWidth, data.scrollbarStageWidth, data.scrollMargin, data.scrollBorder, data.originalOffsets, data.childrenOffsets, data.slideNodeOuterWidths, data.sliderNumber, data.infiniteSliderWidth, data.numberOfSlides, data.centeredSlideOffset, data.settings), data)
        })
      }
    };
    $.fn.iosSlider = function(method) {
      return methods[method] ? methods[method].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof method && method ? void $.error("invalid method call!") : methods.init.apply(this, arguments)
    }
  }(jQuery);
var CLIENT = window.CLIENT || {};
CLIENT.iosSlider = {
    isDown: !1,
    container: null,
    blurOthers: !1,
    init: function(container, blurOthers) {
      if ($.Log.debug("CLIENT.iosSlider.init"), "undefined" == typeof container) var container = "body";
      CLIENT.iosSlider.container = $(container), CLIENT.iosSlider.blurOthers = blurOthers || !0, CLIENT.iosSlider.bindDefaultEvents(), CLIENT.iosSlider.hoverLazyLoad($(".product-container"))
    },
    hoverLazyLoad: function(els) {
      els.on("mouseenter", function() {
        var el = $(this);
        el.find(".slider .item:not(.primary) img.img-load-on-hover").each(function() {
          $(this).attr("src", this.getAttribute("data-src")).bind("onreadystatechange load", function() {
            this.complete && $(this).removeClass("img-load-on-hover")
          })
        })
      })
    },
    changeSlideIconActive: function(args) {
      $.Log.debug("CLIENT.iosSlider.changeSlideIconActive"), $(args.sliderObject).parents(".product-container").hasClass("mobile_activated") || ($(".product-container").removeClass("mobile_activated"), $(args.sliderObject).parents(".product-container").addClass("mobile_activated"))
    },
    changeSlideIconDeactive: function() {},
    changeSlideIdentifier: function(args) {
      args.sliderObject.children().removeClass("primary"), args.targetSlideObject.addClass("primary"), args.targetSlideObject.parents(".product-container").find(".price span").html(args.targetSlideObject.find("img").data("price")), this_indicators = args.data.obj.parents(".product-container").find(".upper_line .indicator"), this_indicators.removeClass("active"), this_indicators.eq(args.targetSlideObject.index()).addClass("active")
    },
    bindDefaultEvents: function() {
      $.Log.debug("CLIENT.iosSlider.changeSlideIconActive"), $(".nix-carousel").on("mouseup touchstop", function() {
        $(this).removeClass("sliding"), $(this).parents(".product-container").find(".product-hotspot").removeClass("hidden")
      }).on("mousedown touchstop", function() {
        CLIENT.iosSlider.isDown = !0, $(this).addClass("sliding"), $(this).parents(".product-container").find(".product-hotspot").addClass("hidden")
      }), $(document).on("mouseup touchstop", function() {
        CLIENT.iosSlider.isDown && (CLIENT.iosSlider.isDown = !1, $(".nix-carousel").removeClass("sliding"), $(".product-container .product-hotspot").removeClass("hidden"))
      }), $(".item.nix-hero").on("click", function() {
        var link = $(this).find("a.nix-hero-button");
        link.length && (window.location = link.attr("href"))
      }), $(".product-container").find(".slider .item img").each(function() {
        $(this).removeAttr("style")
      })
    }
  },
  function(e, t, n) {
    "function" == typeof define && define.amd ? define(["jquery"], function(r) {
      return n(r, e, t), r.mobile
    }) : n(e.jQuery, e, t)
  }(this, document, function(e, t, n) {
    ! function(e, t, n, r) {
      function T(e) {
        for (; e && "undefined" != typeof e.originalEvent;) e = e.originalEvent;
        return e
      }

      function N(t, n) {
        var s, o, a, l, c, h, p, d, v, i = t.type;
        if (t = e.Event(t), t.type = n, s = t.originalEvent, o = e.event.props, i.search(/^(mouse|click)/) > -1 && (o = f), s)
          for (p = o.length, l; p;) l = o[--p], t[l] = s[l];
        if (i.search(/mouse(down|up)|click/) > -1 && !t.which && (t.which = 1), -1 !== i.search(/^touch/) && (a = T(s), i = a.touches, c = a.changedTouches, h = i && i.length ? i[0] : c && c.length ? c[0] : r, h))
          for (d = 0, v = u.length; v > d; d++) l = u[d], t[l] = h[l];
        return t
      }

      function C(t) {
        for (var r, s, n = {}; t;) {
          r = e.data(t, i);
          for (s in r) r[s] && (n[s] = n.hasVirtualBinding = !0);
          t = t.parentNode
        }
        return n
      }

      function k(t, n) {
        for (var r; t;) {
          if (r = e.data(t, i), r && (!n || r[n])) return t;
          t = t.parentNode
        }
        return null
      }

      function L() {
        g = !1
      }

      function A() {
        g = !0
      }

      function O() {
        E = 0, v.length = 0, m = !1, A()
      }

      function M() {
        L()
      }

      function _() {
        D(), c = setTimeout(function() {
          c = 0, O()
        }, e.vmouse.resetTimerDuration)
      }

      function D() {
        c && (clearTimeout(c), c = 0)
      }

      function P(t, n, r) {
        var i;
        return (r && r[t] || !r && k(n.target, t)) && (i = N(n, t), e(n.target).trigger(i)), i
      }

      function H(t) {
        var r, n = e.data(t.target, s);
        !m && (!E || E !== n) && (r = P("v" + t.type, t), r && (r.isDefaultPrevented() && t.preventDefault(), r.isPropagationStopped() && t.stopPropagation(), r.isImmediatePropagationStopped() && t.stopImmediatePropagation()))
      }

      function B(t) {
        var r, i, o, n = T(t).touches;
        n && 1 === n.length && (r = t.target, i = C(r), i.hasVirtualBinding && (E = w++, e.data(r, s, E), D(), M(), d = !1, o = T(t).touches[0], h = o.pageX, p = o.pageY, P("vmouseover", t, i), P("vmousedown", t, i)))
      }

      function j(e) {
        g || (d || P("vmousecancel", e, C(e.target)), d = !0, _())
      }

      function F(t) {
        if (!g) {
          var n = T(t).touches[0],
            r = d,
            i = e.vmouse.moveDistanceThreshold,
            s = C(t.target);
          d = d || Math.abs(n.pageX - h) > i || Math.abs(n.pageY - p) > i, d && !r && P("vmousecancel", t, s), P("vmousemove", t, s), _()
        }
      }

      function I(e) {
        if (!g) {
          A();
          var n, r, t = C(e.target);
          P("vmouseup", e, t), d || (n = P("vclick", e, t), n && n.isDefaultPrevented() && (r = T(e).changedTouches[0], v.push({
            touchID: E,
            x: r.clientX,
            y: r.clientY
          }), m = !0)), P("vmouseout", e, t), d = !1, _()
        }
      }

      function q(t) {
        var r, n = e.data(t, i);
        if (n)
          for (r in n)
            if (n[r]) return !0;
        return !1
      }

      function R() {}

      function U(t) {
        var n = t.substr(1);
        return {
          setup: function() {
            q(this) || e.data(this, i, {});
            var r = e.data(this, i);
            r[t] = !0, l[t] = (l[t] || 0) + 1, 1 === l[t] && b.bind(n, H), e(this).bind(n, R), y && (l.touchstart = (l.touchstart || 0) + 1, 1 === l.touchstart && b.bind("touchstart", B).bind("touchend", I).bind("touchmove", F).bind("scroll", j))
          },
          teardown: function() {
            --l[t], l[t] || b.unbind(n, H), y && (--l.touchstart, l.touchstart || b.unbind("touchstart", B).unbind("touchmove", F).unbind("touchend", I).unbind("scroll", j));
            var r = e(this),
              s = e.data(this, i);
            s && (s[t] = !1), r.unbind(n, R), q(this) || r.removeData(i)
          }
        }
      }
      var S, x, i = "virtualMouseBindings",
        s = "virtualTouchID",
        o = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),
        u = "clientX clientY pageX pageY screenX screenY".split(" "),
        a = e.event.mouseHooks ? e.event.mouseHooks.props : [],
        f = e.event.props.concat(a),
        l = {},
        c = 0,
        h = 0,
        p = 0,
        d = !1,
        v = [],
        m = !1,
        g = !1,
        y = "addEventListener" in n,
        b = e(n),
        w = 1,
        E = 0;
      for (e.vmouse = {
          moveDistanceThreshold: 10,
          clickDistanceThreshold: 10,
          resetTimerDuration: 1500
        }, x = 0; x < o.length; x++) e.event.special[o[x]] = U(o[x]);
      y && n.addEventListener("click", function(t) {
        var i, o, u, a, f, l, n = v.length,
          r = t.target;
        if (n)
          for (i = t.clientX, o = t.clientY, S = e.vmouse.clickDistanceThreshold, u = r; u;) {
            for (a = 0; n > a; a++)
              if (f = v[a], l = 0, u === r && Math.abs(f.x - i) < S && Math.abs(f.y - o) < S || e.data(u, s) === f.touchID) return t.preventDefault(), void t.stopPropagation();
            u = u.parentNode
          }
      }, !0)
    }(e, t, n),
    function(e) {
      e.mobile = {}
    }(e),
    function(e) {
      var r = {
        touch: "ontouchend" in n
      };
      e.mobile.support = e.mobile.support || {}, e.extend(e.support, r), e.extend(e.mobile.support, r)
    }(e),
    function(e, t, r) {
      function l(t, n, i, s) {
        var o = i.type;
        i.type = n, s ? e.event.trigger(i, r, t) : e.event.dispatch.call(t, i), i.type = o
      }
      var i = e(n),
        s = e.mobile.support.touch,
        o = "touchmove scroll",
        u = s ? "touchstart" : "mousedown",
        a = s ? "touchend" : "mouseup",
        f = s ? "touchmove" : "mousemove";
      e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "), function(t, n) {
        e.fn[n] = function(e) {
          return e ? this.bind(n, e) : this.trigger(n)
        }, e.attrFn && (e.attrFn[n] = !0)
      }), e.event.special.scrollstart = {
        enabled: !0,
        setup: function() {
          function s(e, n) {
            r = n, l(t, r ? "scrollstart" : "scrollstop", e)
          }
          var r, i, t = this,
            n = e(t);
          n.bind(o, function(t) {
            e.event.special.scrollstart.enabled && (r || s(t, !0), clearTimeout(i), i = setTimeout(function() {
              s(t, !1)
            }, 50))
          })
        },
        teardown: function() {
          e(this).unbind(o)
        }
      }, e.event.special.tap = {
        tapholdThreshold: 750,
        emitTapOnTaphold: !0,
        setup: function() {
          var t = this,
            n = e(t),
            r = !1;
          n.bind("vmousedown", function(s) {
            function a() {
              clearTimeout(u)
            }

            function f() {
              a(), n.unbind("vclick", c).unbind("vmouseup", a), i.unbind("vmousecancel", f)
            }

            function c(e) {
              f(), r || o !== e.target ? r && e.preventDefault() : l(t, "tap", e)
            }
            if (r = !1, s.which && 1 !== s.which) return !1;
            var u, o = s.target;
            n.bind("vmouseup", a).bind("vclick", c), i.bind("vmousecancel", f), u = setTimeout(function() {
              e.event.special.tap.emitTapOnTaphold || (r = !0), l(t, "taphold", e.Event("taphold", {
                target: o
              }))
            }, e.event.special.tap.tapholdThreshold)
          })
        },
        teardown: function() {
          e(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"), i.unbind("vmousecancel")
        }
      }, e.event.special.swipe = {
        scrollSupressionThreshold: 30,
        durationThreshold: 1e3,
        horizontalDistanceThreshold: 30,
        verticalDistanceThreshold: 30,
        getLocation: function(e) {
          var n = t.pageXOffset,
            r = t.pageYOffset,
            i = e.clientX,
            s = e.clientY;
          return 0 === e.pageY && Math.floor(s) > Math.floor(e.pageY) || 0 === e.pageX && Math.floor(i) > Math.floor(e.pageX) ? (i -= n, s -= r) : (s < e.pageY - r || i < e.pageX - n) && (i = e.pageX - n, s = e.pageY - r), {
            x: i,
            y: s
          }
        },
        start: function(t) {
          var n = t.originalEvent.touches ? t.originalEvent.touches[0] : t,
            r = e.event.special.swipe.getLocation(n);
          return {
            time: (new Date).getTime(),
            coords: [r.x, r.y],
            origin: e(t.target)
          }
        },
        stop: function(t) {
          var n = t.originalEvent.touches ? t.originalEvent.touches[0] : t,
            r = e.event.special.swipe.getLocation(n);
          return {
            time: (new Date).getTime(),
            coords: [r.x, r.y]
          }
        },
        handleSwipe: function(t, n, r, i) {
          if (n.time - t.time < e.event.special.swipe.durationThreshold && Math.abs(t.coords[0] - n.coords[0]) > e.event.special.swipe.horizontalDistanceThreshold && Math.abs(t.coords[1] - n.coords[1]) < e.event.special.swipe.verticalDistanceThreshold) {
            var s = t.coords[0] > n.coords[0] ? "swipeleft" : "swiperight";
            return l(r, "swipe", e.Event("swipe", {
              target: i,
              swipestart: t,
              swipestop: n
            }), !0), l(r, s, e.Event(s, {
              target: i,
              swipestart: t,
              swipestop: n
            }), !0), !0
          }
          return !1
        },
        eventInProgress: !1,
        setup: function() {
          var t, n = this,
            r = e(n),
            s = {};
          t = e.data(this, "mobile-events"), t || (t = {
            length: 0
          }, e.data(this, "mobile-events", t)), t.length++, t.swipe = s, s.start = function(t) {
            if (!e.event.special.swipe.eventInProgress) {
              e.event.special.swipe.eventInProgress = !0;
              var r, o = e.event.special.swipe.start(t),
                u = t.target,
                l = !1;
              s.move = function(t) {
                o && (r = e.event.special.swipe.stop(t), l || (l = e.event.special.swipe.handleSwipe(o, r, n, u), l && (e.event.special.swipe.eventInProgress = !1)), Math.abs(o.coords[0] - r.coords[0]) > e.event.special.swipe.scrollSupressionThreshold && t.preventDefault())
              }, s.stop = function() {
                l = !0, e.event.special.swipe.eventInProgress = !1, i.off(f, s.move), s.move = null
              }, i.on(f, s.move).one(a, s.stop)
            }
          }, r.on(u, s.start)
        },
        teardown: function() {
          var t, n;
          t = e.data(this, "mobile-events"), t && (n = t.swipe, delete t.swipe, t.length--, 0 === t.length && e.removeData(this, "mobile-events")), n && (n.start && e(this).off(u, n.start), n.move && i.off(f, n.move), n.stop && i.off(a, n.stop))
        }
      }, e.each({
        scrollstop: "scrollstart",
        taphold: "tap",
        swipeleft: "swipe.left",
        swiperight: "swipe.right"
      }, function(t, n) {
        e.event.special[t] = {
          setup: function() {
            e(this).bind(n, e.noop)
          },
          teardown: function() {
            e(this).unbind(n)
          }
        }
      })
    }(e, this)
  }), ! function(a, b, c, d) {
    "use strict";

    function e(a, b, c) {
      return setTimeout(k(a, c), b)
    }

    function f(a, b, c) {
      return Array.isArray(a) ? (g(a, c[b], c), !0) : !1
    }

    function g(a, b, c) {
      var e;
      if (a)
        if (a.forEach) a.forEach(b, c);
        else if (a.length !== d)
        for (e = 0; e < a.length;) b.call(c, a[e], e, a), e++;
      else
        for (e in a) a.hasOwnProperty(e) && b.call(c, a[e], e, a)
    }

    function h(a, b, c) {
      for (var e = Object.keys(b), f = 0; f < e.length;)(!c || c && a[e[f]] === d) && (a[e[f]] = b[e[f]]), f++;
      return a
    }

    function i(a, b) {
      return h(a, b, !0)
    }

    function j(a, b, c) {
      var d, e = b.prototype;
      d = a.prototype = Object.create(e), d.constructor = a, d._super = e, c && h(d, c)
    }

    function k(a, b) {
      return function() {
        return a.apply(b, arguments)
      }
    }

    function l(a, b) {
      return typeof a == kb ? a.apply(b ? b[0] || d : d, b) : a
    }

    function m(a, b) {
      return a === d ? b : a
    }

    function n(a, b, c) {
      g(r(b), function(b) {
        a.addEventListener(b, c, !1)
      })
    }

    function o(a, b, c) {
      g(r(b), function(b) {
        a.removeEventListener(b, c, !1)
      })
    }

    function p(a, b) {
      for (; a;) {
        if (a == b) return !0;
        a = a.parentNode
      }
      return !1
    }

    function q(a, b) {
      return a.indexOf(b) > -1
    }

    function r(a) {
      return a.trim().split(/\s+/g)
    }

    function s(a, b, c) {
      if (a.indexOf && !c) return a.indexOf(b);
      for (var d = 0; d < a.length;) {
        if (c && a[d][c] == b || !c && a[d] === b) return d;
        d++
      }
      return -1
    }

    function t(a) {
      return Array.prototype.slice.call(a, 0)
    }

    function u(a, b, c) {
      for (var d = [], e = [], f = 0; f < a.length;) {
        var g = b ? a[f][b] : a[f];
        s(e, g) < 0 && d.push(a[f]), e[f] = g, f++
      }
      return c && (d = b ? d.sort(function(a, c) {
        return a[b] > c[b]
      }) : d.sort()), d
    }

    function v(a, b) {
      for (var c, e, f = b[0].toUpperCase() + b.slice(1), g = 0; g < ib.length;) {
        if (c = ib[g], e = c ? c + f : b, e in a) return e;
        g++
      }
      return d
    }

    function w() {
      return ob++
    }

    function x(a) {
      var b = a.ownerDocument;
      return b.defaultView || b.parentWindow
    }

    function y(a, b) {
      var c = this;
      this.manager = a, this.callback = b, this.element = a.element, this.target = a.options.inputTarget, this.domHandler = function(b) {
        l(a.options.enable, [a]) && c.handler(b)
      }, this.init()
    }

    function z(a) {
      var b, c = a.options.inputClass;
      return new(b = c ? c : rb ? N : sb ? Q : qb ? S : M)(a, A)
    }

    function A(a, b, c) {
      var d = c.pointers.length,
        e = c.changedPointers.length,
        f = b & yb && d - e === 0,
        g = b & (Ab | Bb) && d - e === 0;
      c.isFirst = !!f, c.isFinal = !!g, f && (a.session = {}), c.eventType = b, B(a, c), a.emit("hammer.input", c), a.recognize(c), a.session.prevInput = c
    }

    function B(a, b) {
      var c = a.session,
        d = b.pointers,
        e = d.length;
      c.firstInput || (c.firstInput = E(b)), e > 1 && !c.firstMultiple ? c.firstMultiple = E(b) : 1 === e && (c.firstMultiple = !1);
      var f = c.firstInput,
        g = c.firstMultiple,
        h = g ? g.center : f.center,
        i = b.center = F(d);
      b.timeStamp = nb(), b.deltaTime = b.timeStamp - f.timeStamp, b.angle = J(h, i), b.distance = I(h, i), C(c, b), b.offsetDirection = H(b.deltaX, b.deltaY), b.scale = g ? L(g.pointers, d) : 1, b.rotation = g ? K(g.pointers, d) : 0, D(c, b);
      var j = a.element;
      p(b.srcEvent.target, j) && (j = b.srcEvent.target), b.target = j
    }

    function C(a, b) {
      var c = b.center,
        d = a.offsetDelta || {},
        e = a.prevDelta || {},
        f = a.prevInput || {};
      (b.eventType === yb || f.eventType === Ab) && (e = a.prevDelta = {
        x: f.deltaX || 0,
        y: f.deltaY || 0
      }, d = a.offsetDelta = {
        x: c.x,
        y: c.y
      }), b.deltaX = e.x + (c.x - d.x), b.deltaY = e.y + (c.y - d.y)
    }

    function D(a, b) {
      var c, e, f, g, h = a.lastInterval || b,
        i = b.timeStamp - h.timeStamp;
      if (b.eventType != Bb && (i > xb || h.velocity === d)) {
        var j = h.deltaX - b.deltaX,
          k = h.deltaY - b.deltaY,
          l = G(i, j, k);
        e = l.x, f = l.y, c = mb(l.x) > mb(l.y) ? l.x : l.y, g = H(j, k), a.lastInterval = b
      } else c = h.velocity, e = h.velocityX, f = h.velocityY, g = h.direction;
      b.velocity = c, b.velocityX = e, b.velocityY = f, b.direction = g
    }

    function E(a) {
      for (var b = [], c = 0; c < a.pointers.length;) b[c] = {
        clientX: lb(a.pointers[c].clientX),
        clientY: lb(a.pointers[c].clientY)
      }, c++;
      return {
        timeStamp: nb(),
        pointers: b,
        center: F(b),
        deltaX: a.deltaX,
        deltaY: a.deltaY
      }
    }

    function F(a) {
      var b = a.length;
      if (1 === b) return {
        x: lb(a[0].clientX),
        y: lb(a[0].clientY)
      };
      for (var c = 0, d = 0, e = 0; b > e;) c += a[e].clientX, d += a[e].clientY, e++;
      return {
        x: lb(c / b),
        y: lb(d / b)
      }
    }

    function G(a, b, c) {
      return {
        x: b / a || 0,
        y: c / a || 0
      }
    }

    function H(a, b) {
      return a === b ? Cb : mb(a) >= mb(b) ? a > 0 ? Db : Eb : b > 0 ? Fb : Gb
    }

    function I(a, b, c) {
      c || (c = Kb);
      var d = b[c[0]] - a[c[0]],
        e = b[c[1]] - a[c[1]];
      return Math.sqrt(d * d + e * e)
    }

    function J(a, b, c) {
      c || (c = Kb);
      var d = b[c[0]] - a[c[0]],
        e = b[c[1]] - a[c[1]];
      return 180 * Math.atan2(e, d) / Math.PI
    }

    function K(a, b) {
      return J(b[1], b[0], Lb) - J(a[1], a[0], Lb)
    }

    function L(a, b) {
      return I(b[0], b[1], Lb) / I(a[0], a[1], Lb)
    }

    function M() {
      this.evEl = Nb, this.evWin = Ob, this.allow = !0, this.pressed = !1, y.apply(this, arguments)
    }

    function N() {
      this.evEl = Rb, this.evWin = Sb, y.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
    }

    function O() {
      this.evTarget = Ub, this.evWin = Vb, this.started = !1, y.apply(this, arguments)
    }

    function P(a, b) {
      var c = t(a.touches),
        d = t(a.changedTouches);
      return b & (Ab | Bb) && (c = u(c.concat(d), "identifier", !0)), [c, d]
    }

    function Q() {
      this.evTarget = Xb, this.targetIds = {}, y.apply(this, arguments)
    }

    function R(a, b) {
      var c = t(a.touches),
        d = this.targetIds;
      if (b & (yb | zb) && 1 === c.length) return d[c[0].identifier] = !0, [c, c];
      var e, f, g = t(a.changedTouches),
        h = [],
        i = this.target;
      if (f = c.filter(function(a) {
          return p(a.target, i)
        }), b === yb)
        for (e = 0; e < f.length;) d[f[e].identifier] = !0, e++;
      for (e = 0; e < g.length;) d[g[e].identifier] && h.push(g[e]), b & (Ab | Bb) && delete d[g[e].identifier], e++;
      return h.length ? [u(f.concat(h), "identifier", !0), h] : void 0
    }

    function S() {
      y.apply(this, arguments);
      var a = k(this.handler, this);
      this.touch = new Q(this.manager, a), this.mouse = new M(this.manager, a)
    }

    function T(a, b) {
      this.manager = a, this.set(b)
    }

    function U(a) {
      if (q(a, bc)) return bc;
      var b = q(a, cc),
        c = q(a, dc);
      return b && c ? cc + " " + dc : b || c ? b ? cc : dc : q(a, ac) ? ac : _b
    }

    function V(a) {
      this.id = w(), this.manager = null, this.options = i(a || {}, this.defaults), this.options.enable = m(this.options.enable, !0), this.state = ec, this.simultaneous = {}, this.requireFail = []
    }

    function W(a) {
      return a & jc ? "cancel" : a & hc ? "end" : a & gc ? "move" : a & fc ? "start" : ""
    }

    function X(a) {
      return a == Gb ? "down" : a == Fb ? "up" : a == Db ? "left" : a == Eb ? "right" : ""
    }

    function Y(a, b) {
      var c = b.manager;
      return c ? c.get(a) : a
    }

    function Z() {
      V.apply(this, arguments)
    }

    function $() {
      Z.apply(this, arguments), this.pX = null, this.pY = null
    }

    function _() {
      Z.apply(this, arguments)
    }

    function ab() {
      V.apply(this, arguments), this._timer = null, this._input = null
    }

    function bb() {
      Z.apply(this, arguments)
    }

    function cb() {
      Z.apply(this, arguments)
    }

    function db() {
      V.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
    }

    function eb(a, b) {
      return b = b || {}, b.recognizers = m(b.recognizers, eb.defaults.preset), new fb(a, b)
    }

    function fb(a, b) {
      b = b || {}, this.options = i(b, eb.defaults), this.options.inputTarget = this.options.inputTarget || a, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = a, this.input = z(this), this.touchAction = new T(this, this.options.touchAction), gb(this, !0), g(b.recognizers, function(a) {
        var b = this.add(new a[0](a[1]));
        a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[3])
      }, this)
    }

    function gb(a, b) {
      var c = a.element;
      g(a.options.cssProps, function(a, d) {
        c.style[v(c.style, d)] = b ? a : ""
      })
    }

    function hb(a, c) {
      var d = b.createEvent("Event");
      d.initEvent(a, !0, !0), d.gesture = c, c.target.dispatchEvent(d)
    }
    var ib = ["", "webkit", "moz", "MS", "ms", "o"],
      jb = b.createElement("div"),
      kb = "function",
      lb = Math.round,
      mb = Math.abs,
      nb = Date.now,
      ob = 1,
      pb = /mobile|tablet|ip(ad|hone|od)|android/i,
      qb = "ontouchstart" in a,
      rb = v(a, "PointerEvent") !== d,
      sb = qb && pb.test(navigator.userAgent),
      tb = "touch",
      ub = "pen",
      vb = "mouse",
      wb = "kinect",
      xb = 25,
      yb = 1,
      zb = 2,
      Ab = 4,
      Bb = 8,
      Cb = 1,
      Db = 2,
      Eb = 4,
      Fb = 8,
      Gb = 16,
      Hb = Db | Eb,
      Ib = Fb | Gb,
      Jb = Hb | Ib,
      Kb = ["x", "y"],
      Lb = ["clientX", "clientY"];
    y.prototype = {
      handler: function() {},
      init: function() {
        this.evEl && n(this.element, this.evEl, this.domHandler), this.evTarget && n(this.target, this.evTarget, this.domHandler), this.evWin && n(x(this.element), this.evWin, this.domHandler)
      },
      destroy: function() {
        this.evEl && o(this.element, this.evEl, this.domHandler), this.evTarget && o(this.target, this.evTarget, this.domHandler), this.evWin && o(x(this.element), this.evWin, this.domHandler)
      }
    };
    var Mb = {
        mousedown: yb,
        mousemove: zb,
        mouseup: Ab
      },
      Nb = "mousedown",
      Ob = "mousemove mouseup";
    j(M, y, {
      handler: function(a) {
        var b = Mb[a.type];
        b & yb && 0 === a.button && (this.pressed = !0), b & zb && 1 !== a.which && (b = Ab), this.pressed && this.allow && (b & Ab && (this.pressed = !1), this.callback(this.manager, b, {
          pointers: [a],
          changedPointers: [a],
          pointerType: vb,
          srcEvent: a
        }))
      }
    });
    var Pb = {
        pointerdown: yb,
        pointermove: zb,
        pointerup: Ab,
        pointercancel: Bb,
        pointerout: Bb
      },
      Qb = {
        2: tb,
        3: ub,
        4: vb,
        5: wb
      },
      Rb = "pointerdown",
      Sb = "pointermove pointerup pointercancel";
    a.MSPointerEvent && (Rb = "MSPointerDown", Sb = "MSPointerMove MSPointerUp MSPointerCancel"), j(N, y, {
      handler: function(a) {
        var b = this.store,
          c = !1,
          d = a.type.toLowerCase().replace("ms", ""),
          e = Pb[d],
          f = Qb[a.pointerType] || a.pointerType,
          g = f == tb,
          h = s(b, a.pointerId, "pointerId");
        e & yb && (0 === a.button || g) ? 0 > h && (b.push(a), h = b.length - 1) : e & (Ab | Bb) && (c = !0), 0 > h || (b[h] = a, this.callback(this.manager, e, {
          pointers: b,
          changedPointers: [a],
          pointerType: f,
          srcEvent: a
        }), c && b.splice(h, 1))
      }
    });
    var Tb = {
        touchstart: yb,
        touchmove: zb,
        touchend: Ab,
        touchcancel: Bb
      },
      Ub = "touchstart",
      Vb = "touchstart touchmove touchend touchcancel";
    j(O, y, {
      handler: function(a) {
        var b = Tb[a.type];
        if (b === yb && (this.started = !0), this.started) {
          var c = P.call(this, a, b);
          b & (Ab | Bb) && c[0].length - c[1].length === 0 && (this.started = !1), this.callback(this.manager, b, {
            pointers: c[0],
            changedPointers: c[1],
            pointerType: tb,
            srcEvent: a
          })
        }
      }
    });
    var Wb = {
        touchstart: yb,
        touchmove: zb,
        touchend: Ab,
        touchcancel: Bb
      },
      Xb = "touchstart touchmove touchend touchcancel";
    j(Q, y, {
      handler: function(a) {
        var b = Wb[a.type],
          c = R.call(this, a, b);
        c && this.callback(this.manager, b, {
          pointers: c[0],
          changedPointers: c[1],
          pointerType: tb,
          srcEvent: a
        })
      }
    }), j(S, y, {
      handler: function(a, b, c) {
        var d = c.pointerType == tb,
          e = c.pointerType == vb;
        if (d) this.mouse.allow = !1;
        else if (e && !this.mouse.allow) return;
        b & (Ab | Bb) && (this.mouse.allow = !0), this.callback(a, b, c)
      },
      destroy: function() {
        this.touch.destroy(), this.mouse.destroy()
      }
    });
    var Yb = v(jb.style, "touchAction"),
      Zb = Yb !== d,
      $b = "compute",
      _b = "auto",
      ac = "manipulation",
      bc = "none",
      cc = "pan-x",
      dc = "pan-y";
    T.prototype = {
      set: function(a) {
        a == $b && (a = this.compute()), Zb && (this.manager.element.style[Yb] = a), this.actions = a.toLowerCase().trim()
      },
      update: function() {
        this.set(this.manager.options.touchAction)
      },
      compute: function() {
        var a = [];
        return g(this.manager.recognizers, function(b) {
          l(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()))
        }), U(a.join(" "))
      },
      preventDefaults: function(a) {
        if (!Zb) {
          var b = a.srcEvent,
            c = a.offsetDirection;
          if (this.manager.session.prevented) return void b.preventDefault();
          var d = this.actions,
            e = q(d, bc),
            f = q(d, dc),
            g = q(d, cc);
          return e || f && c & Hb || g && c & Ib ? this.preventSrc(b) : void 0
        }
      },
      preventSrc: function(a) {
        this.manager.session.prevented = !0, a.preventDefault()
      }
    };
    var ec = 1,
      fc = 2,
      gc = 4,
      hc = 8,
      ic = hc,
      jc = 16,
      kc = 32;
    V.prototype = {
      defaults: {},
      set: function(a) {
        return h(this.options, a), this.manager && this.manager.touchAction.update(), this
      },
      recognizeWith: function(a) {
        if (f(a, "recognizeWith", this)) return this;
        var b = this.simultaneous;
        return a = Y(a, this), b[a.id] || (b[a.id] = a, a.recognizeWith(this)), this
      },
      dropRecognizeWith: function(a) {
        return f(a, "dropRecognizeWith", this) ? this : (a = Y(a, this), delete this.simultaneous[a.id], this)
      },
      requireFailure: function(a) {
        if (f(a, "requireFailure", this)) return this;
        var b = this.requireFail;
        return a = Y(a, this), -1 === s(b, a) && (b.push(a), a.requireFailure(this)), this
      },
      dropRequireFailure: function(a) {
        if (f(a, "dropRequireFailure", this)) return this;
        a = Y(a, this);
        var b = s(this.requireFail, a);
        return b > -1 && this.requireFail.splice(b, 1), this
      },
      hasRequireFailures: function() {
        return this.requireFail.length > 0
      },
      canRecognizeWith: function(a) {
        return !!this.simultaneous[a.id]
      },
      emit: function(a) {
        function b(b) {
          c.manager.emit(c.options.event + (b ? W(d) : ""), a)
        }
        var c = this,
          d = this.state;
        hc > d && b(!0), b(), d >= hc && b(!0)
      },
      tryEmit: function(a) {
        return this.canEmit() ? this.emit(a) : void(this.state = kc)
      },
      canEmit: function() {
        for (var a = 0; a < this.requireFail.length;) {
          if (!(this.requireFail[a].state & (kc | ec))) return !1;
          a++
        }
        return !0
      },
      recognize: function(a) {
        var b = h({}, a);
        return l(this.options.enable, [this, b]) ? (this.state & (ic | jc | kc) && (this.state = ec), this.state = this.process(b), void(this.state & (fc | gc | hc | jc) && this.tryEmit(b))) : (this.reset(), void(this.state = kc))
      },
      process: function() {},
      getTouchAction: function() {},
      reset: function() {}
    }, j(Z, V, {
      defaults: {
        pointers: 1
      },
      attrTest: function(a) {
        var b = this.options.pointers;
        return 0 === b || a.pointers.length === b
      },
      process: function(a) {
        var b = this.state,
          c = a.eventType,
          d = b & (fc | gc),
          e = this.attrTest(a);
        return d && (c & Bb || !e) ? b | jc : d || e ? c & Ab ? b | hc : b & fc ? b | gc : fc : kc
      }
    }), j($, Z, {
      defaults: {
        event: "pan",
        threshold: 10,
        pointers: 1,
        direction: Jb
      },
      getTouchAction: function() {
        var a = this.options.direction,
          b = [];
        return a & Hb && b.push(dc), a & Ib && b.push(cc), b
      },
      directionTest: function(a) {
        var b = this.options,
          c = !0,
          d = a.distance,
          e = a.direction,
          f = a.deltaX,
          g = a.deltaY;
        return e & b.direction || (b.direction & Hb ? (e = 0 === f ? Cb : 0 > f ? Db : Eb, c = f != this.pX, d = Math.abs(a.deltaX)) : (e = 0 === g ? Cb : 0 > g ? Fb : Gb, c = g != this.pY, d = Math.abs(a.deltaY))), a.direction = e, c && d > b.threshold && e & b.direction
      },
      attrTest: function(a) {
        return Z.prototype.attrTest.call(this, a) && (this.state & fc || !(this.state & fc) && this.directionTest(a))
      },
      emit: function(a) {
        this.pX = a.deltaX, this.pY = a.deltaY;
        var b = X(a.direction);
        b && this.manager.emit(this.options.event + b, a), this._super.emit.call(this, a)
      }
    }), j(_, Z, {
      defaults: {
        event: "pinch",
        threshold: 0,
        pointers: 2
      },
      getTouchAction: function() {
        return [bc]
      },
      attrTest: function(a) {
        return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & fc)
      },
      emit: function(a) {
        if (this._super.emit.call(this, a), 1 !== a.scale) {
          var b = a.scale < 1 ? "in" : "out";
          this.manager.emit(this.options.event + b, a)
        }
      }
    }), j(ab, V, {
      defaults: {
        event: "press",
        pointers: 1,
        time: 500,
        threshold: 5
      },
      getTouchAction: function() {
        return [_b]
      },
      process: function(a) {
        var b = this.options,
          c = a.pointers.length === b.pointers,
          d = a.distance < b.threshold,
          f = a.deltaTime > b.time;
        if (this._input = a, !d || !c || a.eventType & (Ab | Bb) && !f) this.reset();
        else if (a.eventType & yb) this.reset(), this._timer = e(function() {
          this.state = ic, this.tryEmit()
        }, b.time, this);
        else if (a.eventType & Ab) return ic;
        return kc
      },
      reset: function() {
        clearTimeout(this._timer)
      },
      emit: function(a) {
        this.state === ic && (a && a.eventType & Ab ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp = nb(), this.manager.emit(this.options.event, this._input)))
      }
    }), j(bb, Z, {
      defaults: {
        event: "rotate",
        threshold: 0,
        pointers: 2
      },
      getTouchAction: function() {
        return [bc]
      },
      attrTest: function(a) {
        return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & fc)
      }
    }), j(cb, Z, {
      defaults: {
        event: "swipe",
        threshold: 10,
        velocity: .65,
        direction: Hb | Ib,
        pointers: 1
      },
      getTouchAction: function() {
        return $.prototype.getTouchAction.call(this)
      },
      attrTest: function(a) {
        var b, c = this.options.direction;
        return c & (Hb | Ib) ? b = a.velocity : c & Hb ? b = a.velocityX : c & Ib && (b = a.velocityY), this._super.attrTest.call(this, a) && c & a.direction && a.distance > this.options.threshold && mb(b) > this.options.velocity && a.eventType & Ab
      },
      emit: function(a) {
        var b = X(a.direction);
        b && this.manager.emit(this.options.event + b, a), this.manager.emit(this.options.event, a)
      }
    }), j(db, V, {
      defaults: {
        event: "tap",
        pointers: 1,
        taps: 1,
        interval: 300,
        time: 250,
        threshold: 2,
        posThreshold: 10
      },
      getTouchAction: function() {
        return [ac]
      },
      process: function(a) {
        var b = this.options,
          c = a.pointers.length === b.pointers,
          d = a.distance < b.threshold,
          f = a.deltaTime < b.time;
        if (this.reset(), a.eventType & yb && 0 === this.count) return this.failTimeout();
        if (d && f && c) {
          if (a.eventType != Ab) return this.failTimeout();
          var g = this.pTime ? a.timeStamp - this.pTime < b.interval : !0,
            h = !this.pCenter || I(this.pCenter, a.center) < b.posThreshold;
          this.pTime = a.timeStamp, this.pCenter = a.center, h && g ? this.count += 1 : this.count = 1, this._input = a;
          var i = this.count % b.taps;
          if (0 === i) return this.hasRequireFailures() ? (this._timer = e(function() {
            this.state = ic, this.tryEmit()
          }, b.interval, this), fc) : ic
        }
        return kc
      },
      failTimeout: function() {
        return this._timer = e(function() {
          this.state = kc
        }, this.options.interval, this), kc
      },
      reset: function() {
        clearTimeout(this._timer)
      },
      emit: function() {
        this.state == ic && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
      }
    }), eb.VERSION = "2.0.4", eb.defaults = {
      domEvents: !1,
      touchAction: $b,
      enable: !0,
      inputTarget: null,
      inputClass: null,
      preset: [
        [bb, {
          enable: !1
        }],
        [_, {
            enable: !1
          },
          ["rotate"]
        ],
        [cb, {
          direction: Hb
        }],
        [$, {
            direction: Hb
          },
          ["swipe"]
        ],
        [db],
        [db, {
            event: "doubletap",
            taps: 2
          },
          ["tap"]
        ],
        [ab]
      ],
      cssProps: {
        userSelect: "none",
        touchSelect: "none",
        touchCallout: "none",
        contentZooming: "none",
        userDrag: "none",
        tapHighlightColor: "rgba(0,0,0,0)"
      }
    };
    var lc = 1,
      mc = 2;
    fb.prototype = {
      set: function(a) {
        return h(this.options, a), a.touchAction && this.touchAction.update(), a.inputTarget && (this.input.destroy(), this.input.target = a.inputTarget, this.input.init()), this
      },
      stop: function(a) {
        this.session.stopped = a ? mc : lc
      },
      recognize: function(a) {
        var b = this.session;
        if (!b.stopped) {
          this.touchAction.preventDefaults(a);
          var c, d = this.recognizers,
            e = b.curRecognizer;
          (!e || e && e.state & ic) && (e = b.curRecognizer = null);
          for (var f = 0; f < d.length;) c = d[f], b.stopped === mc || e && c != e && !c.canRecognizeWith(e) ? c.reset() : c.recognize(a), !e && c.state & (fc | gc | hc) && (e = b.curRecognizer = c), f++
        }
      },
      get: function(a) {
        if (a instanceof V) return a;
        for (var b = this.recognizers, c = 0; c < b.length; c++)
          if (b[c].options.event == a) return b[c];
        return null
      },
      add: function(a) {
        if (f(a, "add", this)) return this;
        var b = this.get(a.options.event);
        return b && this.remove(b), this.recognizers.push(a), a.manager = this, this.touchAction.update(), a
      },
      remove: function(a) {
        if (f(a, "remove", this)) return this;
        var b = this.recognizers;
        return a = this.get(a), b.splice(s(b, a), 1), this.touchAction.update(), this
      },
      on: function(a, b) {
        var c = this.handlers;
        return g(r(a), function(a) {
          c[a] = c[a] || [], c[a].push(b)
        }), this
      },
      off: function(a, b) {
        var c = this.handlers;
        return g(r(a), function(a) {
          b ? c[a].splice(s(c[a], b), 1) : delete c[a]
        }), this
      },
      emit: function(a, b) {
        this.options.domEvents && hb(a, b);
        var c = this.handlers[a] && this.handlers[a].slice();
        if (c && c.length) {
          b.type = a, b.preventDefault = function() {
            b.srcEvent.preventDefault()
          };
          for (var d = 0; d < c.length;) c[d](b), d++
        }
      },
      destroy: function() {
        this.element && gb(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
      }
    }, h(eb, {
      INPUT_START: yb,
      INPUT_MOVE: zb,
      INPUT_END: Ab,
      INPUT_CANCEL: Bb,
      STATE_POSSIBLE: ec,
      STATE_BEGAN: fc,
      STATE_CHANGED: gc,
      STATE_ENDED: hc,
      STATE_RECOGNIZED: ic,
      STATE_CANCELLED: jc,
      STATE_FAILED: kc,
      DIRECTION_NONE: Cb,
      DIRECTION_LEFT: Db,
      DIRECTION_RIGHT: Eb,
      DIRECTION_UP: Fb,
      DIRECTION_DOWN: Gb,
      DIRECTION_HORIZONTAL: Hb,
      DIRECTION_VERTICAL: Ib,
      DIRECTION_ALL: Jb,
      Manager: fb,
      Input: y,
      TouchAction: T,
      TouchInput: Q,
      MouseInput: M,
      PointerEventInput: N,
      TouchMouseInput: S,
      SingleTouchInput: O,
      Recognizer: V,
      AttrRecognizer: Z,
      Tap: db,
      Pan: $,
      Swipe: cb,
      Pinch: _,
      Rotate: bb,
      Press: ab,
      on: n,
      off: o,
      each: g,
      merge: i,
      extend: h,
      inherit: j,
      bindFn: k,
      prefixed: v
    }), typeof define == kb && define.amd ? define(function() {
      return eb
    }) : "undefined" != typeof module && module.exports ? module.exports = eb : a[c] = eb
  }(window, document, "Hammer"),
  function(factory) {
    "function" == typeof define && define.amd ? define(["jquery", "hammerjs"], factory) : "object" == typeof exports ? factory(require("jquery"), require("hammerjs")) : factory(jQuery, Hammer)
  }(function($, Hammer) {
    function hammerify(el, options) {
      var $el = $(el);
      $el.data("hammer") || $el.data("hammer", new Hammer($el[0], options))
    }
    $.fn.hammer = function(options) {
      return this.each(function() {
        hammerify(this, options)
      })
    }, Hammer.Manager.prototype.emit = function(originalEmit) {
      return function(type, data) {
        originalEmit.call(this, type, data), $(this.element).trigger({
          type: type,
          gesture: data
        })
      }
    }(Hammer.Manager.prototype.emit)
  });