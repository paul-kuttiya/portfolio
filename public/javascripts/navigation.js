(function() {
  var Navigation = {
    //fix to delegate
    $projects: $('header a[data-nav="projects"]'),
    $profile: $('header a[data-nav="profile"]'),
    $profile_section: $('section#profile'),
    $projects_section: $('section#projects'),
    fade: 2400,
    bindEvents: function() {
      this.$projects.on('click', function(e) {
        e.preventDefault();

        this.$profile_section.hide();
        this.$projects_section.fadeIn(this.fade).off();
      }.bind(this));
      this.$profile.on('click', function(e) {
        e.preventDefault();

        this.$projects_section.hide();
        this.$profile_section.fadeIn(this.fade).off();
      }.bind(this));
    },
    init: function() {
      this.bindEvents();
      this.$profile_section.hide();
    },
  }

  $('#test').on('click', function(e) {
    e.preventDefault();
    $.ajax({
      url: $(e.target).attr('href'),
      success: function(json) {
        //inject html to template
        //show hidden template
      }
    })
  })

  Navigation.init();
}());