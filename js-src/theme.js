(function ($, Drupal, window, document, undefined) {

  /**
   * Functionality for theme load 
   */
  Drupal.behaviors.primaryTheme = {
    attach: function (context, settings) {
      if (context === document) { // only fires on document load

        console.log('Dear friend, your theme has loaded.');

      }
    }
  };



})(jQuery, Drupal, this, this.document);