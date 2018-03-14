window.onload = function() {
  var cld = cloudinary.Cloudinary.new({
    cloud_name: "dreamsmaker",
    secure: true
  });

  var options = {
    publicId: "THE_WETLAND_Official_Teaser_5",
    plugins: {
      panorama: {
        clickAndDrag: true,
        clickToToggle: true,
        autoMobileOrientation: true
      }
    },
    sourceTypes: ["mp4"]
  };
  if (window.videoTransforms) {
    options.transformation = {
      effect: window.videoTransforms.split('_')[1].split(',')[0],
      start_offset: 20
    };
  }

  console.log(JSON.stringify(options));
  var vplayer = cld.videoPlayer("demo-player", options);
};
