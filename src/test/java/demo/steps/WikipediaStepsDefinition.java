package demo.steps;

import demo.pages.ArticlePage;
import demo.pages.HomePage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class WikipediaStepsDefinition {

    //OBJECT
    private ArticlePage articlePage = new ArticlePage();
    private HomePage homePage = new HomePage();


    @Given("User open Bulbapedia Main page")
    public void userOpenBulbapediaMainPage() {
        homePage.openHomePage();
    }

    @When("User input search {string} on Main page")
    public void userInputSearchOnMainPage(String keyword) {
        homePage.inputSearch(keyword);
    }
    @And("User click button search on Main page")
    public void userClickButtonSearchOnMainPage(String title) {
        String actual = articlePage.getTitle();
        Assert.assertEquals(title, actual);
    }

    @When("User click button search on home page")
    public void userClickButtonSearchOnHomePage() {
        homePage.clickSearch();
    }

    @Then("User see article with title {string} on article page")
    public void userSeeArticleWithTitleOnArticlePage(String title) {
        String actual = articlePage.getTitle();
        Assert.assertEquals(title, actual);
    }

    @When("User input search {string} on home page")
    public void userInputSearchOnHomePage(String keyword) {
        homePage.inputSearch(keyword);
    }
}
