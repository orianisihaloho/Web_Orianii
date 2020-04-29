package demo.pages;

import demo.webdriver.IOSDriverInstance;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class DanaRegisterPage {

    public boolean isOnPage() {
        WebDriverWait wait = new WebDriverWait (IOSDriverInstance.IOSDriver,15);
        return wait.until(ExpectedConditions.presenceOfElementLocated(By.id("InputName"))).isDisplayed();
    }

}
