package demo.webdriver;

import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.ios.IOSDriver;
import io.appium.java_client.ios.IOSElement;
import org.openqa.selenium.remote.DesiredCapabilities;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

public class IOSDriverInstance {

    public static IOSDriver <IOSElement> IOSDriver;

    public static void initialize(){
        String appiumUrl = "http:127.0.0.1:4723/wd/hub/";                      //URL: port

        //DEFINE CAPABILITIES
        DesiredCapabilities caps = new DesiredCapabilities();
        caps.setCapability("platformName", "iOS");
        caps.setCapability("deviceName", "iPhone 11 Pro Max");
        caps.setCapability("app", "/Users/sihalohoo/Code/APPS/TestingApp.app");
        caps.setCapability("udid", "931574F0-E7D9-4F66-B441-5C1CE4890097");
        caps.setCapability("automationName", "XCUITest");
        caps.setCapability("platformVersion", "13.4.1");

        try {
            IOSDriver = new IOSDriver<IOSElement>(new URL(appiumUrl), caps);
            IOSDriver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
    }

    public static void quit(){
        IOSDriver.quit();
    }
}
