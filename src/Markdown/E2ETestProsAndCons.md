# End-to-End Testing: Pros and Cons

My big project for the end of 2020 was cleaning up some end to end testing infrastructure. The progress we made was great! Our tests are written using [Cypress](https://www.cypress.io/), which is easier to work with for our web developers than Selenium. And we unblocked test authentication through our login page, deprecating a legacy login helper that wasn't ever fully compatible with our sessions.

But now it's 2021. The tests have started failing again, and I'm trying to understand the value we get from investing in these tests.

## Pro: Testing actual user flows

This first point feels like the big selling point of end-to-end testing. Automating interactions with your production systems—in an actual browser!—is really close to having users test your product.

It's not quite the same. Users will happily click through new modals, or breeze past layout changes that could trip up your automated tests. And you can break your UI for users without breaking your tests, like a button that's cut off.

## Pro: The tests exercise your full stack

This is a pro of running tests against your production environment! The tests make use of your entire production stack—browser, ingress, load balancers, all your microservices, and your DBs.

That means that you can potentially detect problems with any of your code, or any of your infrastructure.

## Con: The tests exercise your full stack

I know, I just listed this as one of the pros of end to end testing, but it is one of the key downsides of the tests.

When an end to end test fails, it can be hard to narrow down why the test failed. You could be seeing a bug in your application, or one of your services. Or you could be seeing a timeout due to AWS instability. As your architecture gets more complex, as more teams ship changes every day, it can get a lot harder to know if a test failure represents a real problem.

## Con: More complex applications need more complex tests

Some of this is obvious. Telling your end to end tools how to use a complex feature is a lot more difficult than explaining it to a teammate doing manual testing.

But more than that, tools like A/B testing or feature toggles increase the number of variations you may need to test to cover how customers experience your software. And since you're testing the full stack, experimentation in the service layers should be accounted for as well.

## Conclusions

So, what's the verdict? Looking back, I worry that investing in our end to end testing infrastructure was a misstep.

Being able to test all the way from login to checkout is an advantage, because any bugs on that critical path can be very expensive. But those bugs are also pretty rare, since developers are extra vigilant about those features. And any issue we do deploy is going to show up in our metrics much sooner than it will cause an end to end test to fail.

That's not a bad foundation. But without a strong base of unit or integration tests to build on top of, it's hard to fix failures. And that doesn't help sell the end to end tests to our product engineers.

Do you have an end to end testing setup that you like working with? How did you solve these problems and make the tests useful to your engineers?