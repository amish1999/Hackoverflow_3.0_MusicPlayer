var buildCollectionItemTemplate = function() {
  var template =
    '<div class="collection-album-container column fourth">'
    + '  <img src="assets/images/album_covers/album_cover.jpg" height="200" width="150"/>'
    + '  <div class="collection-album-info caption">'
    + '    <p>'
    + '      <a class="album-name" href="album.html"> Billboard Hot Singles </a>'
    + '      <br/>'
    + '      <a href="album.html"> Artists </a>'
    + '      <br/>'
    + '      5 songs'
    + '      <br/>'
    + '    </p>'
    + '  </div>'
    + '</div>'
    ;

  return $(template);
 };

$(window).load(function() {
  var $collectionContainer = $('.album-covers');

  $collectionContainer.empty();

  for (var i = 0; i < 16; i++) {
    var $newThumbnail = buildCollectionItemTemplate();

    $collectionContainer.append($newThumbnail);
  }
});
