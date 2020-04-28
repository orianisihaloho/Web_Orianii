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

//    WebDriver driver;
////    @Before
//    public void initialzeWebdriver() throws InterruptedException {
//        //SETTING PLATFORM AND BROWSER
//        ChromeOptions options = new ChromeOptions();                                // set Browser using Chrome
//        options.addArguments("--start-maximized","--incognito","disable-infobar");  // set incognito,set maximize in windows, and set infobar
//        options.setCapability(CapabilityType.PLATFORM_NAME, Platform.MAC);          // set platform : Mac
//        options.setCapability(CapabilityType.BROWSER_NAME, BrowserType.CHROME);     // set browser and version : Chrome
//
//        driver = new ChromeDriver(options);
//        driver.manage().window().maximize();                                        // set maximize in Mac
//        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);       // set timeout after 5s, defined by selenium
//        //Thread.sleep(5000);                                                       // will quit after 5s
//
//    }
//
////    @After
//    public void driverQuit(){
//        //QUIT
//        driver.quit();
//    }
//    // TEST 1
//    @Test
//    public void searchOnWikitionary() throws InterruptedException {
//        //CALL URL
//        driver.get("https://www.wikipedia.com/");                                              // open web wikipedia
//        WebElement inputSearch = driver.findElement(By.id("searchInput"));                    // find searchInput as ID
//        inputSearch.sendKeys("apple");                                          // type keyword "apple" on search field
//        WebElement buttonSearch = driver.findElement(By.xpath("//*[@type = 'submit']"));    // find element submit by Xpath
//        buttonSearch.click();                                                              // do click
//
//        // RESULT
//        // WebElement titleArticle = driver.findElement(By.id("firstHeading"));               // find element firstHeading by id
//        WebDriverWait explicitWait = new WebDriverWait(driver,10);           // explicit
//        WebElement titleArticle = explicitWait
//                .until(ExpectedConditions.presenceOfElementLocated(By.id("firstHeading")));
//        String title = titleArticle.getText();                                              // check if title is "Apple" or not
//        Assert.assertEquals("Apple",title);                                       // check if title = "Apple" not "apple" or anything
//
//    }
//
//    // TEST 2
//    @Test
//    public void searchOnWikitionary2() throws InterruptedException {
//        // CALL URL
//        driver.get("https://www.wikipedia.com/");                                              // open web wikipedia
//        WebElement inputSearch = driver.findElement(By.id("searchInput"));                    // find searchInput as ID
//        inputSearch.sendKeys("pear");                                           // type keyword "pear" on search field
//        WebElement buttonSearch = driver.findElement(By.xpath("//*[@type = 'submit']"));    //find element submit by Xpath
//        buttonSearch.click();                                                              // do click
//
//        // RESULT
//        WebElement titleArticle = driver.findElement(By.id("firstHeading"));                // find element firstHeading by id
//        String title = titleArticle.getText();                                             // check if title is "Pear" or not
//        Assert.assertEquals("Pear",title);                                       // check if title = "Pear" not "pear" or anything
//
//    }

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
