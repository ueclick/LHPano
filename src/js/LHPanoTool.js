var LHPanoTool = {};

LHPanoTool.createSphereMap = function ( url ) {
  var geometry = new THREE.SphereGeometry( 50, 60, 40 );
  // geometry.scale( - 1, 1, 1 );

  var material = new THREE.MeshBasicMaterial( {
     map: THREE.ImageUtils.loadTexture( url ) ,side : THREE.BackSide
  } );

  var sphere = new THREE.Mesh( geometry, material );

  return sphere;
};

LHPanoTool.createVideoMap = function ( url ) {
  video = document.createElement( 'video' );
  video.autoplay = true;
  // video.playsinline = false;
  video.setAttribute('webkit-playsinline', '');
  video.src = url;
  video.loop = true;

  videoTexture = new THREE.VideoTexture( video );
  videoTexture.minFilter = THREE.LinearFilter;
  videoTexture.magFilter = THREE.LinearFilter;
  videoTexture.format = THREE.RGBFormat;

  var material   = new THREE.MeshBasicMaterial( { map : videoTexture ,side : THREE.BackSide} );

  var geometry = new THREE.SphereBufferGeometry( 50, 60, 40 );

  var sphere = new THREE.Mesh( geometry, material );

  return sphere;
};

LHPanoTool.createCubeMap = function ( prefix, urlArr, type) {
  var cubeMap = null;
  var materials = [];

  if(urlArr.length == 6){
    for ( var i = 0; i < 6; i ++ ) {
      var _map =  prefix + urlArr[ i ] + "." + type;
  		materials.push( new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( _map )  ,side : THREE.BackSide} ) );
      console.log(_map);
  	}
  	cubeMap = new THREE.Mesh( new THREE.BoxBufferGeometry( 40, 40, 40 ), new THREE.MeshFaceMaterial( materials ) );
    
  }

  return cubeMap;
}
