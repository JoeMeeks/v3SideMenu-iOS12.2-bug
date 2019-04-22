# Ionic Debug
[Ionic v3 iOS 12.2 side menu bug issue 1004](https://github.com/ionic-team/ionic-v3/issues/1004)

## Reproduction Steps
1. Tap "Sign In" to login (test auth credentials provided)
2. Verify that the Home Page scrolls
3. Open the side menu by any of the following:
   - tap the top-right menu button
   - swipe left near the top-right menu button
4. Dismiss the side meny by any of the following:
   - tap the top-left menu button
   - swipe right near the top-left menu button
   - tap the home page menu list item to close the menu without changing the page

Once the home page is stuck and unscrollable, opening the side menu and selecting another page (such as Privacy Policy or About Us) and then navigating back to Home by side meny list item or back button will fix the issue. Also occasionally the stuck home scroll content behavior is intermittent with the repro steps above.

### Note
- This is unreproducible on iOS 12.1.2 and only affects 12.2 to my knowledge.
- Uncommenting src/theme/default.scss line 43 will fix this behavior for iOS 12.2

  ```/*ion-app.platform-ios12 ion-content { pointer-events: auto; }*/ /*fix scroll lock on ios12.2*/```