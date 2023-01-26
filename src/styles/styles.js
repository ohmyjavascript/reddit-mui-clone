// A bunch of common styles exported as objects

/***********************
 * App.js
 ************************/

export const appWrapper = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
};

export const contentWrapper = {
  flexGrow: 1,
  display: 'flex',
  alignItems: 'stretch',
  marginTop: '56px',
  position: 'relative',
};

export const sideBarWrapper = {
  minWidth: '250px',
  position: 'fixed',
  top: 0,
  bottom: 0,
  paddingTop: '56px',
  display: 'flex',
  flexDirection: 'column',
  bgcolor: 'background.paper',
  color: 'text.primary',
  borderRight: 1,
  borderColor: 'text.sideBorder',
  display: 'none',
  '@media (min-width: 1070px)': {
    display: 'flex',
  },
};

export const scrollListWrapper = {
  flexGrow: 1,
  overflow: 'scroll',
};

export const createAccountWrapper = {
  flexBasis: '220px',
  maxWidth: '250px',
};

export const joinRedditWrapper = {
  p: 2,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};

export const contentAreaWrapper = {
  flexGrow: 1,
  marginLeft: '0px',
  padding: '20px',
  backgroundColor: 'background.default',
  '@media (min-width: 1070px)': {
    marginLeft: '250px',
  },
};

/***********************
 * SideList
 ************************/

export const sideListWrapper = {
  width: '250px',
  bgcolor: 'background.paper',
  color: 'text.primary',
};

export const sideListItemText = {
  textTransform: 'uppercase',
  fontSize: '12px',
};

export const sideListSpacing = { ml: 2, mt: 2 };

export const sideListResetPadding = { pt: 0, pb: 0 };

/***********************
 * UserProfileWrapper
 ************************/

export const grayText = { color: '#aaa' };
export const userProfileMinWidth = { minWidth: 200 };

/***********************
 * SearchBarInput
 ************************/

export const searchBarInput = { ml: 1, flex: 1, pl: 1 };

/***********************
 * Navigation
 ************************/

export const appToolBarWrapper = {
  '@media (min-width: 600px)': {
    minHeight: '56px',
  },
};

// color switches based on themes
export const appBar = {
  backgroundColor: 'background.primary',
  color: 'text.primary',
};

export const toolbarWrapper = {
  display: 'flex',
  justifyContent: 'space-between',
  flexGrow: 1,
  alignItems: 'center',
};

export const logoWrapper = {
  display: 'flex',
};

export const mobileNavWrapper = {
  ml: 1,
  display: 'block',
  '@media (min-width: 1070px)': {
    display: 'none',
  },
};

export const loginBtnWrapper = {
  display: 'none',
  '@media (min-width: 1070px)': {
    display: 'block',
  },
};

/***********************
 * Mobile Navigation
 ************************/

export const mobileBtnWrapper = {
  width: 'auto',
  display: 'flex',
  justifyContent: 'flex-start',
  color: '#000',
};

export const positionRelative = { position: 'relative' };
export const positionAbsolute = { position: 'absolute' };
export const flexGrow = { flexGrow: 1 };

/***********************
 * Logo
 ************************/

export const logoText = {
  fontSize: 22,
  ml: 1,
  fontFamily: 'IBM Plex Sans',
  display: 'none',
  '@media (min-width: 1070px)': {
    display: 'block',
  },
};

/***********************
 * Trending Images
 ************************/

export const trendingImageHeader = {
  fontWeight: 'bold',
  mb: 2,
  color: 'text.primary',
};

export const trendimgImageContent = {
  marginTop: '-110px',
  px: 2,
  color: '#fff',
};

/***********************
 * SwitchLayout
 ************************/

export const switchLayoutBtn = {
  border: 'none',
  borderRadius: 20,
  color: '#aaa',
};

/***********************
 * Post Sort widget
 ************************/

export const cardContentWrapper = {
  '&:last-child': { paddingBottom: '16px' },
};

export const postSortLayoutWrapper = {
  display: 'flex',
  flexAlign: 'center',
  alignItems: 'center',
};

export const postSortBtn1 = {
  border: '1px solid #eee',
  backgroundColor: '#eee',
  borderRadius: 20,
  mr: 1,
  fontWeight: 'bold',
};

export const postSortBtn2 = {
  borderRadius: 20,
  mr: 1,
  color: '#aaa',
  fontWeight: '900',
  textTransform: 'none',
  fontSize: '15px',
  border: 'none',
  '&:hover': { border: 'none' },
};

/***********************
 * Popular Post Wrapper
 ************************/

export const popularPostHeader = {
  fontWeight: 'bold',
  mb: 2,
  color: 'text.primary',
};

export const postSortContainer = {
  display: 'flex',
  justifyContent: 'space-between',
};

export const postSortWrapper = {
  display: 'none',
  '@media (min-width: 1070px)': {
    display: 'block',
  },
};

export const postSectionWrapper = {
  width: '100%',
  '@media (min-width: 1070px)': {
    width: '58%',
  },
};

export const communitiesWrapper = {
  width: '100%',
  display: 'none',
  '@media (min-width: 1070px)': {
    display: 'block',
    width: '40%',
  },
};

/***********************
 * Popular Communities
 ************************/
export const tagLinks = { mx: 2, fontSize: '12px', textDecoration: 'none' };
export const accordionHeader = { fontSize: '10px', fontWeight: 'bold' };
export const showMoreLinkBtn = {
  textTransform: 'none',
  fontSize: '14px',
  fontWeight: 'bold',
  marginTop: 1,
};

/***********************
 * Policy
 ************************/

export const policyWrapper = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  mt: 3,
  p: 1,
  borderBottom: '1px solid #eee',
};

export const policyLink = { width: '45%', color: 'grey' };
export const footerWrapper = { textAlign: 'center', width: '100%', mt: 1 };

export const searchBar = {
  display: 'flex',
  alignItems: 'center',
  boxShadow: 0,
  borderRadius: 20,
  mr: 1,
  border: '1px solid #ccc',
  width: 'auto',
  '@media (min-width: 600px)': {
    width: '40vw',
  },
};

/***********************
 * Info Card
 ************************/
export const infoCardWrapper = {
  display: 'flex',
  backgroundColor: 'background.lightPaper',
  mt: 2,
};

export const infoCardLayout = { p: 1, width: '100%' };
export const infoCardHeader = {
  fontSize: '16px',
  fontWeight: 'bold',
  pr: 3,
  mb: 2,
  color: 'text.primary',
};

/***********************
 * Select More
 ************************/

export const selectCountryBtn = {
  border: '1px solid #eee',
  backgroundColor: '#eee',
  borderRadius: 20,
  mr: 1,
  fontWeight: 'bold',
};

/***********************
 * Avatar
 ************************/

export const avatarWrapper = { display: 'flex', alignItems: 'center', mt: 1 };

export const cardFooterWrapper = {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  mt: 1,
};

export const cardFooterText = {
  mr: 2,
  fontSize: '11px',
  color: 'text.primary',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
};

/************************
 * Image content
 ************************/

export const imageContentBox = { width: '100%', height: '300px' };

export const likesWidget = {
  width: '50px',
  display: 'flex',
  flexDirection: 'column',
  p: 2,
  alignItems: 'center',
  backgroundColor: 'background.lightPaper2',
  color: 'text.primary',
};

/************************
 * Link content
 ************************/

export const linkContentWrapper = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export const linkContentBtn = { border: '1px solid #ccc', px: 4, py: 3 };

/************************
 * Post Info content
 ************************/

export const postInfoContentWrapper = {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
};

export const postInfoLayoutWrapper = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  marginBottom: 1,
};

export const postInfoHeader = {
  mr: 1,
  display: 'flex',
  alignItems: 'center',
  fontWeight: 'bold',
  color: 'text.primary',
};

export const postInfoDesc = { mr: 1, fontSize: '13px', color: 'text.primary' };

export const postInfoSubHeader = { fontSize: '13px', color: 'text.primary' };

/************************
 * General styles
 ************************/
export const flexAlignCenter = {
  display: 'flex',
  alignItems: 'center',
};

export const flexColumnGrow = {
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
};

export const flexColumnCenter = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};

export const inlineText = { display: 'inline', fontSize: 12 };

export const flex = { display: 'flex' };

export const scrollWrapper = {
  overflowY: 'hidden',
  '::-webkit-scrollbar': { height: '3px' },
};
export const hideOnMobile = { display: { xs: 'none', sm: 'flex' } };

export const flexWrap = { display: 'flex', flexWrap: 'wrap' };
