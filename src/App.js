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
              url: "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/139534530/VIU_App/VIU_App_Video_VMAP&impl=s&gdfp_req=1&env=vp&output=vmap&ad_rule=1&unviewed_position_start=1&vid=1165926978&cmsid=2590324",
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
      hls: 'https://gcpcdn.viu.com/5d1c5f5d7ba9f52a3ccf03954c787c9e/VP6_V20210914064407/P2/hlsc_e2931_V20210930065358.m3u8',
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
      <h1 style={{display:'flex', justifyContent:'center'}}>DEMO</h1>
      <div id="my-player"></div>
    </div>
  );
}
