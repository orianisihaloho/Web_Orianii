$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/SearchWikipedia.feature");
formatter.feature({
  "name": "Search Bulbapedia",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Web"
    }
  ]
});
formatter.scenario({
  "name": "Search pokemon about Apple on Main Page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Web"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User open Bulbapedia Main page",
  "keyword": "Given "
});
formatter.match({
  "location": "demo.steps.WikipediaStepsDefinition.userOpenBulbapediaMainPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input search \"Pikachu\" on home page",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.WikipediaStepsDefinition.userInputSearchOnHomePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click button search on home page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.WikipediaStepsDefinition.userClickButtonSearchOnHomePage()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d81.0.4044.129)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DNID0651L01.local\u0027, ip: \u0027fe80:0:0:0:1c9e:9069:4445:cd15%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u002711.0.6\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.129, chrome: {chromedriverVersion: 81.0.4044.69 (6813546031a4b..., userDataDir: /var/folders/ws/kthrtbsd3n9...}, goog:chromeOptions: {debuggerAddress: localhost:61444}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 72b1b7612a2d320201fdf49b09f69c71\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat demo.pages.HomePage.clickSearch(HomePage.java:20)\n\tat demo.steps.WikipediaStepsDefinition.userClickButtonSearchOnHomePage(WikipediaStepsDefinition.java:35)\n\tat ✽.User click button search on home page(file:///Users/sihalohoo/IdeaProjects/Web_Oriani/src/test/resources/features/SearchWikipedia.feature:7)\n",
  "status": "failed"
});
formatter.step({
  "name": "User see article with title \"Pikachu\" on article page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps.WikipediaStepsDefinition.userSeeArticleWithTitleOnArticlePage(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User open Bulbapedia Main page",
  "keyword": "Given "
});
formatter.match({
  "location": "demo.steps.WikipediaStepsDefinition.userOpenBulbapediaMainPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User input search \"Apple\" on Main page",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.WikipediaStepsDefinition.userInputSearchOnMainPage(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click button search on Main page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.WikipediaStepsDefinition.userClickButtonSearchOnMainPage(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User see article with title \"Apple\" on article page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps.WikipediaStepsDefinition.userSeeArticleWithTitleOnArticlePage(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Search article about Pear on Main Page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Web"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User open Bulbapedia Main page",
  "keyword": "Given "
});
formatter.match({
  "location": "demo.steps.WikipediaStepsDefinition.userOpenBulbapediaMainPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input search \"Pear\" on home page",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.WikipediaStepsDefinition.userInputSearchOnHomePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click button search on home page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.WikipediaStepsDefinition.userClickButtonSearchOnHomePage()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d81.0.4044.129)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DNID0651L01.local\u0027, ip: \u0027fe80:0:0:0:1c9e:9069:4445:cd15%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u002711.0.6\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.129, chrome: {chromedriverVersion: 81.0.4044.69 (6813546031a4b..., userDataDir: /var/folders/ws/kthrtbsd3n9...}, goog:chromeOptions: {debuggerAddress: localhost:61571}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: a1a80f8855c65254dac189f972a806b0\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat demo.pages.HomePage.clickSearch(HomePage.java:20)\n\tat demo.steps.WikipediaStepsDefinition.userClickButtonSearchOnHomePage(WikipediaStepsDefinition.java:35)\n\tat ✽.User click button search on home page(file:///Users/sihalohoo/IdeaProjects/Web_Oriani/src/test/resources/features/SearchWikipedia.feature:18)\n",
  "status": "failed"
});
formatter.step({
  "name": "User see article with title \"Pear\" on article page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps.WikipediaStepsDefinition.userSeeArticleWithTitleOnArticlePage(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});