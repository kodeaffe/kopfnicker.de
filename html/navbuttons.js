/* javascript-functions for changing navigation buttons on ifa-webtv 
 * - navigation on the left side of the whole site
 * - navigation in the list of press releases about the ifa
 *
 * also usable by netscape 3.x *sigh*
 */


/* initialise the buttons-array and define the index of the first active button
 */
function initButtons () {
   if (!document.images) return;

   // buttons to exchange
   document.buttons = new Array ();

   // index of first button-image which means "active"
   document.active_button = 0;

   with (document) {
      var i;

      /* create the buttons to exchange using the argument list:
       * this list has the following syntax:
       * button1-off, button1-on, button2-off, button2-on, ...
       */
      for (i = 0; i < initButtons.arguments.length; i++) {
         buttons[i] = new Image (); buttons[i].src = initButtons.arguments[i];
      }
   }
}


/* change the appearance of a button while flying over it
 */
function flyoverButton (num, state) {
   if (num == document.active_button || !document.images) return;

   /* exchange the old button-graphix with the new from the buttons-array:
    * just take the image-number * 2 (s. arg-syntax) and add the state 
    * (0 == off, 1 == on)
    */
   document.images[num].src = document.buttons[num * 2 + state].src;
}


/* really change the appearance of the button, not only when flying over it,
 * also change the apprearance of the former "active" button
 */
function changeButton (num) {
   if (num == document.active_button || !document.images) return;

   with (document) {
      // turn the old active one off
      images[active_button].src = buttons[active_button * 2].src;
  
      // turn the new active one on
      images[num].src = buttons[num * 2 + 1].src;

      // define new active button
      active_button = num;
   }
}
