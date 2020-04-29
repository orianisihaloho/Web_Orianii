package demo;

import demo.pages.ArticlePage;
import demo.pages.HomePage;
import demo.webdriver.WebdriverInstance;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.BrowserType;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.concurrent.TimeUnit;

public class SeleniumTest {
    // INITIALIZE 2 PAGE
    private ArticlePage articlePage = new ArticlePage();    // Article Page
    private HomePage homePage = new HomePage();             // Home Page

    @Before
    public void before(){
        WebdriverInstance.initialize();
    }
    @After
    public void after (){
        WebdriverInstance.quit();
    }
    @Test
        public void searching(){
            homePage.openHomePage();
            homePage.inputSearch("Apple");
            homePage.clickSearch();
            String title = articlePage.getTitle();
            Assert.assertEquals("Apple",title);

    }
}
