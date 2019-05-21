<img src="assets/icon.png?raw=true" alt="Hypest Icon" width="148" height="148" />

# Hypest for Hyper
A beautiful and minimal macOS theme for Hyper — with vibrancy, light and dark
modes, and theming for several popular Hyper plugins.

<img src="assets/preview.jpg?raw=true" alt="Hypest Screenshot" width="600" />

## Installation
If you are switching from another Hyper theme you may need to relaunch the app
for Hypest to fully theme the window.

### From Hyper
`hyper i hyper-hypest`

### Manually
1. Open `~/.hyper.js` in your text editor (`cmd` + `,` in Hyper)
2. Add `hyper-hypest` to the `plugins` array

## Configuration
There are two options that can be passed as optional configuration to change the
theme. To pass the options you can add a `hypest` object to the `config` in
`~/.hyper.js`.

**Note:** you may need to restart Hyper when switching between themes.

### Dark Mode
Set `darkmode` to `true` to use the dark version of the theme.
```js

config: {
    ...
    hypest: {
        // Default is false
        darkmode: true
    }
    ...
}
```
<img src="assets/preview-dark.jpg?raw=true" alt="Hypest Screenshot" width="600" />

### Vibrancy
Set `vibrancy` to `false` to disable the window vibrancy effect in either theme.
```js

config: {
    ...
    hypest: {
        // Default is true
        vibrancy: false
    }
    ...
}
```
<img src="assets/preview-no-vibrancy.jpg?raw=true" alt="Hypest Screenshot" width="600" />

## Plugin support
Hypest includes custom theming to support a few of the most popular Hyper
plugins, including:

- hyper-search
- hyper-statusline
- hyper-tab-icons
- hyper-highlight-active-pane

<img src="assets/preview-with-plugins.jpg?raw=true" alt="Hypest Screenshot" width="600" />

##  Known issues

#### Plugins
Any plugins that customize tabs beyond the plugins mentioned above may have
compatibility issues with the theming in Hypest:

- hyper-tabs-enhanced

#### User colors
Hypest doesn't currently support user defined colors (the color object in
`~/.hyper.js` will be ignored) but support is planned.

#### Vibrancy + zsh + pasted content
There is a known issue when running zsh in Hyper where pasted content will
appear as a block when the background has an alpha property. The issue has been
[around for a while](https://github.com/zeit/hyper/issues/819) and has no
official fix but there [is a comment](https://github.com/zeit/hyper/issues/819#issuecomment-383229725) in that issue that has a workaround. Run this in the command line to
disable the background color of pasted content:

```echo 'unset zle_bracketed_paste' >> ~/.zshrc```
