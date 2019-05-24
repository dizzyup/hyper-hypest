'use strict';

exports.decorateConfig = config => {

  const hypest = Object.assign({
    darkmode: false,
    vibrancy: true,
    colors: {},
    accentColor: 'blue'
  }, config.hypest)

  if (hypest.vibrancy === true) {
    if (hypest.darkmode === true) {
      exports.onWindow = browserWindow => browserWindow.setVibrancy('ultra-dark');
    } else {
      exports.onWindow = browserWindow => browserWindow.setVibrancy('light');
    }
  }

  const foreground = (hypest.darkmode === true) ? '#FFFFFF' : '#222222';
  const darkWithoutVibrancy = (hypest.darkmode === true) && (hypest.vibrancy === false);

  const black = (hypest.colors.hasOwnProperty('black')) ? hypest.colors['black'] : '#222222';
  const red = (hypest.colors.hasOwnProperty('red')) ? hypest.colors['red'] : '#FF3B30';
  const green = (hypest.colors.hasOwnProperty('green')) ? hypest.colors['green'] : '#00CB24';
  const yellow = (hypest.colors.hasOwnProperty('yellow')) ? hypest.colors['yellow'] : '#FFA600';
  const blue = (hypest.colors.hasOwnProperty('blue')) ? hypest.colors['blue'] : '#0095FF';
  const magenta = (hypest.colors.hasOwnProperty('magenta')) ? hypest.colors['magenta'] : '#EF338E';
  const cyan = (hypest.colors.hasOwnProperty('cyan')) ? hypest.colors['cyan'] : '#11B5FF';
  const white = (hypest.colors.hasOwnProperty('white')) ? hypest.colors['white'] : '#FFFFFF';

  const colors = {
    black, red, green, yellow, blue, magenta, cyan, white
  }

  const accentColor = hypest.accentColor;
  const cursorColor = colors[accentColor];

  const selectionColor = colors[accentColor] + '32';
  const shadowColor = colors[accentColor] + '00';
  const shadowColorRing = colors[accentColor] + '28';
  const shadowColorBorder = colors[accentColor] + 'CC';

  return Object.assign({}, config, {
    foregroundColor: foreground,
    backgroundColor: 'transparent',
    cursorColor: cursorColor,
    selectionColor: selectionColor,
    colors: {
      black: colors.black,
      red: colors.red,
      green: colors.green,
      yellow: colors.yellow,
      blue: colors.blue,
      magenta:colors.magenta,
      cyan: colors.cyan,
      white: colors.white,
      lightBlack: colors.black,
      lightRed: colors.red,
      lightGreen: colors.green,
      lightYellow: colors.yellow,
      lightBlue: colors.blue,
      lightMagenta: colors.magenta,
      lightCyan: colors.cyan,
      lightWhite: colors.white
    },
    css: `
      ${config.css || ''}
      .hyper_main {
        background: ${hypest.darkmode ? 'rgba(0, 0, 0, .4)' : 'rgba(255, 255, 255, .85)'};
        border: none !important;
      }
      .hyper_main::before {
        display: ${darkWithoutVibrancy ? 'block' : 'none'};
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, .8);
      }
      .splitpane_divider {
        background-color: ${hypest.darkmode ? 'rgba(255, 255, 255, .1)' : 'rgba(0, 0, 0, .05)'} !important;
      }
      .header_header {
        background-color: transparent !important;
      }
      .tabs_borderShim {
        border-color: transparent !important;
      }
      .tabs_list {
        overflow-x: auto;
        overflow-y: hidden;
      }
      .tab_tab {
        border: 0;
        min-width: 90px;
        background: transparent !important;
      }
      .tab_text {
        color: ${hypest.darkmode ? 'rgba(255, 255, 255, .4)' : 'rgba(0, 0, 0, .4)'};
        background: ${hypest.darkmode ? 'rgba(0, 0, 0, .3)' : 'rgba(0, 0, 0, .05)'};
        transition: background ease .1s, color ease .1s;
      }
      .tab_tab:hover .tab_text {
        color: ${hypest.darkmode ? 'rgba(255, 255, 255, .8)' : 'rgba(0, 0, 0, .6)'};
        background: ${hypest.darkmode ? 'rgba(0, 0, 0, .15)' : 'rgba(0, 0, 0, .02)'};
      }
      .tab_icon {
        color: ${hypest.darkmode ? '#FFF' : '#222'};
        width: 15px !important;
        height: 15px !important;
        top: 9px;
        right: 9px;
        border-radius: 15px !important;
      }
      .tab_icon:hover {
        background: ${hypest.darkmode ? 'rgba(255, 255, 255, .1)' : 'rgba(0, 0, 0, .05)'} !important;
      }
      .tab_icon svg {
        display: none;
      }
      .tab_icon::before {
        display: none !important;
      }
      .tab_icon::after {
        content: '';
        position: absolute;
        top: 4px;
        left: 4px;
        width: 7px;
        height: 7px;
        opacity: .8;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='7' height='7' viewBox='0 0 7 7'%3E%3Cpath fill='${hypest.darkmode ? '%23FFF' : '%23222'}' fill-rule='evenodd' d='M6.03554572,6.83548509 L3.49504595,4.29706594 L0.957967343,6.8322625 C0.737166863,7.05059545 0.381074894,7.04870051 0.162613563,6.82802976 C-0.0542099399,6.60901359 -0.0542037584,6.25637092 0.162627533,6.03736121 L2.69981853,3.50227698 L0.163273785,0.967810534 C-0.0531566711,0.745171539 -0.0480175614,0.389339098 0.174752389,0.173036435 C0.392961119,-0.0388380703 0.740197748,-0.038868679 0.958445534,0.172967337 L3.49513077,2.7074057 L6.03476629,0.169878382 C6.25148385,-0.0524814282 6.60753114,-0.0571583867 6.83002172,0.15943183 C7.05251229,0.376022046 7.057192,0.731860103 6.84047442,0.954219926 C6.83700871,0.957775874 6.833496,0.961285769 6.82993722,0.964748713 L4.29049839,3.50227603 L6.83083636,6.04053346 C7.05041685,6.2599602 7.0504368,6.61574181 6.83088095,6.8351924 C6.61120524,7.05482901 6.25517874,7.05490146 6.03554572,6.83548509 Z'/%3E%3C/svg%3E%0A");
      }
      .tab_textActive, .tabs_title {
        color: ${hypest.darkmode ? 'rgba(255, 255, 255, .8)' : 'rgba(0, 0, 0, .8)'} !important;
        background: ${hypest.darkmode ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, 0)'} !important;
      }
      .tab_active:hover .tab_textActive {
        color: ${hypest.darkmode ? 'rgba(255, 255, 255, .8)' : 'rgba(0, 0, 0, .8)'};
        background: ${hypest.darkmode ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, 0)'};
      }
      .tab_first {
        padding-left: 0;
      }

      .xterm-viewport::-webkit-scrollbar {
        width: 6px !important;
        height: 6px !important;
      }
      .xterm-viewport::-webkit-scrollbar-thumb {
        background: ${hypest.darkmode ? 'rgba(255, 255, 255, .2)' : 'rgba(0, 0, 0, .2)'};
      }
      .tabs_list::-webkit-scrollbar {
        width: 3px !important;
        height: 3px !important;
      }
      .tabs_list::-webkit-scrollbar-thumb {
        background: ${hypest.darkmode ? 'rgba(255, 255, 255, .2)': 'rgba(0, 0, 0, .2)'};
      }

      // Override: hyper-search

      .hyper-search-wrapper {
        position: relative !important;
        width: 100% !important;
        height: 52px !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        border: 0 !important;
        padding: 12px 14px 12px !important;
        background-color: transparent !important;
        border-radius: 0 !important;
        display: flex;
        opacity: 1 !important;
        box-shadow: 0 1px 0 ${hypest.darkmode ? 'rgba(255, 255, 255, .1)' : 'rgba(0, 0, 0, .05)'};
      }
      .hyper-search-wrapper::before {
        content: '';
        position: absolute;
        top: 20px;
        left: 9px;
        margin-left: 14px;
        width: 12px;
        height: 12px;
        opacity: .8;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='${hypest.darkmode ? '%23FFF' : '%23222'}' fill-rule='evenodd' d='M18.0180272,15.9763428 L20.6402114,18.1942488 C21.0709886,18.5618712 21.1221857,19.2090988 20.7545639,19.639876 C20.3869415,20.0706532 19.7397138,20.1218503 19.3089367,19.7542284 C19.2678681,19.7191809 19.2296318,19.6809446 19.1945843,19.639876 L16.9761808,17.0181474 C16.1446386,17.6350733 15.1149359,18 14,18 C11.2385763,18 9,15.7614237 9,13 C9,10.2385763 11.2385763,8 14,8 C16.7614237,8 19,10.2385763 19,13 C19,14.1150083 18.6350259,15.1447724 18.0180272,15.9763428 Z M14,16.5 C15.9329966,16.5 17.5,14.9329966 17.5,13 C17.5,11.0670034 15.9329966,9.5 14,9.5 C12.0670034,9.5 10.5,11.0670034 10.5,13 C10.5,14.9329966 12.0670034,16.5 14,16.5 Z' transform='translate(-9 -8)'/%3E%3C/svg%3E%0A");
      }
      .hyper-search-wrapper button {
        width: 28px;
        background: ${hypest.darkmode ? 'rgba(255, 255, 255, .2)' : 'rgba(255, 255, 255, .6)'};
        border-radius: 5px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, .1), 0 0 1px rgba(0, 0, 0, .1);
        top: 0 !important;
        opacity: 1 !important;
        padding: 0 6px;
        cursor: pointer;
        flex-shrink: 0;
      }
      .hyper-search-wrapper button:hover {
        opacity: 1 !important;
      }
      .hyper-search-wrapper button:active {
        background: ${hypest.darkmode ? 'rgba(255, 255, 255, .3)' : 'rgba(255, 255, 255, .2)'};
      }
      .hyper-search-wrapper button.hyper-search-previous-button {
        border-radius: 5px 2px 2px 5px !important;
        margin-right: 1px;
      }
      .hyper-search-wrapper button.hyper-search-previous-button::after {
        content: '';
        position: absolute;
        top: 9px;
        left: 11px;
        width: 6px;
        height: 10px;
        opacity: .8;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='10' viewBox='0 0 6 10'%3E%3Cpath fill='${hypest.darkmode ? '%23FFF' : '%23222'}' d='M176.232354,17.7552874 C175.965383,17.9964219 175.922098,18.4362476 176.135675,18.7376657 C176.349251,19.0390838 176.738812,19.0879533 177.005783,18.8468188 L181.767669,14.5457657 C182.077444,14.2659699 182.077444,13.7340301 181.767669,13.4542343 L177.005783,9.15318116 C176.738812,8.91204669 176.349251,8.96091622 176.135675,9.2623343 C175.922098,9.56375238 175.965383,10.0035781 176.232354,10.2447126 L180.389999,14 L176.232354,17.7552874 Z' transform='matrix(-1 0 0 1 182 -9)'/%3E%3C/svg%3E%0A");
      }
      .hyper-search-wrapper button.hyper-search-next-button {
        border-radius: 2px 5px 5px 2px !important;
      }
      .hyper-search-wrapper button.hyper-search-next-button::after {
        content: '';
        position: absolute;
        top: 9px;
        left: 11px;
        width: 6px;
        height: 10px;
        opacity: .8;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='10' viewBox='0 0 6 10'%3E%3Cpath fill='${hypest.darkmode ? '%23FFF' : '%23222'}' d='M205.232354,17.7552874 C204.965383,17.9964219 204.922098,18.4362476 205.135675,18.7376657 C205.349251,19.0390838 205.738812,19.0879533 206.005783,18.8468188 L210.767669,14.5457657 C211.077444,14.2659699 211.077444,13.7340301 210.767669,13.4542343 L206.005783,9.15318116 C205.738812,8.91204669 205.349251,8.96091622 205.135675,9.2623343 C204.922098,9.56375238 204.965383,10.0035781 205.232354,10.2447126 L209.389999,14 L205.232354,17.7552874 Z' transform='translate(-205 -9)'/%3E%3C/svg%3E%0A");
      }
      .hyper-search-wrapper button.hyper-search-case-button {
        margin-left: 8px;
      }
      .hyper-search-wrapper button.hyper-search-case-button-unfocused::after {
        content: '';
        position: absolute;
        top: 8px;
        left: 8px;
        width: 12px;
        height: 12px;
        opacity: .8;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='13' viewBox='0 0 12 13'%3E%3Cpath fill='${hypest.darkmode ? '%23FFF' : '%23222'}' d='M237.994208,17.1648438 L243.994208,17.1648438 L243.994208,20.2 L237.994208,20.2 L237.994208,17.1648438 Z M238.996139,18.1726563 L238.996139,19.1863281 L242.992278,19.1863281 L242.998069,18.1726563 L238.996139,18.1726563 Z M235,14.2703125 L241.005792,8.2 L247,14.2703125 L244,14.2703125 L244,16.1511719 L237.994208,16.1511719 L238,14.2703125 L235,14.2703125 Z M241.005792,9.6296875 L237.409266,13.2566406 L239.001931,13.2566406 L238.996139,15.1375 L242.998069,15.1375 L243.003861,13.2566406 L244.584942,13.2566406 L241.005792,9.6296875 Z' transform='translate(-235 -8)'/%3E%3C/svg%3E%0A");
      }
      .hyper-search-wrapper button.hyper-search-case-button-focused,
      .hyper-search-wrapper button.hyper-search-case-button-focused:active {
        background: ${hypest.darkmode ? 'rgba(255, 255, 255, .6)' : cursorColor};
      }
      .hyper-search-wrapper button.hyper-search-case-button-focused::after {
        content: '';
        position: absolute;
        top: 8px;
        left: 8px;
        width: 12px;
        height: 12px;
        opacity: 1;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='13' viewBox='0 0 12 13'%3E%3Cpath fill='${hypest.darkmode ? '%23222' : '%23FFF'}' d='M237.994208,17.1648438 L243.994208,17.1648438 L243.994208,20.2 L237.994208,20.2 L237.994208,17.1648438 Z M238.996139,18.1726563 L238.996139,19.1863281 L242.992278,19.1863281 L242.998069,18.1726563 L238.996139,18.1726563 Z M235,14.2703125 L241.005792,8.2 L247,14.2703125 L244,14.2703125 L244,16.1511719 L237.994208,16.1511719 L238,14.2703125 L235,14.2703125 Z M241.005792,9.6296875 L237.409266,13.2566406 L239.001931,13.2566406 L238.996139,15.1375 L242.998069,15.1375 L243.003861,13.2566406 L244.584942,13.2566406 L241.005792,9.6296875 Z' transform='translate(-235 -8)'/%3E%3C/svg%3E%0A");
      }
      #hyper-search-input {
        background: ${hypest.darkmode ? 'rgba(255, 255, 255, .1)' : 'rgba(255, 255, 255, .5)'};
        border-radius: 5px;
        box-shadow: 0 0 0 3px ${shadowColor}, 0 1px 3px rgba(0, 0, 0, .1), 0 0 1px rgba(0, 0, 0, .1), 0 0 0 1px ${shadowColor};
        padding: 2px 6px 2px 26px !important;
        color: ${hypest.darkmode ? '#fff' : '#222'} !important;
        opacity: 1 !important;
        margin-right: 8px;
        flex-grow: 1;
      }
      #hyper-search-input:focus {
        background: ${hypest.darkmode ? 'rgba(255, 255, 255, .3)' : 'rgba(255, 255, 255, .65)'};
        box-shadow: ${hypest.darkmode ? '0 1px 3px rgba(0, 0, 0, .1), 0 0 1px rgba(0, 0, 0, .1)' : '0 0 0 3px ' + shadowColorRing + ', 0 1px 3px rgba(0, 0, 0, .1), 0 0 1px rgba(0, 0, 0, 0), 0 0 0 1px ' + shadowColorBorder + ''};
        opacity: 1 !important;
      }
      #hyper-search-input::-webkit-input-placeholder {
        color: ${hypest.darkmode ? 'rgba(255, 255, 255, .4)' : 'rgba(0, 0, 0, .3)'} !important;
      }
      .hyper-search-wrapper + .term_fit {
        height: calc(100% - 52px) !important;
      }

      // Override: hyper-tab-icons

      .tabs_title svg, .tab_tab svg {
        fill: ${hypest.darkmode ? '#fff' : '#222'} !important;
        opacity: ${hypest.darkmode ? '.3' : '.6'};
        shape-rendering: crispEdges;
      }
      .tabs_title svg {
        opacity: .8;
      }
      .tab_tab.tab_active svg {
        opacity: .8;
      }

      // Override: hyper-statusline

      .footer_footer {
        opacity: 1 !important;
        background: ${hypest.darkmode ? 'rgba(0, 0, 0, .2)' : 'rgba(0, 0, 0, .03)'} !important;
      }

      .footer_group {
        color: ${hypest.darkmode ? '#fff' : '#222'} !important;
      }

      .footer_footer .item_icon::before,
      .footer_footer .item_dirty::before,
      .footer_footer .item_ahead::before {
        background: ${hypest.darkmode ? '#fff' : '#222'} !important;
        opacity: .8;
      }

      .footer_footer .item_dirty,
      .footer_footer .item_ahead {
        color: ${hypest.darkmode ? '#fff' : '#222'} !important;
      }
    `
  });
};
