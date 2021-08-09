# React Backable

Android back button support for React web apps.

This is normally used together with navigation packages like
[React Navigation View](https://github.com/fillmula/react-navigation-view) and
[React Sheet Presentation](https://github.com/fillmula/react-sheet-presentation).

# Usage

Add this to your Android activity which displays the web view.

```kotlin
override fun onBackPressed() {
    webView.evaluateJavascript("window.reactBackableAction()") { value ->
        if (value == "false") {
            super.onBackPressed()
        }
    }
}
```

# Installation

[React Navigation View](https://github.com/fillmula/react-navigation-view) and
[React Sheet Presentation](https://github.com/fillmula/react-sheet-presentation)
have this integrated. You don't need to install this package manually normally.

# Author

React Backable is authored by Victor Teo.

# License

MIT License

Copyright (c) 2021 Fillmula Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
