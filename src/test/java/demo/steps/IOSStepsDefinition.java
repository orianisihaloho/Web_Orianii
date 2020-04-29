package demo.steps;

import demo.pages.DanaRegisterPage;
import io.cucumber.java.en.Given;
import org.junit.Assert;

public class IOSStepsDefinition {

    DanaRegisterPage registerPage= new DanaRegisterPage();

    @Given("User is on Dana Register Page")
    public void userIsOnDanaRegisterPage() {
        boolean result = registerPage.isOnPage();
        Assert.assertTrue(result);

    }
}
