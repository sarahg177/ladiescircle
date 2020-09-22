/*! This file is auto-generated */
!function(V,q){var B=V(document),H=V(q),Y=V(document.body),G=wp.i18n.__;q.adminMenu={init:function(){},fold:function(){},restoreMenuState:function(){},toggle:function(){},favorites:function(){}},q.columns={init:function(){var n=this;V(".hide-column-tog","#adv-settings").click(function(){var e=V(this),t=e.val();e.prop("checked")?n.checked(t):n.unchecked(t),columns.saveManageColumnsState()})},saveManageColumnsState:function(){var e=this.hidden();V.post(ajaxurl,{action:"hidden-columns",hidden:e,screenoptionnonce:V("#screenoptionnonce").val(),page:pagenow})},checked:function(e){V(".column-"+e).removeClass("hidden"),this.colSpanChange(1)},unchecked:function(e){V(".column-"+e).addClass("hidden"),this.colSpanChange(-1)},hidden:function(){return V(".manage-column[id]").filter(".hidden").map(function(){return this.id}).get().join(",")},useCheckboxesForHidden:function(){this.hidden=function(){return V(".hide-column-tog").not(":checked").map(function(){var e=this.id;return e.substring(e,e.length-5)}).get().join(",")}},colSpanChange:function(e){var t,n=V("table").find(".colspanchange");n.length&&(t=parseInt(n.attr("colspan"),10)+e,n.attr("colspan",t.toString()))}},B.ready(function(){columns.init()}),q.validateForm=function(e){return!V(e).find(".form-required").filter(function(){return""===V(":input:visible",this).val()}).addClass("form-invalid").find(":input:visible").change(function(){V(this).closest(".form-invalid").removeClass("form-invalid")}).length},q.showNotice={warn:function(){return!!confirm(G("You are about to permanently delete these items from your site.\nThis action cannot be undone.\n'Cancel' to stop, 'OK' to delete."))},note:function(e){alert(e)}},q.screenMeta={element:null,toggles:null,page:null,init:function(){this.element=V("#screen-meta"),this.toggles=V("#screen-meta-links").find(".show-settings"),this.page=V("#wpcontent"),this.toggles.click(this.toggleEvent)},toggleEvent:function(){var e=V("#"+V(this).attr("aria-controls"));e.length&&(e.is(":visible")?screenMeta.close(e,V(this)):screenMeta.open(e,V(this)))},open:function(e,t){V("#screen-meta-links").find(".screen-meta-toggle").not(t.parent()).css("visibility","hidden"),e.parent().show(),e.slideDown("fast",function(){e.focus(),t.addClass("screen-meta-active").attr("aria-expanded",!0)}),B.trigger("screen:options:open")},close:function(e,t){e.slideUp("fast",function(){t.removeClass("screen-meta-active").attr("aria-expanded",!1),V(".screen-meta-toggle").css("visibility",""),e.parent().hide()}),B.trigger("screen:options:close")}},V(".contextual-help-tabs").delegate("a","click",function(e){var t,n=V(this);if(e.preventDefault(),n.is(".active a"))return!1;V(".contextual-help-tabs .active").removeClass("active"),n.parent("li").addClass("active"),t=V(n.attr("href")),V(".help-tab-content").not(t).removeClass("active").hide(),t.addClass("active").show()});var e,a=!1,r=V("#permalink_structure"),t=V(".permalink-structure input:radio"),l=V("#custom_selection"),n=V(".form-table.permalink-structure .available-structure-tags button");function c(e){-1!==r.val().indexOf(e.text().trim())?(e.attr("data-label",e.attr("aria-label")),e.attr("aria-label",e.attr("data-used")),e.attr("aria-pressed",!0),e.addClass("active")):e.attr("data-label")&&(e.attr("aria-label",e.attr("data-label")),e.attr("aria-pressed",!1),e.removeClass("active"))}function i(){B.trigger("wp-window-resized")}t.on("change",function(){"custom"!==this.value&&(r.val(this.value),n.each(function(){c(V(this))}))}),r.on("click input",function(){l.prop("checked",!0)}),r.on("focus",function(e){a=!0,V(this).off(e)}),n.each(function(){c(V(this))}),r.on("change",function(){n.each(function(){c(V(this))})}),n.on("click",function(){var e,t=r.val(),n=r[0].selectionStart,i=r[0].selectionEnd,o=V(this).text().trim(),s=V(this).attr("data-added");if(-1!==t.indexOf(o))return t=t.replace(o+"/",""),r.val("/"===t?"":t),V("#custom_selection_updated").text(s),void c(V(this));a||0!==n||0!==i||(n=i=t.length),l.prop("checked",!0),"/"!==t.substr(0,n).substr(-1)&&(o="/"+o),"/"!==t.substr(i,1)&&(o+="/"),r.val(t.substr(0,n)+o+t.substr(i)),V("#custom_selection_updated").text(s),c(V(this)),a&&r[0].setSelectionRange&&(e=(t.substr(0,n)+o).length,r[0].setSelectionRange(e,e),r.focus())}),B.ready(function(){var n,i,o,s,e,t,a,r,l,c,d,u=!1,p=V("input.current-page"),h=p.val(),f=/iPhone|iPad|iPod/.test(navigator.userAgent),m=-1!==navigator.userAgent.indexOf("Android"),v=V("#adminmenuwrap"),b=V("#wpwrap"),g=V("#adminmenu"),w=V("#wp-responsive-overlay"),k=V("#wp-toolbar"),C=k.find('a[aria-haspopup="true"]'),y=V(".meta-box-sortables"),x=!1,S=V("#wpadminbar"),D=0,T=!1,M=!1,E=0,_=!1,j={window:H.height(),wpwrap:b.height(),adminbar:S.height(),menu:v.height()},A=V(".wp-header-end");function O(){var e=V("a.wp-has-current-submenu");"folded"===r?e.attr("aria-haspopup","true"):e.attr("aria-haspopup","false")}function I(e){var t,n,i,o,s,a,r=e.find(".wp-submenu");a=(o=e.offset().top)-(s=H.scrollTop())-30,n=60+(t=o+r.height()+1)-b.height(),(i=H.height()+s-50)<t-n&&(n=t-i),a<n&&(n=a),1<n?r.css("margin-top","-"+n+"px"):r.css("margin-top","")}function K(){V(".notice.is-dismissible").each(function(){var t=V(this),e=V('<button type="button" class="notice-dismiss"><span class="screen-reader-text"></span></button>');e.find(".screen-reader-text").text(G("Dismiss this notice.")),e.on("click.wp-dismiss-notice",function(e){e.preventDefault(),t.fadeTo(100,0,function(){t.slideUp(100,function(){t.remove()})})}),t.append(e)})}function U(){l.prop("disabled",""===c.map(function(){return V(this).val()}).get().join(""))}function z(e){var t=H.scrollTop(),n=!e||"scroll"!==e.type;if(!f&&!g.data("wp-responsive"))if(j.menu+j.adminbar<j.window||j.menu+j.adminbar+20>j.wpwrap)P();else{if(_=!0,j.menu+j.adminbar>j.window){if(t<0)return void(T||(M=!(T=!0),v.css({position:"fixed",top:"",bottom:""})));if(t+j.window>B.height()-1)return void(M||(T=!(M=!0),v.css({position:"fixed",top:"",bottom:0})));D<t?T?(T=!1,(E=v.offset().top-j.adminbar-(t-D))+j.menu+j.adminbar<t+j.window&&(E=t+j.window-j.menu-j.adminbar),v.css({position:"absolute",top:E,bottom:""})):!M&&v.offset().top+j.menu<t+j.window&&(M=!0,v.css({position:"fixed",top:"",bottom:0})):t<D?M?(M=!1,(E=v.offset().top-j.adminbar+(D-t))+j.menu>t+j.window&&(E=t),v.css({position:"absolute",top:E,bottom:""})):!T&&v.offset().top>=t+j.adminbar&&(T=!0,v.css({position:"fixed",top:"",bottom:""})):n&&(T=M=!1,0<(E=t+j.window-j.menu-j.adminbar-1)?v.css({position:"absolute",top:E,bottom:""}):P())}D=t}}function N(){j={window:H.height(),wpwrap:b.height(),adminbar:S.height(),menu:v.height()}}function P(){!f&&_&&(T=M=_=!1,v.css({position:"",top:"",bottom:""}))}function R(){N(),g.data("wp-responsive")?(Y.removeClass("sticky-menu"),P()):j.menu+j.adminbar>j.window?(z(),Y.removeClass("sticky-menu")):(Y.addClass("sticky-menu"),P())}function W(){V(".aria-button-if-js").attr("role","button")}function F(){var e=!1;return q.innerWidth&&(e=Math.max(q.innerWidth,document.documentElement.clientWidth)),e}function Q(){var e=F()||961;r=e<=782?"responsive":Y.hasClass("folded")||Y.hasClass("auto-fold")&&e<=960&&782<e?"folded":"open",B.trigger("wp-menu-state-set",{state:r})}g.on("click.wp-submenu-head",".wp-submenu-head",function(e){V(e.target).parent().siblings("a").get(0).click()}),V("#collapse-button").on("click.collapse-menu",function(){var e=F()||961;V("#adminmenu div.wp-submenu").css("margin-top",""),r=e<960?Y.hasClass("auto-fold")?(Y.removeClass("auto-fold").removeClass("folded"),setUserSetting("unfold",1),setUserSetting("mfold","o"),"open"):(Y.addClass("auto-fold"),setUserSetting("unfold",0),"folded"):Y.hasClass("folded")?(Y.removeClass("folded"),setUserSetting("mfold","o"),"open"):(Y.addClass("folded"),setUserSetting("mfold","f"),"folded"),B.trigger("wp-collapse-menu",{state:r})}),B.on("wp-menu-state-set wp-collapse-menu wp-responsive-activate wp-responsive-deactivate",O),("ontouchstart"in q||/IEMobile\/[1-9]/.test(navigator.userAgent))&&(e=f?"touchstart":"click",Y.on(e+".wp-mobile-hover",function(e){g.data("wp-responsive")||V(e.target).closest("#adminmenu").length||g.find("li.opensub").removeClass("opensub")}),g.find("a.wp-has-submenu").on(e+".wp-mobile-hover",function(e){var t=V(this).parent();g.data("wp-responsive")||t.hasClass("opensub")||t.hasClass("wp-menu-open")&&!(t.width()<40)||(e.preventDefault(),I(t),g.find("li.opensub").removeClass("opensub"),t.addClass("opensub"))})),f||m||(g.find("li.wp-has-submenu").hoverIntent({over:function(){var e=V(this),t=e.find(".wp-submenu"),n=parseInt(t.css("top"),10);isNaN(n)||-5<n||g.data("wp-responsive")||(I(e),g.find("li.opensub").removeClass("opensub"),e.addClass("opensub"))},out:function(){g.data("wp-responsive")||V(this).removeClass("opensub").find(".wp-submenu").css("margin-top","")},timeout:200,sensitivity:7,interval:90}),g.on("focus.adminmenu",".wp-submenu a",function(e){g.data("wp-responsive")||V(e.target).closest("li.menu-top").addClass("opensub")}).on("blur.adminmenu",".wp-submenu a",function(e){g.data("wp-responsive")||V(e.target).closest("li.menu-top").removeClass("opensub")}).find("li.wp-has-submenu.wp-not-current-submenu").on("focusin.adminmenu",function(){I(V(this))})),A.length||(A=V(".wrap h1, .wrap h2").first()),V("div.updated, div.error, div.notice").not(".inline, .below-h2").insertAfter(A),B.on("wp-updates-notice-added wp-plugin-install-error wp-plugin-update-error wp-plugin-delete-error wp-theme-install-error wp-theme-delete-error",K),screenMeta.init(),Y.on("click","tbody > tr > .check-column :checkbox",function(e){if("undefined"==e.shiftKey)return!0;if(e.shiftKey){if(!u)return!0;n=V(u).closest("form").find(":checkbox").filter(":visible:enabled"),i=n.index(u),o=n.index(this),s=V(this).prop("checked"),0<i&&0<o&&i!=o&&(i<o?n.slice(i,o):n.slice(o,i)).prop("checked",function(){return!!V(this).closest("tr").is(":visible")&&s})}var t=V(u=this).closest("tbody").find(":checkbox").filter(":visible:enabled").not(":checked");return V(this).closest("table").children("thead, tfoot").find(":checkbox").prop("checked",function(){return 0===t.length}),!0}),Y.on("click.wp-toggle-checkboxes","thead .check-column :checkbox, tfoot .check-column :checkbox",function(e){var t=V(this),n=t.closest("table"),i=t.prop("checked"),o=e.shiftKey||t.data("wp-toggle");n.children("tbody").filter(":visible").children().children(".check-column").find(":checkbox").prop("checked",function(){return!V(this).is(":hidden,:disabled")&&(o?!V(this).prop("checked"):!!i)}),n.children("thead,  tfoot").filter(":visible").children().children(".check-column").find(":checkbox").prop("checked",function(){return!o&&!!i})}),V("#wpbody-content").on({focusin:function(){clearTimeout(t),a=V(this).find(".row-actions"),V(".row-actions").not(this).removeClass("visible"),a.addClass("visible")},focusout:function(){t=setTimeout(function(){a.removeClass("visible")},30)}},".has-row-actions"),V("tbody").on("click",".toggle-row",function(){V(this).closest("tr").toggleClass("is-expanded")}),V("#default-password-nag-no").click(function(){return setUserSetting("default_password_nag","hide"),V("div.default-password-nag").hide(),!1}),V("#newcontent").bind("keydown.wpevent_InsertTab",function(e){var t,n,i,o,s=e.target;if(27==e.keyCode)return e.preventDefault(),void V(s).data("tab-out",!0);9!=e.keyCode||e.ctrlKey||e.altKey||e.shiftKey||(V(s).data("tab-out")?V(s).data("tab-out",!1):(t=s.selectionStart,n=s.selectionEnd,i=s.value,document.selection?(s.focus(),document.selection.createRange().text="\t"):0<=t&&(o=this.scrollTop,s.value=i.substring(0,t).concat("\t",i.substring(n)),s.selectionStart=s.selectionEnd=t+1,this.scrollTop=o),e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()))}),p.length&&p.closest("form").submit(function(){-1==V('select[name="action"]').val()&&-1==V('select[name="action2"]').val()&&p.val()==h&&p.val("1")}),V('.search-box input[type="search"], .search-box input[type="submit"]').mousedown(function(){V('select[name^="action"]').val("-1")}),V("#contextual-help-link, #show-settings-link").on("focus.scroll-into-view",function(e){e.target.scrollIntoView&&e.target.scrollIntoView(!1)}),(d=V("form.wp-upload-form")).length&&(l=d.find('input[type="submit"]'),c=d.find('input[type="file"]'),U(),c.on("change",U)),f||(H.on("scroll.pin-menu",z),B.on("tinymce-editor-init.pin-menu",function(e,t){t.on("wp-autoresize",N)})),q.wpResponsive={init:function(){var e=this;this.maybeDisableSortables=this.maybeDisableSortables.bind(this),B.on("wp-responsive-activate.wp-responsive",function(){e.activate()}).on("wp-responsive-deactivate.wp-responsive",function(){e.deactivate()}),V("#wp-admin-bar-menu-toggle a").attr("aria-expanded","false"),V("#wp-admin-bar-menu-toggle").on("click.wp-responsive",function(e){e.preventDefault(),S.find(".hover").removeClass("hover"),b.toggleClass("wp-responsive-open"),b.hasClass("wp-responsive-open")?(V(this).find("a").attr("aria-expanded","true"),V("#adminmenu a:first").focus()):V(this).find("a").attr("aria-expanded","false")}),g.on("click.wp-responsive","li.wp-has-submenu > a",function(e){g.data("wp-responsive")&&(V(this).parent("li").toggleClass("selected"),e.preventDefault())}),e.trigger(),B.on("wp-window-resized.wp-responsive",V.proxy(this.trigger,this)),H.on("load.wp-responsive",this.maybeDisableSortables),B.on("postbox-toggled",this.maybeDisableSortables),V("#screen-options-wrap input").on("click",this.maybeDisableSortables)},maybeDisableSortables:function(){(-1<navigator.userAgent.indexOf("AppleWebKit/")?H.width():q.innerWidth)<=782||y.find(".ui-sortable-handle:visible").length<=1&&jQuery(".columns-prefs-1 input").prop("checked")?this.disableSortables():this.enableSortables()},activate:function(){R(),Y.hasClass("auto-fold")||Y.addClass("auto-fold"),g.data("wp-responsive",1),this.disableSortables()},deactivate:function(){R(),g.removeData("wp-responsive"),this.maybeDisableSortables()},trigger:function(){var e=F();e&&(e<=782?x||(B.trigger("wp-responsive-activate"),x=!0):x&&(B.trigger("wp-responsive-deactivate"),x=!1),e<=480?this.enableOverlay():this.disableOverlay(),this.maybeDisableSortables())},enableOverlay:function(){0===w.length&&(w=V('<div id="wp-responsive-overlay"></div>').insertAfter("#wpcontent").hide().on("click.wp-responsive",function(){k.find(".menupop.hover").removeClass("hover"),V(this).hide()})),C.on("click.wp-responsive",function(){w.show()})},disableOverlay:function(){C.off("click.wp-responsive"),w.hide()},disableSortables:function(){if(y.length)try{y.sortable("disable"),y.find(".ui-sortable-handle").addClass("is-non-sortable")}catch(e){}},enableSortables:function(){if(y.length)try{y.sortable("enable"),y.find(".ui-sortable-handle").removeClass("is-non-sortable")}catch(e){}}},V(document).ajaxComplete(function(){W()}),B.on("wp-window-resized.set-menu-state",Q),B.on("wp-menu-state-set wp-collapse-menu",function(e,t){var n,i,o=V("#collapse-button");i="folded"===t.state?(n="false",G("Expand Main menu")):(n="true",G("Collapse Main menu")),o.attr({"aria-expanded":n,"aria-label":i})}),q.wpResponsive.init(),R(),Q(),O(),K(),W(),B.on("wp-pin-menu wp-window-resized.pin-menu postboxes-columnchange.pin-menu postbox-toggled.pin-menu wp-collapse-menu.pin-menu wp-scroll-start.pin-menu",R),V(".wp-initial-focus").focus(),Y.on("click",".js-update-details-toggle",function(){var e=V(this).closest(".js-update-details"),t=V("#"+e.data("update-details"));t.hasClass("update-details-moved")||t.insertAfter(e).addClass("update-details-moved"),t.toggle(),V(this).attr("aria-expanded",t.is(":visible"))})}),B.ready(function(e){var t,n;Y.hasClass("update-php")&&(t=e("a.update-from-upload-overwrite"),n=e(".update-from-upload-expired"),t.length&&n.length&&q.setTimeout(function(){t.hide(),n.removeClass("hidden"),q.wp&&q.wp.a11y&&q.wp.a11y.speak(n.text())},714e4))}),H.on("resize.wp-fire-once",function(){q.clearTimeout(e),e=q.setTimeout(i,200)}),function(){if("-ms-user-select"in document.documentElement.style&&navigator.userAgent.match(/IEMobile\/10\.0/)){var e=document.createElement("style");e.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}")),document.getElementsByTagName("head")[0].appendChild(e)}}()}(jQuery,window);