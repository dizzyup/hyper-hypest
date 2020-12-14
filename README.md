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
values for the `darkmode`, `vibrancy` and `hideControls` properties.

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
        vibrancy: false,
    }
    ...
}
```
<img src="assets/preview-no-vibrancy.jpg?raw=true" alt="Hypest Screenshot" width="600" />

### Vibrancy level
To have the window appear more transparent when vibrancy is enabled, set `vibrancyLevel` to a value between `0` and `0.5`. To have the window appear more opaque, increase `vibrancyLevel` to a value between `0.7` and `1.0`. 

For both light and dark versions, the default vibrancy level is `0.6`.
```js

config: {
    ...
    hypest: {
        // Default value is 0.6
        vibrancyLevel: 0.6
    }
    ...
}
```

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
It's also used for activity in `hyper-tabs-enhanced` and `hyper-statusline`.
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
properties. These custom colors will also be inherited by `accentColor`.
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
- hyper-tabs-enhanced

<img src="assets/preview-with-plugins.jpg?raw=true" alt="Hypest Screenshot" width="600" />

##  Known issues

#### Issues with selection colors when vibrancy is enabled
There is a known issue in the Xterm.js engine where selection colors appear to
render as opaque blocks with invisible text if the `background` has transparency.
There is a [known issue](https://github.com/zeit/hyper/issues/819) on the Hyper
repository and an [open issue](https://github.com/xtermjs/xterm.js/issues/1898)
on the Xterm.js repo but unfortunately no fixes for the issue as it stands.

If you're just looking to solve **pasted** text selection for zsh shells there
is a workaround for that at least, left in a comment on
[the Hyper issue](https://github.com/zeit/hyper/issues/819#issuecomment-383229725).
Run the following command to disable the background color of pasted content to
make pasted text visible:

```
echo 'unset zle_bracketed_paste' >> ~/.zshrc
```

The only way to entirely work around the issue for now is to use the non-vibrant
theme in Hypest by setting
[vibrancy to false](https://github.com/dizzyup/hyper-hypest#vibrancy) in your
Hypest configuration.
