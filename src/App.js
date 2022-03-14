// import * as bitmovin from "bitmovin-player";
import React from "react";

export default function App() {
  React.useEffect(() => {
    var playerConfig = {
      key: "1c444b9c-fcea-4772-b31c-6baa8fc8da04",
      playback: {
        muted: true,
        autoplay: false,
      },
      advertising: {
        adBreaks: [
          {
            tag: {
              // 'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/139534530/VIU_App/VIU_App_Video_VMAP&impl=s&gdfp_req=1&env=vp&output=vmap&ad_rule=1&unviewed_position_start=1&correlator=1647268848037&allowscriptaccess=always&cmsid=2590324'
              url: "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/139534530/VIU_App/VIU_App_Video_VMAP&impl=s&gdfp_req=1&env=vp&output=vmap&ad_rule=1&unviewed_position_start=1&url=[referrer_url]&description_url=[description_url]&correlator=[timestamp]&allowscriptaccess=always&cmsid=2590324",
              type: "vmap",
            },
          },
        ],
      },
    };
    var container = document.getElementById("my-player");
    var player = new window.bitmovin.player.Player(container, playerConfig);
    var sourceConfig = {
      title: "Default Demo Source Config",
      description:
        'Select another example in "Step 4 - Load a Source" to test it here',
      hls: "https://gcpcdn.viu.com/1894c3719672d2d3f46119c91d5b8d14/x-goog-token=ID=cid%3d1165843422%2csid%3d33ab5e85-284f-4c06-a4f3-d0a68b657eac%2cclientId%3dnone%2cn%3d1647268933800%2ch%3d2DB0B83CD9FEECF13A13E70DAD6E0E5E~&Expires=1647297733&KeyName=premiumvideo-gcp-20190828&Signature=QiMXXxDi3OstkU3TyUQDiWkVYZw=/vp63207_V20210202150109/hlsc_e2931_V20210530092123.m3u8",
    };
    player
      .load(sourceConfig)
      .then(function () {
        player.ads.schedule({
          tag: {
            url: "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/139534530/VIU_App/VIU_App_Video_VMAP&impl=s&gdfp_req=1&env=vp&output=vmap&ad_rule=1&unviewed_position_start=1&url=[referrer_url]&description_url=[description_url]&correlator=[timestamp]&allowscriptaccess=always&cmsid=2590324",
            type: "vmap",
          },
          id: "Ad",
          // position: schedule,
        });
        console.log("Successfully loaded Source Config!");
      })
      .catch(function (reason) {
        console.log("Error while loading source:", reason);
      });
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div id="my-player"></div>
    </div>
  );
}
