const sizes = {
	// Extra large devices (large desktops, 1200px and up)
	xl: '1200px', 
	// Large devices (desktops, 992px and up)
	lg: '992px',
	// Medium devices (tablets, 768px and up)
  	md: '768px',
  	// Small devices (landscape phones, 576px and up)
  	sm: '576px',
};

export const media = {
	xl: `(min-width: ${sizes.xl})`,
	lg: `(min-width: ${sizes.lg})`,
  	md: `(min-width: ${sizes.md})`,
  	sm: `(min-width: ${sizes.sm})`,
};