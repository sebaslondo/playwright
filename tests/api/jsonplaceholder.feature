Feature: JSONPlaceholder API exercise

  Background:
    Given the API base url is "https://jsonplaceholder.typicode.com"
    And every request includes token "THIS-IS-A-FAKE-TOKEN"

  Scenario: Get a random user and print email
    When I fetch the list of users
    And I pick a random user
    Then I print the user's email to the console
    And the user has a valid id and email

  Scenario: Get user's posts and validate Post IDs
    Given I have a random user
    When I fetch posts for that user
    Then each post has an id between 1 and 100
    And I print the title and id of each post to the console

  Scenario: Update title for a random post and print response
    Given I have the posts for a random user
    When I pick a random post id from the list
    And I update the post title to a new non-empty value
    Then the response contains the same post id
    And the response contains the updated title
    And I print the updated id and title to the console

  Scenario: Create a post with same userId and verify response
    Given I have a random user
    When I create a post with a non-empty title and body for that user
    Then the response contains the same userId
    And the response contains a non-empty title and body
    And the response status is valid for this mock API
