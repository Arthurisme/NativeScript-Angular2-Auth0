# NativeScript-Angular2-Auth0 v 1.00


##Currently(2016-09-18), nativescript-auth0 is working well on ios, and android will support in a short time.


##This repo is for nativescript angular 2 project , with login via Auth0.
##To the repo that sync login and toke to Spring boot back end, please go here:
https://github.com/Arthurisme/auth0-iosmorphic




##How to use:
1, Study here: https://github.com/sitefinitysteve/nativescript-auth0/tree/master/plugin
2, Register a Auth0 account, config call back as yourDomain.auth0.com/mobile.
3, git clone https://github.com/Arthurisme/NativeScript-Angular2-Auth0
   cd NativeScript-Angular2-Auth0
   tns run ios

##Notice:

###About install nativescript-auth0 plugin:
   You must check the version of nativescript-auth0 plugin, Make sure it is the latest version (at least v 2.0).
   If online installation fail to get correct version, you can install it local by : tns add plugin PathNameYourDownloadPlugin.

###About pod version:

   If there are a error about pod or cocoapods, you may have some problem in pod. Make sure you have correct version installed.Please do something as:

   check pod version:
   pod --version

   install:
   sudo gem install cocoapods -v 1.0.1   (nativescript 2 use this one is ok! and wait for a very long time to build)

   Uninstall:
   sudo gem uninstall cocoapods -v 1.0.1

   (Currently 2016-09 for no angular version nativescript)
   sudo gem install cocoapods -v 0.39.0
   sudo gem uninstall cocoapods -v 0.39.0




   pod install
   pod setup


 ##File sturcture:

'''
.
├── README.md
├── app
│   ├── App_Resources
│   ├── auth0-login--------------------------Auth0 login home page.
│   ├── groceries----------------------------This one is a copy of official sample, just ignorant it.
│   ├── login--------------------------------This one is a copy of official sample, just ignorant it.
│   ├── plugin-------------------------------The copy of auth0-nativescript plugin.
│   ├── shared
│   └── tests
├── hooks
├── lib
│   └── iOS
├── node_modules
│   └── zone.js
├── package.json
├── platforms
│   ├── android
│   └── ios
├── references.d.ts
└── tsconfig.json

'''

MIT license