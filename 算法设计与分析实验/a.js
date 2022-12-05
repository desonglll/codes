/*! ablejs - v0.2.0 - Friday, November 25th, 2022, 11:42:15 AM
 * http://www.ablesky.com
 * Copyright (c) 2022 frontend@ablesky.com; Licensed  */
define([
  "module",
  "jquery",
  "https://cdn1.100cdw.com.cn/common/grtPlayer.1.1.1.js",
  "common/base64",
], function (e, t, a) {
  function i(e) {
    t.extend(x, e),
      (T = e.isShowDot),
      (I = e.isRecordTime),
      (b = e.courseContentId),
      "undefined" != typeof accountId && (D = "TIME_" + accountId + "_" + b),
      (O = e.isThird),
      "undefined" != typeof accountId &&
        "undefined" != typeof courseId_jsp &&
        "undefined" != typeof jsp_circleId &&
        ((M = "COUNT_" + accountId + "_" + courseId_jsp + "_" + jsp_circleId),
        n(M)),
      O && ((M = "THIRD_COUNT_" + userId + "_" + courseId_jsp), n(M)),
      (v = x.playEndautoPlay),
      (E = x.url),
      (N = e.isTrial),
      (y = e.trialTime),
      (B = 0 == e.isRest ? !1 : !0),
      void 0 != e.restTime && (F = e.restTime);
  }
  function n(e) {
    try {
      (R = Base64.decode(localStorage.getItem(e))), (R = parseInt(R));
    } catch (t) {
      console.log("get count error!"), (R = 0);
    }
    console.log(">>>>init count=" + R), R || (R = 0);
  }
  function o() {
    s(),
      (A = a(S)),
      A.emit("resourceReady", k),
      (A.onTimeUpdate = function () {
        if (
          (null != D && localStorage.setItem(D, parseInt(A.currentTime)),
          I && !w[b])
        ) {
          R++, console.log(">>count=" + R);
          var e = R % 60;
          localStorage.setItem(M, Base64.encode(R.toString())),
            R >= 60 &&
              0 == e &&
              (console.log(">>>record count=" + R), u(b, !1));
        }
      }),
      A.once("play", function () {
        t(".video-on-tips").show();
      }),
      A.on("ended", function () {
        t(".video-on-tips").hide(),
          localStorage.setItem(D, 0),
          exitFullscreen(),
          v && "function" == typeof v && v();
      });
  }
  function s() {
    d(b),
      T && h(),
      (P =
        null == localStorage.getItem(D)
          ? 0
          : parseInt(localStorage.getItem(D))),
      (S = {
        id: "J_CC_videoPlayerDiv",
        url: E,
        width: "100%",
        height: "100%",
        autoplay: !0,
        closeVideoClick: !1,
        countTime: {
          interval: 60,
          cb: function (e) {
            if (e.end)
              console.log(">>>record count=" + R), I && !w[b] && u(b, !0);
            else {
              L++;
              var t = !1;
              if (void 0 != _[b] && _[b].length > 0)
                for (var a = 0; a < _[b].length; a++)
                  _[b][a].timeSlot == e.time && (t = !0);
              !t &&
                B &&
                F > 0 &&
                0 == (60 * L) % F &&
                (console.log(">>>touch restTime; playCount=" + L),
                exitFullscreen(),
                J("您已学习" + Math.round(F / 60) + "分钟了，让眼睛休息一下吧"),
                videoPause());
            }
          },
        },
        dotList: C,
        lastPlayTime: P,
        lastPlayTimeHideDelay: 5,
        lastPlayTimeTips:
          '您上次学习到<span class="xgplayer-lasttime">' +
          f(P) +
          "</span>,欢迎继续学习",
        trying2Watch: { maxTime: y, cb: l },
      });
  }
  function r() {
    return A.currentTime;
  }
  function l(e) {
    exitFullscreen(), q("试听结束"), (e.player.currentTime = 0), videoPause();
  }
  function c(e) {
    (L = 0),
      (b = e),
      (D = "TIME_" + accountId + "_" + b),
      s(),
      A.switchVideo(S, function (e) {
        (A = e),
          A.emit("resourceReady", k),
          (A.onTimeUpdate = function () {
            if (
              (null != D && localStorage.setItem(D, parseInt(A.currentTime)),
              I && !w[b])
            ) {
              R++, console.log(">>count=" + R);
              var e = R % 60;
              localStorage.setItem(M, Base64.encode(R.toString())),
                R >= 60 &&
                  0 == e &&
                  (console.log(">>>record count=" + R), u(b, !1));
            }
          }),
          A.once("play", function () {
            t(".video-on-tips").show();
          }),
          A.on("ended", function () {
            localStorage.setItem(D, 0),
              exitFullscreen(),
              v && "function" == typeof v && v();
          }),
          A.once("complete", function () {
            A.root.classList.remove("xgplayer-is-fullscreen");
          });
      });
  }
  function d(e) {
    k = [];
    var a = "#contentListId" + e + " li",
      i = !1;
    t(a).each(function () {
      var e = new Object(),
        a = t(this).attr("quality");
      "FLUENT" == a
        ? ((e.name = "流畅"), i || (E = t(this).text()))
        : "SD" == a
        ? ((e.name = "标清"), (i = !0), (E = t(this).text()))
        : "HD" == a
        ? (e.name = "高清")
        : "FULL_HD" == a && (e.name = "超清"),
        (e.url = t(this).text()),
        k.push(e);
    }),
      t(a).length < 2 && (k = []);
  }
  function u(e, a) {
    if (
      (console.log(
        ">>>>>currPlayCoursecontentId=" +
          e +
          "  finishIds[currPlayCoursecontentId]=" +
          w[e]
      ),
      "undefined" == typeof w[e] && (w[e] = !1),
      w[e])
    )
      return (
        console.log(">>>finish! courseContentId=" + e),
        (R = 0),
        localStorage.setItem(M, Base64.encode("0")),
        void 0
      );
    var i = Math.floor(R / 60);
    (i = 1 > i ? 1 : i), console.log(">>>>>>>studyMins=" + i);
    var n = {},
      o = "studyLog.do";
    O
      ? ((n = {
          platformId: platformId,
          code: code,
          localUserId: userId,
          id: e,
          finish: a,
          ct: t.now(),
        }),
        (o = "thirdPlatform/record"))
      : (n =
          1 == i
            ? { id: e, circleId: jsp_circleId, finish: a, ct: t.now() }
            : {
                id: e,
                circleId: jsp_circleId,
                finish: a,
                studyMins: i,
                ct: t.now(),
              }),
      t.ajax({
        url: o,
        data: n,
        dataType: "json",
        type: "post",
        success: function (n) {
          n.success
            ? (n.progress >= 100
                ? ((w[e] = !0), t("#J_studyProgress_" + e).html("100%"))
                : ((w[e] = !1),
                  t("#J_studyProgress_" + e).html(n.progress + "%")),
              a || ((R -= 60 * i), (R = 0 > R ? 0 : R)),
              (j = 0),
              ($ = 0))
            : ("nologin" == n.message &&
                (videoPause(),
                p("请注意! 您的帐号已退出或已在其它地点登录！", 1e3)),
              "double" == n.message
                ? 2 > $
                  ? $++
                  : (videoPause(),
                    (count = 0),
                    localStorage.setItem(M, Base64.encode("0")),
                    ($ = 0),
                    g("系统检测到您正在同时观看多门课程，仅一门课程计时"))
                : 4 > j
                ? j++
                : (videoPause(),
                  (j = 0),
                  localStorage.setItem(M, Base64.encode("0")),
                  g("学时记录出现异常请检查网络")));
        },
      });
  }
  function p(e, a) {
    var i = a || 1e3,
      n = e || "",
      o = t.dialog({
        title: "提示",
        content: "<center>" + n + "</center>",
        width: 400,
        modal: !0,
        buttons: [
          {
            text: "确定",
            css: { backgroundColor: "#cb1812" },
            click: function () {
              o.close();
            },
          },
        ],
        close: function () {
          setTimeout(function () {
            window.location.reload();
          }, i);
        },
      });
  }
  function h() {
    return null == b
      ? (console.log("courseContentId is null"), void 0)
      : _[b]
      ? (console.log(
          "testTime has load courseQueTime[" + b + "]=" + JSON.stringify(_[b])
        ),
        void 0)
      : (t
          .ajax({
            url: "course.do?action=getTestDuringCourse",
            data: { id: b },
            async: !1,
            dataType: "json",
          })
          .done(function (e) {
            if (e.success)
              if (e.result && e.result.list && e.result.list.length > 0) {
                _[b] = e.result.list;
                for (var t = 0; t < e.result.list.length; t++) {
                  var a = {};
                  (a.time = e.result.list[t].timeSlot), (a.cb = m), C.push(a);
                }
              } else _[b] = [];
            else g(e.message);
          }),
        void 0);
  }
  function m(e) {
    if (void 0 != _[b] && _[b].length > 0)
      for (var t = 0; t < _[b].length; t++)
        _[b][t].timeSlot == e.time &&
          (exitFullscreen(), veiwExamStart(_[b][t].id, e.time));
  }
  function f(e, t) {
    var a = {};
    (a.H = parseInt(e / 3600)),
      (a.i = parseInt((e - 3600 * a.H) / 60)),
      (a.s = parseInt(e - 3600 * a.H - 60 * a.i)),
      (t = "H:i:s"),
      0 == a.H ? (t = "i:s") : a.H < 10 && (a.H = "0" + a.H),
      a.i < 10 && (a.i = "0" + a.i),
      a.s < 10 && (a.s = "0" + a.s);
    var i = null;
    return (i =
      "00" == a.H
        ? t.replace("i", a.i).replace("s", a.s)
        : t.replace("H", a.H).replace("i", a.i).replace("s", a.s));
  }
  function g(e) {
    var a = t.dialog({
      boxid: "showMessage_boxid",
      title: "提示",
      headStyle: { backgroundColor: "#c0130d" },
      bodyStyle: { backgroundColor: "#F7F7F7" },
      footStyle: { backgroundColor: "#F7F7F7" },
      content: "<center>" + e + "</center>",
      modal: !0,
      width: 370,
      buttons: [
        {
          text: "知道了",
          css: { backgroundColor: "#c0130d" },
          click: function () {
            a.close(),
              -1 != navigator.userAgent.indexOf("Firefox") ||
              -1 != navigator.userAgent.indexOf("Chrome")
                ? ((window.location.href = "about:blank"), window.close())
                : ((window.opener = null),
                  window.open("", "_self"),
                  window.close());
          },
        },
      ],
    });
    t(".dialog-close").hide();
  }
  var v,
    y,
    x = e.config(),
    b = null,
    w = [],
    _ = [],
    k = [],
    C = [],
    E = "",
    T = !1,
    I = !1,
    S = {},
    A = null,
    P = 0,
    D = null,
    j = 0,
    N = !1,
    B = !0,
    F = 1200,
    L = 0,
    M = null,
    R = 0,
    O = !1,
    $ = 0;
  (window.videoPause = function () {
    A.pause();
  }),
    (window.videoPlay = function () {
      A.play();
    }),
    (window.exitFullscreen = function () {
      A.fullscreen && A.exitFullscreen(A.root);
    });
  var J = function (e) {
      var a = t.dialog({
        boxid: "rest_tip",
        title: "提示",
        width: 380,
        modal: !0,
        content:
          '<span style="display:block;text-align: center;">' + e + "</span>",
        buttons: [
          {
            text: "继续学习",
            css: { backgroundColor: "#c0130d" },
            click: function () {
              videoPlay(), a.close();
            },
          },
        ],
      });
    },
    q = function (e) {
      var a = t.dialog({
        boxid: "message_tip",
        title: "提示",
        width: 280,
        content:
          '<span style="display:block;text-align: center;">' +
          (e ? e : "额，出错啦~~") +
          "</span>",
        buttons: [
          {
            text: "确定",
            css: { backgroundColor: "#c0130d" },
            click: function () {
              videoPlay(), a.close();
            },
          },
        ],
      });
    };
  return { init: i, switchVideo: c, getVideoPostion: r, loadingPlayer: o };
});
