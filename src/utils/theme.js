const colors = {
	white:   '#fff',
	gray100: '#f8f9fa',
	gray200: '#ebebeb',
	gray300: '#dee2e6',
	gray400: '#ced4da',
	gray500: '#adb5bd',
	gray600: '#999',
	gray700: '#444',
	gray800: '#303030',
	gray900: '#222',
	black:   '#000',
	blue:    '#375a7f',
	indigo:  '#6610f2',
	purple:  '#6f42c1',
	pink:    '#e83e8c',
	red:     '#E74C3C',
	orange:  '#fd7e14',
	yellow:  '#F39C12',
	green:   '#00bc8c',
	teal:    '#20c997',
	cyan:    '#3498DB'
}

const theme = {
	color: 			colors,
  	primary: 		colors.blue,
  	secondary:     	colors.gray700,
	success:       	colors.green,
	info:          	colors.cyan,
	warning:       	colors.yellow,
	danger:        	colors.red,
  	bg: 			colors.white,
  	dark: 			'rgba(0, 0, 0, 0.9)',
  	default: 		'rgba(0, 0, 0, 0.7)',
  	light: 			'rgba(0, 0, 0, 0.6)',
  	ultraLight: 	'rgba(0, 0, 0, 0.25)',
  	transitionTime: '0.5s',
  	fontSmall: 		'0.9rem',
  	linkColor:      colors.success,
  	cardCapBg:      colors.gray700,
	cardBg:         colors.gray800,
 	pattern: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23d02e77' fill-opacity='0.15'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`,
};

export default theme;
