# simple-modals
Very basic way to create modals using html, css & vanilla JS.

The general idea is to create a div with absolute positioning and a z-index above everything else on our page.<br />
<br />
The popup version uses an overlay (div) to cover everything behind our modal.<br />
We want this overlay to sit between our modal and the rest of the page so we need to set the z-index above 0 but under the z-index we assign our modal.<br />
This ensures all functionality on the page is off when our modal is up.<br />
(Of course, it isn't really "off" just unaccessable/unclickable since we're covering it completely with our overlay div)<br /><br />

By setting the background to black and setting opacity down we can create a grayed out effect.<br />
In our JS file we can add a click event listener to our overlay that changes the "display" to "none" for both our modal and overlay.<br />
This function can be reused for our "close" button.
<br />
