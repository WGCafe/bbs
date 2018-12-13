const TOKEN_COOKIE_NAME = 'JSESSIONID';

class CommonUtil {
  static getWindowObj () {
    return window;
  }

  // Check if parent window is a cross domain page
  static isParentWindowAccessible() {
    let windowObj = this.getWindowObj();
    let parentDoc = null;

    try {
      parentDoc = windowObj.parent.document;
    } catch(e) {
      parentDoc = null;
    }

    return parentDoc !== null;
  }

  static getCookie(cookieString, cookieName) {
    let cookieArray = cookieString.split(';');

    for (let i = 0; i < cookieArray.length; i++) {
      let currentCookie = cookieArray[i].split('=');

      if(currentCookie[0].trim() == cookieName) {
        return currentCookie[1];
      }
    }
  }

  static getTokenId() {
    const windowObj = this.getWindowObj();
    let cookieString = windowObj.document.cookie;

    // This means current window is embedded in another frame
    if (CommonUtil.isParentWindowAccessible() && windowObj.parent !== window) {
      let parentLocation = windowObj.parent.location;

      // Parent frame is in a same domain
      if (parentLocation.host === windowObj.location.host && parentLocation.pathname !== windowObj.location.pathname) {
        cookieString = windowObj.parent.document.cookie;
      }
    }

    return this.getCookie(cookieString, TOKEN_COOKIE_NAME);
  }
}

export default CommonUtil;