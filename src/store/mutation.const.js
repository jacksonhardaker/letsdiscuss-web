export const ARTICLE = {
  get: {
    request: 'ARTICLE_REQUEST',
    success: 'ARTICLE_SUCCESS',
    error: 'ARTICLE_ERROR'
  },
  submit: {
    request: 'ARTICLE_SUBMIT_REQUEST',
    success: 'ARTICLE_SUBMTI_SUCCESS',
    error: 'ARTICLE_SUBMIT_ERROR'
  }
};

export const AUTH = {
  invalidToken: 'AUTH_INVALID_TOKEN',
  token: {
    validate: {
      request: 'VALIDATE_TOKEN_AUTH_REQUEST',
      success: 'VALIDATE_TOKEN_AUTH_SUCCESS',
      error: 'VALIDATE_TOKEN_AUTH_ERROR'
    }
  },
  facebook: {
    request: 'FACEBOOK_AUTH_REQUEST',
    success: 'FACEBOOK_AUTH_SUCCESS',
    error: 'FACEBOOK_AUTH_ERROR'
  },
  google: {
    request: 'GOOGLE_AUTH_REQUEST',
    success: 'GOOGLE_AUTH_SUCCESS',
    error: 'GOOGLE_AUTH_ERROR'
  },
  logout: {
    request: 'LOGOUT_AUTH_REQUEST',
    success: 'LOGOUT_AUTH_SUCCESS',
    error: 'LOGOUT_AUTH_ERROR'
  }
};

export const PERSON = {
  request: 'CURRENT_PERSON_REQUEST',
  success: 'CURRENT_PERSON_SUCCESS',
  error: 'CURRENT_PERSON_FAIL'
};

export const LOADING = {
  begin: 'LOADING_BEGIN',
  finish: 'LOADING_FINISH'
};

export const LOGIN_MODAL = {
  show: 'LOGIN_MODAL_SHOW',
  hide: 'LOGIN_MODAL_HIDE'
};

export const ALIAS = {
  request: 'CURRENT_ALIAS_REQUEST',
  success: 'CURRENT_ALIAS_SUCCESS',
  error: 'CURRENT_ALIAS_FAIL'
};

export const COMMENTS = {
  leave: {
    request: 'LEAVE_COMMENT_REQUEST',
    success: 'LEAVE_COMMENT_SUCCESS',
    error: 'LEAVE_COMMENT_ERROR'
  },
  get: {
    all: {
      request: 'GETALL_COMMENTS_REQUEST',
      success: 'GETALL_COMMENTS_SUCCESS',
      error: 'GETALL_COMMENTS_ERROR'
    }
  },
  reply: {
    request: 'REPLY_TO_COMMENT_REQUEST',
    success: 'REPLY_TO_COMMENT_SUCCESS',
    error: 'REPLY_TO_COMMENT_ERROR'
  }
};
