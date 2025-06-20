
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/admin-login"
  },
  {
    "renderMode": 2,
    "route": "/admin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HRGA7XWS.js"
    ],
    "route": "/employee-login"
  },
  {
    "renderMode": 2,
    "route": "/employee-profile"
  },
  {
    "renderMode": 2,
    "route": "/leave-request"
  },
  {
    "renderMode": 2,
    "route": "/leave-application"
  },
  {
    "renderMode": 2,
    "route": "/announcements"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 664, hash: '7ebac0b34f666a1cd822453e4fede3f6421fddf3e1015a0e7370588b38dbccde', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1066, hash: '504f82ed507134c3b8782e69268c83bc80109b7a6c997aa80cf4b4f96cd3a043', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 1675, hash: '41d4d8313d8b825c81d729028e9e9124a21fe3eb1456655041525fa248be046e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'employee-profile/index.html': {size: 5704, hash: 'c53a015e59c28ed0631328c9b3f664934d82c5f9121a3e7a3a2b9cc07ff27dfd', text: () => import('./assets-chunks/employee-profile_index_html.mjs').then(m => m.default)},
    'admin/index.html': {size: 5676, hash: '2077a999d010074e42d4b5b2ad153e10223fd0f8c282a8360ec1a4ac762c0591', text: () => import('./assets-chunks/admin_index_html.mjs').then(m => m.default)},
    'admin-login/index.html': {size: 3766, hash: 'e592add28ee547bb270ba4ebdc6a9efa0e1ca86f4e48a9c33d5cbf6ebdba391b', text: () => import('./assets-chunks/admin-login_index_html.mjs').then(m => m.default)},
    'leave-request/index.html': {size: 1616, hash: '04810a9882897bbf7296f5407388dab9721af21de597948dcbf204d6ce9d9fa3', text: () => import('./assets-chunks/leave-request_index_html.mjs').then(m => m.default)},
    'employee-login/index.html': {size: 3759, hash: '73a5450a11b41a97ab3af7a1c24a71c262fcd8c2fb530bc341b5095fcd6a90f8', text: () => import('./assets-chunks/employee-login_index_html.mjs').then(m => m.default)},
    'leave-application/index.html': {size: 3261, hash: 'fca4e6d798ad9d373c007eeee7d5c91dc7b960d542f41d774080450b1cc89c70', text: () => import('./assets-chunks/leave-application_index_html.mjs').then(m => m.default)},
    'announcements/index.html': {size: 3408, hash: '2b7082ca6fc3682a85e0b296bcb9da8625c5c0db1112830a572c2301752bfb07', text: () => import('./assets-chunks/announcements_index_html.mjs').then(m => m.default)},
    'styles-4UZPDYSL.css': {size: 699, hash: 'C/+NqjVNzKw', text: () => import('./assets-chunks/styles-4UZPDYSL_css.mjs').then(m => m.default)}
  },
};
