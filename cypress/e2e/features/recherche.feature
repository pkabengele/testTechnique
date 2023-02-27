Feature: Recherche

  As a user I should be able to research an apartment

  Scenario: search a apartment in Paris

    Given I navigate to Foncia home page
    Then the research bar is available
    When I accept cookies
    And I can search an asset to rent
      | maxPrice | city       |
      | 1500     | Paris (75) |
    Then I have results for "Paris (75)"
    And all prices are as expected
    And locations are as expected