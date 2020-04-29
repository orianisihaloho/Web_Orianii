package demo;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/features",   // directory web
        plugin = {"html:build/result"},             // you could view this html for open on browser
        stepNotifications = true,                   // view step in terminal
        tags = {"@Web"}                             // Define which one platform would be running on
                                                    // We could run in 2 platform using "@Android or @Web"
)
public class CucumberRunner {

}
