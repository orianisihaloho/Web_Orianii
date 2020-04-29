package demo.hooks;

import demo.webdriver.IOSDriverInstance;
import io.cucumber.java.After;
import io.cucumber.java.Before;

public class IOSDriverHook {
    @Before("@IOS")
    public void initialize(){
        IOSDriverInstance.initialize();

    }

    @After("@IOS")
    public void quitIOSDriver(){
        IOSDriverInstance.quit();
    }

}

