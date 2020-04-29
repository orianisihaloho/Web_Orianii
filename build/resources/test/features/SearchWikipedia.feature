@Web
Feature: Search Wikipedia
  Scenario: Search pokemon about Apple on Main Page

    Given User open Bulbapedia Main page
    When User input search "Pikachu" on home page
    And User click button search on home page
    Then User see article with title "Pikachu" on article page

    Given User open Bulbapedia Main page
    When User input search "Apple" on Main page
    And User click button search on Main page
    Then User see article with title "Apple" on article page

  Scenario: Search article about Pear on Main Page
    Given User open Bulbapedia Main page
    When User input search "Pear" on home page
    And User click button search on home page
    Then User see article with title "Pear" on article page
