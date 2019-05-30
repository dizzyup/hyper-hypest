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
There are a few options that can be passed as optional configuration to modify
the theme. To pass the options you can add a `hypest` object to the `config` in
`~/.hyper.js`.

**Note:** you may need to restart Hyper when setting or switching between the 
values for the `darkmode` and `vibrancy` properties.

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

### Borders
Set `borders` to `true` if you prefer your tabs with some more contrast.
```js

config: {
    ...
    hypest: {
        // Default is false
        borders: true
    }
    ...
}
```
<img src="assets/preview-with-borders.jpg?raw=true" alt="Hypest Screenshot" width="600" />

### Remove window controls
Set `hideControls` to `true` to remove the window controls and just show tabs.
```js

config: {
    ...
    hypest: {
        // Default is false
        hideControls: true
    }
    ...
}
```
<img src="assets/preview-no-controls.jpg?raw=true" alt="Hypest Screenshot" width="600" />

### Accent color
Pass a supported named color with `accentColor` to use it for the cursor color,
selection color and the search styling (if using the `hyper-search` plugin).
```js

config: {
    ...
    hypest: {
        // Default is 'blue'
        // Use one of 'black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan' or 'white'
        accentColor: 'cyan'
    }
    ...
}
```

### Custom theme colors
Hypest has it's own set of colors defined by the theme but you can override them
by adding a `colors` object and setting all or some of the supported color
properties.
```js

config: {
    ...
    hypest: {
        // Supported  colors are 'black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan' and 'white'
        // Custom colors must be specified as 6 character hexadecimals
        colors: {
          blue: '#0067FF'
        }
    }
    ...
}
```

## Plugin support
Hypest includes custom theming to support a few of the most popular Hyper
plugins, including:

- hyper-search
- hyper-statusline
- hyper-tab-icons
- hyper-highlight-active-pane

<img src="assets/preview-with-plugins.jpg?raw=true" alt="Hypest Screenshot" width="600" />

##  Known issues

#### Vibrancy + zsh + pasted content
There is a known issue when running zsh in Hyper where pasted content will
appear as a block with invisible text if the window background has transparency.
The issue has been [around for a while](https://github.com/zeit/hyper/issues/819)
and has no official fix, but there [is a comment](https://github.com/zeit/hyper/issues/819#issuecomment-383229725) in that issue that has a workaround. Run the following in the command
line to disable the background color of pasted content and make pasted text
visible again:

```echo 'unset zle_bracketed_paste' >> ~/.zshrc```
